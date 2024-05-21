import React from "react";
import { usePathname } from "next/navigation";
import { Typography, Box, Stack, Collapse } from "@mui/material";
import Image from "next/image";
import { MenuItem } from "./partials/menu";
import { MenuGroup } from "./partials/menu-group";
import { SubmenuItem } from "./partials/submenu";
import {
 IconAnalisis,
 IconDashboard,
 IconEvaluasi,
 IconExecutive,
 IconKeluar,
 IconManajemen,
 IconPemantauan,
 IconPenetapan,
 IconProfil,
} from "../icons";
import { IconFA } from "../icons/icon-fa";

export default function Aside({
 isExpanded,
 isMobile,
}: {
 isExpanded?: boolean;
 isMobile?: boolean;
}) {
 const CompanyIcon = (
  <Stack
   width="100%"
   height="120px"
   alignItems="center"
   justifyContent="center"
   direction="row"
  >
   <Collapse in={isExpanded}>
    <Stack
     width="100%"
     height="120px"
     alignItems="center"
     justifyContent="center"
     direction="row"
     gap={2}
    >
     <Box
      sx={{
       transition: "all 300ms ease",
      }}
     >
      <Image
       width={64}
       height={68}
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
       alt="MRPN 2024"
       priority
      />
     </Box>
     <Typography
      color="white"
      fontSize="14px"
      fontWeight={600}
      variant="caption"
      textTransform="uppercase"
      lineHeight={1.3}
      maxWidth="136px"
     >
      Manajemen Risiko Pembangunan Nasional
     </Typography>
    </Stack>
   </Collapse>
  </Stack>
 );

 const subMenuKonteks = "penetapan-konteks";
 const subMenuProfil = "profil-risiko";
 const subMenuMitigasi = "pemantauan-pelaksanaan-mitigasi";

 const Sidemenu = (
  <Stack
   direction="column"
   justifyContent="space-between"
   height={isMobile ? "calc(100% + 16px)" : "calc(100% - 120px)"}
   maxHeight={isMobile ? "calc(100% + 16px)" : "calc(100% - 120px)"}
   overflow="auto"
   sx={{
    pt: isMobile ? 3 : 0,
    "&::-webkit-scrollbar": {
     width: "3px",
    },
   }}
  >
   <Stack gap="40px" direction="column">
    <MenuGroup isExpanded={isExpanded} label="menu">
     <Stack direction="column" gap={1}>
      {/* <MenuItem
       isExpanded={isExpanded}
       label="dashboard"
       icon={<IconDashboard />}
       url=""
      /> */}
      <MenuItem
       isExpanded={isExpanded}
       label="Tema"
       icon={<IconFA name="palette" size={16} />}
       url="tema"
      />
      <MenuItem
       isExpanded={isExpanded}
       label="Executive Summary"
       icon={<IconExecutive />}
       url="executive-summary"
      />
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Penetapan"
       icon={<IconPenetapan />}
       url={subMenuKonteks}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuKonteks)
         : false
       }
      >
       <SubmenuItem
        label="Konteks Strategis"
        url={subMenuKonteks}
        urlLv2="konteks-strategis"
       />
       {/* Pedoman 8 di submenu selera */}
       <SubmenuItem
        label="Selera Risiko"
        url={subMenuKonteks}
        urlLv2="selera-risiko"
       />
      </MenuItem>
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Profil Risiko"
       icon={<IconProfil />}
       url={subMenuProfil}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuProfil)
         : false
       }
      >
       <SubmenuItem
        label="Registrasi Risiko"
        url={subMenuProfil}
        urlLv2="registrasi-risiko"
       />
       {/* Pedoman 6 & 7 di submenu analisis */}
       <SubmenuItem
        label="Analisis Risiko"
        url={subMenuProfil}
        urlLv2="analisis-risiko"
       />
       <SubmenuItem
        label="Evaluasi Risiko"
        url={subMenuProfil}
        urlLv2="evaluasi-risiko"
       />
       <SubmenuItem
        label="Perlakuan Risiko"
        url={subMenuProfil}
        urlLv2="perlakuan-risiko"
       />
      </MenuItem>
      <MenuItem
       hasChild
       isExpanded={isExpanded}
       label="Pemantauan MRPN"
       icon={<IconPemantauan />}
       url={subMenuMitigasi}
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes(subMenuMitigasi)
         : false
       }
      >
       <SubmenuItem
        label="Peringatan Dini"
        url={subMenuMitigasi}
        urlLv2="peringatan-dini-saran"
       />
       <SubmenuItem
        label="Pemantauan"
        url={subMenuMitigasi}
        urlLv2="pemantauan"
       />
       <SubmenuItem
        label="Pelaporan Berkala"
        url={subMenuMitigasi}
        urlLv2="pelaporan-berkala"
       />
      </MenuItem>
     </Stack>
    </MenuGroup>
    <MenuGroup isExpanded={isExpanded} label="administrator">
     <Stack direction="column" gap={1}>
      <MenuItem
       isExpanded={isExpanded}
       label="manajemen user"
       icon={<IconManajemen />}
       url="manajemen-user"
       menuParentActive={
        typeof window !== "undefined"
         ? window.location.pathname.includes("manajemen-user")
         : false
       }
      />
     </Stack>
    </MenuGroup>
   </Stack>
   <MenuItem
    isExpanded={isExpanded}
    reflect
    label="keluar sistem"
    icon={<IconKeluar />}
    url="/"
   />
  </Stack>
 );

 return (
  <Box color="white" px="0" height="100vh" pb={4}>
   {isMobile ? null : CompanyIcon}
   {Sidemenu}
  </Box>
 );
}
