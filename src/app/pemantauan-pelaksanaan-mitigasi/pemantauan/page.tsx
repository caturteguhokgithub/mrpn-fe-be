"use client";

import ContentPage from "@/app/components/contents/content";
import React, { useMemo } from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyData, IconEmptyPage } from "@/app/components/icons";
import { Box, Button, DialogActions, SelectChangeEvent } from "@mui/material";
import {
 MaterialReactTable,
 useMaterialReactTable,
} from "material-react-table";
import { advancedTable } from "@/app/components/table";
import { data } from "./setting";
import ActionColumn from "@/app/components/actions/action";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import { addUrl, editUrl } from "@/app/utils/constant";

export default function PagePemantauan({}) {
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
    size: 150,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    accessorKey: "kategori",
    header: "Kategori Risiko",
    size: 150,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    id: "nilai_target_sebelum",
    header: "Nilai Risiko Sebelum Perlakuan Risiko",
    columns: [
     {
      accessorKey: "before_kemungkinan",
      header: "Kemungkinan",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "before_dampak",
      header: "Dampak",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "before_tingkat_risiko",
      header: "Tingkat Risiko",
      size: 120,
      enableColumnActions: false,
     },
    ],
   },
   {
    id: "nilai_target_setelah",
    header: "Nilai Risiko Setelah Perlakuan Risiko",
    columns: [
     {
      accessorKey: "after_kemungkinan",
      header: "Kemungkinan",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "after_dampak",
      header: "Dampak",
      size: 120,
      enableColumnActions: false,
     },
     {
      accessorKey: "after_tingkat_risiko",
      header: "Tingkat Risiko",
      size: 120,
      enableColumnActions: false,
     },
    ],
   },
   //    {
   //     accessorKey: "perlakuan",
   //     header: "Perlakuan Risiko",
   //     size: 200,
   //     enableColumnActions: false,
   //    },
   //    {
   //     id: "waktu",
   //     header: "Waktu Rencana dan Realisasi Mitigasi",
   //     columns: [
   //      {
   //       accessorKey: "tgl_rencana",
   //       header: "Tanggal Rencana",
   //       size: 200,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "tgl_realisasi",
   //       header: "Tanggal Realisasi",
   //       size: 200,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
   //    {
   //     id: "nilai_penurunan",
   //     header: "Nilai Penurunan Target Risiko Setelah Mitigasi",
   //     columns: [
   //      {
   //       accessorKey: "kemungkinan",
   //       header: "Kemungkinan",
   //       size: 170,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "dampak",
   //       header: "Dampak",
   //       size: 170,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "tingkat_risiko",
   //       header: "Tingkat Risiko",
   //       size: 170,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
   //    {
   //     accessorKey: "keterangan",
   //     header: "Keterangan Perlakuan Risiko",
   //     size: 250,
   //     enableColumnActions: false,
   //    },
  ],
  []
 );

 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Pemantauan" />
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
     title="Pemantauan"
     chooseRo
     chooseKonteks
     project={project}
     handleChangeProject={handleChangeProject}
    >
     {/* <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Pemantauan Masih Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
     {/* <Box className="table-collapsed"> */}
     <MaterialReactTable table={table} />
     {/* </Box> */}
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Pemantauan"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Pemantauan"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Ubah Pemantauan"
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
