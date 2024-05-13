import React from "react";
import {
 Typography,
 Stack,
 Button,
 DialogActions,
 MenuItem,
 SelectChangeEvent,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import AddButton from "@/app/components/buttonAdd";
import SelectCustomTheme from "@/app/components/select";
import TableProfilIntervensi from "./table-profil-intervensi";
import FormProfilRoProject from "./form-profil-ro-project";
import TableProfilRoKunci from "./table-profil-ro-kunci";

export default function CardRoKunci({ project }: { project: string }) {
 const [modalOpenProfilRoKunci, setModalOpenProfilRoKunci] =
  React.useState(false);
 const [modalOpenProfilRoKunciProject, setModalOpenProfilRoKunciProject] =
  React.useState(false);
 const [projectMain, setProjectMain] = React.useState("");
 const [projectSupport, setProjectSupport] = React.useState("");

 const handleChangeProjectMain = (event: SelectChangeEvent) => {
  setProjectMain(event.target.value);
 };
 const handleChangeProjectSupport = (event: SelectChangeEvent) => {
  setProjectSupport(event.target.value);
 };

 const handleModalOpenProfilRoKunci = () => {
  setModalOpenProfilRoKunci(true);
 };
 const handleModalOpenProfilRoKunciProject = () => {
  setModalOpenProfilRoKunciProject(true);
 };

 const handleModalClose = () => {
  setModalOpenProfilRoKunci(false);
  setModalOpenProfilRoKunciProject(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Profil Intevensi Kunci"
   addButton={
    <>
     <AddButton
      filled
      small
      title="Tambah Project"
      onclick={handleModalOpenProfilRoKunciProject}
     />
     <AddButton
      filled
      small
      title="Tambah Profil RO"
      onclick={handleModalOpenProfilRoKunci}
     />
    </>
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
    <TableProfilIntervensi project={project} />
   )}
   <DialogComponent
    tableMode
    width={1000}
    dialogOpen={modalOpenProfilRoKunci}
    dialogClose={handleModalClose}
    title="Tambah Profil RO Kunci"
    headerAction={
     <Stack direction="row" gap={1}>
      <SelectCustomTheme
       small
       anchorRight
       value={projectMain}
       onChange={handleChangeProjectMain}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Utama
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Kesehatan
       </MenuItem>
       <MenuItem value="2">Kementerian PUPR</MenuItem>
       <MenuItem value="3">Kementerian Perindustrian</MenuItem>
      </SelectCustomTheme>
      <SelectCustomTheme
       small
       anchorRight
       value={projectSupport}
       onChange={handleChangeProjectSupport}
      >
       <MenuItem value="" disabled>
        <Typography fontSize={14} fontStyle="italic">
         Pilih Entitas Pendukung
        </Typography>
       </MenuItem>
       <MenuItem value="1" defaultChecked>
        Kementerian Pertanian
       </MenuItem>
       <MenuItem value="2">BPOM</MenuItem>
       <MenuItem value="3">Simas</MenuItem>
      </SelectCustomTheme>
     </Stack>
    }
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
    <TableProfilRoKunci />
   </DialogComponent>
   <DialogComponent
    width={1000}
    dialogOpen={modalOpenProfilRoKunciProject}
    dialogClose={handleModalClose}
    title="Tambah Nomenklatur RO/Project"
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
    <FormProfilRoProject mode="add" />
   </DialogComponent>
  </CardItem>
 );
}
