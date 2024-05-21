"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/components/layouts/layout";
import EmptyState from "@/components/empty";
import { IconEmptyPage } from "@/components/icons";
import { Button, DialogActions, SelectChangeEvent } from "@mui/material";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { advancedTable } from "@/app/components/table";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import { data } from "../analisis-risiko/setting";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";

export default function PageEvaluasiRisiko({}) {
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);

 const handleModalOpenView = () => {
  setModalOpenView(true);
 };
 const handleModalOpenDelete = () => {
  setModalOpenDelete(true);
 };
 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };
 const handleModalOpenEdit = () => {
  setModalOpenEdit(true);
 };

 const handleModalClose = () => {
  setModalOpenView(false);
  setModalOpenDelete(false);
  setModalOpenAdd(false);
  setModalOpenEdit(false);
 };

 const columns = useMemo(
  () => [
   //    {
   //     accessorKey: "no",
   //     header: "No.",
   //     size: 80,
   //     enableColumnActions: false,
   //    },
   {
    accessorKey: "peristiwa",
    header: "Peristiwa Risiko",
    size: 200,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    id: "nilai_risiko",
    header: "Nilai Risiko",
    columns: [
     {
      accessorKey: "nilai",
      header: "Nilai",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "tingkat",
      header: "Tingkat",
      size: 120,
      enableColumnActions: false,
     },
    ],
   },
   {
    id: "risk_appetitte",
    header: "Risk Appetitte",
    columns: [
     {
      accessorKey: "nilai_appetitte",
      header: "Nilai",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "keterangan_appetitte",
      header: "Keterangan",
      size: 120,
      enableColumnActions: false,
     },
    ],
   },
   {
    id: "residual",
    header: "Residual",
    columns: [
     {
      accessorKey: "nilai_residual",
      header: "Nilai",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "tingkat_residual",
      header: "Tingkat",
      size: 120,
      enableColumnActions: false,
     },
    ],
   },
  ],
  []
 );

 //  const data: any = [];
 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Evaluasi" />
  ),
 };

 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  displayColumnDefOptions: {
   "mrt-row-actions": {
    header: "",
    size: 100,
    Cell: () => (
     <ActionColumn
      viewClick={handleModalOpenView}
      editClick={handleModalOpenEdit}
      deleteClick={handleModalOpenDelete}
     />
    ),
   },
  },
 });

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" type="submit">
    Simpan
   </Button>
  </DialogActions>
 );

 const dialogActionDeleteFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button variant="contained" color="error" type="submit">
    Hapus
   </Button>
  </DialogActions>
 );

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Evaluasi Risiko"
     // chooseProject
     // chooseKonteks
     chooseKonteks
     chooseRo
     project={project}
     handleChangeProject={handleChangeProject}
    >
     {/* <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Profil Risiko Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
     <MaterialReactTable table={table} />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Evaluasi Risiko"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Evaluasi Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Evaluasi Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="edit" />
   </DialogComponent>
   <DialogComponent
    width={240}
    dialogOpen={modalOpenDelete}
    dialogClose={handleModalClose}
    title="Hapus Data"
    dialogFooter={dialogActionDeleteFooter}
   >
    Anda yakin akan menghapus data ini?
   </DialogComponent>
  </>
 );
}
