"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "../components/layouts/layout";
import EmptyState from "../components/empty";
import { IconEmptyPage } from "../components/icons";

export default function PageProfilRisiko({}) {
 return (
  <DashboardLayout>
   <ContentPage title="Profil Risiko" withCard>
    <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Profil Risiko Kosong"
     description="Silahkan isi konten halaman ini"
    />
   </ContentPage>
  </DashboardLayout>
 );
}
