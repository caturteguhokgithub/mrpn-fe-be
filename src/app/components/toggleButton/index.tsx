import React from "react";
import { Box, ToggleButton, Typography } from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";

export default function CustomToggleButton({
 value,
 label,
 code,
}: {
 value: string;
 label: string;
 code: string;
}) {
 return (
  <ToggleButton
   value={value}
   aria-label={label}
   sx={{
    p: 0,
    justifyContent: "flex-start",
    color: theme.palette.primary.main,
    borderRadius: "12px !important",
    border: `1px solid ${theme.palette.primary.main}`,
    borderLeftColor: `${theme.palette.primary.main} !important`,
   }}
  >
   <Box
    component="span"
    px={2}
    py={1.5}
    bgcolor={grey[200]}
    sx={{ borderStartStartRadius: "12px", borderEndStartRadius: "12px" }}
   >
    {code}
   </Box>
   <Typography px={2} component="span" fontWeight={600}>
    {label}
   </Typography>
  </ToggleButton>
 );
}