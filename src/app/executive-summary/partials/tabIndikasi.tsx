import React from "react";
import { Button, DialogActions, Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableIndication from "./tabIndication/table";
import DialogComponent from "@/app/components/dialog";
import FormSwot from "./tabBackground/form-swot";
import AddButton from "@/app/components/buttonAdd";
import FormIndication from "./tabIndication/form";

export default function TabIndikasi({ project }: { project: string }) {
 const [modalOpen, setModalOpen] = React.useState(false);

 const handleModalOpen = () => {
  setModalOpen(true);
 };

 const handleModalClose = () => {
  setModalOpen(false);
 };

 const isEmpty = false;

 return (
  <>
   <Stack gap={1}>
    <CardItem
     title="Indikasi Risiko Strategis"
     addButton={
      <AddButton
       filled
       small
       title="Tambah Indikasi"
       onclick={handleModalOpen}
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
      <TableIndication project={project} />
     )}
    </CardItem>
   </Stack>
   <DialogComponent
    dialogOpen={modalOpen}
    dialogClose={handleModalClose}
    title="Ubah indikasi risiko strategis"
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
    <FormIndication mode="add" project={project} />
   </DialogComponent>
  </>
 );
}
