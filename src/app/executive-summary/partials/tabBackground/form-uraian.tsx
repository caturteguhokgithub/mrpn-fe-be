import React from "react";
import {
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

export default function FormUraian({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");
 const [valueSelect, setValueSelect] = React.useState("");

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValueSelect(event.target.value);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Jenis Risiko</Typography>
      {mode === "add" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={valueSelect}
        onChange={handleChangeSelect}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih jenis risiko
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Risiko Lingkungan
        </MenuItem>
        <MenuItem value="2">Risiko Sosial</MenuItem>
        <MenuItem value="3">Risiko Geopolitik</MenuItem>
        <MenuItem value="4">Risiko Ekonomi</MenuItem>
        <MenuItem value="5">Risiko Teknologi</MenuItem>
       </SelectCustomTheme>
      ) : mode === "edit" ? (
       <SelectCustomTheme
        defaultStyle
        small
        value={valueSelect}
        onChange={handleChangeSelect}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih jenis risiko
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Risiko Lingkungan
        </MenuItem>
        <MenuItem value="2">Risiko Sosial</MenuItem>
        <MenuItem value="3">Risiko Geopolitik</MenuItem>
        <MenuItem value="4">Risiko Ekonomi</MenuItem>
        <MenuItem value="5">Risiko Teknologi</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Uraian</Typography>
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
