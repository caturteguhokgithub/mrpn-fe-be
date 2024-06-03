import React from "react";
import {
 Divider,
 FormControl,
 Grid,
 Grow,
 MenuItem,
 SelectChangeEvent,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import dynamic from "next/dynamic";
import SelectCustomTheme from "@/app/components/select";
import { listTahun } from "@/app/utils/data";

export default function FormRoadmap({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");
 const [valueSelect, setValueSelect] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValueSelect(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tahun</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={valueSelect}
        onChange={handleChangeSelect}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih tahun
         </Typography>
        </MenuItem>
        {listTahun.map((tahunLabel, index) => (
         <MenuItem key={index} value={tahunLabel}>
          {tahunLabel.length >= 35 ? (
           <Tooltip title={tahunLabel} followCursor TransitionComponent={Grow}>
            <Typography
             aria-owns={open ? "mouse-over-popover" : undefined}
             aria-haspopup="true"
             onMouseEnter={handlePopoverOpen}
             onMouseLeave={handlePopoverClose}
             sx={{ fontSize: 14 }}
            >
             {tahunLabel.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           tahunLabel
          )}
         </MenuItem>
        ))}
       </SelectCustomTheme>
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
      <Typography gutterBottom>Output</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Output"
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
     <FormControl fullWidth sx={{ mb: 3 }}>
      <Typography gutterBottom>RO Pendukung</Typography>
      {mode === "add" ? (
       <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ maxHeight: "300px" }}
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Keterangan"
        placeholder="Keterangan"
        value="-"
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Catatan Lain</Typography>
      {mode === "add" ? (
       <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ maxHeight: "300px" }}
       />
      ) : mode === "edit" ? (
       <TextareaComponent
        label="Keterangan"
        placeholder="Keterangan"
        value="-"
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
