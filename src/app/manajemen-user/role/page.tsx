"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SectionCheckbox from "./partials/sectionCheckbox";
import { Chip, Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

export default function PageUserManagement({}) {
 return (
  <DashboardLayout>
   <ContentPage
    title="User Role"
    withCard
    heightTitleBreadcrumb
    // titleChild={
    //  <Chip
    //   color="primary"
    //   variant="outlined"
    //   label="KP-03 - Kawasan Industri Prioritas dan Smelter"
    //   sx={{
    //    bgcolor: "white",
    //    fontWeight: 600,
    //    lineHeight: 1,
    //    cursor: "default",
    //   }}
    //  />
    // }
    breadcrumb={
     <Breadcrumbs aria-label="breadcrumb">
      <Link href="/manajemen-user">
       <Typography fontSize="12px">Manajemen User</Typography>
      </Link>
     </Breadcrumbs>
    }
   >
    {/* <ContentPage title="User Role" withCard> */}
    {/* <Paper elevation={1} sx={{ borderRadius: 4 }}> */}
    <Stack direction="row" justifyContent="space-between">
     <TextField
      //  label="Nama User"
      value="Entitas Pendukung Unit Pemilik Risiko (UPR)"
      size="small"
      placeholder="Nama User"
      sx={{ minWidth: "30%" }}
     />
     <Box>
      <Button
       variant="outlined"
       startIcon={
        <Icon
         baseClassName="fas"
         className={`fa-plus-circle`}
         sx={{
          fontSize: 2,
         }}
        />
       }
       sx={{ borderRadius: "50px" }}
      >
       Tambah Menu
      </Button>
     </Box>
    </Stack>
    <Divider sx={{ my: 2 }} />
    <Stack
     direction="column"
     gap={2}
     maxHeight="1200px"
     maxWidth="100%"
     flexWrap="wrap"
    >
     <SectionCheckbox menuLabel="dashboard" noChild />
     <SectionCheckbox menuLabel="Executive Summary" noChild />
     <SectionCheckbox menuLabel="Penetapan Konteks" hasChild>
      <SectionCheckbox menuLabel="Konteks Strategis" />
      <SectionCheckbox menuLabel="Selera Risiko" />
     </SectionCheckbox>
     <SectionCheckbox menuLabel="Profil Risiko" hasChild>
      <SectionCheckbox menuLabel="Registrasi Risiko" />
      <SectionCheckbox menuLabel="Analisis Risiko" />
      <SectionCheckbox menuLabel="Evaluasi Risiko" />
      <SectionCheckbox menuLabel="Perlakuan Risiko" />
     </SectionCheckbox>
     <SectionCheckbox menuLabel="Pemantauan Pelaksanaan Risiko" hasChild>
      <SectionCheckbox menuLabel="Peringatan Dini & Saran" />
      <SectionCheckbox menuLabel="Pemantauan" />
      <SectionCheckbox menuLabel="Pelaporan" />
     </SectionCheckbox>
    </Stack>
    {/* </Paper> */}
   </ContentPage>
  </DashboardLayout>
 );
}
