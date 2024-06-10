import React from "react";
import {
    Divider,
    FormControl,
    Grid,
    TextField,
    Typography
} from "@mui/material";
import TextareaComponent, { TextareaStyled } from "@/app/components/textarea";
import { InitData } from "@/app/executive-summary/partials/tabPolicy/cardFund";

export default function FormPendanaan(
    {
        mode,
        data,
        setData
    }: {
        mode?: string
        data:InitData,
        setData:any
    }
){
    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <Typography fontWeight={600}>Jumlah per Tahun</Typography>
                </Grid>
                {Object.keys(data.tahun).map((x:any) => {
                    return (
                        <>
                            <Grid item lg={6}>
                                <FormControl fullWidth>
                                    <Typography gutterBottom>{x}</Typography>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        value={data.tahun[x].value}
                                        onChange={(e) => {
                                            setData((prev:InitData) => {
                                                let tahun = prev.tahun;
                                                tahun[x] = {value:isNaN(parseInt(e.target.value))?0:parseInt(e.target.value)}
                                                return {
                                                    ...prev,
                                                    tahun:tahun
                                                }
                                            })
                                        }}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                        </>
                    )
                })}
                <Grid item lg={12}>
                    <Divider />
                </Grid>
                <Grid item lg={12}>
                    <Typography fontWeight={600}>Sumber Pendanaan</Typography>
                </Grid>
                <Grid item lg={6}>
                    <FormControl fullWidth>
                        <Typography gutterBottom>APBN</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            value={data.apbn}
                            onChange={(e) => {
                                setData((prev:InitData) => {
                                    return {
                                        ...prev,
                                        apbn:isNaN(parseInt(e.target.value))?0:parseInt(e.target.value)
                                    }
                                })
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item lg={6}>
                    <FormControl fullWidth>
                        <Typography gutterBottom>Non-APBN</Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            value={data.non_apbn}
                            onChange={(e) => {
                                setData((prev:InitData) => {
                                    return {
                                        ...prev,
                                        non_apbn:isNaN(parseInt(e.target.value))?0:parseInt((e.target.value))
                                    }
                                })
                            }}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item lg={12}>
                    <Divider />
                </Grid>
                <Grid item lg={12}>
                    <Typography fontWeight={600}>Kesiapan Pendanaan</Typography>
                </Grid>
                <Grid item lg={12}>
                    <FormControl fullWidth>
                        <TextareaStyled
                            aria-label="Kesiapan Pendanaan"
                            placeholder="Kesiapan Pendanaan"
                            minRows={3}
                            value={data.kesiapan}
                            onChange={(e) => {
                                setData((prev:InitData) => {
                                    return {
                                        ...prev,
                                        kesiapan:e.target.value
                                    }
                                })
                            }}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
}
