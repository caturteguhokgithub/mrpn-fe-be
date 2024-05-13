import React from "react";
import { Button, DialogActions } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import TableDampak from "./table-dampak";
import FormSasaran from "./form-sasaran";

export default function CardCascading({ project }: { project: string }) {
 const [modalOpenSasaran, setModalOpenSasaran] = React.useState(false);

 const handleModalOpenSasaran = () => {
  setModalOpenSasaran(true);
 };

 const handleModalClose = () => {
  setModalOpenSasaran(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Cascading Sasaran, Indikator, Target RO"
   addButton={
    <AddButton
     filled
     small
     title="Tambah Sasaran"
     onclick={handleModalOpenSasaran}
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
    <TableDampak project={project} />
   )}
   <DialogComponent
    dialogOpen={modalOpenSasaran}
    dialogClose={handleModalClose}
    title="Tambah Sasaran"
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
    <FormSasaran mode="add" />
   </DialogComponent>
  </CardItem>
 );
}
