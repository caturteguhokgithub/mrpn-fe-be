"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Box,
 Button,
 Collapse,
 DialogActions,
 SelectChangeEvent,
 Stack,
 ToggleButtonGroup,
 Typography,
 alpha,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import theme from "@/theme";
import CustomToggleButton from "@/app/components/toggleButton";
import DialogComponent from "@/app/components/dialog";

const LabelRadio = ({
 heading,
 description,
}: {
 heading: string;
 description: any;
}) => {
 return (
  <Stack direction="column" justifyContent="flex-start">
   <Typography
    component="h2"
    fontSize="18px"
    fontWeight={600}
    textTransform="none"
   >
    {heading}
   </Typography>
   <Typography
    component="p"
    color={grey[700]}
    textTransform="none"
    fontSize={15}
    mt={1}
   >
    {description}
   </Typography>
  </Stack>
 );
};

export default function PageSeleraRisiko({}) {
 const [value, setValue] = React.useState("");
 const [valueTheme, setValueTheme] = React.useState<string | null>("");
 const [project, setProject] = React.useState("");
 const [modalOpenSave, setModalOpenSave] = React.useState(false);

 const handleModalOpenSave = () => {
  setModalOpenSave(true);
 };
 const handleModalClose = () => {
  setModalOpenSave(false);
  setValueTheme("");
 };

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handleAlignment = (
  event: React.MouseEvent<HTMLElement>,
  newAlignment: string | null
 ) => {
  setValueTheme(newAlignment);
 };

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue((event.target as HTMLInputElement).value);
 };

 const saveButton = (
  <Button
   variant="contained"
   onClick={handleModalOpenSave}
   sx={{
    minWidth: 160,
    mt: 2,
    borderRadius: 50,
    color: "white !important",
   }}
  >
   Simpan
  </Button>
 );

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Selera Risiko"
     withCard
     chooseProject
     project={project}
     handleChangeProject={handleChangeProject}
    >
     <Box mb={2} p={2} bgcolor={theme.palette.primary.light} borderRadius={3}>
      <Typography component="p">
       Selera risiko adalah jenis/jumlah (nilai absolut) dari risiko yang siap
       diambil dalam proses pencapaian sasaran PKPPR, dengan pilihan sebagai
       berikut.
      </Typography>
     </Box>
     <Typography color={grey[600]} fontSize={14} fontStyle="italic">
      Pilih salah satu nilai untuk melihat hasil
     </Typography>
     <ToggleButtonGroup
      value={valueTheme}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
       display: "grid",
       gridTemplateColumns: "1fr 1fr 1fr 1fr",
       gap: 2,
       mt: 2,
       button: {
        "&:hover": {
         bgcolor: alpha(theme.palette.primary.main, 0.1),
        },
        "&.Mui-selected": {
         bgcolor: theme.palette.primary.main,
         color: "white",
         ".MuiBox-root": {
          bgcolor: theme.palette.primary.main,
          color: "white",
          borderRight: "1px solid white",
         },
         "&:hover": {
          bgcolor: theme.palette.primary.main,
          color: "white",
         },
        },
       },
      }}
     >
      <CustomToggleButton
       variant="danger"
       code="Nilai"
       value="1"
       label="1 - 3"
      />
      <CustomToggleButton
       variant="warning"
       code="Nilai"
       value="2"
       label="4 - 5"
      />
      <CustomToggleButton
       variant="success"
       code="Nilai"
       value="3"
       label="6 - 7"
      />
      <CustomToggleButton
       variant="primary"
       code="Nilai"
       value="4"
       label="8 - 9"
      />
     </ToggleButtonGroup>
     <Collapse in={valueTheme === "1"}>
      <Box mt={2}>
       <LabelRadio
        heading="Tidak memberikan toleransi (Nilai: 1-3)"
        description="Sangat berhati-hati dalam mengambil risiko dan lebih memilih menjaga
        stabilitas dan konsistensi dalam operasi bisnis"
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "2"}>
      <Box mt={2}>
       <LabelRadio
        heading="KONSERVATIF (Nilai: 4-5)"
        description={
         <>
          <Box component="p">
           Berhati-hati dalam mengambil risiko, dengan memilih beberapa risiko
           yang terkendali tetapi tetap memprioritaskan kestabilan kegiatan.
          </Box>
          <Box component="p">
           Keputusan didasarkan pada upaya untuk melindungi nilai dari risiko
           besar yang tidak terduga, termasuk di dalamnya menghindari paparan
           terhadap fluktuasi/kondisi global/eksternal yang signifikan serta
           dapat menanggung beban yang kecil.
          </Box>
         </>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "3"}>
      <Box mt={2}>
       <LabelRadio
        heading="MODERAT (Nilai: 6-7)"
        description={
         <>
          <Box component="p">
           Bersedia mengambil risiko dalam batas tertentu untuk mencapai
           manfaat, tetapi tetap memperhatikan perlindungan terhadap kerugian
           besar.
          </Box>
          <Box component="p">
           Keputusan mempertimbangkan peluang pertumbuhan dan dampak risiko
           secara bersamaan dan dapat menanggung beban sedang.
          </Box>
         </>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "4"}>
      <Box mt={2}>
       <LabelRadio
        heading="AGRESIF (Nilai: 8-9)"
        description={
         <>
          <Box component="p">
           Secara aktif menerapkan strategi yang melibatkan pengelolaan risiko
           sebagai bagian integral dari rencana kegiatan, mengambil risiko lebih
           tinggi dalam rangka mencapai peluang dan inovasi yang lebih besar.
          </Box>
          <Box component="p">
           Keputusan didasarkan pada analisis risiko dan pengembalian investasi
           jangka panjang serta dapat menanggung beban yang besar.
          </Box>
         </>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    noDivider={false}
    width={300}
    dialogOpen={modalOpenSave}
    dialogClose={handleModalClose}
    title="Simpan Data"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Keluar
      </Button>
     </DialogActions>
    }
   >
    Data Selera Risiko sudah tersimpan
   </DialogComponent>
  </>
 );
}
