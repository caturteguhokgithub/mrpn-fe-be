"use client";

import ContentPage from "@/app/components/contents";
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
 Box,
 Chip,
 styled,
 Typography,
} from "@mui/material";
import {
 useMaterialReactTable,
 MaterialReactTable,
} from "material-react-table";
import DialogComponent from "@/app/components/dialog";
import FormTable from "./partials/form-table";
import { data } from "./setting";
import { green, red, yellow } from "@mui/material/colors";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";

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
    size: 200,
    enableColumnActions: false,
    enableSorting: false,
   },
   //    {
   //     id: "nilai_residual",
   //     header: "Nilai Residual Risiko",
   //     columns: [
   //      {
   //       accessorKey: "nilai",
   //       header: "Nilai",
   //       size: 120,
   //       enableColumnActions: false,
   //      },
   //      {
   //       accessorKey: "tingkat",
   //       header: "Tingkat",
   //       size: 120,
   //       enableColumnActions: false,
   //      },
   //     ],
   //    },
   {
    accessorKey: "konteks",
    header: "Konteks Strategis",
    size: 200,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    accessorKey: "nilai",
    header: "Nilai Risiko",
    size: 100,
    enableColumnActions: false,
    enableSorting: false,
   },
   {
    accessorKey: "pengendalian",
    header: "Pengendalian",
    size: 150,
    enableColumnActions: false,
    enableSorting: true,

    Cell: ({ renderedCellValue }: { renderedCellValue: any }) => (
     <>
      {renderedCellValue === 1 ? (
       <IconFA name="close" size={14} color={red[800]} />
      ) : (
       <IconFA name="check" size={14} color={green[800]} />
      )}
     </>
    ),
   },
   {
    accessorKey: "tindaklanjut",
    header: "Tindak Lanjut",
    size: 150,
    enableColumnActions: false,
    enableSorting: true,
    Cell: ({ renderedCellValue }: { renderedCellValue: any }) => (
     <Chip
      //   variant="outlined"
      color={
       renderedCellValue === 1
        ? "error"
        : renderedCellValue === 2
        ? "warning"
        : "success"
      }
      sx={{
       minWidth: 80,
       borderWidth: "2px",
       borderStyle: "solid",
       "& .MuiChip-label": {
        fontWeight: 600,
       },
       "&.MuiChip-colorWarning": {
        bgcolor: yellow[300],
        borderColor: yellow[600],
        color: yellow[900],
       },
       "&.MuiChip-colorError": {
        bgcolor: red[100],
        borderColor: red[400],
        color: red[900],
       },
       "&.MuiChip-colorSuccess": {
        bgcolor: green[100],
        borderColor: green[400],
        color: green[900],
       },
      }}
      label={
       renderedCellValue === 1
        ? "Belum"
        : renderedCellValue === 2
        ? "Proses"
        : "Sudah"
      }
     />
    ),
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
  //   ...renderTopToolbar,
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
      //   deleteClick={handleModalOpenDelete}
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
     chipKp
     //  chooseKonteks
     //  chooseRo
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
