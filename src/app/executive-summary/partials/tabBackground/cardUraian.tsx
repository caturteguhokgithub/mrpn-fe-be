import React from "react";
import { Button, DialogActions } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormUraian from "./form-uraian";
import TableUraian from "./table-uraian";

export default function CardUraian({ project }: { project: string }) {
 const [modalOpenUraian, setModalOpenUraian] = React.useState(false);

 const handleModalOpenUraian = () => {
  setModalOpenUraian(true);
 };

 const handleModalClose = () => {
  setModalOpenUraian(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Uraian Risiko Strategis"
   addButton={
    <AddButton
     filled
     small
     title="Tambah Uraian"
     onclick={handleModalOpenUraian}
    />
   }
  >
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <TableUraian project={project} />
   )}
   <DialogComponent
    dialogOpen={modalOpenUraian}
    dialogClose={handleModalClose}
    title="Tambah Uraian"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Batal
      </Button>
      <Button variant="contained" type="submit">
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormUraian mode="add" />
   </DialogComponent>
  </CardItem>
 );
}
