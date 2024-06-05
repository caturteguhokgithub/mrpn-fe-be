import React from "react";
import {
    Button, CircularProgress,
    DialogActions,
    Stack,
    Grid,
    Typography,
} from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import { TemaRequest } from "@/app/tema/repositories";
import EmptyState from "@/components/empty";

export default function TemaDeleteConfirmation(
    {
        open,
        setOpen,
        submit,
        isMutating,
    } : {
        open:boolean;
        setOpen:any;
        submit:any;
        isMutating:boolean;
    }
) {
    return (
        <DialogComponent
            width={1000}
            dialogOpen={open}
            dialogClose={() => setOpen(false)}
            title="Hapus Tema"
            dialogFooter={(
                <DialogActions sx={{ p: 2, px: 3 }}>
                    <Button onClick={() => setOpen(false)}>Batal</Button>
                    <Button
                        disabled={isMutating}
                        variant="contained"
                        type="submit"
                        onClick={submit}
                        sx={{
                            color: "white !important",
                        }}
                    >
                        Ya
                    </Button>
                </DialogActions>
            )}
        >
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {
                            isMutating ?
                                <CircularProgress color="inherit" />
                                :
                                <Typography gutterBottom>Apakah Anda yakin akan menghapus tema ini ?</Typography>
                        }
                    </Stack>
                </Grid>
            </Grid>
        </DialogComponent>
    )
}