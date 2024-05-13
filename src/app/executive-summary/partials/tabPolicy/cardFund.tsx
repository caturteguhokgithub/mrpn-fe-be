import React from "react";
import {
 Typography,
 Stack,
 Paper,
 Button,
 DialogActions,
 Box,
 Grid,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import { grey, green, red } from "@mui/material/colors";
import { dataTema } from "../../dataTema";
import FormPendanaan from "./form-pendanaan";

const FundSource = ({
 label,
 value,
 color,
 isYear,
}: {
 label: string;
 value: string;
 color: string;
 isYear?: boolean;
}) => {
 return (
  <Stack
   direction="row"
   alignItems="center"
   boxSizing="border-box"
   width="100%"
   border={`2px solid ${color}`}
   borderRadius="8px"
  >
   <Box
    color="white"
    bgcolor={color}
    border={`2px solid ${color}`}
    p="8px 16px"
    fontWeight={700}
    letterSpacing={0.2}
    fontSize={14}
    minWidth={isYear ? 0 : 120}
   >
    {label}
   </Box>
   <Box
    p="8px 16px"
    fontWeight={600}
    fontSize={14}
    flexGrow={1}
    textAlign="right"
   >
    {value}
   </Box>
  </Stack>
 );
};

const GridItemSource = ({
 title,
 children,
}: {
 title: string;
 children?: React.ReactNode;
}) => {
 return (
  <Grid item lg={4}>
   <Paper
    variant="outlined"
    sx={{
     p: 2,
     borderRadius: 2,
     display: "flex",
     alignItems: "flex-start",
     height: "100%",
    }}
   >
    <Stack width="100%">
     <Typography fontWeight={500} mb={2}>
      {title}
     </Typography>
     {children}
    </Stack>
   </Paper>
  </Grid>
 );
};

export default function CardFund({ project }: { project: string }) {
 const [modalOpenPendanaan, setModalOpenPendanaan] = React.useState(false);

 const handleModalOpenPendanaan = () => {
  setModalOpenPendanaan(true);
 };

 const handleModalClose = () => {
  setModalOpenPendanaan(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Pendanaan & Investasi Proyek"
   setting
   settingEditOnclick={handleModalOpenPendanaan}
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
     {dataTema.map((itemFund) => (
      <>
       {project === itemFund.temaId && (
        <>
         {itemFund.pendanaan.length < 1 ? (
          <EmptyState
           dense
           icon={<IconEmptyData width={100} />}
           title="Data Kosong"
           description="Silahkan isi konten halaman ini"
          />
         ) : (
          <Grid container spacing={2}>
           <GridItemSource title="Jumlah per Tahun">
            <Stack gap={1}>
             {dataTema.map((itemFund) => (
              <>
               {project === itemFund.temaId && (
                <>
                 {itemFund.pendanaan.map((listFund) => (
                  <>
                   {listFund.yearly.length < 1 ? (
                    <EmptyState
                     dense
                     icon={<IconEmptyData width={70} />}
                     title="Data Kosong"
                    />
                   ) : (
                    <>
                     {listFund.yearly.map((itemSource: any, index) => (
                      <FundSource
                       isYear
                       color={grey[600]}
                       key={index}
                       label={itemSource.year}
                       value={`Rp. ${itemSource.value}`}
                      />
                     ))}
                    </>
                   )}
                  </>
                 ))}
                </>
               )}
              </>
             ))}
            </Stack>
           </GridItemSource>
           <GridItemSource title="Sumber Pendanaan">
            <Stack gap={1}>
             {dataTema.map((itemFund) => (
              <>
               {project === itemFund.temaId && (
                <>
                 {itemFund.pendanaan.map((listFund) => (
                  <>
                   {listFund.source.length < 1 ? (
                    <EmptyState
                     dense
                     icon={<IconEmptyData width={70} />}
                     title="Data Kosong"
                    />
                   ) : (
                    <>
                     {listFund.source.map((itemSource, index) => (
                      <FundSource
                       key={index}
                       color={
                        itemSource.from === "APBN" ? green[400] : red[400]
                       }
                       label={itemSource.from}
                       value={`Rp. ${itemSource.value}`}
                      />
                     ))}
                    </>
                   )}
                  </>
                 ))}
                </>
               )}
              </>
             ))}
            </Stack>
           </GridItemSource>
           <GridItemSource title="Kesiapan Pendanaan">
            {dataTema.map((itemFund) => (
             <>
              {project === itemFund.temaId && (
               <>
                {itemFund.pendanaan.map((listFund) => (
                 <>
                  {listFund.ready.length < 1 ? (
                   <EmptyState
                    dense
                    icon={<IconEmptyData width={70} />}
                    title="Data Kosong"
                   />
                  ) : (
                   <>
                    {listFund.ready.length > 1 ? (
                     <Box component="ul" pl="20px !important">
                      {listFund.ready.map((itemReady, index) => (
                       <Box component="li" key={index} textAlign="left">
                        <Typography variant="body1" key={index}>
                         {itemReady}
                        </Typography>
                       </Box>
                      ))}
                     </Box>
                    ) : (
                     <Typography component="p" variant="body1" textAlign="left">
                      {listFund.ready}
                     </Typography>
                    )}
                   </>
                  )}
                 </>
                ))}
               </>
              )}
             </>
            ))}
           </GridItemSource>
          </Grid>
         )}
        </>
       )}
      </>
     ))}
    </>
   )}
   <DialogComponent
    dialogOpen={modalOpenPendanaan}
    dialogClose={handleModalClose}
    title="Pendanaan & Investasi Proyek"
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
    <FormPendanaan mode="add" />
   </DialogComponent>
  </CardItem>
 );
}
