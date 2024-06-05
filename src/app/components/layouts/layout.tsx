"use client"

import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
 Box,
 Collapse,
 Divider,
 Icon,
 Stack,
 Zoom,
 useTheme,
} from "@mui/material";
import Footer from "./footer";
// import Aside from "./aside";
import Header from "./header";
import { grey } from "@mui/material/colors";
import React from "react";
import Image from "next/image";
import { loadCSS } from "fg-loadcss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const Aside = dynamic(() => import("./aside"), { ssr: false });

export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 const pathname = usePathname();
 const theme = useTheme();
 const drawerOpenKey = "drawerOpen";
 const [openNav, setOpenNav] = React.useState(true);
 const [checked, setChecked] = React.useState(
  typeof window !== "undefined"
   ? localStorage.getItem(drawerOpenKey) === "true"
   : false
 );

 const handleChange = () => {
  setChecked((prev) => !prev);
 };

 const handlePathnameChange = useCallback(() => {
  if (openNav) {
   setOpenNav(false);
  }
 }, [openNav]);

 useEffect(
  () => {
   handlePathnameChange();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [pathname]
 );

 useEffect(() => {
  localStorage.setItem(drawerOpenKey, JSON.stringify(checked));
 }, [checked]);

 useEffect(() => {
  const node = loadCSS(
   "https://use.fontawesome.com/releases/v6.5.1/css/all.css"
  );
  return () => {
   node.parentNode!.removeChild(node);
  };
 }, []);

 const flagPathnameTheme = [pathname === "/", pathname === "/tema"].includes(
  true
 );

 const sxMain = {
  borderTopLeftRadius: "50px",
  transition: "all 600ms ease",
  // width: checked ? "calc(100% - 44px)" : "100%",
  [theme.breakpoints.down("md")]: {
   borderTopLeftRadius: 0,
   p: 3,
   maxWidth: "100%",
   overflow: "auto",
  },
  ".table-collapsed": {
   ".MuiTableContainer-root": {
    //  maxWidth: checked ? "calc(100vw - 364px)" : "calc(100vw - 163px)",
    maxWidth: checked ? "calc(100vw - 364px)" : "calc(100vw - 132px)",
    thead: {
     tr: {
      "&:not(:last-of-type)": {
       boxShadow: "none",
       th: {
        "&[colspan='1']": {
         borderBottom: 0,
        },
        "&:not([colspan='1'])": {
         backgroundColor: grey[200],
        },
       },
      },
     },
    },
    ".MuiTableRow-root": {
     boxShadow: "none",
    },
   },
   "&.perlakuan-risiko": {
    ".MuiTableContainer-root": {
     maxWidth: checked ? "calc(100vw - 348px)" : "calc(100vw - 132px)",
    },
   },
  },
 };

 const sxAside = {
  gridArea: "aside",
  //  bgcolor: theme.palette.primary.main,
  bgcolor: theme.palette.secondary.dark,
  width: checked ? 280 : 64,
  transition: "width 600ms ease",
  [theme.breakpoints.down("md")]: {
   display: "none",
  },
 };

 const sxWrapper = {
  display: "grid",
  gridTemplateColumns: checked
   ? "280px 1fr"
   : flagPathnameTheme && !checked
   ? "0 1fr"
   : "64px 1fr",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateAreas: `'aside header' 'aside main' 'aside footer'`,
  height: "100vh",
  transition: "grid-template-columns 600ms ease",
  [theme.breakpoints.down("md")]: {
   gridTemplateColumns: "1fr",
   gridTemplateAreas: `'header' 'main' 'footer'`,
  },
 };

 return (
  <Box sx={sxWrapper}>
   {/* <Box component="aside" sx={sxAside} onMouseOver={handleChange}></Box> */}
   <Box component="aside" sx={sxAside}>
    <Collapse
     orientation="horizontal"
     in={checked}
     collapsedSize={64}
     sx={{
      width: "100%",
      transitionDelay: "300ms",
      ".MuiCollapse-wrapper, .MuiCollapse-wrapperInner": {
       width: "100%",
      },
     }}
    >
     <Aside isExpanded={checked} />
    </Collapse>
   </Box>
   <Box component="header" sx={{ gridArea: "header", p: "20px 0" }}>
    {flagPathnameTheme ? null : (
     <Zoom
      in={!checked}
      style={{
       transitionDelay: "200ms",
      }}
     >
      <Box
       mt={0}
       position="absolute"
       left={25}
       zIndex={999}
       sx={{
        [theme.breakpoints.down("md")]: {
         display: "none",
        },
       }}
      >
       <Image
        width={50}
        height={53}
        src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
        alt="MRPN 2024"
        priority
       />
      </Box>
     </Zoom>
    )}
    <Header />
   </Box>
   <Box
    component="main"
    bgcolor={theme.palette.primary.light}
    gridArea="main"
    p="42px"
    pb="24px"
    position="relative"
    className={checked ? "" : "collapse-active"}
    sx={sxMain}
    // onMouseOver={handleChange}
   >
    <Stack
     borderRadius="50%"
     bgcolor={flagPathnameTheme ? "transparent" : theme.palette.primary.main}
     justifyContent="center"
     alignItems="center"
     position="absolute"
     top={flagPathnameTheme ? "107px" : "42px"}
     left={flagPathnameTheme ? "42px" : "-15px"}
     onClick={handleChange}
     width="22px"
     height="22px"
     border={flagPathnameTheme ? 0 : "5px solid"}
     borderColor={theme.palette.primary.light}
     boxSizing="content-box"
     sx={{
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
       display: "none",
      },
     }}
    >
     {flagPathnameTheme ? (
      <Icon
       baseClassName="fas"
       className={`fa-bars-staggered`}
       sx={{
        fontSize: "20px",
        color: "white",
        // transform: checked ? "rotate(180deg)" : "rotate(0deg)",
        // transition: "all 1s ease",
        // position: "relative",
        // top: checked ? -1 : 0,
        // left: 0,
       }}
      />
     ) : (
      <Icon
       baseClassName="fas"
       className={`fa-chevron-right`}
       sx={{
        fontSize: "12px",
        color: "white",
        transform: checked ? "rotate(180deg)" : "rotate(0deg)",
        transition: "all 1s ease",
        position: "relative",
        top: checked ? -1 : 0,
        left: 0,
       }}
      />
     )}
    </Stack>
    {children}
   </Box>
   <Stack
    component="footer"
    sx={{
     gridArea: "footer",
     bgcolor: theme.palette.primary.light,
     maxWidth: "100%",
    }}
    direction="column"
    justifyContent="center"
    px="42px"
   >
    <Divider variant="middle" sx={{ bgcolor: grey[200], m: 0, width: 160 }} />
    <Footer />
   </Stack>
  </Box>
 );
}
