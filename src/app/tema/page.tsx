"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import {
 ToggleButtonGroup,
 Typography,
 alpha,
 Collapse,
 Box,
 Divider,
 Checkbox,
 FormControlLabel,
 FormGroup,
 Button,
 DialogActions,
 Chip,
} from "@mui/material";
import theme from "@/theme";
import { blue, grey, orange } from "@mui/material/colors";
import CustomToggleButton from "@/components/toggleButton";
import AddButton from "../components/buttonAdd";
import DialogComponent from "../components/dialog";
import FormTable from "./partials/form-table";
import SearchKP from "./partials/search";
import useThemes from "./hooks/useTheme";
import LoadingPage from "../components/loadingPage";
import ThemeToggleButton from "../components/toggleButton/theme";
import { usePathname } from "next/navigation";

export default function PageTema({}) {
 const [modalOpenAdd, setModalOpenAdd] = React.useState(false);
 const [modalOpenCollapse, setModalOpenCollapse] = React.useState(false);

 const {
  activeTab,
  listKp,
  handleAlignment,
  listData,
  handleSearchTermUpdate,
  searchTab,
 } = useThemes();

 const handleModalOpenAdd = () => {
  setModalOpenAdd(true);
 };

 const handleModalOpenCollapse = () => {
  setModalOpenCollapse(true);
 };

 const handleModalClose = () => {
  setModalOpenAdd(false);
  setModalOpenCollapse(false);
 };

 const dialogActionFooter = (
  <DialogActions sx={{ p: 2, px: 3 }}>
   <Button onClick={handleModalClose}>Batal</Button>
   <Button
    variant="contained"
    type="submit"
    href="/executive-summary"
    sx={{
     color: "white !important",
    }}
   >
    Simpan
   </Button>
  </DialogActions>
 );

 const isEmpty = false;

 const pathname = usePathname();
 const flagPathnameTheme = [pathname === "/", pathname === "/tema"].includes(
  true
 );

 return (
  <>
   <DashboardLayout>
    <LoadingPage />
    <ContentPage
     //  title="Tema"
     withCard={false}
     addButton={
      <AddButton
       title="Tambah Tema"
       filled
       noMargin
       onclick={handleModalOpenAdd}
      />
     }
    >
     {isEmpty ? (
      <EmptyState
       icon={<IconEmptyPage />}
       title="Halaman Tema Kosong"
       description="Silahkan isi konten halaman ini"
      />
     ) : (
      <>
       {/* <Typography color={grey[600]} fontSize={14} fontStyle="italic">
        Pilih salah satu tema
       </Typography> */}
       {flagPathnameTheme ? null : (
        <Typography color={grey[400]} fontSize={14} fontStyle="italic">
         Pilih salah satu tema
        </Typography>
       )}
       <Box>
        <ToggleButtonGroup
         value={activeTab}
         exclusive
         onChange={handleAlignment}
         aria-label="text alignment"
         sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 2,
          mt: 2,
          button: {
           //  bgcolor: "white",
           transition: "all 800ms ease-in-out",
           span: {
            //   lineHeight: 1.2,
            py: 2,
            height: "100%",
            //   display: "inline-flex",
            //   alignItems: "center",
           },
           "&:hover": {
            //   bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: alpha(theme.palette.secondary.dark, 0.8),
            background: `linear-gradient(135deg, ${alpha(
             theme.palette.primary.main,
             0.3
            )} 100%, rgba(255, 255, 255, 0.2) 100%),url(https://res.cloudinary.com/caturteguh/image/upload/v1715510168/mrpn/bg-button-theme_cxwxph.jpg)`,
            //   backgroundSize: "140%",
            //   backgroundPosition: "-240px -125px",
            backgroundSize: "110%",
            backgroundPosition: "right center",
           },
           "&.Mui-selected": {
            // bgcolor: theme.palette.primary.main,
            // color: "white",
            color: "white",
            background: `linear-gradient(135deg, ${alpha(
             theme.palette.primary.main,
             1
            )} 40%, rgba(255, 255, 255, 0.2) 100%),url(https://res.cloudinary.com/caturteguh/image/upload/v1715510168/mrpn/bg-button-theme_cxwxph.jpg)`,
            backgroundSize: "120%",
            backgroundPosition: "right center",
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
          [theme.breakpoints.down("md")]: {
           gridTemplateColumns: "1fr 1fr",
          },
          [theme.breakpoints.down("sm")]: {
           gridTemplateColumns: "1fr",
          },
         }}
        >
         <ThemeToggleButton
          // code="01.01.02"
          value="penurunan-stunting"
          label="Penurunan Stunting"
          onClick={handleModalOpenCollapse}
         />
         <ThemeToggleButton
          //  code="01.01.03"
          value="penurunan-kemiskinan"
          label="Penurunan Kemiskinan"
          onClick={handleModalOpenCollapse}
         />
         <ThemeToggleButton
          //  code="01.01.04"
          value="percepatan-transisi-energi"
          label="Percepatan Transisi Energi"
          disabled
         />
         <ThemeToggleButton
          //  code="01.01.05"
          value="peningkatan-pariwisata"
          label="Peningkatan Pariwisata"
          disabled
         />
         <ThemeToggleButton
          //  code="01.01.06"
          value="ketahanan-pangan"
          label="Ketahanan Pangan"
          disabled
         />
         <ThemeToggleButton
          //  code="01.01.07"
          value="sistem-persampahan"
          label="Sistem Persampahan"
          disabled
         />
        </ToggleButtonGroup>
       </Box>
       {/* <ToggleButtonGroup
        value={activeTab}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
         display: "grid",
         gridTemplateColumns: "1fr 1fr 1fr",
         gap: 2,
         mt: 2,
         button: {
          span: {
           lineHeight: 1.2,
           py: 2,
           height: "100%",
           display: "inline-flex",
           alignItems: "center",
          },
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
         [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "1fr 1fr",
         },
         [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "1fr",
         },
        }}
       >
        <CustomToggleButton
         //  code="01.01.02"
         value="penurunan-stunting"
         label="Penurunan Stunting"
        />
        <CustomToggleButton
         //  code="01.01.03"
         value="penurunan-kemiskinan"
         label="Penurunan Kemiskinan"
        />
        <CustomToggleButton
         //  code="01.01.04"
         value="percepatan-transisi-energi"
         label="Percepatan Transisi Energi"
         disabled
        />
        <CustomToggleButton
         //  code="01.01.05"
         value="peningkatan-pariwisata"
         label="Peningkatan Pariwisata"
         disabled
        />
        <CustomToggleButton
         //  code="01.01.06"
         value="ketahanan-pangan"
         label="Ketahanan Pangan"
         disabled
        />
        <CustomToggleButton
         //  code="01.01.07"
         value="sistem-persampahan"
         label="Sistem Persampahan"
         disabled
        />
       </ToggleButtonGroup> */}
       {/* <Collapse in={activeTab === "penurunan-stunting"}>
        <SearchKP
         activeTab="penurunan-stunting"
         listData={listData}
         handleSearchTermUpdate={handleSearchTermUpdate}
         searchTerm={searchTab}
        />
        <Button
         variant="contained"
         sx={{
          minWidth: 160,
          mt: 2,
          borderRadius: 50,
          color: "white !important",
         }}
         href="/executive-summary"
        >
         Simpan
        </Button>
       </Collapse> 
       <Collapse in={activeTab === "penurunan-kemiskinan"}>
        <SearchKP
         activeTab="penurunan-kemiskinan"
         listData={listData}
         handleSearchTermUpdate={handleSearchTermUpdate}
         searchTerm={searchTab}
        />
        <Button
         variant="contained"
         sx={{
          minWidth: 160,
          mt: 2,
          borderRadius: 50,
          color: "white !important",
         }}
         href="/executive-summary"
        >
         Simpan
        </Button>
       </Collapse> */}
      </>
     )}
    </ContentPage>
   </DashboardLayout>
   <DialogComponent
    width={1000}
    dialogOpen={modalOpenAdd}
    dialogClose={handleModalClose}
    title="Tambah Tema"
    dialogFooter={dialogActionFooter}
   >
    <FormTable />
   </DialogComponent>
   <DialogComponent
    noDivider={true}
    width={1000}
    dialogOpen={modalOpenCollapse}
    dialogClose={handleModalClose}
    dialogFooter={dialogActionFooter}
   >
    <SearchKP
     activeTab={activeTab}
     listData={listData}
     handleSearchTermUpdate={handleSearchTermUpdate}
     searchTerm={searchTab}
    />
   </DialogComponent>
  </>
 );
}
