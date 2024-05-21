import React from "react";
import {
 Box,
 Grid,
 Paper,
 Stack,
 TextField,
 ToggleButton,
 ToggleButtonGroup,
 Tooltip,
 Typography,
 alpha,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import Image from "next/image";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { grey } from "@mui/material/colors";
import { dataTema } from "../../dataTema";

const ToggleButtonLogo = ({
 value,
 imgSrc,
}: {
 value: string;
 imgSrc: string;
}) => {
 return (
  <Tooltip title={value} arrow>
   <ToggleButton
    value={value}
    aria-label={value}
    sx={{
     position: "relative",
     ".MuiIcon-root": {
      position: "absolute",
      top: -5,
      right: -5,
     },
    }}
   >
    <Image
     alt={value}
     src={imgSrc}
     width={0}
     height={0}
     sizes="100vw"
     style={{ width: "auto", height: "50px" }}
    />
    <IconFA name="circle-check" size={20} color={theme.palette.primary.main} />
   </ToggleButton>
  </Tooltip>
 );
};

export default function FormStakeholder({
 mode,
 project,
}: {
 mode?: string;
 project?: string;
}) {
 const [formats, setFormats] = React.useState(() => [""]);

 const handleFormat = (
  event: React.MouseEvent<HTMLElement>,
  newFormats: string[]
 ) => {
  setFormats(newFormats);
 };

 const styles = {
  pt: 1,
  mb: 1,
  gap: 1,
  maxWidth: "100%",
  overflow: "auto",
  minHeight: 90,
  "&::-webkit-scrollbar": {
   height: "6px",
   cursor: "pointer",
  },
  button: {
   border: `1px solid ${grey[400]}`,
   borderLeft: `1px solid ${grey[400]} !important`,
   borderRadius: "8px !important",
   ".MuiIcon-root": {
    display: "none",
   },
   "&:hover": {
    bgcolor: alpha(theme.palette.primary.main, 0.1),
   },
   "&.Mui-selected": {
    border: `1px solid ${theme.palette.primary.main} !important`,
    color: "white",
    ".MuiIcon-root": {
     display: "block",
    },
    "&:hover": {
     bgcolor: alpha(theme.palette.primary.main, 0.1),
     color: "white",
    },
   },
  },
 };

 return (
  <Grid container spacing={2}>
   {dataTema.map((itemStakeholder) => (
    <>
     {project === itemStakeholder.temaId && (
      <>
       {itemStakeholder.stakeholder?.map((detailStakeholder, index) => (
        <>
         <Grid item lg={6} key={index}>
          <Paper
           elevation={0}
           variant="outlined"
           sx={{ minWidth: "0 !important", p: 2, height: "100%" }}
          >
           <Stack direction="column">
            <Typography
             gutterBottom
             variant="h6"
             component="div"
             lineHeight={1.3}
             sx={{ minHeight: 54 }}
            >
             {detailStakeholder.label}
            </Typography>
            <Box>
             <TextField
              size="small"
              InputLabelProps={{
               shrink: true,
              }}
              placeholder="Cari stakeholder"
              sx={{ width: "100%" }}
             />
            </Box>
            <Typography
             mt={1}
             variant="caption"
             component="span"
             color={grey[600]}
             fontStyle="italic"
            >
             Klik logo untuk pilih anggota stakeholder
            </Typography>
            <ToggleButtonGroup
             value={formats}
             onChange={handleFormat}
             sx={styles}
            >
             {detailStakeholder.instance.map((itemSh, index) => (
              <ToggleButtonLogo
               key={index}
               value={itemSh.name}
               imgSrc={itemSh.logo}
              />
             ))}
            </ToggleButtonGroup>
            <Typography variant="body2" mb={1}>
             <strong>{detailStakeholder.tag}</strong>
            </Typography>
            <TextareaComponent
             label={`Deskripsi ${detailStakeholder.label}`}
             placeholder={`Deskripsi ${detailStakeholder.label}`}
            />
           </Stack>
          </Paper>
         </Grid>
        </>
       ))}
      </>
     )}
    </>
   ))}
  </Grid>
 );
}
