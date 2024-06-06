import React from "react";
import {
    Typography,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem
} from "@mui/material";
import { IconFA } from "@/app/components/icons/icon-fa";
import { grey, red } from "@mui/material/colors";
import theme from "@/theme";

const ListItemDropdownMenu = ({ label }: { label: string }) => {
    return (
        <>
            <ListItemIcon sx={{ minWidth: "0 !important" }}>
                <IconFA size={14} name="edit" />
            </ListItemIcon>
            <ListItemText>
                <Typography fontSize={14}>{label}</Typography>
            </ListItemText>
        </>
    );
};

export default function CardItem({
                                     title,
                                     children,
                                     addButton,
                                     setting,
                                     multiEdit,
                                     settingEditOnclick,
                                     settingDeleteOnclick,
                                     settingEditOutputClick,
                                     settingEditBisnisClick
                                 }: {
    title: React.ReactNode;
    children: React.ReactNode;
    addButton?: React.ReactNode;
    setting?: React.ReactNode;
    multiEdit?: boolean;
    settingEditOnclick?: () => void;
    settingDeleteOnclick?: () => void;
    settingEditOutputClick?: () => void;
    settingEditBisnisClick?: () => void;
}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const settingButton = (
        <>
            <IconButton
                aria-label="settings"
                onClick={handleClick}
                sx={{
                    p: "5px",
                    bgcolor: theme.palette.primary.dark,
                    "&:hover": {
                        bgcolor: grey[700]
                    }
                }}
            >
                <IconFA size={14} name="ellipsis" color="white" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            "&.MuiPaper-root": {
                                mt: "30px",
                                left: "auto !important",
                                right: 54,
                                minWidth: 150,
                                borderRadius: 3,
                                ".MuiList-root": {
                                    py: 0
                                }
                            },
                            ".MuiMenuItem-root": {
                                py: "10px",
                                gap: 1,
                                "&:last-of-type": {
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12
                                }
                            }
                        }
                    }
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
            >
                {multiEdit ? (
                    <>
                        <MenuItem onClick={settingEditOutputClick}>
                            <ListItemDropdownMenu label="Ubah Output" />
                        </MenuItem>
                        <MenuItem onClick={settingEditBisnisClick}>
                            <ListItemDropdownMenu label="Ubah Bisnis" />
                        </MenuItem>
                    </>
                ) : (
                    settingEditOnclick && (
                        <MenuItem onClick={settingEditOnclick}>
                            <ListItemDropdownMenu label="Ubah" />
                        </MenuItem>
                    )
                )}

                {settingDeleteOnclick && (
                    <MenuItem
                        onClick={settingDeleteOnclick}
                        sx={{
                            bgcolor: red[100],
                            color: red[700],
                            "&:hover": {
                                bgcolor: red[200]
                            }
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: "0 !important" }}>
                            <IconFA size={14} name="trash-alt" color={red[700]} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography fontSize={14}>Hapus</Typography>
                        </ListItemText>
                    </MenuItem>
                )}
            </Menu>
        </>
    );

    return (
        <Card
            sx={{
                m: "4px",
                borderRadius: 4,
                ".MuiCardHeader-action": {
                    m: 0
                },
                "ul, ol": {
                    pl: 1,
                    "& + strong": {
                        marginTop: 2,
                        display: "block"
                    }
                },
                ul: {
                    pl: 4,
                    li: {
                        pl: "5px"
                    }
                },
                ol: {
                    counterReset: "item",
                    li: {
                        display: "block",
                        marginLeft: "1.7em",
                        position: "relative",
                        "&:before": {
                            content: "counter(item) \". \"",
                            counterIncrement: "item",
                            display: "inline-block",
                            position: "absolute",
                            marginLeft: "-1.7em"
                        }
                    }
                },
                ".MuiTable-root": {
                    ul: {
                        pl: 2.5,
                        li: {
                            pl: "2px"
                        }
                    }
                }
            }}
        >
            <CardHeader
                action={<>{addButton ? addButton : setting ? settingButton : null}</>}
                title={<Typography fontWeight={500}>{title}</Typography>}
                sx={{ bgcolor: grey[300] }}
            />
            <CardContent sx={{ pb: "16px !important" }}>{children}</CardContent>
        </Card>
    );
}
