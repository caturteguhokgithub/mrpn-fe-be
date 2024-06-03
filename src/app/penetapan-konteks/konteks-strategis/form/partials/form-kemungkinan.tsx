import React from "react";
import {
 Chip,
 Divider,
 FormControl,
 Grid,
 Grow,
 Icon,
 IconButton,
 MenuItem,
 Paper,
 SelectChangeEvent,
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableRow,
 TextField,
 Tooltip,
 Typography,
} from "@mui/material";
import SelectCustomTheme from "@/app/components/select";
import { grey } from "@mui/material/colors";
import TextareaComponent from "@/app/components/textarea";
import { listLevelKemungkinan } from "@/app/utils/data";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import theme from "@/theme";

export default function FormKemungkinan({ mode }: { mode?: string }) {
 const [value, setValue] = React.useState("");
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const handleChangeSelect = (event: SelectChangeEvent) => {
  setValue(event.target.value);
 };

 return (
  <Paper sx={{ overflowX: "auto", minWidth: "100% !important" }}>
   <Table size="small">
    <TableHead sx={{ bgcolor: theme.palette.primary.light }}>
     <TableRow>
      <TableCell>Level Kemungkinan</TableCell>
      <TableCell>Persentase Kemungkinan Terjadi dalam 1 Periode</TableCell>
      <TableCell>
       Jumlah Frekuensi Kemungkinan Terjadi dalam 1 Periode
      </TableCell>
     </TableRow>
    </TableHead>
    <TableBody>
     <TableRow>
      <TableCell>Kemungkinan 1</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Persentase"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Kemungkinan 2</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Persentase"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Kemungkinan 3</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Persentase"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Kemungkinan 4</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Persentase"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
     <TableRow>
      <TableCell>Kemungkinan 5</TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Persentase"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
      <TableCell>
       <TextField
        variant="outlined"
        size="small"
        placeholder="Jumlah Frekuensi"
        InputLabelProps={{
         shrink: true,
        }}
       />
      </TableCell>
     </TableRow>
    </TableBody>
   </Table>
  </Paper>
 );
}
