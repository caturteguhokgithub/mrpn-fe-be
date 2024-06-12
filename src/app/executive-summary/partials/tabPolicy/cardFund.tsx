import React from "react";
import {
    Typography,
    Stack,
    Paper,
    Button,
    DialogActions,
    Box,
    Grid, Skeleton
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import { grey, green, red } from "@mui/material/colors";
import { dataTema } from "../../dataTema";
import FormPendanaan from "./form-pendanaan";
import { useGlobalStore } from "@/provider";
import { useExsumStore } from "@/app/executive-summary/provider";
import { CrudRepository } from "@/utils/fetcher";
import { STAKEHOLDER_EXSUM_TYPE } from "@/constants/misc-constant";
import { checkPermission, ListPermission } from "@/config/permission";

const FundSource = (
    {
        label,
        value,
        color,
        isYear
    }: {
        label: string;
        value: string;
        color: string;
        isYear?: boolean;
    }
) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            boxSizing="border-box"
            width="100%"
            border={`2px solid ${color}`}
            borderRadius="8px"
        >
            <Box
                color="white"
                bgcolor={color}
                border={`2px solid ${color}`}
                p="8px 16px"
                fontWeight={700}
                letterSpacing={0.2}
                fontSize={14}
                minWidth={isYear ? 0 : 120}
            >
                {label}
            </Box>
            <Box
                p="8px 16px"
                fontWeight={600}
                fontSize={14}
                flexGrow={1}
                textAlign="right"
            >
                {value}
            </Box>
        </Stack>
    );
};

const GridItemSource = (
    {
        title,
        children
    }: {
        title: string;
        children?: React.ReactNode;
    }
) => {
    return (
        <Grid item lg={4}>
            <Paper
                variant="outlined"
                sx={{
                    p: 2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    height: "100%"
                }}
            >
                <Stack width="100%">
                    <Typography fontWeight={500} mb={2}>
                        {title}
                    </Typography>
                    {children}
                </Stack>
            </Paper>
        </Grid>
    );
};

export type InitData = {
    id:number;
    exsum_id:number;
    tahun:any;
    apbn:number;
    non_apbn:number;
    kesiapan:string;
}

const initData:InitData = {
    id:0,
    exsum_id: 0,
    tahun:{},
    apbn:0,
    non_apbn:0,
    kesiapan:""
}

export default function CardFund(
    {
        project
    }: {
        project: string
    }
) {

    const { userdata,rpjmn } = useGlobalStore((state) => state)
    const { permission } = userdata
    const { id } = useExsumStore((state) => state);

    const [modalForm, setModalForm] = React.useState(false);
    const [data, setData] = React.useState<InitData>({ ...initData })
    const [loading, setLoading] = React.useState<boolean>(false);

    const { showData, createData, updateData, deleteData } = CrudRepository({
        showUri: "/api/exsum/pendanaan/pendanaan-show",
        createUri: "/api/exsum/pendanaan/pendanaan-create",
        updateUri: "/api/exsum/pendanaan/pendanaan-update",
        deleteUri: "/api/exsum/pendanaan/pendanaan-delete"
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
        let data:any = null
        try {
            data = await triggerShowData({exsum_id: id});
            if (data != null) {
                setData((prev:InitData) => {
                    let tahunObj:any = {}
                    data.pendanaan_pertahun.map((x:any) => {
                        tahunObj[x.tahun] = { value:x.value };
                    })
                    return {
                        ...prev,
                        id:data.id,
                        exsum_id:id,
                        apbn: data.apbn,
                        non_apbn: data.non_apbn,
                        kesiapan: data.kesiapan,
                        tahun:tahunObj
                    }
                })
            } else {
                let tahunObj:any = {}
                rpjmn.map((x) => {
                    tahunObj[x] = {value:0}
                })
                setData({...initData, id:0, exsum_id:id, tahun:tahunObj})
            }
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
        console.log(data)
        try {
            if (data.id == 0){
                await triggerCreateData(data);
            } else {
                await triggerUpdateData(data);
            }
            await setDataState()
            setModalForm(false);
        } catch (error) {
            window.location.reload()
        }
    };

    const handleDeleteData = async () => {
        try {
            await triggerDeleteData(data);
            await setDataState();
            setModalForm(false);
        } catch (error) {
            window.location.reload()
        }
    };

    return loading ? (
        <Skeleton animation="wave" variant="rounded" height={200} width={"100%"} style={{ borderRadius: 20 }} />
    ) : (
        <CardItem
            title="Pendanaan & Investasi Proyek"
            setting={
                checkPermission(permission, ListPermission.EXSUM_PENDANAAN_ADD)
                || checkPermission(permission, ListPermission.EXSUM_PENDANAAN_UPDATE)
                || checkPermission(permission, ListPermission.EXSUM_PENDANAAN_DELETE)
                    ? true : undefined
            }
            settingEditOnclick={
                checkPermission(permission, ListPermission.EXSUM_PENDANAAN_ADD) || checkPermission(permission, ListPermission.EXSUM_PENDANAAN_UPDATE)
                    ?
                    () => {setModalForm(true)}
                    : undefined
            }
            settingDeleteOnclick={
                checkPermission(permission, ListPermission.EXSUM_PENDANAAN_DELETE)
                    ?
                    (data.id > 0 ? handleDeleteData : undefined)
                    :
                    undefined
            }
        >
            {data.id == 0 ? (
                <EmptyState
                    dense
                    icon={<IconEmptyData width={100} />}
                    title="Data Kosong"
                    description="Silahkan isi konten halaman ini"
                />
            ) : (
                <Grid container spacing={2}>
                    <GridItemSource title="Jumlah per Tahun">
                        <Stack gap={1}>
                            <>
                                {Object.keys(data.tahun).length === 0 ? (
                                    <EmptyState
                                        dense
                                        icon={<IconEmptyData width={70} />}
                                        title="Data Kosong"
                                    />
                                ) : (
                                    <>
                                        {Object.keys(data.tahun).map((key: any) => (
                                            <FundSource
                                                isYear
                                                color={grey[600]}
                                                label={key}
                                                value={`Rp. ${data.tahun[key].value}`}
                                            />
                                        ))}
                                    </>
                                )}
                            </>
                        </Stack>
                    </GridItemSource>
                    <GridItemSource title="Sumber Pendanaan">
                        <Stack gap={1}>
                            {(data.apbn == 0 && data.non_apbn && 0) ? (
                                <EmptyState
                                    dense
                                    icon={<IconEmptyData width={70} />}
                                    title="Data Kosong"
                                />
                            ) : (
                                <>
                                    <FundSource
                                        color={green[400]}
                                        label="APBN"
                                        value={`Rp. ${data.apbn}`}
                                    />
                                    <FundSource
                                        color={red[400]}
                                        label="NON APBN"
                                        value={`Rp. ${data.non_apbn}`}
                                    />
                                </>
                            )}
                        </Stack>
                    </GridItemSource>
                    <GridItemSource title="Kesiapan Pendanaan">
                        {data.kesiapan == "" ? (
                            <EmptyState
                                dense
                                icon={<IconEmptyData width={70} />}
                                title="Data Kosong"
                            />
                        ) : (
                            <Typography component="p"
                                        variant="body1"
                                        textAlign="left">
                                {data.kesiapan}
                            </Typography>
                        )}
                    </GridItemSource>
                </Grid>
            )}
            <DialogComponent
                dialogOpen={modalForm}
                dialogClose={() => setModalForm(false)}
                title="Pendanaan & Investasi Proyek"
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
                <FormPendanaan
                    mode="add"
                    data={data}
                    setData={setData}
                />
            </DialogComponent>
        </CardItem>
    );
}
