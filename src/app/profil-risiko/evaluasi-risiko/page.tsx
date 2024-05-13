"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/components/layouts/layout";
import EmptyState from "@/components/empty";
import { IconEmptyPage } from "@/components/icons";
import { SelectChangeEvent } from "@mui/material";

export default function PageEvaluasiRisiko({}) {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 return (
  <DashboardLayout>
   <ContentPage
    title="Evaluasi Risiko"
    withCard
    chooseProject
    chooseKonteks
    project={project}
    handleChangeProject={handleChangeProject}
   >
    <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Profil Risiko Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </ContentPage>
  </DashboardLayout>
 );
}
