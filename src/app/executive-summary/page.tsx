"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/components/layouts/layout";
import EmptyState from "@/components/empty";
import { IconEmptyPage } from "@/components/icons";
import {
    Box,
    Chip,
    Collapse,
    Grow,
    Stack,
    Tab,
    Tabs,
    Tooltip,
    useMediaQuery,
    useTheme
} from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/components/icons/icon-fa";
import TabLatarBelakang from "./partials/tabLatarBelakang";
import TabProfil from "./partials/tabProfil";
import TabPolicy from "./partials/tabPolicy";
// import TabOverall from "./partials/tabOverall";
// import LoadingPage from "../components/loadingPage";
import TabIndikasi from "./partials/tabIndikasi";
import { useGlobalStore } from "@/provider";
import { ExsumStoreProvider, defaultExsumState, useExsumStore } from "@/app/executive-summary/provider"
import useSWRMutation from "swr/mutation";
import { postRequest } from "@/utils/fetcher";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 0,
                        mt: 2,
                        height: "calc(100vh - 344px)",
                        overflow: "auto",
                        "&::-webkit-scrollbar": {
                            width: "3px"
                        },
                        [theme.breakpoints.down("sm")]: {
                            height: "calc(100vh - 366px)"
                        }
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
}

const getDataExsum = () => {
    const {
        data,
        trigger,
        isMutating
    } = useSWRMutation(
        "/api/exsum/exsum-list",
        postRequest
    );
    return { data, trigger, isMutating };
}

const ExsumPage = () => {

    const { project } = useGlobalStore((state) => state)
    const { setExsum } = useExsumStore((state) => state)
    const { trigger } = getDataExsum();

    const setExsumData = async () => {
        let dataExsum = {...defaultExsumState}
        if (project.id && project.level){
            const req = {level:project.level,ref_id:project.id};
            try {
                dataExsum = await trigger(req)
            } catch (error){}
            setExsum(dataExsum)
        }
    }
    
    React.useEffect(() => {
        setExsumData()
    },[project])

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const usetheme = useTheme();
    const breakpointDownMd = useMediaQuery(usetheme.breakpoints.down("md"));

    const downloadAttachment = (
        <Chip
            color="primary"
            variant="outlined"
            label={
                <Stack direction="row" gap={1}>
                    <IconFA size={14} name="download" color={theme.palette.primary.main} />
                    {breakpointDownMd ? null : "Download Lampiran"}
                </Stack>
            }
            sx={{
                bgcolor: "white",
                fontWeight: 600,
                lineHeight: 1,
                cursor: "pointer",
                height: 38,
                px: 1,
                borderRadius: "50px"
            }}
        />
    );

    return (
        <DashboardLayout>
            {/*<LoadingPage />*/}
            <ContentPage
                title={`Executive Summary`}
                overflowHidden
                withCard={true}
                chooseProject
                project={project}
                dowloadAttachmentFile={
                    (project.id !== undefined && project.id !== 0) && (
                        <>
                            {breakpointDownMd ? (
                                <Tooltip
                                    title="Download Lampiran"
                                    followCursor
                                    TransitionComponent={Grow}
                                >
                                    {downloadAttachment}
                                </Tooltip>
                            ) : (
                                downloadAttachment
                            )}
                        </>
                    )
                }
            >
                    {(project.id === undefined || project.id === 0) ?
                    (
                        <EmptyState
                            icon={<IconEmptyPage />}
                            title="Informasi"
                            description="Silahkan pilih kegiatan pembangunan terlebih dahulu"
                        />
                    ) : (
                        <Collapse in={true}>
                            <Box sx={{ width: "100%" }}>
                                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Tabel Analisis"
                                        sx={{
                                            ".MuiTabs-flexContainer": {
                                                gap: 1
                                            },
                                            button: {
                                                p: 2,
                                                px: 3,
                                                my: 2,
                                                gap: 1,
                                                minHeight: 0,
                                                bgcolor: grey[300],
                                                borderRadius: 2,
                                                lineHeight: 1,
                                                "&.Mui-selected": {
                                                    bgcolor: theme.palette.primary.main,
                                                    color: "white"
                                                }
                                            }
                                        }}
                                    >
                                        <Tab
                                            label="Latar Belakang Proyek"
                                            {...a11yProps(0)}
                                            iconPosition="start"
                                            icon={<IconFA size={16} name="pen-to-square" />}
                                        />
                                        <Tab
                                            label="Profil Proyek/KP"
                                            {...a11yProps(1)}
                                            iconPosition="start"
                                            icon={<IconFA size={16} name="address-card" sx={{ width: "auto" }} />}
                                        />
                                        <Tab
                                            label="Policy Brief"
                                            {...a11yProps(2)}
                                            iconPosition="start"
                                            icon={<IconFA size={16} name="file-shield" sx={{ width: "auto" }} />}
                                        />
                                        <Tab
                                            label="Indikasi Risiko Strategis "
                                            {...a11yProps(3)}
                                            iconPosition="start"
                                            icon={<IconFA size={16} name="rotate" sx={{ width: "auto" }} />}
                                        />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <TabLatarBelakang />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <TabProfil />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    <TabPolicy />
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={3}>
                                    <TabIndikasi />
                                </CustomTabPanel>
                            </Box>
                        </Collapse>
                    )}
            </ContentPage>
        </DashboardLayout>
    );
}

export default function Page(){

    return (
        <ExsumStoreProvider state={defaultExsumState}>
            <ExsumPage />
        </ExsumStoreProvider>
    )
}
