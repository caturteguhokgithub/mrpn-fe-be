import ContentPage from "@/app/components/contents";
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
 Stack,
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
import DateRangePicker from "@/app/components/dateRange";

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
 const [valueLocation, setValueLocation] = React.useState<string | null>("");

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
    chipKp
    breadcrumb={
     <Breadcrumbs aria-label="breadcrumb" sx={{ lineHeight: 1 }}>
      <Typography fontSize="12px">Penetapan Konteks</Typography>
      <Link href="/penetapan-konteks/konteks-strategis">
       <Typography fontSize="12px">Konteks Strategis</Typography>
      </Link>
     </Breadcrumbs>
    }
    sxCard={{
     marginTop: 0,
    }}
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
       {mode === "add" || mode === "edit" ? (
        <DateRangePicker placeholder="Pilih periode penerapan" />
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
          // value={valueLocation}
          // onChange={(event: any, newValue: string | null) => {
          //  setValueLocation(newValue);
          // }}
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
    <TableStakeholder mode={mode} project="1" />
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
