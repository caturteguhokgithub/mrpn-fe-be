import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import {
 Autocomplete,
 Box,
 Breadcrumbs,
 Chip,
 Divider,
 FormControl,
 Grid,
 Grow,
 Popover,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
// import TableSasaranPkppr from "./partials/table-sasaran-pkkpr";
import TableSasaran from "./table-sasaran-global";
import TableRincianOutput from "./table-ro";
import TableMilestone from "./table-milestone";
import TableStakeholder from "./table-stakeholder";
import TablePeraturan from "./table-peraturan";
import Link from "next/link";
import TextareaComponent from "@/app/components/textarea";
import { DateRange } from "react-date-range";
import moment from "moment";
import { listSelectKp } from "@/app/executive-summary/data";
import { blue, grey } from "@mui/material/colors";
import MultiSelect from "@/app/components/multiSelect";
import { Option } from "@/app/components/multiSelect";
import DropdownKp, {
 SxAutocomplete,
 SxAutocompleteTextField,
} from "@/app/components/dropdownKp";
import TableKemungkinan from "./table-kriteria-kemungkinan";
import { listKotaKab } from "@/app/utils/kotaKab";
import theme from "@/theme";
import TableDampak from "./table-kriteria-dampak";

export default function FormKonstra({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
 const [state, setState] = React.useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);
 const [anchorElTooltip, setAnchorElTooltip] =
  React.useState<HTMLElement | null>(null);
 const [project, setProject] = React.useState("");

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElTooltip(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorElTooltip(null);
 };

 const handleClick = (event: any) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const openTooltip = Boolean(anchorElTooltip);
 const open = Boolean(anchorEl);
 const id = open ? "simple-popover" : undefined;

 const momentStart = moment.utc(state[0].startDate).format("YYYY");
 const momentEnd = moment.utc(state[0].endDate).format("YYYY");

 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 const nameOfKp = listSelectKp[4].name;

 const handleChangeProject = (value: any) => {
  setProject(value);
 };

 return (
  <DashboardLayout>
   <ContentPage
    title="Formulir Penetapan Konteks"
    withCard
    heightTitleBreadcrumb
    titleChild={
     <>
      {/* <Chip
       color="primary"
       variant="outlined"
       label={
        <Tooltip title={nameOfKp} followCursor TransitionComponent={Grow}>
         <Box
          aria-owns={openTooltip ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
         >
          {nameOfKp.substring(0, 48) + "..."}
         </Box>
        </Tooltip>
       }
       sx={{
        bgcolor: "white",
        fontWeight: 600,
        lineHeight: 1,
        cursor: "default",
       }}
      /> */}
      <DropdownKp handleChangeProject={handleChangeProject} />
     </>
    }
    breadcrumb={
     <Breadcrumbs aria-label="breadcrumb">
      <Typography fontSize="12px">Penetapan Konteks</Typography>
      <Link href="/penetapan-konteks/konteks-strategis">
       <Typography fontSize="12px">Konteks Strategis</Typography>
      </Link>
     </Breadcrumbs>
    }
   >
    <Typography
     component="h2"
     fontWeight="600"
     fontSize="1.1rem"
     textTransform="capitalize"
     mb="2rem"
    >
     Konteks Manajemen Risiko
    </Typography>
    <Grid container spacing={2}>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography gutterBottom>Nama PKPPR</Typography>
       {mode === "add" ? (
        <TextField
         variant="outlined"
         size="small"
         placeholder="Nama PKPPR"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography gutterBottom>Periode Penerapan</Typography>
       {mode === "add" ? (
        <>
         <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
           vertical: "bottom",
           horizontal: "left",
          }}
         >
          <DateRange
           editableDateInputs={true}
           onChange={(item: any) => setState([item.selection])}
           moveRangeOnFirstSelection={false}
           ranges={state}
           months={2}
           direction="horizontal"
           minDate={minDate}
           maxDate={maxDate}
          />
         </Popover>
         <TextField
          onClick={handleClick}
          variant="outlined"
          size="small"
          placeholder="Periode Penerapan"
          InputLabelProps={{
           shrink: true,
          }}
          value={`${moment
           .utc(state[0].startDate)
           .utcOffset(7)
           .format("D MMM YYYY")} - ${moment
           .utc(state[0].endDate)
           .utcOffset(7)
           .format("D MMM YYYY")}`}
         />
        </>
       ) : mode === "edit" ? (
        <>
         <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
           vertical: "bottom",
           horizontal: "left",
          }}
         >
          <DateRange
           editableDateInputs={true}
           onChange={(item: any) => setState([item.selection])}
           moveRangeOnFirstSelection={false}
           ranges={state}
           months={2}
           direction="horizontal"
           minDate={minDate}
           maxDate={maxDate}
          />
         </Popover>
         <TextField
          onClick={handleClick}
          variant="outlined"
          size="small"
          placeholder="Periode Penerapan"
          InputLabelProps={{
           shrink: true,
          }}
          value={`${moment
           .utc(state[0].startDate)
           .utcOffset(7)
           .format("D MMM YYYY")} - ${moment
           .utc(state[0].endDate)
           .utcOffset(7)
           .format("D MMM YYYY")}`}
         />
        </>
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={12}>
      <FormControl fullWidth>
       <Typography gutterBottom>Latar Belakang</Typography>
       {mode === "add" ? (
        <TextareaComponent
         label="Latar Belakang"
         placeholder="Latar Belakang"
        />
       ) : mode === "edit" ? (
        <TextareaComponent
         label="Latar Belakang"
         placeholder="Latar Belakang"
         value="-"
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
    <TableSasaran mode={mode} />
    {/* <Divider sx={{ my: 3 }} />
    <TableSasaran variant="PN" />
    <Divider sx={{ my: 3 }} />
    <TableSasaranPkppr /> */}
    <Divider sx={{ my: 3 }} />
    <Grid container spacing={2}>
     <Grid item lg={12}>
      <FormControl fullWidth>
       <Typography gutterBottom>Ruang Lingkup</Typography>
       {mode === "add" ? (
        <TextareaComponent label="Ruang Lingkup" placeholder="Ruang Lingkup" />
       ) : mode === "edit" ? (
        <TextareaComponent
         label="Ruang Lingkup"
         placeholder="Ruang Lingkup"
         value="-"
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography gutterBottom>Lokasi</Typography>
       {mode === "add" ? (
        <>
         <Autocomplete
          multiple
          size="small"
          options={listKotaKab}
          getOptionLabel={(option) => option.name}
          // defaultValue={[listKotaKab[13]]}
          renderInput={(params) => (
           <TextField
            {...params}
            InputLabelProps={{
             shrink: true,
            }}
            placeholder="Pilih kota/kabupaten"
            sx={SxAutocompleteTextField}
           />
          )}
          sx={{
           ...SxAutocomplete,
           ".MuiInputBase-root": {
            borderRadius: 1,
           },
          }}
         />
         {/* <MultiSelect defaultValue={[10, 20]}>
          <Option value={10}>Ten</Option>
          <Option value={20}>Twenty</Option>
          <Option value={30}>Thirty</Option>
          <Option value={40}>Forty</Option>
          <Option value={50}>Fifty</Option>
         </MultiSelect> */}
        </>
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
     <Grid item lg={6}>
      <FormControl fullWidth>
       <Typography gutterBottom>Tahun Anggaran</Typography>
       {mode === "add" ? (
        <TextField
         disabled
         variant="outlined"
         size="small"
         placeholder="Tahun Anggaran"
         InputLabelProps={{
          shrink: true,
         }}
         value={
          moment(momentStart).isSame(momentEnd)
           ? moment.utc(state[0].startDate).format("YYYY")
           : `${moment.utc(state[0].startDate).format("YYYY")} - ${moment
              .utc(state[0].endDate)
              .format("YYYY")}`
         }
         sx={{
          ".Mui-disabled": {
           bgcolor: grey[200],
           color: grey[900],
           WebkitTextFillColor: grey[900],
          },
         }}
        />
       ) : mode === "edit" ? (
        <TextField
         variant="outlined"
         size="small"
         value="-"
         InputLabelProps={{
          shrink: true,
         }}
        />
       ) : (
        <Typography fontWeight={600}>-</Typography>
       )}
      </FormControl>
     </Grid>
    </Grid>
    <Divider sx={{ my: 3 }} />
    <TableRincianOutput mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableMilestone mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableStakeholder mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TablePeraturan mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableKemungkinan mode={mode} />
    <Divider sx={{ my: 3 }} />
    <TableDampak mode={mode} />
   </ContentPage>
  </DashboardLayout>
 );
}
