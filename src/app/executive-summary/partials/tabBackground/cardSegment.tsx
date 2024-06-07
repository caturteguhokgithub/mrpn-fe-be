import React, { Fragment } from "react";
import {Button, DialogActions, Skeleton, Typography} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import dynamic from "next/dynamic";
import DialogComponent from "@/app/components/dialog";
import { dataTema } from "../../dataTema";
import {useGlobalStore} from "@/provider";
import {useExsumStore} from "@/app/executive-summary/provider";
import {CrudRepository} from "@/utils/fetcher";
import type ReactQuill from "react-quill";
import {checkPermission, ListPermission} from "@/config/permission";

export type Segment = {
    id: number;
    exsum_id: number;
    value: string;
}
export const initData: Segment = {
    id: 0,
    exsum_id: 0,
    value: ""
}

interface IWrappedComponent extends React.ComponentProps<typeof ReactQuill> {
    forwardedRef: React.LegacyRef<ReactQuill>
}

export default function CardSegment() {

    const ReactQuill = dynamic(async () => {
            const { default: RQ } = await import('react-quill')

            function QuillJS({ forwardedRef, ...props }: IWrappedComponent) {
                return <RQ ref={forwardedRef} {...props} />
            }

            return QuillJS
        },
        {
            ssr: false,
        },);
    const quillRef = React.useRef<ReactQuill>(null)

    const { userdata } = useGlobalStore((state) => state)
    const { permission } = userdata

    const [modalForm, setModalForm] = React.useState(false);
    const [request, setRequest] = React.useState<Segment>({ ...initData });
    const [data, setData] = React.useState<Segment>({...initData})
    const [loading, setLoading] = React.useState<boolean>(false);

    const { id } = useExsumStore((state) => state);
    const { showData, createData, updateData, deleteData } = CrudRepository({
        showUri: "/api/exsum/segment/segment-show",
        createUri: "/api/exsum/segment/segment-create",
        updateUri: "/api/exsum/segment/segment-update",
        deleteUri: "/api/exsum/segment/segment-delete"
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
        let data = {...initData}
        try {
            data = await triggerShowData({ exsum_id: id });
        } catch (error) {
            window.location.reload()
        }
        if (data) {
            setData(data)
            setRequest(data)
        } else {
            setData({...initData, exsum_id: id})
            setRequest({...initData, exsum_id: id})
        }
    }

    React.useEffect(() => {
        if (id > 0) {
            setRequest({ ...initData, exsum_id: id })
            setDataState()
        }
    }, [id]);

    const handleCreateOrUpdateData = async () => {
        const text = quillRef.current?.value
        try {
            console.log(text?.toString())
            if (request.id == 0){
                await triggerCreateData({...request, value:(text ? text.toString() : "-")});
            } else {
                await triggerUpdateData({...request, value:(text ? text.toString() : "-")});
            }
            await setDataState()
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

    return loading ? (
        <Skeleton animation="wave" variant="rounded" height={200} width={"100%"} style={{ borderRadius: 20 }} />
    ) : (
        <CardItem
            title="Segmen Penerima Manfaat"
            setting={
                checkPermission(permission, ListPermission.EXSUM_SEGMENT_ADD)
                || checkPermission(permission, ListPermission.EXSUM_SEGMENT_UPDATE)
                || checkPermission(permission, ListPermission.EXSUM_SEGMENT_DELETE)
                    ? true : undefined
            }
            settingEditOnclick={
                checkPermission(permission, ListPermission.EXSUM_SEGMENT_ADD) || checkPermission(permission, ListPermission.EXSUM_SEGMENT_UPDATE)
                    ?
                    () => {setModalForm(true)}
                    : undefined
            }
            settingDeleteOnclick={
                checkPermission(permission, ListPermission.EXSUM_SEGMENT_DELETE)
                    ?
                    (data && data.id !== 0 ? handleDeleteData : undefined)
                    :
                    undefined
            }
        >
            {data && data.id == 0 ? (
                <EmptyState
                    dense
                    icon={<IconEmptyData width={100} />}
                    title="Data Kosong"
                    description="Silahkan isi konten halaman ini"
                />
            ) : (
                <div dangerouslySetInnerHTML={{__html: data.value}}/>
            )}
            <DialogComponent
                dialogOpen={modalForm}
                dialogClose={() => setModalForm(false)}
                title="Segment Penerima Manfaat"
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
                <ReactQuill
                    theme="snow"
                    defaultValue={data ? data.value : ""}
                    forwardedRef={quillRef}
                />
            </DialogComponent>
        </CardItem>
    );
}
