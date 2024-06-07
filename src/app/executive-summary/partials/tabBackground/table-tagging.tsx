import React, { Fragment } from "react";
import {
    Icon,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Tooltip,
    Typography,
} from "@mui/material";
import theme from "@/theme";
import { Kebijakan } from "./cardTagging";
import {checkPermission, ListPermission} from "@/config/permission";
import {useGlobalStore} from "@/provider";

export default function TableTagging({ data, handleDelete }: { data: Kebijakan[], handleDelete:any; }) {

    const { userdata } = useGlobalStore((state) => state)
    const { permission } = userdata

    return (
        <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
                    <TableRow>
                        {checkPermission(permission, ListPermission.EXSUM_TAGGING_DELETE) &&
                            <TableCell sx={{ width: 100 }}></TableCell>
                        }
                        <TableCell sx={{ width: 200 }}>
                            <Typography variant="body1" fontWeight={600}>
                                Kebijakan
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="body1" fontWeight={600}>
                                Keterangan
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((detailRisk, index) => (
                        <TableRow
                            key={index}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            {checkPermission(permission, ListPermission.EXSUM_TAGGING_DELETE) &&
                                <TableCell sx={{ textAlign: "center" }}>
                                    <Tooltip title="Delete" placement="top">
                                        <IconButton
                                            aria-label="delete"
                                            color="error"
                                            onClick={() => handleDelete(detailRisk.id)}
                                        >
                                            <Icon
                                                baseClassName="fas"
                                                className={`fa-trash-alt`}
                                                sx={{
                                                    fontSize: "14px",
                                                }}
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            }
                            <TableCell>
                                <Typography variant="body1">{detailRisk.kebijakan}</Typography>
                            </TableCell>
                            <TableCell>
                                <div dangerouslySetInnerHTML={{ __html: detailRisk.value }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
