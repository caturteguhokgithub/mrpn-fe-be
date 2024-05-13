import React from "react";
import {
 Box,
 Chip,
 FormControl,
 Grid,
 MenuItem,
 Select,
 SelectChangeEvent,
 TextField,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import dynamic from "next/dynamic";

export default function FormTagging({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");
 const [policyName, setPolicyName] = React.useState<string[]>([]);

 const handleChangeMultiSelect = (
  event: SelectChangeEvent<typeof policyName>
 ) => {
  const {
   target: { value },
  } = event;
  setPolicyName(
   // On autofill we get a stringified value.
   typeof value === "string" ? value.split(",") : value
  );
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const policyItem = [
  "Janpres",
  "SDGs",
  "Dekon",
  "DAK",
  "PEN",
  "RPJPN",
  "RPJMN",
  "RKP",
  "Major Project",
  "Nawacita",
 ];

 const selectMultipleTag = (
  <Select
   size="small"
   multiple
   displayEmpty
   inputProps={{ "aria-label": "Without label" }}
   value={policyName}
   onChange={handleChangeMultiSelect}
   renderValue={(selected) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
     {selected.map((value) => (
      <Chip
       key={value}
       label={value}
       sx={{
        height: 28,
        lineHeight: 1,
        borderRadius: "50px",
        px: "4px",
       }}
      />
     ))}
    </Box>
   )}
   MenuProps={{
    PaperProps: {
     style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
     },
    },
   }}
  >
   <MenuItem value="" disabled>
    <Typography fontSize={14} fontStyle="italic">
     Pilih Kode KL
    </Typography>
   </MenuItem>
   {policyItem.map((item) => (
    <MenuItem key={item} value={item}>
     {item}
    </MenuItem>
   ))}
  </Select>
 );

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kebijakan</Typography>
      {mode === "add" ? (
       selectMultipleTag
      ) : mode === "edit" ? (
       selectMultipleTag
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Keterangan</Typography>
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
