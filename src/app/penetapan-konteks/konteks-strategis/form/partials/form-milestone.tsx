import React, { useContext } from "react";
import {
 FormControl,
 Grid,
 Popover,
 TextField,
 Typography,
} from "@mui/material";
import moment from "moment";
import { DateRange } from "react-date-range";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function FormMilestone({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
 const [state, setState] = React.useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);
 const handleClick = (event: any) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);
 const id = open ? "simple-popover" : undefined;

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography>Program/Kegiatan</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Program/Kegiatan"
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
      <Typography>Sumber Anggaran</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Sumber Anggaran"
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
      <Typography>Penanggung Jawab</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Penanggung Jawab"
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
      <Typography>Waktu Mulai Pekerjaan</Typography>
      {mode === "add" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : mode === "edit" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Waktu Penyelesaian Pekerjaan</Typography>
      {mode === "add" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : mode === "edit" ? (
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         sx={{
          ".MuiInputBase-root": {
           height: 40,
          },
         }}
         format="D MMM YYYY"
        />
       </LocalizationProvider>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
   </Grid>
  </>
 );
}
