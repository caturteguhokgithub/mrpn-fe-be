import React from "react";
import ReactDOMServer from "react-dom/server";
import { Box, Divider, Typography } from "@mui/material";

const CustomPopup = ({ task }: { task: any }) => (
 <>
  <Box className="kegiatan">
   <Typography component="span">Kegiatan:</Typography>
   <Typography component="strong">{task.name}</Typography>
  </Box>
  <Box className="content">
   <Typography variant="body2">
    Penanggungjawab:{" "}
    <Typography component="span">Perusahaan Patungan</Typography>
   </Typography>
   <Typography variant="body2">
    Sumber Anggaran: <Typography component="span">PMN kepada PT KIW</Typography>
   </Typography>
   <Typography variant="body2">
    Waktu Mulai: <Typography component="span">{task.start}</Typography>
   </Typography>
   <Typography variant="body2">
    Waktu Selesai: <Typography component="span">{task.end}</Typography>
   </Typography>
   <Typography variant="body2">
    Progress: <Typography component="span">{task.progress}%</Typography>
   </Typography>
  </Box>
 </>
);

export const CustomPopupHTML = (task: any) => {
 return ReactDOMServer.renderToString(<CustomPopup task={task} />);
};
