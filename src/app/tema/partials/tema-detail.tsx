import { DialogActions, Button, Box, Stack, Typography } from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import SvgIcon, {SvgIconProps} from "@mui/material/SvgIcon";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import {RichTreeView} from "@mui/x-tree-view/RichTreeView";
import {IconEmptyPage} from "@/components/icons";
import EmptyState from "@/components/empty";
import {useGlobalStore} from "@/provider";
import {ListPermission,checkPermission} from "@/config/permission";

export default function TemaDetail(
    {
        showTemaDetail,
        setShowTemaDetail,
        setOpenConfirmationDialog,
        setOpenTemaMutationDialog,
        setRequestTema,
        data,
        tema
    } : {
        showTemaDetail:boolean;
        setShowTemaDetail:any;
        setOpenConfirmationDialog:any;
        setOpenTemaMutationDialog:any;
        setRequestTema:any;
        data:any;
        tema:any;
    }
){

    const {userdata} = useGlobalStore((state) => state)
    const {permission} = userdata

    return (
        <DialogComponent
            width={1000}
            dialogOpen={showTemaDetail}
            dialogClose={() => setShowTemaDetail(false)}
            title="Detail Tema"
            dialogFooter={(
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack
                        direction="row"
                        justifyContent="start"
                    >

                    {
                        checkPermission(permission, ListPermission.TEMA_DELETE) && 
                        (
                            <DialogActions sx={{ pl: 2 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: "red",
                                        color: "white !important",
                                    }}
                                    onClick={() => {
                                        const requestDelete = {
                                            id:tema.id,
                                            code:"",
                                            value:"",
                                            ap_ids:[]
                                        }
                                        setRequestTema(requestDelete)
                                        setShowTemaDetail(false)
                                        setOpenConfirmationDialog(true)
                                    }}
                                >
                                    Hapus
                                </Button>
                            </DialogActions>
                        )
                    }
                    
                    {
                        checkPermission(permission, ListPermission.TEMA_UPDATE) && 
                        (
                            <DialogActions>
                                <Button
                                    variant="contained"
                                    sx={{
                                        color: "white !important",
                                    }}
                                    onClick={() => {
                                        let apIds:any[] = []
                                        tema.ap.map((x:any) => {
                                            apIds.push(x.ref.id)
                                        })
                                        const requestUpdate = {
                                            id:tema.id,
                                            code:tema.code,
                                            value:tema.value,
                                            ap_ids:apIds
                                        }
                                        setRequestTema(requestUpdate)
                                        setShowTemaDetail(false)
                                        setOpenTemaMutationDialog(true)
                                    }}
                                >
                                    Ubah
                                </Button>
                            </DialogActions>
                        )
                    }

                    </Stack>
                    

                    <DialogActions sx={{ p: 2, px: 3 }}>
                        <Button
                            variant="contained"
                            sx={{
                                color: "white !important",
                            }}
                            onClick={() => setShowTemaDetail(false)}
                        >
                            Tutup
                        </Button>
                    </DialogActions>
                </Stack>
            )}
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>
                    AP/PP/KP dari tema{" "}
                    <Typography fontWeight={600} fontSize={14} component="span">
                        {tema.value}
                    </Typography>
                </Typography>
            </Stack>

            <Box
                mt={2}
                sx={{
                    maxHeight: "30vh",
                    overflow: "auto",
                    "&::-webkit-scrollbar": {
                        width: "3px",
                    },
                }}
            >
                {
                    data == 0 ?
                        <EmptyState
                            icon={<IconEmptyPage />}
                            title="Halaman Tema Kosong"
                            description="Silahkan isi konten halaman ini"
                        />
                        :
                        <RichTreeView
                            multiSelect
                            aria-label="customized"
                            defaultExpandedItems={["1"]}
                            slots={{
                                expandIcon: AddBoxIcon,
                                collapseIcon: IndeterminateCheckBoxIcon,
                                endIcon: (props: SvgIconProps) => {
                                    return (
                                        <SvgIcon
                                            className="close"
                                            fontSize="inherit"
                                            style={{ width: 14, height: 14 }}
                                            {...props}
                                        >
                                            <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
                                        </SvgIcon>
                                    )
                                },
                            }}
                            items={data}
                        />
                }
            </Box>

        </DialogComponent>
    )
}