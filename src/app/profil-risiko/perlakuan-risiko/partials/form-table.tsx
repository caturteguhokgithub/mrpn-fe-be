import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Popover,
 Radio,
 RadioGroup,
 TextField,
 Typography,
} from "@mui/material";
import moment from "moment";
import { DateRange } from "react-date-range";

export default function FormTable({ mode }: { mode?: string }) {
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

 const currentDate = new Date();

 const minDate = new Date();
 const maxDate = new Date();

 minDate.setFullYear(currentDate.getFullYear() - 10);
 maxDate.setFullYear(currentDate.getFullYear() + 20);

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography>Peristiwa Risiko</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Peristiwa Risiko"
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
      <Typography>Pengendalian yang ada</Typography>
      {mode === "add" ? (
       <RadioGroup row>
        <FormControlLabel value="ada" control={<Radio />} label="Ada" />
        <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
       </RadioGroup>
      ) : mode === "edit" ? (
       <RadioGroup row>
        <FormControlLabel value="ada" control={<Radio />} label="Ada" />
        <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
       </RadioGroup>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography>Deskripsi Rencana Mitigasi</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Deskripsi Rencana Mitigasi"
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
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography>Waktu Rencana Mitigasi</Typography>
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
         placeholder="Waktu Rencana Mitigasi"
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
    <Grid item lg={4}>
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
   </Grid>
  </>
 );
}
