import React from "react";
import {
 Grid,
 Paper,
 Stack,
 ToggleButton,
 Tooltip,
 Typography,
} from "@mui/material";
import TextareaComponent from "@/app/components/textarea";
import Image from "next/image";
import theme from "@/theme";
import { IconFA } from "@/app/components/icons/icon-fa";
import { dataTema } from "../../dataTema";

export default function FormSwot({
 mode,
 project,
}: {
 mode?: string;
 project?: string;
}) {
 return (
  <Grid container spacing={2}>
   {dataTema.map((itemSwot) => (
    <>
     {project === itemSwot.temaId && (
      <>
       {itemSwot.swot?.map((detailSwot, index) => (
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
             sx={{ textTransform: "capitalize" }}
            >
             {detailSwot.label}
            </Typography>
            {/* {detailSwot.item.map((itemSh, index) => (
             <Typography variant="body2" mb={1} key={index}>
              <strong>{itemSh}</strong>
             </Typography>
            ))} */}
            <TextareaComponent
             label={`Deskripsi ${detailSwot.label}`}
             placeholder={`Deskripsi ${detailSwot.label}`}
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
