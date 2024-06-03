import React, { Fragment } from "react";
import {
 Autocomplete,
 Chip,
 Divider,
 FormControl,
 Grid,
 IconButton,
 Paper,
 TextField,
 Typography,
} from "@mui/material";
import AddButton from "@/app/components/buttonAdd";
import { IconFA } from "@/app/components/icons/icon-fa";
import {
 SxAutocomplete,
 SxAutocompleteTextField,
} from "@/app/components/dropdownKp";

const ItemKP = ({ full, type }: { full?: boolean; type: string }) => {
 return (
  <>
   <Grid item lg={4}>
    <FormControl fullWidth>
     <Typography gutterBottom>Entitas</Typography>
     <TextField
      variant="outlined"
      size="small"
      placeholder={`Entitas`}
      InputLabelProps={{
       shrink: true,
      }}
     />
    </FormControl>
   </Grid>
   <Grid item lg={full ? 8 : 7}>
    <FormControl fullWidth>
     <Typography gutterBottom>Instansi</Typography>
     <Autocomplete
      multiple
      size="small"
      freeSolo
      options={[]}
      renderInput={(params) => (
       <TextField
        {...params}
        InputLabelProps={{
         shrink: true,
        }}
        placeholder="Tambah instansi"
        sx={SxAutocompleteTextField}
       />
      )}
      renderTags={(value, props) =>
       value.map((option, index) => (
        <Fragment key={index}>
         <Chip size="small" label={option} {...props({ index })} />
        </Fragment>
       ))
      }
      sx={{
       ...SxAutocomplete,
       ".MuiInputBase-root": {
        borderRadius: 1,
       },
      }}
     />
    </FormControl>
   </Grid>
  </>
 );
};

export default function FormTable({ mode }: { mode?: string }) {
 const [itemsPP, setItemPP] = React.useState([{ id: 1 }]);

 const addPP = () => {
  let arr = [...itemsPP];
  if (arr.length >= 10) {
   return;
  } else {
   arr.push({ id: Math.floor(Math.random() * 1000) });
  }
  const newItem = arr;
  setItemPP(newItem);
 };

 const minusPP = (nowId: any) => {
  let arr = [...itemsPP];
  let newArr = arr.filter((val) => {
   if (nowId === val.id) {
    return false;
   } else {
    return true;
   }
  });
  setItemPP(newArr);
 };

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Entitas</Typography>
      <TextField
       variant="outlined"
       size="small"
       placeholder="Entitas"
       InputLabelProps={{
        shrink: true,
       }}
      />
     </FormControl>
    </Grid>
    <Grid item lg={8}>
     <FormControl fullWidth>
      <Typography gutterBottom>Instansi</Typography>
      <Autocomplete
       multiple
       size="small"
       freeSolo
       options={[]}
       renderInput={(params) => (
        <TextField
         {...params}
         InputLabelProps={{
          shrink: true,
         }}
         placeholder="Tambah instansi"
         sx={SxAutocompleteTextField}
        />
       )}
       renderTags={(value, props) =>
        value.map((option, index) => (
         <Fragment key={index}>
          <Chip size="small" label={option} {...props({ index })} />
         </Fragment>
        ))
       }
       sx={{
        ...SxAutocomplete,
        ".MuiInputBase-root": {
         borderRadius: 1,
        },
       }}
      />
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Paper variant="outlined" sx={{ p: 2, minWidth: "0 !important" }}>
      <Grid container spacing={2}>
       <Grid item lg={12}>
        <Divider>
         <Chip label="Tambah entitas" size="small" />
        </Divider>
       </Grid>
       {itemsPP.map((tags: any) => (
        <Fragment key={`${tags.id}`}>
         <ItemKP type="pp" />
         <Grid item lg={1}>
          <FormControl sx={{ mt: "32px" }}>
           <IconButton
            aria-label="delete"
            color="error"
            onClick={() => minusPP(tags.id)}
           >
            <IconFA size={18} name="trash-can" />
           </IconButton>
          </FormControl>
         </Grid>
        </Fragment>
       ))}
      </Grid>
      <FormControl sx={{ mt: 2 }}>
       <AddButton title="Tambah entitas" noMargin onclick={addPP} />
      </FormControl>
     </Paper>
    </Grid>
   </Grid>
  </>
 );
}
