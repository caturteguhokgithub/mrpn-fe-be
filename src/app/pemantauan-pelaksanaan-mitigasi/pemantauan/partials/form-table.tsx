import React from "react";
import {
 Chip,
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
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextareaComponent from "@/app/components/textarea";
import SelectCustomTheme from "@/app/components/select";
import { listPeristiwaRisiko } from "@/app/profil-risiko/perlakuan-risiko/setting";
import { grey } from "@mui/material/colors";
import { riskCategory } from "@/app/profil-risiko/registrasi-risiko/setting";

export default function FormTable({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [prDropdown, setPrDropdown] = React.useState("");
 const [project, setProject] = React.useState("");
 const [probability, setProbability] = React.useState("");
 const [impact, setImpact] = React.useState("");
 const [probabilityAfter, setProbabilityAfter] = React.useState("");
 const [impactAfter, setImpactAfter] = React.useState("");

 const handleChangeProbability = (event: SelectChangeEvent) => {
  setProbability(event.target.value);
 };

 const handleChangeImpact = (event: SelectChangeEvent) => {
  setImpact(event.target.value);
 };

 const handleChangeProbabilityAfter = (event: SelectChangeEvent) => {
  setProbabilityAfter(event.target.value);
 };

 const handleChangeImpactAfter = (event: SelectChangeEvent) => {
  setImpactAfter(event.target.value);
 };

 const handleChangeProject = (event: SelectChangeEvent) => {
  setProject(event.target.value);
 };

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const handleChangePr = (event: SelectChangeEvent) => {
  setPrDropdown(event.target.value);
 };

 const open = Boolean(anchorEl);

 return (
  <>
   <Grid container spacing={2}>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Peristiwa Risiko</Typography>

      {mode === "add" || mode === "edit" ? (
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
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Pemilik Risiko (PJ Sasaran)</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Pemilik Risiko (PJ Sasaran)"
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
      <Typography gutterBottom>Kode Risiko</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Kode Risiko"
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
      <Typography gutterBottom>Kategori Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        value={project}
        onChange={handleChangeProject}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih kategori risiko
         </Typography>
        </MenuItem>
        {riskCategory.map((category, index) => (
         <MenuItem key={index} value={index} defaultChecked>
          {category}
         </MenuItem>
        ))}
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider>
      <Chip label="Nilai Risiko Sebelum Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kemungkinan</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={probability}
        onChange={handleChangeProbability}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih kemungkinan
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Kemungkinan 1
        </MenuItem>
        <MenuItem value="2">Kemungkinan 2</MenuItem>
        <MenuItem value="3">Kemungkinan 3</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Dampak</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={impact}
        onChange={handleChangeImpact}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih dampak
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Dampak 1
        </MenuItem>
        <MenuItem value="2">Dampak 2</MenuItem>
        <MenuItem value="3">Dampak 3</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tingkat Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Tingkat Risiko"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         impact === "1"
          ? "Rendah"
          : impact === "2"
          ? "Sedang"
          : impact === "3"
          ? "Tinggi"
          : "Tingkat Risiko"
        }
        sx={{
         input: {
          WebkitTextFillColor: `${grey[800]} !important`,
          bgcolor: grey[200],
         },
        }}
       />
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
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Realisasi Tindakan Perlakuan Risiko</Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Keterangan"
        placeholder="Realisasi Tindakan Perlakuan Risiko"
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
    {/* <Grid item lg={12}>
     <Divider>
      <Chip label="Nilai Target Risiko Setelah Perlakuan" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kemungkinan</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Kemungkinan"
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
      <Typography gutterBottom>Dampak</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Dampak"
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
      <Typography gutterBottom>Tingkat Risiko</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Tingkat Risiko"
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
    </Grid> */}
    {/* <Grid item lg={12}>
     <Divider />
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>Perlakuan Risiko</Typography>
      {mode === "add" ? (
       <TextField
        variant="outlined"
        size="small"
        placeholder="Perlakuan Risiko"
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
    </Grid> */}
    <Grid item lg={12}>
     <Divider>
      <Chip label="Waktu Rencana dan Realisasi Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tanggal Rencana</Typography>
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
      <Typography gutterBottom>Tanggal Realisasi</Typography>
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
    <Grid item lg={12}>
     <Divider>
      <Chip label="Nilai Risiko Setelah Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kemungkinan</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={probabilityAfter}
        onChange={handleChangeProbabilityAfter}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih kemungkinan
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Kemungkinan 1
        </MenuItem>
        <MenuItem value="2">Kemungkinan 2</MenuItem>
        <MenuItem value="3">Kemungkinan 3</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Dampak</Typography>
      {mode === "add" || mode === "edit" ? (
       <SelectCustomTheme
        small
        defaultStyle
        anchorRight
        value={impactAfter}
        onChange={handleChangeImpactAfter}
        sx={{
         ".MuiSelect-select": {
          minHeight: 0,
         },
        }}
       >
        <MenuItem value="" disabled>
         <Typography fontSize={14} fontStyle="italic">
          Pilih dampak
         </Typography>
        </MenuItem>
        <MenuItem value="1" defaultChecked>
         Dampak 1
        </MenuItem>
        <MenuItem value="2">Dampak 2</MenuItem>
        <MenuItem value="3">Dampak 3</MenuItem>
       </SelectCustomTheme>
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Tingkat Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Tingkat Risiko"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         impactAfter === "1"
          ? "Rendah"
          : impactAfter === "2"
          ? "Sedang"
          : impactAfter === "3"
          ? "Tinggi"
          : "Tingkat Risiko"
        }
        sx={{
         input: {
          WebkitTextFillColor: `${grey[800]} !important`,
          bgcolor: grey[200],
         },
        }}
       />
      ) : (
       <Typography fontWeight={600}>-</Typography>
      )}
     </FormControl>
    </Grid>
    <Grid item lg={12}>
     <Divider />
    </Grid>
    <Grid item lg={12}>
     <FormControl fullWidth>
      <Typography gutterBottom>
       Rencana Perlakuan Risiko yang akan Dilaksanakan pada Periode yang akan
       Datang
      </Typography>
      {mode === "add" ? (
       <TextareaComponent
        label="Keterangan"
        placeholder="Rencana Perlakuan Risiko yang akan Dilaksanakan pada Periode yang akan
        Datang"
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
