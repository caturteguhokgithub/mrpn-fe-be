import React, { Fragment } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import { dataTema } from "../../dataTema";
import ImageGalleryStakeholder from "./partials/imageSearch";

export default function FormStakeholder({
 mode,
 project,
}: {
 mode?: string;
 project?: string;
}) {
 return (
  <Grid container spacing={2}>
   {dataTema.map((itemStakeholder, index) => (
    <Fragment key={index}>
     {project === itemStakeholder.temaId && (
      <>
       {itemStakeholder.stakeholder?.map((detailStakeholder, index) => (
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
           {/* <Box>
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
             Klik logo untuk pilih multi-anggota stakeholder
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
            </ToggleButtonGroup> */}
           <ImageGalleryStakeholder />
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
       ))}
      </>
     )}
    </Fragment>
   ))}
  </Grid>
 );
}
