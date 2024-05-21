"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Box,
 Button,
 Collapse,
 DialogActions,
 FormControl,
 SelectChangeEvent,
 Stack,
 TextField,
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
 value,
}: {
 heading: string;
 description: any;
 value: string;
}) => {
 return (
  <Stack direction="column" justifyContent="flex-start">
   <Typography
    component="h2"
    fontSize="18px"
    fontWeight={600}
    textTransform="none"
   >
    {heading} (Nilai: {value})
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
     chipRo
     //  chooseProject

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
      Pilih salah satu untuk memberikan nilai
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
       valueLabel="1-2"
       label="Tidak memberikan toleransi"
      />
      <CustomToggleButton
       variant="warning"
       code="Nilai"
       value="2"
       valueLabel="3-4"
       label="Konservatif"
      />
      <CustomToggleButton
       variant="success"
       code="Nilai"
       value="3"
       valueLabel="5-6"
       label="Moderat"
      />
      <CustomToggleButton
       variant="primary"
       code="Nilai"
       value="4"
       valueLabel="7-9"
       label="Agresif"
      />
     </ToggleButtonGroup>
     <Collapse in={valueTheme === "1"}>
      <Box mt={2}>
       <LabelRadio
        heading="Tidak memberikan toleransi"
        value="1-2"
        description={
         <Stack gap={1}>
          <Box component="p" maxWidth={800}>
           Sangat berhati-hati dalam mengambil risiko dan lebih memilih menjaga
           stabilitas dan konsistensi dalam operasi bisnis
          </Box>
          <FormControl sx={{ maxWidth: 300, mt: 1 }}>
           <TextField
            variant="outlined"
            size="small"
            placeholder="Isi nilai tidak memberikan toleransi"
            InputLabelProps={{
             shrink: true,
            }}
            helperText="Isi dengan angka"
           />
          </FormControl>
         </Stack>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "2"}>
      <Box mt={2}>
       <LabelRadio
        heading="KONSERVATIF"
        value="3-4"
        description={
         <Stack gap={1}>
          <Box component="p" maxWidth={800}>
           Berhati-hati dalam mengambil risiko, dengan memilih beberapa risiko
           yang terkendali tetapi tetap memprioritaskan kestabilan kegiatan.
          </Box>
          <Box component="p" maxWidth={800}>
           Keputusan didasarkan pada upaya untuk melindungi nilai dari risiko
           besar yang tidak terduga, termasuk di dalamnya menghindari paparan
           terhadap fluktuasi/kondisi global/eksternal yang signifikan serta
           dapat menanggung beban yang kecil.
          </Box>
          <FormControl sx={{ maxWidth: 300, mt: 1 }}>
           <TextField
            variant="outlined"
            size="small"
            placeholder="Isi nilai konservatif"
            InputLabelProps={{
             shrink: true,
            }}
            helperText="Isi dengan angka"
           />
          </FormControl>
         </Stack>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "3"}>
      <Box mt={2}>
       <LabelRadio
        heading="MODERAT"
        value="5-6"
        description={
         <Stack gap={1}>
          <Box component="p" maxWidth={800}>
           Bersedia mengambil risiko dalam batas tertentu untuk mencapai
           manfaat, tetapi tetap memperhatikan perlindungan terhadap kerugian
           besar.
          </Box>
          <Box component="p" maxWidth={800}>
           Keputusan mempertimbangkan peluang pertumbuhan dan dampak risiko
           secara bersamaan dan dapat menanggung beban sedang.
          </Box>
          <FormControl sx={{ maxWidth: 300, mt: 1 }}>
           <TextField
            variant="outlined"
            size="small"
            placeholder="Isi nilai moderat"
            InputLabelProps={{
             shrink: true,
            }}
            helperText="Isi dengan angka"
           />
          </FormControl>
         </Stack>
        }
       />
      </Box>
      {saveButton}
     </Collapse>
     <Collapse in={valueTheme === "4"}>
      <Box mt={2}>
       <LabelRadio
        heading="AGRESIF"
        value="7-9"
        description={
         <Stack gap={1}>
          <Box component="p" maxWidth={800}>
           Secara aktif menerapkan strategi yang melibatkan pengelolaan risiko
           sebagai bagian integral dari rencana kegiatan, mengambil risiko lebih
           tinggi dalam rangka mencapai peluang dan inovasi yang lebih besar.
          </Box>
          <Box component="p" maxWidth={800}>
           Keputusan didasarkan pada analisis risiko dan pengembalian investasi
           jangka panjang serta dapat menanggung beban yang besar.
          </Box>
          <FormControl sx={{ maxWidth: 300, mt: 1 }}>
           <TextField
            variant="outlined"
            size="small"
            placeholder="Isi nilai agresif"
            InputLabelProps={{
             shrink: true,
            }}
            helperText="Isi dengan angka"
           />
          </FormControl>
         </Stack>
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
