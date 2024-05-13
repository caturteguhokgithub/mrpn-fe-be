import React from "react";
import {
 Divider,
 FormControl,
 Grid,
 MenuItem,
 SelectChangeEvent,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import dynamic from "next/dynamic";
import SelectCustomTheme from "@/app/components/select";

export default function FormRoadmap({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");
 const [valueSelect, setValueSelect] = React.useState("");

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
        <MenuItem value="1" defaultChecked>
         2025
        </MenuItem>
        <MenuItem value="2">2026</MenuItem>
        <MenuItem value="3">2027</MenuItem>
        <MenuItem value="4">2028</MenuItem>
        <MenuItem value="5">2029</MenuItem>
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
