import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 FormControlLabel,
 Grid,
 Grow,
 MenuItem,
 Popover,
 Radio,
 RadioGroup,
 SelectChangeEvent,
 Stack,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import moment from "moment";
import { DateRange } from "react-date-range";
import SelectCustomTheme from "@/app/components/select";
import { grey } from "@mui/material/colors";
import { listPeristiwaRisiko } from "../setting";
import { IconFA } from "@/app/components/icons/icon-fa";

export default function FormTable({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [state, setState] = React.useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);
 const [prDropdown, setPrDropdown] = React.useState("");

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const handleChangePr = (event: SelectChangeEvent) => {
  setPrDropdown(event.target.value);
 };
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
      <Typography gutterBottom>Peristiwa Risiko</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        defaultStyle
        small
        anchorRight
        value={prDropdown}
        onChange={handleChangePr}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih peristiwa risiko
         </Typography>
        </MenuItem>
        {listPeristiwaRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.label.length >= 35 ? (
           <Tooltip
            title={prLabel.label}
            followCursor
            TransitionComponent={Grow}
           >
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {prLabel.label.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           prLabel.label
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : mode === "edit" ? (
       <SelectCustomTheme
        rounded
        small
        anchorRight
        value={prDropdown}
        onChange={handleChangePr}
       >
        <MenuItem value="" disabled>
         <Typography
          fontSize={14}
          fontStyle="italic"
          color={grey[600]}
          fontWeight={600}
         >
          Pilih peristiwa risiko
         </Typography>
        </MenuItem>
        {listPeristiwaRisiko.map((prLabel) => (
         <MenuItem key={prLabel.id} value={prLabel.value}>
          {prLabel.label.length >= 35 ? (
           <Tooltip
            title={prLabel.label}
            followCursor
            TransitionComponent={Grow}
           >
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {prLabel.label.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           prLabel.label
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Pengendalian yang ada</Typography>
      <Stack fontWeight={600} height="40px" direction="row" alignItems="center">
       {prDropdown === "1" ? (
        <Chip
         variant="outlined"
         color="error"
         icon={<IconFA name="close" size={16} />}
         label="Tidak"
         sx={{ px: 1 }}
        />
       ) : prDropdown === "2" ? (
        <Chip
         variant="outlined"
         color="success"
         icon={<IconFA name="check" size={16} />}
         label="Ada"
         sx={{ px: 1 }}
        />
       ) : prDropdown === "3" ? (
        <Chip
         variant="outlined"
         color="success"
         icon={<IconFA name="check" size={16} />}
         label="Ada"
         sx={{ px: 1 }}
        />
       ) : prDropdown === "4" ? (
        <Chip
         variant="outlined"
         color="error"
         icon={<IconFA name="close" size={16} />}
         label="Tidak"
         sx={{ px: 1 }}
        />
       ) : (
        "-"
       )}
      </Stack>
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Deskripsi Rencana Mitigasi</Typography>
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
      <Typography gutterBottom>Waktu Rencana Mitigasi</Typography>
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
      <Typography gutterBottom>Penanggung Jawab</Typography>
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
