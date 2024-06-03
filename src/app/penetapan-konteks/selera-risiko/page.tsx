"use client";

import ContentPage from "@/app/components/contents";
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
 ToggleButton,
 ToggleButtonGroup,
 Typography,
 alpha,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import theme from "@/theme";
import CustomToggleButton from "@/app/components/toggleButton";
import DialogComponent from "@/app/components/dialog";
import TextareaComponent from "@/app/components/textarea";

const LabelRadio = ({
 heading,
 description,
 value,
 rangeValue,
}: {
 heading: string;
 description: any;
 value: string | any;
 rangeValue: string | any;
}) => {
 return (
  <Stack direction="column" justifyContent="flex-start">
   <Typography
    component="h2"
    fontSize="18px"
    fontWeight={600}
    textTransform="none"
   >
    {heading} {value && `(Nilai ${value})`}{" "}
    {rangeValue && `(Rentang Nilai ${rangeValue})`}
   </Typography>
   <Typography
    component="div"
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
 const [userLevel, setUserLevel] = React.useState<string | null>("left");

 const handleUserLevel = (
  event: React.MouseEvent<HTMLElement>,
  newUserLevel: string | null
 ) => {
  setUserLevel(newUserLevel);
 };

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

 const rangeValue = userLevel === "bappenas" ? "3" : "1-6";

 return (
  <>
   <DashboardLayout>
    <ContentPage
     title="Selera Risiko"
     withCard
     chipKp
     //  chipRo
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
     <ToggleButtonGroup
      value={userLevel}
      exclusive
      onChange={handleUserLevel}
      sx={{ mb: 2 }}
     >
      <ToggleButton value="bappenas">User Bappenas</ToggleButton>
      <ToggleButton value="kl">User KL</ToggleButton>
     </ToggleButtonGroup>
     <Typography color={grey[600]} fontSize={14} fontStyle="italic">
      Pilih salah satu untuk memberikan{" "}
      {userLevel === "bappenas" ? "deskripsi" : "nilai"}
     </Typography>
     <ToggleButtonGroup
      value={valueTheme}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
       display: "grid",
       gridTemplateColumns: "1fr 1fr 1fr 1fr",
       [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr 1fr",
       },
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
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="1"
       valueLabel="1-6"
       label="Tidak memberikan toleransi"
       minheight={60}
      />
      <CustomToggleButton
       variant="warning"
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="2"
       valueLabel="7-12"
       label="Konservatif"
       minheight={60}
      />
      <CustomToggleButton
       variant="success"
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="3"
       valueLabel="13-18"
       label="Moderat"
       minheight={60}
      />
      <CustomToggleButton
       variant="primary"
       code={userLevel === "bappenas" ? "Nilai" : null}
       value="4"
       valueLabel="19-25"
       label="Agresif"
       minheight={60}
      />
     </ToggleButtonGroup>
     <Collapse in={valueTheme === "1"}>
      <Box mt={2}>
       <LabelRadio
        heading="Tidak memberikan toleransi"
        rangeValue={userLevel === "bappenas" ? null : "1-6"}
        value={userLevel === "bappenas" ? 3 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <Stack display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
            <FormControl sx={{ mt: 1 }}>
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi tidak memberikan toleransi"
              width="100%"
             />
            </FormControl>
           </Stack>
          ) : (
           <>
            <Stack
             display="grid"
             gridTemplateColumns="repeat(2, 1fr)"
             sx={{
              [theme.breakpoints.down("md")]: {
               gridTemplateColumns: "1fr",
              },
             }}
            >
             <Box component="p">
              Sangat berhati-hati dalam mengambil risiko dan lebih memilih
              menjaga stabilitas dan konsistensi dalam operasi bisnis
             </Box>
            </Stack>
            <Stack display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
             <FormControl sx={{ mt: 1 }}>
              <TextField
               type="number"
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
           </>
          )}
          {/* <Box component="p" maxWidth={800}>
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
          </FormControl> */}
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
        rangeValue={userLevel === "bappenas" ? null : "7-12"}
        value={userLevel === "bappenas" ? 8 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <Stack display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
            <FormControl sx={{ mt: 1 }}>
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi konservatif"
             />
            </FormControl>
           </Stack>
          ) : (
           <>
            <Stack
             display="grid"
             gridTemplateColumns="repeat(2, 1fr)"
             sx={{
              [theme.breakpoints.down("md")]: {
               gridTemplateColumns: "1fr",
              },
             }}
            >
             <Box>
              <Box component="p">
               Berhati-hati dalam mengambil risiko, dengan memilih beberapa
               risiko yang terkendali tetapi tetap memprioritaskan kestabilan
               kegiatan.
              </Box>
              <Box component="p">
               Keputusan didasarkan pada upaya untuk melindungi nilai dari
               risiko besar yang tidak terduga, termasuk di dalamnya menghindari
               paparan terhadap fluktuasi/kondisi global/eksternal yang
               signifikan serta dapat menanggung beban yang kecil.
              </Box>
             </Box>
            </Stack>
            <Stack display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
             <FormControl sx={{ mt: 1 }}>
              <TextField
               type="number"
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
           </>
          )}
          {/* <Box component="p" maxWidth={800}>
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
          </FormControl> */}
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
        rangeValue={userLevel === "bappenas" ? null : "13-18"}
        value={userLevel === "bappenas" ? 15 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <Stack display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
            <FormControl sx={{ mt: 1 }}>
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi moderat"
             />
            </FormControl>
           </Stack>
          ) : (
           <>
            <Stack
             display="grid"
             gridTemplateColumns="repeat(2, 1fr)"
             sx={{
              [theme.breakpoints.down("md")]: {
               gridTemplateColumns: "1fr",
              },
             }}
            >
             <Box>
              <Box component="p">
               Bersedia mengambil risiko dalam batas tertentu untuk mencapai
               manfaat, tetapi tetap memperhatikan perlindungan terhadap
               kerugian besar.
              </Box>
              <Box component="p">
               Keputusan mempertimbangkan peluang pertumbuhan dan dampak risiko
               secara bersamaan dan dapat menanggung beban sedang.
              </Box>
             </Box>
            </Stack>
            <Stack display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
             <FormControl sx={{ mt: 1 }}>
              <TextField
               type="number"
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
           </>
          )}
          {/* <Box component="p" maxWidth={800}>
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
          </FormControl> */}
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
        rangeValue={userLevel === "bappenas" ? null : "19-25"}
        value={userLevel === "bappenas" ? 25 : null}
        description={
         <Stack gap={1}>
          {userLevel === "bappenas" ? (
           <Stack display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
            <FormControl sx={{ mt: 1 }}>
             <TextareaComponent
              label="Deskripsi"
              placeholder="Deskripsi agresif"
             />
            </FormControl>
           </Stack>
          ) : (
           <>
            <Stack
             gridTemplateColumns="repeat(2, 1fr)"
             sx={{
              [theme.breakpoints.down("md")]: {
               gridTemplateColumns: "1fr",
              },
             }}
            >
             <Box>
              <Box component="p">
               Secara aktif menerapkan strategi yang melibatkan pengelolaan
               risiko sebagai bagian integral dari rencana kegiatan, mengambil
               risiko lebih tinggi dalam rangka mencapai peluang dan inovasi
               yang lebih besar.
              </Box>
              <Box component="p">
               Keputusan didasarkan pada analisis risiko dan pengembalian
               investasi jangka panjang serta dapat menanggung beban yang besar.
              </Box>
             </Box>
            </Stack>
            <Stack display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={2}>
             <FormControl sx={{ mt: 1 }}>
              <TextField
               type="number"
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
           </>
          )}
          {/* <Box component="p" maxWidth={800}>
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
          </FormControl> */}
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
