import React from "react";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import {
    Box,
    Chip,
    FormControl,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    Button,
    DialogActions,
    Skeleton,
    Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import TableTagging from "./table-tagging";
import { useExsumStore } from "@/app/executive-summary/provider";
import { ListPermission, checkPermission } from "@/config/permission";
import { useGlobalStore } from "@/provider"
import { CrudRepository } from "@/utils/fetcher";
import type ReactQuill from 'react-quill'

export type Kebijakan = {
    id: number;
    exsum_id: number;
    kebijakan: string;
    value: string;
}
export const initData: Kebijakan = {
    id: 0,
    exsum_id: 0,
    kebijakan: "",
    value: "",
}

interface IWrappedComponent extends React.ComponentProps<typeof ReactQuill> {
    forwardedRef: React.LegacyRef<ReactQuill>
}

export default function CardTagging() {

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
    const [request, setRequest] = React.useState<Kebijakan>({ ...initData });
    const [data, setData] = React.useState<Kebijakan[]>([])
    const [loading, setLoading] = React.useState<boolean>(false);

    const { id } = useExsumStore((state) => state);
    const { showData, createData, updateData, deleteData } = CrudRepository({
        showUri: "/api/exsum/tagging/tagging-show",
        createUri: "/api/exsum/tagging/tagging-create",
        updateUri: "",
        deleteUri: "/api/exsum/tagging/tagging-delete"
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
        let data = []
        try {
            data = await triggerShowData({ exsum_id: id });
        } catch (error) {
            window.location.reload()
        }
        if (data) {
            setData(data)
        } else {
            setData([])
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
            await triggerCreateData({...request, value:(text ? text.toString() : "-")});
            await setDataState()
            setModalForm(false);
        } catch (error) {
            window.location.reload()
        }
    };

    const handleDeleteData = async (id:number) => {
        try {
            await triggerDeleteData({id:id});
            await setDataState();
            setModalForm(false);
        } catch (error) {
            window.location.reload()
        }
    };

    const { kebijakanOption } = useGlobalStore((state) => state)

    const [policyName, setPolicyName] = React.useState<string[]>(request.kebijakan != "" ? request.kebijakan.split(",") : []);

    const handleChangeMultiSelect = (
        event: SelectChangeEvent<typeof policyName>
    ) => {
        const {
            target: { value },
        } = event;
        const kebijakanData = typeof value === "string" ? value.split(",") : value;
        setPolicyName(kebijakanData);
        setRequest((prev: Kebijakan) => {
            return { ...prev, kebijakan: kebijakanData.join(",") }
        })
    };

    const selectMultipleTag = (
        <Select
            size="small"
            multiple
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={policyName}
            onChange={handleChangeMultiSelect}
            renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                    {selected.map((value) => (
                        <Chip
                            key={value}
                            label={value}
                            sx={{
                                height: 28,
                                lineHeight: 1,
                                borderRadius: "50px",
                                px: "4px",
                            }}
                        />
                    ))}
                </Box>
            )}
            MenuProps={{
                PaperProps: {
                    style: {
                        maxHeight: 48 * 4.5 + 8,
                        width: 250,
                    },
                },
            }}
        >
            <MenuItem value="" disabled>
                <Typography fontSize={14} fontStyle="italic">
                    Pilih Kode KL
                </Typography>
            </MenuItem>
            {kebijakanOption.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    );

    return loading ? (
        <Skeleton animation="wave" variant="rounded" height={200} width={"100%"} style={{ borderRadius: 20 }} />
    ) : (
        <CardItem
            title="Tagging Atas Kebijakan Lain"
            addButton={
                (
                    (checkPermission(permission, ListPermission.EXSUM_TAGGING_ADD))
                    &&
                    <AddButton
                        filled
                        small
                        title="Tambah Tagging"
                        onclick={() => setModalForm(true)}
                    />)
            }
        >
            {data.length == 0 ? (
                <EmptyState
                    dense
                    icon={<IconEmptyData width={100} />}
                    title="Data Kosong"
                    description="Silahkan isi konten halaman ini"
                />
            ) : (
                <TableTagging data={data} handleDelete={handleDeleteData} />
            )}
            <DialogComponent
                dialogOpen={modalForm}
                dialogClose={() => setModalForm(false)}
                title="Tambah Tagging"
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
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                        <FormControl fullWidth>
                            <Typography gutterBottom>Kebijakan</Typography>
                            {selectMultipleTag}
                        </FormControl>
                    </Grid>
                    <Grid item lg={12}>
                        <FormControl fullWidth>
                            <Typography gutterBottom>Keterangan</Typography>
                            <ReactQuill
                                theme="snow"
                                defaultValue={request.value}
                                forwardedRef={quillRef}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogComponent>
        </CardItem>
    );
}
