import React, { Fragment } from "react";
import {
 Button,
 Card,
 CardContent,
 DialogActions,
 Stack,
 Typography,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import { dataTema } from "../../dataTema";
import FormSwot from "./form-swot";
import theme from "@/theme";

export default function CardSwot({ project }: { project: string }) {
 const [modalOpenFact, setModalOpenFact] = React.useState(false);

 const handleModalOpenFact = () => {
  setModalOpenFact(true);
 };

 const handleModalClose = () => {
  setModalOpenFact(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   // title="Fakta & Data (Struktur Masalah yang Dihadapi)"
   title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
   setting
   settingEditOnclick={handleModalOpenFact}
  >
   {isEmpty || project === "4" ? (
    <EmptyState
     dense
     icon={<IconEmptyData width={100} />}
     title="Data Kosong"
     description="Silahkan isi konten halaman ini"
    />
   ) : (
    <>
     <Stack direction="row" flexWrap="wrap" gap={2}>
      {dataTema.map((itemSwot, index) => (
       <Fragment key={index}>
        {project === itemSwot.temaId && (
         <>
          {itemSwot.swot.map((detailSwot, index) => (
           <Card
            sx={{
             maxWidth: 345,
             flex: "0 0 calc(25% - 12px)",
             //  borderRadius: "10px 10px 0 0",
             borderRadius: "10px",
             [theme.breakpoints.down("lg")]: {
              flex: "0 0 calc(50% - 12px)",
             },
             [theme.breakpoints.down("sm")]: {
              flex: "0 0 100%",
              maxWidth: "100%",
             },
            }}
            variant="outlined"
            key={index}
           >
            {itemSwot.temaId ? (
             <CardContent>
              <Typography
               gutterBottom
               variant="h6"
               component="div"
               lineHeight={1.3}
               textTransform="capitalize"
              >
               {detailSwot.label}
              </Typography>
             </CardContent>
            ) : null}
            <CardContent sx={{ pt: 0 }}>
             {detailSwot.item.length > 1 ? (
              <ul>
               {detailSwot.item.map((itemSwot, index) => (
                <li key={index}>
                 <Typography variant="body1">{itemSwot}</Typography>
                </li>
               ))}
              </ul>
             ) : (
              <>
               {detailSwot.item.map((itemSwot, index) => (
                <Typography variant="body1" key={index}>
                 {itemSwot}
                </Typography>
               ))}
              </>
             )}
            </CardContent>
           </Card>
          ))}
         </>
        )}
       </Fragment>
      ))}
     </Stack>
    </>
   )}
   <DialogComponent
    dialogOpen={modalOpenFact}
    dialogClose={handleModalClose}
    title="Kondisi Saat Ini/Latar Belakang Proyek (SWOT)"
    dialogFooter={
     <DialogActions sx={{ p: 2, px: 3 }}>
      <Button variant="outlined" onClick={handleModalClose}>
       Batal
      </Button>
      <Button variant="contained" type="submit">
       Simpan
      </Button>
     </DialogActions>
    }
   >
    <FormSwot mode="add" project={project} />
   </DialogComponent>
  </CardItem>
 );
}
