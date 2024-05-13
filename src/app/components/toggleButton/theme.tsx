import React from "react";
import { Box, ToggleButton, Typography, alpha } from "@mui/material";
import theme from "@/theme";
import { green, grey, red, yellow } from "@mui/material/colors";

export default function ThemeToggleButton({
 value,
 label,
 code,
 variant,
 disabled,
 onClick,
}: {
 value?: string | any;
 label: string;
 code?: string;
 variant?: string;
 disabled?: boolean;
 onClick?: () => void;
}) {
 const conditionColor =
  variant === "danger"
   ? `${red[700]} !important`
   : variant === "warning"
   ? `${yellow[800]} !important`
   : variant === "success"
   ? `${green[700]} !important`
   : theme.palette.primary.main;

 return (
  <ToggleButton
   onClick={onClick}
   disabled={disabled}
   value={value}
   aria-label={label}
   sx={{
    minHeight: 160,
    p: 0,
    bgcolor: "white",
    justifyContent: "flex-start",
    color: alpha(theme.palette.primary.main, 0.8),
    borderRadius: "12px !important",
    border: `1px solid ${theme.palette.primary.main}`,
    borderLeftColor: `${theme.palette.primary.main} !important`,
    background:
     "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.8) 100%),url(https://res.cloudinary.com/caturteguh/image/upload/v1715510168/mrpn/bg-button-theme_cxwxph.jpg)",
    backgroundSize: "105%",
    // backgroundSize: "cover",
    backgroundPosition: "left top",
    boxShadow: "1px 16px 13px -15px rgba(0,0,0,0.4);",
    "&.Mui-selected": {
     bgcolor: conditionColor,
     border: `1px solid ${conditionColor}`,
     ".MuiBox-root": {
      bgcolor: conditionColor,
     },
    },
    "&.Mui-disabled": {
     borderLeftColor: "#0000001f !important",
     cursor: "not-allowed",
    },
   }}
  >
   {/* {code && (
    <Box
     component="span"
     px={2}
     py={1.5}
     bgcolor={grey[200]}
     sx={{
      borderStartStartRadius: "12px",
      borderEndStartRadius: "12px",
     }}
    >
     {code}
    </Box>
   )} */}
   <Typography
    px={3}
    component="span"
    fontWeight={700}
    fontSize="2em"
    textTransform="capitalize"
    maxWidth={260}
    lineHeight={1.1}
    textAlign="left"
   >
    {label}
   </Typography>
   {/* {code} */}
  </ToggleButton>
 );
}
