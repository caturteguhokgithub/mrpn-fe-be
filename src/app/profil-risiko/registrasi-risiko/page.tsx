"use client";

import ContentPage from "@/app/components/contents";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { advancedTable } from "@/app/components/table";
import { Box, Button, DialogActions, SelectChangeEvent } from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { data } from "./setting";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import { addUrl, editUrl } from "@/app/utils/constant";

export default function PageRegistrasiRisiko({}) {
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
   {
    accessorKey: "sasaran",
    header: "Sasaran Strategi PKPPR",
    size: 200,
    enableColumnActions: false,
   },
   //    {
   //     id: "indikator_sasaran",
   //     header: "Indikator Sasaran",
   //     columns: [
   //      {
   //       accessorKey: "uraian",
   //       header: "Uraian",
   //       size: 150,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "target",
   //       header: "Target",
   //       size: 150,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "fisik",
   //       header: "Fisik",
   //       size: 150,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
   {
    accessorKey: "peristiwa",
    header: "Peristiwa Risiko Strategis MRPN Linsek",
    size: 250,
    enableColumnActions: false,
   },
   {
    accessorKey: "pemilik",
    header: "Pemilik Risiko MRPN Linsek",
    size: 250,
    enableColumnActions: false,
   },
   //    {
   //     accessorKey: "kategori",
   //     header: "Kategori Risiko MRPN Linsek",
   //     size: 250,
   //     enableColumnActions: false,
   //    },
   //    {
   //     accessorKey: "penyebab",
   //     header: "Penyebab/Faktor Risiko Strategis MRPN Linsek",
   //     size: 250,
   //     enableColumnActions: false,
   //    },
   //    {
   //     accessorKey: "dampak",
   //     header: "Dampak Strategis MRPN Linsek",
   //     size: 250,
   //     enableColumnActions: false,
   //    },
  ],
  []
 );

 //  const data: any = [];
 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Registrasi" />
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
  //     maxWidth: "calc(100vw - 364px)",
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
     title="Identifikasi Risiko"
     //  chooseProject
     chipKp
     chooseKonteks
     //  chooseRo
     project={project}
     handleChangeProject={handleChangeProject}
    >
     {/* <Box className="table-collapsed"> */}
     <MaterialReactTable table={table} />
     {/* </Box> */}
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Identifikasi Risiko"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Identifikasi Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Identifikasi Risiko"
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
