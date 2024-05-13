import React from "react";
import {
 Typography,
 MenuItem,
 FormControl,
 Grow,
 Tooltip,
 Autocomplete,
 TextField,
} from "@mui/material";
import { listSelectKp } from "@/app/executive-summary/data";
import theme from "@/theme";
import { grey } from "@mui/material/colors";

const options = ["Option 1", "Option 2"];

export default function DropdownKp({
 project,
 handleChangeProject,
}: {
 project?: any;
 handleChangeProject?: any;
}) {
 const [value, setValue] = React.useState<string | null>("");
 const [inputValue, setInputValue] = React.useState("");

 const optionsListKp = listSelectKp.map((item) => {
  return item["name"];
 });

 return (
  <FormControl size="small">
   <Autocomplete
    size="small"
    value={value}
    onChange={(event: any, newValue: string | null) => {
     setValue(newValue);
    }}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
     setInputValue(newInputValue);

     const optionVal = listSelectKp.find((res: any) => {
      return res.name === newInputValue;
     });

     handleChangeProject(optionVal?.value || "");
    }}
    options={optionsListKp}
    renderInput={(params) => (
     <Tooltip title={value} followCursor TransitionComponent={Grow}>
      <TextField
       {...params}
       InputLabelProps={{
        shrink: true,
       }}
       placeholder="Pilih Kegiatan Pembangunan (KP)"
       sx={{
        "input::-webkit-input-placeholder": {
         //  color: "white",
         color: grey[600],
         opacity: 1,
         fontStyle: "italic",
         //  fontSize: 13,
        },
       }}
      />
     </Tooltip>
    )}
    sx={{
     minWidth: 300,
     color: theme.palette.primary.dark,
     ".MuiInputBase-root": {
      fontWeight: 600,
      fontSize: 14,
      py: 0,
      borderRadius: 6,
      bgcolor: "white",
      //   bgcolor: theme.palette.primary.main,
      [theme.breakpoints.down("md")]: {
       fontSize: 12,
      },
     },
     ".MuiSvgIcon-root": {
      //   fill: "white",
      fill: grey[600],
     },
     [theme.breakpoints.down("md")]: {
      minWidth: 200,
     },
    }}
   />
   {/*  */}
   {/* <SelectCustomTheme
    small
    anchorRight
    value={project}
    onChange={handleChangeProject}
   >
    <MenuItem value="" disabled>
     <Typography fontSize={14} fontStyle="italic">
      Pilih Kegiatan Pembangunan (KP)
     </Typography>
    </MenuItem>
    {listSelectKp.map(({ id, value, nama_kp }) => (
     <MenuItem key={id} value={value}>
      {nama_kp.length >= 48 ? (
       <Tooltip title={nama_kp} followCursor TransitionComponent={Grow}>
        <Typography
         aria-owns={open ? "mouse-over-popover" : undefined}
         aria-haspopup="true"
         onMouseEnter={handlePopoverOpen}
         onMouseLeave={handlePopoverClose}
         sx={{ fontSize: 14 }}
        >
         {nama_kp.substring(0, 48) + "..."}
        </Typography>
       </Tooltip>
      ) : (
       nama_kp
      )}
     </MenuItem>
    ))}
   </SelectCustomTheme> */}
  </FormControl>
 );
}
