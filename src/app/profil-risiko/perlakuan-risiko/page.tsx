"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyData, IconEmptyPage } from "@/app/components/icons";
import { advancedTable } from "@/app/components/table";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import { Box, Button, DialogActions, SelectChangeEvent } from "@mui/material";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { data } from "./setting";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import { addUrl, editUrl } from "@/app/utils/constant";

export default function PagePerlakuanRisiko({}) {
 const [modalOpenView, setModalOpenView] = React.useState(false);
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenEdit, setModalOpenEdit] = React.useState(false);
 const [modalOpenDelete, setModalOpenDelete] = React.useState(false);
 const [project, setProject] = React.useState("");

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

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
    accessorKey: "ada_tidak",
    header: "Pengendalian yang ada (Ada/Tidak)",
    size: 150,
    enableColumnActions: false,
   },
   //    {
   //     id: "perlakuan_risiko",
   //     header: "Perlakuan Risiko",
   //     columns: [
   //      {
   //       accessorKey: "deskripsi",
   //       header: "Deskripsi Rencana Mitigasi",
   //       size: 180,
   //       enableColumnActions: false,
   //       enableSorting: false,
   //      },
   //      {
   //       accessorKey: "waktu",
   //       header: "Waktu Rencana Mitigasi",
   //       size: 180,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "penanggungjawab",
   //       header: "Penanggung Jawab",
   //       size: 180,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
  ],
  []
 );

 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Perlakuan" />
  ),
 };

 const table = useMaterialReactTable({
  columns,
  data,
  ...renderTopToolbar,
  ...advancedTable,
  //   enableRowActions: false,
  //   muiTableContainerProps: {
  //    sx: {
  //     maxWidth: "calc(100vw - 348px)",
  //     "&::-webkit-scrollbar": {
  //      height: "10px",
  //     },
  //    },
  //   },
  //   renderEmptyRowsFallback: ({ table }) => (
  //    <EmptyState
  //     icon={<IconEmptyData />}
  //     title="Data Kosong"
  //     description="Silahkan isi konten halaman ini"
  //    />
  //   ),
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

 const isEmpty = false;

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
     title="Perlakuan Risiko"
     //  chooseProject
     //  chooseKonteks
     chooseKonteks
     chooseRo
     project={project}
     handleChangeProject={handleChangeProject}
    >
     {isEmpty ? (
      <EmptyState
       icon={<IconEmptyPage />}
       title="Halaman Perlakuan Risiko Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <MaterialReactTable table={table} />
     )}
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Perlakuan Risiko"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Perlakuan Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Perlakuan Risiko"
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
