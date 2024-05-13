import React from "react";
import {
 Dialog,
 DialogContent,
 DialogTitle,
 IconButton,
 Typography,
} from "@mui/material";
import { IconFA } from "@/app/components/icons/icon-fa";
import TablePerlakuan from "./table-perlakuan-risiko";

export default function ModalAction({
 modalOpen,
 handleModalClose,
}: {
 modalOpen: boolean;
 handleModalClose: () => void;
}) {
 return (
  <Dialog
   open={modalOpen}
   keepMounted
   onClose={handleModalClose}
   sx={{
    ".MuiPaper-root": {
     minWidth: 800,
     ".quill": {
      height: "calc(100vh - 400px)",
      ".ql-container": {
       height: "calc(100% - 44px)",
      },
     },
    },
   }}
  >
   <DialogTitle
    sx={{
     display: "flex",
     alignItems: "center",
     justifyContent: "space-between",
    }}
   >
    <Typography component="h3" fontWeight={600} fontSize={16}>
     Perlakuan Risiko
    </Typography>
    <IconButton onClick={handleModalClose}>
     <IconFA size={16} name="close" />
    </IconButton>
   </DialogTitle>
   <DialogContent dividers sx={{ p: 0 }}>
    <TablePerlakuan />
   </DialogContent>
  </Dialog>
 );
}
