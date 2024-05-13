import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function DialogComponent({
 title,
 dialogOpen,
 dialogClose,
 children,
 dialogFooter,
 width,
 tableMode,
 headerAction,
 noDivider,
}: {
 title?: React.ReactNode;
 dialogOpen: boolean;
 dialogClose?: () => void;
 children?: React.ReactNode;
 dialogFooter?: React.ReactNode;
 width?: number | string;
 tableMode?: boolean;
 headerAction?: React.ReactNode;
 noDivider?: boolean;
}) {
 return (
  <Dialog
   open={dialogOpen}
   keepMounted
   onClose={dialogClose}
   sx={{
    ".MuiPaper-root": {
     minWidth: width ? width : 800,
     ".quill": {
      height: "calc(100vh - 400px)",
      ".ql-container": {
       height: "calc(100% - 44px)",
      },
     },
    },
   }}
  >
   {title && (
    <DialogTitle
     sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
     }}
    >
     {title}
     {headerAction}
    </DialogTitle>
   )}
   <DialogContent dividers={noDivider} sx={{ p: tableMode ? 0 : "16px 24px" }}>
    {children}
   </DialogContent>
   {dialogFooter}
  </Dialog>
 );
}
