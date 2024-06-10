// components/CustomTooltip.js
import React from "react";
import dayjs from "dayjs";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const CustomTooltip = ({ task }: { task: any }) => {
    return (
        <Box
            bgcolor="white"
            color={grey[600]}
            p={"10px 16px"}
            width={300}
            boxShadow="rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;"
            sx={{
                "strong, span": {
                    mt: 0.5,
                    fontSize: 13,
                    lineHeight: 1.2
                }
            }}
        >
            <Box
                className="kegiatan"
                sx={{
                    "strong, span": {
                        display: "block"
                    }
                }}
            >
                <Typography component="span" variant="body2" color={grey[500]}>
                    Kegiatan:
                </Typography>
                <Typography component="strong" fontWeight={600}>
                    {task.name}
                </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Stack direction="column" gap={0.5}>
                <Typography variant="body2" component="span">
                    Penanggungjawab:{" "}
                    <Typography component="strong" fontWeight={600}>
                        {task.pj}
                    </Typography>
                </Typography>
                <Typography variant="body2" component="span">
                    Sumber Anggaran:{" "}
                    <Typography component="strong" fontWeight={600}>
                        {task.sumber_anggaran}
                    </Typography>
                </Typography>
                <Typography variant="body2" component="span">
                    Waktu Mulai:{" "}
                    <Typography component="strong" fontWeight={600}>
                        {dayjs(task.start).year()}
                    </Typography>
                </Typography>
                <Typography variant="body2" component="span">
                    Waktu Selesai:{" "}
                    <Typography component="strong" fontWeight={600}>
                        {" "}
                        {dayjs(task.end).year()}
                    </Typography>
                </Typography>
                <Typography variant="body2" component="span">
                    Progress:{" "}
                    <Typography component="strong" fontWeight={600}>
                        {" "}
                        {task.progress}%
                    </Typography>
                </Typography>
            </Stack>
        </Box>
    );
};

export default CustomTooltip;
