"use client";

import ContentPage from "@/app/components/contents";
import React from "react";
import DashboardLayout from "@/app/components/layouts/layout";
import { Stack, Typography, Tooltip, Grow, Chip, Icon } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddButton from "@/app/components/buttonAdd";

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
   <ContentPage title="Pelaporan" withCard chipKp dateRangeDropdown>
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
          Periode
         </Typography>
        </Stack>
        <Typography px={1.5} fontSize={14} fontWeight={600}>
         Triwulan 1: Januari s/d Maret
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
     <AddButton
      noMargin
      filled
      title="Download PDF & Excel"
      startIcon={
       <Icon
        baseClassName="fas"
        className={`fa-download`}
        sx={{
         fontSize: "12px !important",
        }}
       />
      }
      sx={{ padding: "0 20px", height: 34 }}
     />
    </Stack>
   </ContentPage>
  </DashboardLayout>
 );
}
