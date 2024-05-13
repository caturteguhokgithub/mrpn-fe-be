import React from "react";
import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import AddButton from "@/app/components/buttonAdd";
import TableDampak from "./tabProfil/table-dampak";
import dynamic from "next/dynamic";

export default function TabDampak({}) {
 const [modalOpen, setModalOpen] = React.useState(false);
 const [value, setValue] = React.useState("");

 const handleModalOpen = () => {
  setModalOpen(true);
 };
 const handleModalClose = () => {
  setModalOpen(false);
 };
 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <>
   <Stack gap={1}>
    <CardItem
     title="Dampak Proyek"
     addButton={<AddButton filled small title="Tambah Dampak Proyek" />}
    >
     {isEmpty ? (
      <EmptyState
       dense
       icon={<IconEmptyData width={100} />}
       title="Data Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <TableDampak />
     )}
    </CardItem>
    <CardItem title="Project Roadmap" setting>
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    </CardItem>
    <CardItem
     title="Catatan PJ KP"
     setting
     settingEditOnclick={handleModalOpen}
    >
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    </CardItem>
   </Stack>
   <Dialog
    open={modalOpen}
    keepMounted
    onClose={handleModalClose}
    sx={{
     ".MuiPaper-root": {
      minWidth: 800,
      ".quill": {
       height: "calc(100vh - 400px)",
       ".ql-container": {
        height: "calc(100% - 44px)",
       },
      },
     },
    }}
   >
    <DialogTitle>Catatan PJ KP</DialogTitle>
    <DialogContent dividers>
     <ReactQuill theme="snow" value={value} onChange={setValue} />
    </DialogContent>
   </Dialog>
  </>
 );
}
