"use client";

import ContentPage from "@/app/components/contents/content";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import EmptyState from "@/app/components/empty";
import { IconEmptyPage } from "@/app/components/icons";
import theme from "@/theme";
import { Stack, Typography, Tooltip, Grow, Chip, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IconFA } from "@/app/components/icons/icon-fa";

export default function PagePelaporanBerkala({}) {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
 };

 const handlePopoverClose = () => {
  setAnchorEl(null);
 };

 const open = Boolean(anchorEl);

 const labelChipRo = "Peningkatan ketersediaan pangan keluarga 1000 HPK";

 return (
  <DashboardLayout>
   <ContentPage title="Pelaporan Berkala" withCard chooseRo triWulan>
    {/* <EmptyState
     icon={<IconEmptyPage />}
     title="Halaman Pelaporan Berkala Kosong"
     description="Silahkan isi konten halaman ini"
    /> */}
    <Stack direction="row" gap={2}>
     <Chip
      variant="outlined"
      label={
       labelChipRo.length >= 40 ? (
        <>
         <Stack direction="row" alignItems="center">
          <Stack
           direction="row"
           bgcolor={grey[800]}
           px={2}
           alignItems="center"
           height="34px"
           sx={{
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
           }}
          >
           <Typography
            fontSize={14}
            color="white"
            fontWeight={600}
            lineHeight={1}
           >
            Rincian Output
           </Typography>
          </Stack>
          <Tooltip title={labelChipRo} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            px={1.5}
            fontSize={14}
            fontWeight={600}
           >
            {labelChipRo.substring(0, 40) + "..."}
           </Typography>
          </Tooltip>
         </Stack>
        </>
       ) : (
        labelChipRo
       )
      }
      sx={{
       height: "34px",
       bgcolor: "white",
       fontWeight: 600,
       lineHeight: 1,
       cursor: "default",

       ".MuiChip-label": {
        px: 0,
       },
      }}
     />
     <Chip
      variant="outlined"
      label={
       <Stack direction="row" alignItems="center">
        <Stack
         direction="row"
         bgcolor={grey[800]}
         px={2}
         alignItems="center"
         height="34px"
         sx={{
          borderTopLeftRadius: 24,
          borderBottomLeftRadius: 24,
         }}
        >
         <Typography
          fontSize={14}
          color="white"
          fontWeight={600}
          lineHeight={1}
         >
          Triwulan 1
         </Typography>
        </Stack>
        <Typography px={1.5} fontSize={14} fontWeight={600}>
         Januari s/d Maret
        </Typography>
       </Stack>
      }
      sx={{
       height: "34px",
       bgcolor: "white",
       fontWeight: 600,
       lineHeight: 1,
       cursor: "default",
       ".MuiChip-label": {
        px: 0,
       },
      }}
     />
     <Button
      variant="contained"
      color="error"
      startIcon={<IconFA name="file-pdf" size={14} />}
     >
      Download Pdf
     </Button>
     <Button
      variant="contained"
      color="success"
      startIcon={<IconFA name="file-excel" size={14} />}
     >
      Download Excel
     </Button>
    </Stack>
   </ContentPage>
  </DashboardLayout>
 );
}
