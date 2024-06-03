import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 Grid,
 Grow,
 MenuItem,
 Popover,
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
import { listDampak, listKemungkinan } from "@/app/utils/data";
import { id } from "date-fns/locale";
import moment from "moment";
import { DateRange } from "react-date-range";

export default function FormTable({ mode }: { mode?: string }) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
 const [prDropdown, setPrDropdown] = React.useState("");
 const [probabilityAfter, setProbabilityAfter] = React.useState("");
 const [impactAfter, setImpactAfter] = React.useState("");
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

 const handleChangeProbabilityAfter = (event: SelectChangeEvent) => {
  setProbabilityAfter(event.target.value);
 };

 const handleChangeImpactAfter = (event: SelectChangeEvent) => {
  setImpactAfter(event.target.value);
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
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Pemilik Risiko (PJ Sasaran)"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         prDropdown === "1"
          ? "Kementerian Kesehatan"
          : prDropdown === "2"
          ? "Kementerian PUPR"
          : prDropdown === "3"
          ? "Kementerian Perindustrian"
          : "Pemilik Risiko (PJ Sasaran)"
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
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kode Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Kode Risiko"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         prDropdown === "1"
          ? "KR-111.111"
          : prDropdown === "2"
          ? "KR-222.222"
          : prDropdown === "3"
          ? "KR-333.333"
          : "Kode Risiko"
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
    <Grid item lg={6}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kategori Risiko</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Kategori Risiko"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         prDropdown === "1"
          ? "Risiko Lingkungan"
          : prDropdown === "2"
          ? "Risiko Sosial"
          : prDropdown === "3"
          ? "Risiko Geopolitik"
          : prDropdown === "4"
          ? "Risiko Ekonomi"
          : prDropdown === "5"
          ? "Risiko Teknologi"
          : "Kategori Risiko"
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
      <Chip label="Nilai Risiko Sebelum Perlakuan Risiko" size="small" />
     </Divider>
    </Grid>
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Kemungkinan</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Kemungkinan"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         prDropdown === "1"
          ? "Kemungkinan 1"
          : prDropdown === "2"
          ? "Kemungkinan 2"
          : prDropdown === "3"
          ? "Kemungkinan 3"
          : prDropdown === "4"
          ? "Kemungkinan 4"
          : prDropdown === "5"
          ? "Kemungkinan 5"
          : "Kemungkinan"
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
    <Grid item lg={4}>
     <FormControl fullWidth>
      <Typography gutterBottom>Dampak</Typography>
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Dampak"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         prDropdown === "1"
          ? "Dampak 1"
          : prDropdown === "2"
          ? "Dampak 2"
          : prDropdown === "3"
          ? "Dampak 3"
          : prDropdown === "4"
          ? "Dampak 4"
          : prDropdown === "5"
          ? "Dampak 5"
          : "Dampak"
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
         prDropdown === "1"
          ? "Rendah"
          : prDropdown === "2"
          ? "Sedang"
          : prDropdown === "3"
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
      <Chip label="Realisasi Perlakuan Risiko" size="small" />
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
      {mode === "add" || mode === "edit" ? (
       <TextField
        variant="outlined"
        size="small"
        disabled
        placeholder="Tanggal Rencana"
        InputLabelProps={{
         shrink: true,
        }}
        value={
         prDropdown === "1"
          ? "25 Agustus 2026"
          : prDropdown === "2"
          ? "25 Februari 2026"
          : prDropdown === "3"
          ? "25 Mei 2026"
          : prDropdown === "4"
          ? "25 Oktober 2026"
          : prDropdown === "5"
          ? "25 Desember 2026"
          : "Tanggal Rencana"
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
        {listKemungkinan.map((kemungkinanLabel, index) => (
         <MenuItem key={index} value={kemungkinanLabel}>
          {kemungkinanLabel.length >= 35 ? (
           <Tooltip
            title={kemungkinanLabel}
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
             {kemungkinanLabel.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           kemungkinanLabel
          )}
         </MenuItem>
        ))}
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
        </MenuItem>{" "}
        {listDampak.map((kemungkinanLabel, index) => (
         <MenuItem key={index} value={kemungkinanLabel}>
          {kemungkinanLabel.length >= 35 ? (
           <Tooltip
            title={kemungkinanLabel}
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
             {kemungkinanLabel.substring(0, 35) + "..."}
            </Typography>
           </Tooltip>
          ) : (
           kemungkinanLabel
          )}
         </MenuItem>
        ))}
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
