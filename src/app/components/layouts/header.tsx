import theme from "@/theme";
import { Check } from "@mui/icons-material";
import {
 Avatar,
 Box,
 Button,
 Divider,
 Drawer,
 ListItemIcon,
 ListItemText,
 Menu,
 MenuItem,
 Stack,
 Typography,
} from "@mui/material";
import { orange, red } from "@mui/material/colors";
import React from "react";
import { IconKeluar } from "../icons";
import { IconFA } from "../icons/icon-fa";
import Image from "next/image";
import Aside from "./aside";
import { usePathname } from "next/navigation";

export default function Header({}) {
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 const [openDrawerMobile, setOpenDrawerMobile] = React.useState(false);

 const open = Boolean(anchorEl);
 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };

 const toggleDrawerMobile = (newOpen: boolean) => () => {
  setOpenDrawerMobile(newOpen);
 };

 const pathname = usePathname();
 const flagPathnameTheme = [pathname === "/", pathname === "/tema"].includes(
  true
 );

 return (
  <Box
   sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "white",
    padding: "0 42px",
    pl: "3rem",
    [theme.breakpoints.down("md")]: {
     px: 3,
    },
   }}
  >
   <Stack direction="row" justifyContent="space-between" width="100%">
    <Stack
     direction="column"
     justifyContent="center"
     sx={{
      [theme.breakpoints.down("md")]: {
       flexDirection: "row",
       alignItems: "center",
       gap: 2,
      },
     }}
    >
     {/* <Typography
      component="h1"
      fontWeight="800"
      fontSize="1.25rem"
      lineHeight={1.2}
     >
      MRPN 2024
     </Typography> */}
     {flagPathnameTheme ? null : (
      <>
       <Box
        component="img"
        src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
        alt="MRPN 2024"
        sx={{
         display: "flex",
         alignItems: "center",
         width: "40px",
         [theme.breakpoints.up("md")]: {
          display: "none",
         },
        }}
       >
        {/* <Image
       width={50}
       height={53}
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
       alt="MRPN 2024"
       priority
      /> */}
       </Box>
       <Typography
        component="p"
        fontWeight="700"
        fontSize="20px"
        letterSpacing="0.5px"
        //   lineHeight={1.3}
        sx={{
         [theme.breakpoints.down("md")]: {
          fontSize: "1em",
          lineHeight: 1.2,
         },
        }}
       >
        <Box
         component="span"
         color={theme.palette.primary.main}
         textTransform="uppercase"
        >
         Na
        </Box>
        tional{" "}
        <Box
         component="span"
         color={theme.palette.primary.main}
         textTransform="uppercase"
        >
         R
        </Box>
        i
        <Box
         component="span"
         color={theme.palette.primary.main}
         textTransform="uppercase"
        >
         s
        </Box>
        k{" "}
        <Box
         component="span"
         sx={{
          [theme.breakpoints.up("md")]: {
           display: "none",
          },
         }}
        >
         <br />
        </Box>
        <Box
         component="span"
         color={theme.palette.primary.main}
         textTransform="uppercase"
        >
         I
        </Box>
        nformation{" "}
        <Box
         component="span"
         color={theme.palette.primary.main}
         textTransform="uppercase"
        >
         S
        </Box>
        ystem
       </Typography>
      </>
     )}

     {/* <Typography
      component="h1"
      letterSpacing={4}
      fontSize="1.25rem"
      fontWeight={300}
     >
      BAPPENAS
     </Typography> */}
    </Stack>
    <Stack alignItems="center" direction="row" gap={2}>
     <Button onClick={handleClick} sx={{ p: 0, m: 0, minWidth: 0 }}>
      <Avatar sx={{ bgcolor: "white", width: 36, height: 36 }}>
       <IconFA size={16} name="user-tie" color={theme.palette.primary.main} />
      </Avatar>
     </Button>
     <Box
      component="span"
      sx={{
       display: "inline-flex",
       cursor: "pointer",
       [theme.breakpoints.up("md")]: {
        display: "none",
       },
      }}
     >
      <IconFA
       size={20}
       name="bars"
       color={theme.palette.primary.light}
       onclick={toggleDrawerMobile(true)}
      />
     </Box>
    </Stack>
    <Menu
     anchorEl={anchorEl}
     id="account-menu"
     open={open}
     onClose={handleClose}
     onClick={handleClose}
     slotProps={{
      paper: {
       elevation: 0,
       sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
         width: 32,
         height: 32,
         ml: -0.5,
         mr: 1,
        },
        "&::before": {
         content: '""',
         display: "block",
         position: "absolute",
         top: 0,
         right: 14,
         width: 10,
         height: 10,
         bgcolor: "background.paper",
         transform: "translateY(-50%) rotate(45deg)",
         zIndex: 0,
        },
        //
        "&.MuiPaper-root": {
         left: "auto !important",
         right: 44,
         width: 300,
         borderRadius: 3,
         ".MuiList-root": {
          py: 0,
         },
        },
        ".MuiMenuItem-root": {
         py: "10px",
         "&:first-of-type, &:last-of-type": {
          py: 2,
         },
         "&:last-of-type": {
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
         },
        },
       },
      },
     }}
     transformOrigin={{ horizontal: "right", vertical: "top" }}
     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
     <MenuItem sx={{ py: 2, gap: 1 }}>
      <Avatar
       alt="Administrator"
       src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
      />
      <ListItemText sx={{ span: { fontWeight: 500 } }}>
       Administrator
      </ListItemText>
     </MenuItem>
     <Divider sx={{ m: "0 !important" }} />
     <MenuItem sx={{ py: 2 }}>
      <ListItemText>Tahun 2025</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2026</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2027</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2028</ListItemText>
     </MenuItem>
     <MenuItem>
      <ListItemText>Tahun 2029</ListItemText>
     </MenuItem>
     <Divider sx={{ m: "0 !important" }} />
     <MenuItem
      sx={{
       bgcolor: red[100],
       py: 2,
      }}
     >
      <ListItemIcon>
       <IconKeluar color={red[800]} />
      </ListItemIcon>
      <ListItemText sx={{ color: red[800], span: { fontWeight: 500 } }}>
       Keluar Sistem
      </ListItemText>
     </MenuItem>
    </Menu>
   </Stack>
   <Drawer
    anchor="right"
    open={openDrawerMobile}
    onClose={toggleDrawerMobile(false)}
    sx={{
     ".MuiPaper-elevation": {
      //   bgcolor: theme.palette.primary.main,
      bgcolor: theme.palette.secondary.dark,
     },
    }}
   >
    <Aside isExpanded={true} isMobile />
   </Drawer>
  </Box>
 );
}
