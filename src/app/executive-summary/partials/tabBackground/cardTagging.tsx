import React from "react";
import { Button, DialogActions } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import DialogComponent from "@/app/components/dialog";
import FormTagging from "./form-tagging";
import TableTagging from "./table-tagging";

export default function CardTagging({ project }: { project: string }) {
 const [modalOpenTag, setModalOpenTag] = React.useState(false);

 const handleModalOpenTag = () => {
  setModalOpenTag(true);
 };

 const handleModalClose = () => {
  setModalOpenTag(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Tagging Atas Kebijakan Lain"
   addButton={
    <AddButton
     filled
     small
     title="Tambah Tagging"
     onclick={handleModalOpenTag}
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
    <TableTagging project={project} />
   )}
   <DialogComponent
    dialogOpen={modalOpenTag}
    dialogClose={handleModalClose}
    title="Tambah Tagging"
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
    <FormTagging mode="add" />
   </DialogComponent>
  </CardItem>
 );
}
