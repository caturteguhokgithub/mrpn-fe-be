import React, { Fragment, useRef } from "react";
import {
    Typography,
    Stack,
    Button,
    DialogActions,
    Card,
    CardContent,
    Grow,
    Tooltip, Skeleton
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import Image from "next/image";
import FormStakeholder from "./form-stakeholder";
import theme from "@/theme";
import DraggableScroll from "./partials/draggableScroll";
import { useGlobalStore } from "@/provider";
import { useExsumStore } from "@/app/executive-summary/provider";
import { CrudRepository } from "@/utils/fetcher";
import { checkPermission, ListPermission } from "@/config/permission";
import { STAKEHOLDER_EXSUM_TYPE } from "@/constants/misc-constant";

export type RequestData = {
    id:number;
    exsum_id: number;
    stakeholder: Stakeholder[]
}

export type Stakeholder = {
    src_stakeholder_id: number;
    type: string;
    value: string;
}

export const initData: RequestData = {
    id:0,
    exsum_id:0,
    stakeholder:[]
}

export const CardItemStakeholder = (
{
    key,
    index,
    detailStakeholder,
    data
}: {
    key: any;
    index: any;
    detailStakeholder?: any;
    data?:any
}
) => (
    <Card
        sx={{
            maxWidth: 345,
            flex: "0 0 calc(25% - 12px)",
            borderRadius: "10px",
            [theme.breakpoints.down("lg")]: {
                flex: "0 0 calc(50% - 12px)"
            },
            [theme.breakpoints.down("sm")]: {
                flex: "0 0 100%",
                maxWidth: "100%"
            }
        }}
        variant="outlined"
        key={index}
    >
        <CardContent sx={{ pb: 1, minHeight: 84 }}>
            <Typography
                gutterBottom
                variant="h6"
                component="div"
                lineHeight={1.3}
                fontSize="1.1em"
            >
                {`${detailStakeholder.label}`}
            </Typography>
        </CardContent>
        <CardContent>
            <DraggableScroll
                sx={{
                    display: "flex",
                    gap: 2,
                    paddingBottom: 1.5,
                    "&::-webkit-scrollbar": {
                        height: "3px"
                    }
                }}
            >
                {data != null ? data[detailStakeholder.type] && data[detailStakeholder.type].map((itemSh: any, index: any) => (
                    <Tooltip
                        key={index}
                        title={itemSh.stakeholder.value}
                        followCursor
                        TransitionComponent={Grow}
                    >
                        <Image
                            alt={detailStakeholder.label}
                            src={itemSh.stakeholder.icon}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "auto",
                                height: "60px",
                                userSelect: "none",
                                touchAction: "none"
                            }}
                        />
                    </Tooltip>
                )) : null}
            </DraggableScroll>
        </CardContent>
        <CardContent>
            <Typography variant="body2">
                <strong>{detailStakeholder.tag}</strong>. {data && data[detailStakeholder.type] && data[detailStakeholder.type][0].value}
            </Typography>
        </CardContent>
    </Card>
);

export default function CardStakeholder({ project }: { project: string }) {

    const { userdata } = useGlobalStore((state) => state)
    const { permission } = userdata

    const [modalForm, setModalForm] = React.useState(false);
    const [request, setRequest] = React.useState<RequestData>({ ...initData });
    const [data, setData] = React.useState<any|null>()
    const [loading, setLoading] = React.useState<boolean>(false);

    const { id } = useExsumStore((state) => state);
    const { showData, createData, updateData, deleteData } = CrudRepository({
        showUri: "/api/exsum/stakeholder/stakeholder-show",
        createUri: "/api/exsum/stakeholder/stakeholder-create",
        updateUri: "/api/exsum/stakeholder/stakeholder-update",
        deleteUri: "/api/exsum/stakeholder/stakeholder-delete"
    });
    const { triggerShowData, showDataMutating } = showData()
    const { triggerCreateData, createDataMutating } = createData()
    const { triggerUpdateData, updateDataMutating } = updateData()
    const { triggerDeleteData, deleteDataMutating } = deleteData()

    React.useEffect(() => {
        if (showDataMutating || createDataMutating || updateDataMutating || deleteDataMutating) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [showDataMutating, createDataMutating, updateDataMutating, deleteDataMutating]);

    const setDataState = async () => {
        let data = null
        try {
            data = await triggerShowData({exsum_id: id});
            if (data != null) {
                setData(data)
                let dt = [...helperValue]
                STAKEHOLDER_EXSUM_TYPE.map(x => {
                    if (data[x.type]){
                        data[x.type].map(x => {
                            let objIndex = dt.findIndex(obj => obj.type == x.type);
                            dt[objIndex].value = x.value
                        })
                    }
                })
                setHelperValue(dt)
            } else {
                setData(null)
            }
            setRequest({ ...initData, exsum_id: id })
        } catch (error) {
            window.location.reload()
        }
    }

    React.useEffect(() => {
        if (id > 0) {
            setDataState()
        }
    }, [id]);

    const handleCreateOrUpdateData = async () => {
        let req = {
            exsum_id: id,
            stakeholder: []
        }
        console.log(req)
        helperValue.map(item => {
            item.items.map((x:number) => {
                let objIndex = req.stakeholder.findIndex(obj => obj.src_stakeholder_id == x);
                if (objIndex === -1){
                    let dataStakeholder:Stakeholder = {
                        src_stakeholder_id:x,
                        value:item.value,
                        type:item.type
                    }
                    req.stakeholder.push(dataStakeholder)
                }
            })
        })
        console.log(req)
        try {
            if (data == null){
                await triggerCreateData(req);
            } else {
                await triggerUpdateData(req);
            }
            await setDataState()
            console.log(data)
            setModalForm(false);
        } catch (error) {
            window.location.reload()
        }
    };

    const handleDeleteData = async () => {
        try {
            await triggerDeleteData(request);
            await setDataState();
            setModalForm(false);
        } catch (error) {
            window.location.reload()
        }
    };

    const [helperValue, setHelperValue] = React.useState([...STAKEHOLDER_EXSUM_TYPE])

    return loading ? (
        <Skeleton animation="wave" variant="rounded" height={200} width={"100%"} style={{ borderRadius: 20 }} />
    ) : (
        <CardItem
            title="Stakeholder Mapping"
            setting={
                checkPermission(permission, ListPermission.EXSUM_STAKEHOLDER_ADD)
                || checkPermission(permission, ListPermission.EXSUM_STAKEHOLDER_UPDATE)
                || checkPermission(permission, ListPermission.EXSUM_STAKEHOLDER_DELETE)
                    ? true : undefined
            }
            settingEditOnclick={
                checkPermission(permission, ListPermission.EXSUM_STAKEHOLDER_ADD) || checkPermission(permission, ListPermission.EXSUM_STAKEHOLDER_UPDATE)
                    ?
                    () => {setModalForm(true)}
                    : undefined
            }
            settingDeleteOnclick={
                checkPermission(permission, ListPermission.EXSUM_STAKEHOLDER_DELETE)
                    ?
                    (data !== null ? handleDeleteData : undefined)
                    :
                    undefined
            }
        >
            {data == null ? (
                <EmptyState
                    dense
                    icon={<IconEmptyData width={100} />}
                    title="Data Kosong"
                    description="Silahkan isi konten halaman ini"
                />
            ) : (
                <Stack direction="row" flexWrap="wrap" gap={2}>
                    {STAKEHOLDER_EXSUM_TYPE.map((item, index) => (
                        data.hasOwnProperty(item.type) && data[item.type] && (
                            <CardItemStakeholder
                                key={index}
                                index={index}
                                detailStakeholder={item}
                                data={data}
                            />
                        )

                    ))}
                </Stack>
            )}
            <DialogComponent
                dialogOpen={modalForm}
                dialogClose={() => setModalForm(false)}
                title="Stakeholder Mapping"
                dialogFooter={
                    <DialogActions sx={{ p: 2, px: 3 }}>
                        <Button variant="outlined" onClick={() => setModalForm(false)}>
                            Batal
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleCreateOrUpdateData}
                        >
                            Simpan
                        </Button>
                    </DialogActions>
                }
            >
                <FormStakeholder
                    data={data}
                    setData={setHelperValue}
                />
            </DialogComponent>
        </CardItem>
    );
}
