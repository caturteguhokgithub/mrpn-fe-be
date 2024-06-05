import React from "react";
import {
    Button,
    DialogActions,
    FormControl,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import DialogComponent from "@/app/components/dialog";
import { TemaRequest } from "@/app/tema/repositories";

export default function TemaMutation(
    {
        openTemaMutationDialog,
        setOpenTemaMutationDialog,
        submitCreateTema,
        submitUpdateTema,
        isMutating,
        requestTema,
        setRequestTema,
        children,
    } : {
        openTemaMutationDialog:boolean;
        setOpenTemaMutationDialog:any;
        submitCreateTema:any;
        submitUpdateTema:any;
        isMutating:boolean;
        requestTema:TemaRequest;
        setRequestTema:any;
        children:React.ReactNode
    }
) {
    return (
        <DialogComponent
            width={1000}
            dialogOpen={openTemaMutationDialog}
            dialogClose={() => {
                setOpenTemaMutationDialog(false)
            }}
            title={requestTema.id ? "Edit Tema" : "Tambah Tema"}
            dialogFooter={(
                <DialogActions sx={{ p: 2, px: 3 }}>
                    <Button onClick={() => {
                        setOpenTemaMutationDialog(false)
                    }}>Batal</Button>
                    {requestTema.id ? 
                        (<Button
                            disabled={isMutating}
                            variant="contained"
                            type="submit"
                            onClick={submitUpdateTema}
                            sx={{
                                color: "white !important",
                            }}
                        >
                            Simpan
                        </Button>)
                        :
                        (<Button
                            disabled={isMutating}
                            variant="contained"
                            type="submit"
                            onClick={submitCreateTema}
                        >
                            Simpan
                        </Button>)
                    }
                    
                </DialogActions>
            )}
        >
            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <FormControl fullWidth>
                        <Typography gutterBottom>Kode Tema</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Kode Tema"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={requestTema.code}
                            onChange={(e) => setRequestTema({...requestTema,code:e.target.value})}
                        />
                    </FormControl>
                </Grid>
                <Grid item lg={8}>
                    <FormControl fullWidth>
                        <Typography gutterBottom>Tema</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Tema"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={requestTema.value}
                            onChange={(e) => setRequestTema({...requestTema,value:e.target.value})}
                        />
                    </FormControl>
                </Grid>
                <Grid item lg={12}>
                    {children}
                </Grid>
            </Grid>
        </DialogComponent>
    )
}