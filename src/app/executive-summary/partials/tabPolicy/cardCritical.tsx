import React from "react";
import {
    Button,
    DialogActions, Skeleton
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import FormMilestone from "@/app/penetapan-konteks/konteks-strategis/form/partials/form-milestone";
import GanttChart from "./gantt-critical";
import { useGlobalStore } from "@/provider";
import { useExsumStore } from "@/app/executive-summary/provider";
import { CrudRepository } from "@/utils/fetcher";
import { checkPermission, ListPermission } from "@/config/permission";
import { Task } from "@/app/executive-summary/partials/tabPolicy/gantt-critical/data";

type RequestData = {
    id:number;
    exsum_id:string;
    program:string;
    sumber_anggaran:string;
    pj:string;
    start_date:string;
    end_date:string;
    progress:string;
}

const initRequest:RequestData = {
    id:0,
    exsum_id:"",
    program:"",
    sumber_anggaran:"",
    pj:"",
    start_date:"",
    end_date:"",
    progress:"",
}


export default function CardCritical({ project }: { project: string }) {

    const { userdata,rpjmn } = useGlobalStore((state) => state)
    const { permission } = userdata
    const { id } = useExsumStore((state) => state);

    const [modalForm, setModalForm] = React.useState(false);
    const [request, setRequest] = React.useState<RequestData>({...initRequest});
    const [data, setData] = React.useState<Task[]>()
    const [loading, setLoading] = React.useState<boolean>(false);

    const { showData, createData, updateData, deleteData } = CrudRepository({
        showUri: "/api/exsum/critical-path/critical-path-show",
        createUri: "/api/exsum/critical-path/critical-path-create",
        updateUri: "/api/exsum/critical-path/critical-path-update",
        deleteUri: "/api/exsum/critical-path/critical-path-delete"
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
            console.log(data)
            if (data != undefined) {
                let genData:Task[] = []
                let startDate = new Date(data.start_date);
                let endDate = new Date(data.end_date);
                genData.push({
                    id: data.id,
                    name: data.program,
                    start: startDate,
                    end: endDate,
                    progress: data.progress,
                    pj:data.pj,
                    sumber_anggaran:data.sumber_anggaran,
                    type: "task",
                    dependencies: [],
                })
                setData(genData)
            } else {
                setData(undefined)
            }
        } catch (error) {
            // window.location.reload()
        }
    }

    React.useEffect(() => {
        if (id > 0) {
            setDataState()
        }
    }, [id]);

    const handleDeleteData = async () => {
        try {
            await triggerDeleteData(data);
            await setDataState();
            setModalForm(false);
        } catch (error) {
            // window.location.reload()
        }
    };

    return loading ? (
        <Skeleton animation="wave" variant="rounded" height={200} width={"100%"} style={{ borderRadius: 20 }} />
    ) : (
        <CardItem
            title="Critical Path Prioritas Proyek"
            setting={
                checkPermission(permission, ListPermission.EXSUM_CRITICAL_PATH_ADD)
                || checkPermission(permission, ListPermission.EXSUM_CRITICAL_PATH_UPDATE)
                || checkPermission(permission, ListPermission.EXSUM_CRITICAL_PATH_DELETE)
                    ? true : undefined
            }
            settingEditOnclick={
                checkPermission(permission, ListPermission.EXSUM_CRITICAL_PATH_ADD) || checkPermission(permission, ListPermission.EXSUM_CRITICAL_PATH_UPDATE)
                    ?
                    () => {setModalForm(true)}
                    : undefined
            }
            settingDeleteOnclick={
                checkPermission(permission, ListPermission.EXSUM_CRITICAL_PATH_DELETE)
                    ?
                    (data !== undefined ? handleDeleteData : undefined)
                    :
                    undefined
            }
        >
            {data === undefined ? (
                <EmptyState
                    dense
                    icon={<IconEmptyData width={100} />}
                    title="Data Kosong"
                    description="Silahkan isi konten halaman ini"
                />
            ) : (
                <GanttChart tasks={data} />
            )}
            <DialogComponent
                dialogOpen={modalForm}
                dialogClose={() => setModalForm(false)}
                title="Critical Path Prioritas Proyek"
                dialogFooter={
                    <DialogActions sx={{ p: 2, px: 3 }}>
                        <Button variant="outlined" onClick={() => setModalForm(false)}>
                            Batal
                        </Button>
                        <Button variant="contained" type="submit">
                            Simpan
                        </Button>
                    </DialogActions>
                }
            >
                <FormMilestone mode="edit" />
            </DialogComponent>
        </CardItem>
    );
}
