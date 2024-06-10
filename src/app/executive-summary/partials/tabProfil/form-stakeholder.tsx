import React, { Fragment } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { TextareaStyled } from "@/app/components/textarea";
import ImageGalleryStakeholder from "./partials/imageSearch";
import {STAKEHOLDER_EXSUM_TYPE} from "@/constants/misc-constant";
import useSWR from "swr";
import { getter } from "@/utils/fetcher";
import { Swot } from "@/app/executive-summary/partials/tabBackground/cardSwot";

const getDataStakeHolder = () => {
    const {
        data,
        isLoading,
    } = useSWR(
        '/api/misc/stakeholder-list',
        getter,
        {
            revalidateWhenStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return { stakeHolderData:data, stakeholderDataLoading:isLoading };
}


export default function FormStakeholder(
{
    mode,
    project,
    data,
    setData
}: {
    mode?: string;
    project?: string;
    data?:any;
    setData?:any;
}) {

    const {stakeHolderData, stakeholderDataLoading} = getDataStakeHolder()

    return !stakeholderDataLoading && stakeHolderData &&
        (
        <Grid container spacing={2}>
            {STAKEHOLDER_EXSUM_TYPE.map((item, index) => (
                <Grid item lg={6} key={index}>
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
                                sx={{ minHeight: 54 }}
                            >
                                {`${item.label}`}
                            </Typography>
                            <ImageGalleryStakeholder
                                images={stakeHolderData[item.type]}
                                type={item.type}
                                data={data}
                                setData={setData}
                            />
                            <Typography variant="body2" mb={1}>
                                <strong>{item.tag}</strong>
                            </Typography>
                            <TextareaStyled
                                aria-label={`Deskripsi ${item.label}`}
                                placeholder={`Deskripsi ${item.label}`}
                                minRows={3}
                                defaultValue={data != null ? (data[item.type] ? data[item.type][0].value : "") : ""}
                                onChange={(e) => {
                                    setData((prev:any) => {
                                        let prevData = [...prev]
                                        let objIndex = prevData.findIndex(obj => obj.type == item.type);
                                        prevData[objIndex].value = e.target.value;
                                        return prevData
                                    })
                                }}
                            />
                        </Stack>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}
