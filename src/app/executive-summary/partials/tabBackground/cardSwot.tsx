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
import useSWRMutation from "swr/mutation";
import { postRequest } from "@/utils/fetcher";

export const getData = () => {
    const {
        data,
        trigger,
        isMutating
    } = useSWRMutation(
        "/api/exsum/swot/swot-show",
        postRequest
    );
    return { data, trigger, isMutating };
};

export const saveData = () => {
    const {
        trigger,
    } = useSWRMutation(
        "/api/exsum/swot/swot-create",
        postRequest
    );
    return { triggerSaveData:trigger};
};

export const updateData = () => {
    const {
        trigger,
    } = useSWRMutation(
        "/api/exsum/swot/swot-update",
        postRequest
    );
    return { triggerUpdateData:trigger };
};

export const deleteData = () => {
    const {
        trigger,
    } = useSWRMutation(
        "/api/exsum/swot/swot-delete",
        postRequest
    );
    return { triggerDeleteData:trigger };
};

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
    const [modalForm, setModalForm] = React.useState(false);
    const [swotData, setSwotData] = React.useState<Swot>(initStateSwot)

    const { id } = useExsumStore((state) => state);
    const { data, trigger, isMutating } = getData();
    const { triggerSaveData } = saveData();
    const { triggerUpdateData } = updateData();
    const { triggerDeleteData } = deleteData();

    React.useEffect(() => {
        try {
            trigger({ exsum_id: id });
        } catch (error) {}
        setSwotData((prev:Swot) => {
            return {...prev, exsum_id:id}
        })
    }, [id]);

    React.useEffect(() => {
        if (data != null){
            setSwotData(data)
        }else{
            setSwotData((prev:Swot) => {
                return {...initStateSwot, exsum_id:id}
            })
        }
    }, [data]);

    const handleCreateOrUpdateData = async (req:Swot) => {
        if (req.id == 0){
            await triggerSaveData(req);
        }else{
            await triggerUpdateData(req);
        }
        await trigger({ exsum_id: id })
        setModalForm(false)
    }

    const handleDeleteData = async (req:Swot) => {
        await triggerDeleteData(req)
        await trigger({ exsum_id: id })
        setModalForm(false)
    }

    return isMutating ? (
        <Skeleton animation="wave" variant="rounded" height={250} width={"100%"} style={{borderRadius:20}} />
    ) : (
        <CardItem
            title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
            setting
            settingEditOnclick={() => {
                setModalForm(true)
            }}
            settingDeleteOnclick={() => {
                handleDeleteData(swotData)
            }}
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
                    {CardContentGenerator(data)}
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
                            onClick={() => handleCreateOrUpdateData(swotData)}
                        >
                            Simpan
                        </Button>
                    </DialogActions>
                }
            >
                <FormSwot
                    mode="add"
                    data={swotData}
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
