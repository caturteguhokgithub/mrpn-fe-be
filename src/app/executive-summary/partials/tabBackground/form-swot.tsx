import React from "react";
import {
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import { TextareaStyled } from "@/app/components/textarea";
import { Swot } from "@/app/executive-summary/partials/tabBackground/cardSwot";

export default function FormSwot(
    {
        mode,
        data,
        setData
    }:{
        mode?:string;
        data: Swot,
        setData:any;
    }) {
    return (
        <Grid container spacing={2}>
            <Grid item lg={6}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
                >
                    <Stack direction="column">
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            lineHeight={1.3}
                            sx={{ textTransform: "capitalize" }}
                        >
                            Strength
                        </Typography>
                        <TextareaStyled
                            aria-label={`Deskripsi Strength`}
                            placeholder={`Deskripsi Strength`}
                            minRows={3}
                            value={data.strength}
                            onChange={(e) => {
                                setData((prev:Swot) => {
                                    return {...prev, strength:e.target.value}
                                })
                            }}
                        />
                    </Stack>
                </Paper>
            </Grid>
            <Grid item lg={6}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
                >
                    <Stack direction="column">
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            lineHeight={1.3}
                            sx={{ textTransform: "capitalize" }}
                        >
                            Weakness
                        </Typography>
                        <TextareaStyled
                            aria-label={`Deskripsi Weakness`}
                            placeholder={`Deskripsi Weakness`}
                            minRows={3}
                            value={data.weakness}
                            onChange={(e) => {
                                setData((prev:Swot) => {
                                    return {...prev, weakness:e.target.value}
                                })
                            }}
                        />
                    </Stack>
                </Paper>
            </Grid>
            <Grid item lg={6}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
                >
                    <Stack direction="column">
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            lineHeight={1.3}
                            sx={{ textTransform: "capitalize" }}
                        >
                            Opportunity
                        </Typography>
                        <TextareaStyled
                            aria-label={`Deskripsi Opportunity`}
                            placeholder={`Deskripsi Opportunity`}
                            minRows={3}
                            value={data.opportunity}
                            onChange={(e) => {
                                setData((prev:Swot) => {
                                    return {...prev, opportunity:e.target.value}
                                })
                            }}
                        />
                    </Stack>
                </Paper>
            </Grid>
            <Grid item lg={6}>
                <Paper
                    elevation={0}
                    variant="outlined"
                    sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
                >
                    <Stack direction="column">
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            lineHeight={1.3}
                            sx={{ textTransform: "capitalize" }}
                        >
                            Thread
                        </Typography>
                        <TextareaStyled
                            aria-label={`Deskripsi Thread`}
                            placeholder={`Deskripsi Thread`}
                            minRows={3}
                            value={data.thread}
                            onChange={(e) => {
                                setData((prev:Swot) => {
                                    return {...prev, thread:e.target.value}
                                })
                            }}
                        />
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}
