import React from "react";
import {
    Button,
    Card,
    CardContent,
    DialogActions, Skeleton,
    Stack,
    Typography
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import FormSwot from "./form-swot";
import theme from "@/theme";
import { useExsumStore } from "@/app/executive-summary/provider";
import {ListPermission, checkPermission} from "@/config/permission";
import {useGlobalStore} from "@/provider"
import { CrudRepository } from "@/utils/fetcher";

export type Swot = {
    id: number;
    exsum_id: number;
    strength: string;
    weakness: string;
    opportunity: string;
    thread: string;
}
export const initStateSwot:Swot = {
    id:0,
    exsum_id:0,
    strength:"",
    weakness:"",
    opportunity:"",
    thread:"",
}

export default function CardSwot() {
    const {userdata} = useGlobalStore((state) => state)
    const {permission} = userdata

    const [modalForm, setModalForm] = React.useState(false);
    const [swotData, setSwotData] = React.useState<Swot|null>(null)
    const [loading, setLoading] = React.useState<boolean>(false);

    const { id } = useExsumStore((state) => state);
    const {showData,createData,updateData,deleteData} = CrudRepository({
        showUri:"/api/exsum/swot/swot-show",
        createUri:"/api/exsum/swot/swot-create",
        updateUri:"/api/exsum/swot/swot-update",
        deleteUri:"/api/exsum/swot/swot-delete"
    });
    const { triggerShowData, showDataMutating } = showData()
    const { triggerCreateData, createDataMutating } = createData()
    const { triggerUpdateData, updateDataMutating } = updateData()
    const { triggerDeleteData, deleteDataMutating } = deleteData()

    const triggerData = async () => {
        let data = {...initStateSwot, exsum_id:id}
        try {
            data = await triggerShowData({ exsum_id: id });
        } catch (error) {
            window.location.reload()
        }
        if (data == null) {
            setSwotData({...initStateSwot, exsum_id:id})
        }else{
            setSwotData(data)
        }
    }

    React.useEffect(() => {
        if(showDataMutating || createDataMutating || updateDataMutating || deleteDataMutating){
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [showDataMutating,createDataMutating,updateDataMutating,deleteDataMutating]);

    React.useEffect(() => {
        if (id > 0) {
            triggerData()
        }
    }, [id]);


    const handleCreateOrUpdateData = async (req:Swot) => {
        try {
            if (req.id == 0){
                await triggerCreateData(req);
            }else{
                await triggerUpdateData(req);
            }
            await triggerData()
            setModalForm(false)
        } catch (error) {
            window.location.reload()
        }
    }

    const handleDeleteData = async (req:Swot) => {
        try {
            await triggerDeleteData(req)
            await triggerData()
            setModalForm(false)
        } catch (error) {
            window.location.reload()
        }
    }

    return loading || swotData == null ? (
        <Skeleton animation="wave" variant="rounded" height={200} width={"100%"} style={{borderRadius:20}} />
    ) : (
        <CardItem
            title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
            setting={
                checkPermission(permission, ListPermission.EXSUM_SWOT_ADD)
                || checkPermission(permission, ListPermission.EXSUM_SWOT_UPDATE)
                || checkPermission(permission, ListPermission.EXSUM_SWOT_DELETE)
                ? true : undefined
            }
            settingEditOnclick={
                checkPermission(permission, ListPermission.EXSUM_SWOT_ADD) || checkPermission(permission, ListPermission.EXSUM_SWOT_UPDATE)
                ?
                () => {setModalForm(true)}
                : undefined
            }
            settingDeleteOnclick={
                checkPermission(permission, ListPermission.EXSUM_SWOT_DELETE)
                ?
                (swotData && swotData?.id !== 0 ? () => {handleDeleteData(swotData)} : undefined)
                :
                undefined
            }
        >
            {(swotData && swotData?.id === 0) ? (
                <EmptyState
                    dense
                    icon={<IconEmptyData width={100} />}
                    title="Data Kosong"
                    description="Silahkan isi konten halaman ini"
                />
            ) : (
                <Stack direction="row" flexWrap="wrap" gap={2}>
                    {swotData && swotData?.id !== 0 && CardContentGenerator(swotData)}
                </Stack>
            )}
            <DialogComponent
                dialogOpen={modalForm}
                dialogClose={() => setModalForm(false)}
                title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
                dialogFooter={
                    <DialogActions sx={{ p: 2, px: 3 }}>
                        <Button variant="outlined" onClick={() => setModalForm(false)}>
                            Batal
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => {
                                if(swotData){
                                    handleCreateOrUpdateData(swotData)
                                }
                            }}
                        >
                            Simpan
                        </Button>
                    </DialogActions>
                }
            >
                <FormSwot
                    mode="add"
                    data={swotData ? swotData : {...initStateSwot}}
                    setData={setSwotData}
                />
            </DialogComponent>
        </CardItem>
    );
}

const CardContentGenerator = (data:any) => {
    let contents = [];
    for (const key in data) {
        if (key !== "id" && key !== "exsum_id"){
            contents.push(<Card
                sx={{
                    maxWidth: 345,
                    flex: "0 0 calc(25% - 12px)",
                    //  borderRadius: "10px 10px 0 0",
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
                key={`swot-content-${key}`}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        lineHeight={1.3}
                        textTransform="capitalize"
                    >
                        {key}
                    </Typography>
                </CardContent>
                <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body1">
                        {data[key]}
                    </Typography>
                </CardContent>
            </Card>)
        }
    }
    return contents;
}
