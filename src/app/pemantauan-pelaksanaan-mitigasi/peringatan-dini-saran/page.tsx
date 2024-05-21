"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import { advancedTable } from "@/app/components/table";
import {
 DialogActions,
 Button,
 SelectChangeEvent,
 Alert,
 AlertTitle,
} from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import { data } from "../pemantauan/setting";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";

export default function PagePeringatanDiniSaran({}) {
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
   {
    accessorKey: "peristiwa",
    header: "Peristiwa Risiko",
    size: 300,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    id: "nilai_residual",
    header: "Nilai Residual Risiko",
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
    accessorKey: "pengendalian",
    header: "Pengendalian",
    size: 150,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    accessorKey: "tindak_lanjut",
    header: "Tindak Lanjut",
    size: 150,
    enableColumnActions: false,
    enableSorting: false,
   },
  ],
  []
 );

 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Peringatan" />
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
    size: 140,
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
     title="Peringatan Dini"
     chooseKonteks
     chooseRo
     withCard={false}
     hasAlert={
      <Alert severity="warning" sx={{ mb: 2 }}>
       <AlertTitle>Perhatian!</AlertTitle>
       Butuh perhatian & tindak lanjut pengawasan
      </Alert>
     }
    >
     {/* <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Peringatan Dini & Saran Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}

     <MaterialReactTable table={table} />
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Peringatan Dini"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Peringatan Dini"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Peringatan Dini"
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
