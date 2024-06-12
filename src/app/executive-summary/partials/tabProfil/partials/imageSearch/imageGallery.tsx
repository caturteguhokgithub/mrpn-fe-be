import React from "react";
import Image from "next/image";
import {
    Box,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    alpha
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";
import theme from "@/theme";
import EmptyState from "@/app/components/empty";
import { IconEmptyImage } from "@/app/components/icons";
import DraggableScroll from "../draggableScroll";

const ToggleButtonLogo = ({
                              value,
                              imgSrc
                          }: {
    value: string;
    imgSrc: string;
}) => {
    return (
        <Tooltip title={value} arrow>
            <ToggleButton
                value={value}
                aria-label={value}
                sx={{
                    position: "relative",
                    ".MuiIcon-root": {
                        position: "absolute",
                        top: 5,
                        right: 5
                    }
                }}
            >
                <Image
                    alt={value}
                    src={imgSrc}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", height: "50px" }}
                />
                <IconFA name="circle" size={15} color={theme.palette.primary.main} />
                <IconFA name="circle-check" size={15} color={theme.palette.primary.main} />
            </ToggleButton>
        </Tooltip>
    );
};

const ImageGallery = (
{
    images,
    searchTerm,
    project,
    type,
    data,
    setData
}: {
    data:any;
    setData:any;
    images: any;
    searchTerm: any;
    type:any,
    project?: string;
}) => {

    let initData:any = []
    if (type && data && data.hasOwnProperty(type)){
        data[type].map((x:any) => {
            initData.push(x.stakeholder.id)
        })
    }
    const [formats, setFormats] = React.useState(initData);

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[]
    ) => {
        setFormats(newFormats);
        setData((prev:any) => {
            let prevData = [...prev]
            let objIndex = prevData.findIndex(obj => obj.type == type);
            prevData[objIndex].items = newFormats;
            return prevData
        })
    };

    const styles = {
        pt: 1,
        mb: 1,
        gap: 1,
        maxWidth: "100%",
        overflow: "auto",
        minHeight: 90,
        "&::-webkit-scrollbar": {
            height: "6px",
            cursor: "pointer"
        },
        button: {
            border: `1px solid ${grey[400]}`,
            borderLeft: `1px solid ${grey[400]} !important`,
            borderRadius: "8px !important",
            ".MuiIcon-root.fa-circle-check": {
                display: "none"
            },
            ".MuiIcon-root.fa-circle": {
                display: "block",
                color: alpha(grey[500], 0.3)
            },
            "&:hover": {
                bgcolor: alpha(theme.palette.primary.main, 0.1)
            },
            "&.Mui-selected": {
                border: `1px solid ${theme.palette.primary.main} !important`,
                color: "white",
                ".MuiIcon-root.fa-circle-check": {
                    display: "block"
                },
                ".MuiIcon-root.fa-circle": {
                    display: "none"
                },
                "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: "white"
                }
            }
        }
    };

    if ((images && images.length === 0) || images == null) {
        return (
            <EmptyState
                dense
                icon={<IconEmptyImage width={60} />}
                description="Stakeholder tidak ditemukan"
            />
        );
    }

    return (
        <Stack>
            <Stack direction="row" gap={3}>
                <ToggleButtonGroup value={formats} onChange={handleFormat} sx={styles}>
                    <DraggableScroll
                        sx={{
                            display: "flex",
                            gap: 1,
                            paddingBottom: 1,
                            "&::-webkit-scrollbar": {
                                height: "3px"
                            }
                        }}
                    >
                        {images.map((image: any, index: any) => {
                            const condHighlight =
                                searchTerm &&
                                image.value.toLowerCase().includes(searchTerm.toLowerCase());

                            return (
                                <Stack direction="column" key={index}>
                                    <Box
                                        sx={{
                                            button: {
                                                borderLeft: condHighlight
                                                    ? `2px solid ${theme.palette.primary.main} !important`
                                                    : `1px solid ${grey[400]}`,
                                                border: condHighlight
                                                    ? `2px solid ${theme.palette.primary.main}`
                                                    : `1px solid ${grey[400]}`
                                            }
                                        }}
                                    >
                                        <ToggleButtonLogo
                                            value={image.id}
                                            imgSrc={image.icon}
                                        />
                                    </Box>
                                </Stack>
                            );
                        })}
                    </DraggableScroll>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};

export default ImageGallery;
