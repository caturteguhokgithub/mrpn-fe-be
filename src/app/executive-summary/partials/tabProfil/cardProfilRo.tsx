import React from "react";
import { Button, DialogActions } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormProfilRo from "./form-profil-ro";
import TableProfilOutput from "./table-profil-output";

export default function CardProfilRo({ project }: { project: string }) {
 const [modalOpenProfilRo, setModalOpenProfilRo] = React.useState(false);

 const handleModalOpenProfilRo = () => {
  setModalOpenProfilRo(true);
 };

 const handleModalClose = () => {
  setModalOpenProfilRo(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Profil Rincian Output"
   addButton={
    <AddButton
     filled
     small
     title="Tambah Profil RO"
     onclick={handleModalOpenProfilRo}
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
    <>
     <TableProfilOutput project={project} />
     <DialogComponent
      dialogOpen={modalOpenProfilRo}
      dialogClose={handleModalClose}
      title="Tambah Profil RO"
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
      <FormProfilRo mode="add" />
     </DialogComponent>
    </>
   )}
  </CardItem>
 );
}
