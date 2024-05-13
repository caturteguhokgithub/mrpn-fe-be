import React, { useMemo } from "react";
import { advancedTable } from "@/app/components/table";
import { Box, Button, DialogActions } from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import AddButton from "@/app/components/buttonAdd";
import { data } from "../setting";
import ActionColumn from "@/app/components/actions/action";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./form-table";
import { addUrl, editUrl } from "@/app/utils/constant";

export default function TabTable({}) {
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
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    accessorKey: "nilai",
    header: "Nilai Risiko",
    enableColumnActions: false,
    enableSorting: false,
   },
   //    {
   //     accessorKey: "ada_tidak",
   //     header: "Pengendalian yang ada (Ada/Tidak)",
   //     size: 250,
   //     enableColumnActions: false,
   //    },
   //    {
   //     id: "tingkat_risiko",
   //     header: "Tingkat Risiko",
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
   //     id: "perlakuan_risiko",
   //     header: "Perlakuan Risiko",
   //     columns: [
   //      {
   //       accessorKey: "deskripsi",
   //       header: "Deskripsi Rencana Mitigasi",
   //       size: 220,
   //       enableColumnActions: false,
   //       enableSorting: false,
   //      },
   //      {
   //       accessorKey: "waktu",
   //       header: "Waktu Rencana Mitigasi",
   //       size: 220,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "penanggungjawab",
   //       header: "Penanggung Jawab",
   //       size: 220,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
  ],
  []
 );

 //  const data: any = [];
 type ColumnsType = {};

 const renderTopToolbar: ColumnsType = {
  renderTopToolbarCustomActions: () => (
   <AddButton onclick={handleModalOpenAdd} title="Tambah Analisis" />
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
   <Box
    className="table-collapsed"
    sx={{
     ".MuiPaper-root": {
      m: 0,
      boxShadow: "none",
     },
    }}
   >
    <MaterialReactTable table={table} />
   </Box>

   <DialogComponent
    dialogOpen={modalOpenView}
    dialogClose={handleModalClose}
    title="Detail Analisis Risiko"
   >
    <FormTable mode="view" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Detail Analisis Risiko"
    dialogFooter={dialogActionFooter}
   >
    <FormTable mode="add" />
   </DialogComponent>
   <DialogComponent
    dialogOpen={modalOpenEdit}
    dialogClose={handleModalClose}
    title="Detail Analisis Risiko"
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
