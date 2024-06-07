import React from "react";
import { Button, DialogActions, Skeleton, Typography } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import dynamic from "next/dynamic";
import DialogComponent from "@/app/components/dialog";
import { CrudRepository } from "@/utils/fetcher";
import { ListPermission, checkPermission } from "@/config/permission";
import { useGlobalStore } from "@/provider";
import { useExsumStore } from "@/app/executive-summary/provider";
import type ReactQuill from 'react-quill'


export type Goals = {
    id: number;
    exsum_id: number;
    value: string;
}
export const initStateGoals: Goals = {
    id: 0,
    exsum_id: 0,
    value: "",
};

interface IWrappedComponent extends React.ComponentProps<typeof ReactQuill> {
    forwardedRef: React.LegacyRef<ReactQuill>
  }

export default function CardGoals() {
    const ReactQuill = dynamic(async () => {
        const {default: RQ} = await import('react-quill')
    
        function QuillJS({forwardedRef, ...props}: IWrappedComponent) {
          return <RQ ref={forwardedRef} {...props} />
        }
    
        return QuillJS
      },
      {
        ssr: false,
      },);
    const [modalOpenGoal, setModalOpenGoal] = React.useState(false);

    const quillRef = React.useRef<ReactQuill>(null)

    const { userdata } = useGlobalStore((state) => state);
    const { permission } = userdata;

    const [request, setRequest] = React.useState<Goals>({...initStateGoals});
    const [loading, setLoading] = React.useState<boolean>(false);

    const { id } = useExsumStore((state) => state);
    const {showData,createData,updateData,deleteData} = CrudRepository({
        showUri:"/api/exsum/goals/goals-show",
        createUri:"/api/exsum/goals/goals-create",
        updateUri:"/api/exsum/goals/goals-update",
        deleteUri:"/api/exsum/goals/goals-delete"
    });
    const { triggerShowData, showDataMutating } = showData()
    const { triggerCreateData, createDataMutating } = createData()
    const { triggerUpdateData, updateDataMutating } = updateData()
    const { triggerDeleteData, deleteDataMutating } = deleteData()

    React.useEffect(() => {
        if(showDataMutating || createDataMutating || updateDataMutating || deleteDataMutating){
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [showDataMutating,createDataMutating,updateDataMutating,deleteDataMutating]);

    const updateState = async () => {
        try {
            const initData = await triggerShowData({ exsum_id: id });
            setRequest(initData !== null ? initData : {...initStateGoals, exsum_id:id});
        } catch (error) {
            window.location.reload()
        }
    }

    React.useEffect(() => {
        if (id > 0) {
            updateState()
        }
    }, [id]);

    const handleCreateOrUpdateData = async () => {
        const text = quillRef.current?.value
        if (text) {
            try {
                if (request.id == 0) {
                    await triggerCreateData({...request, value:text.toString()});
                } else {
                    await triggerUpdateData({...request, value:text.toString()});
                }
                await updateState()
                setModalOpenGoal(false);
            } catch (error) {
                window.location.reload()
            }
        }
    };

    const handleDeleteData = async () => {
        try {
            await triggerDeleteData(request);
            await updateState();
            setModalOpenGoal(false);
        } catch (error) {
            window.location.reload()
        }
    };

    return loading ? (
        <Skeleton animation="wave" variant="rounded" height={200} width={"100%"} style={{ borderRadius: 20 }} />
    ) : (
        <CardItem
            title="Tujuan Utama/Goals Proyek"
            setting={
                checkPermission(permission, ListPermission.EXSUM_GOALS_ADD)
                || checkPermission(permission, ListPermission.EXSUM_GOALS_UPDATE)
                || checkPermission(permission, ListPermission.EXSUM_GOALS_DELETE)
                    ? true : undefined
            }
            settingEditOnclick={
                checkPermission(permission, ListPermission.EXSUM_GOALS_ADD) || checkPermission(permission, ListPermission.EXSUM_GOALS_UPDATE)
                    ?
                    () => {setModalOpenGoal(true)}
                    : undefined
            }
            settingDeleteOnclick={
                    checkPermission(permission, ListPermission.EXSUM_GOALS_DELETE)
                    ?
                    (request.id !== 0 ? handleDeleteData : undefined)
                    :
                    undefined
            }
        >
            {request.id == 0 ? (
                <EmptyState
                    dense
                    icon={<IconEmptyData width={100} />}
                    title="Data Kosong"
                    description="Silahkan isi konten halaman ini"
                />
            ) : (
                <div dangerouslySetInnerHTML={{ __html: request.value }} />
            )}
            <DialogComponent
                dialogOpen={modalOpenGoal}
                dialogClose={() => setModalOpenGoal(false)}
                title="Tujuan Utama/Goals Proyek"
                dialogFooter={
                    <DialogActions sx={{ p: 2, px: 3 }}>
                        <Button variant="outlined" onClick={() => setModalOpenGoal(false)}>
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
                <ReactQuill
                    theme="snow"
                    defaultValue={request.value}
                    forwardedRef={quillRef}
                />
            </DialogComponent>
        </CardItem>
    );
}
