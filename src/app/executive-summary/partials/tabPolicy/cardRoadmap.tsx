import React from "react";
import {
 Typography,
 Stack,
 Button,
 DialogActions,
 Box,
 Card,
 CardContent,
 alpha,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import { orange } from "@mui/material/colors";
import theme from "@/theme";
import { dataTema } from "../../dataTema";
import FormRoadmap from "./form-roadmap";

export default function CardRoadmap({ project }: { project: string }) {
 const [modalOpenOutput, setModalOpenOutput] = React.useState(false);
 const [modalOpenBisnis, setModalOpenBisnis] = React.useState(false);

 const handleModalOpenOutput = () => {
  setModalOpenOutput(true);
 };
 const handleModalOpenBisnis = () => {
  setModalOpenBisnis(true);
 };

 const handleModalClose = () => {
  setModalOpenOutput(false);
  setModalOpenBisnis(false);
 };

 const isEmpty = false;

 return (
  <CardItem
   title="Project Roadmap"
   setting
   multiEdit
   settingEditOutputClick={handleModalOpenOutput}
   settingEditBisnisClick={handleModalOpenBisnis}
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
     <Box width="100%" textAlign="center">
      {dataTema.map((itemRoadmap) => (
       <>
        {project === itemRoadmap.temaId && (
         <>
          {itemRoadmap.roadmap.length < 1 ? (
           <EmptyState
            dense
            icon={<IconEmptyData width={100} />}
            title="Data Kosong"
            description="Silahkan isi konten halaman ini"
           />
          ) : (
           <>
            {itemRoadmap.roadmap.map((detailRoadmap) => (
             <>
              <Typography
               component="h2"
               fontSize="1em"
               fontWeight={600}
               textAlign="left"
              >
               Berbasis Output
              </Typography>
              {detailRoadmap.outputBase.length > 1 ? (
               <Stack direction="row" gap={2} width="100%" mt={1}>
                {detailRoadmap.outputBase.map((itemOutput, index) => (
                 <Card
                  variant="outlined"
                  key={index}
                  sx={{
                   flex: "0 0 calc(20% - 12px)",
                   //  borderRadius: "10px 10px 0 0",
                   borderRadius: "10px",
                  }}
                 >
                  <CardContent
                   sx={{
                    bgcolor:
                     index === 0
                      ? alpha(theme.palette.primary.main, 1)
                      : index === 1
                      ? alpha(theme.palette.primary.main, 0.9)
                      : index === 2
                      ? alpha(theme.palette.primary.main, 0.8)
                      : index === 3
                      ? alpha(theme.palette.primary.main, 0.7)
                      : index === 4
                      ? alpha(theme.palette.primary.main, 0.6)
                      : index === 5
                      ? alpha(theme.palette.primary.main, 0.5)
                      : alpha(theme.palette.primary.main, 0.4),
                    color: "white",
                    borderRadius: "10px 10px 0 0",
                    py: 1,
                   }}
                  >
                   <Typography
                    variant="h6"
                    component="div"
                    lineHeight={1}
                    textTransform="capitalize"
                    fontWeight={600}
                    fontSize="1.1em"
                   >
                    {itemOutput.year}
                   </Typography>
                  </CardContent>
                  <CardContent>
                   {itemOutput.note.length < 1 ? (
                    <>
                     <Typography component="p" textAlign="left">
                      <Typography
                       component="strong"
                       fontWeight={500}
                       textAlign="left"
                      >
                       Output:
                      </Typography>{" "}
                      {itemOutput.output}
                     </Typography>
                     <Typography component="p" textAlign="left" mt={1}>
                      <Typography
                       component="strong"
                       fontWeight={500}
                       textAlign="left"
                      >
                       Ro Pendukung:
                      </Typography>{" "}
                      {itemOutput.roPendukung.length > 1 ? (
                       <Box component="ul" pl="20px !important">
                        {itemOutput.roPendukung.map((itemRop, index) => (
                         <Box component="li" key={index} textAlign="left">
                          <Typography
                           variant="body1"
                           key={index}
                           fontSize="0.9em"
                          >
                           {itemRop}
                          </Typography>
                         </Box>
                        ))}
                       </Box>
                      ) : (
                       <>
                        {itemOutput.roPendukung.map((itemRop) => (
                         <>{itemRop}</>
                        ))}
                       </>
                      )}
                     </Typography>
                    </>
                   ) : (
                    <>
                     {itemOutput.note.length > 1 ? (
                      <Box component="ul" pl="20px !important">
                       {itemOutput.note.map((itemNote, index) => (
                        <Box component="li" key={index} textAlign="left">
                         <Typography variant="body1" key={index}>
                          {itemNote}
                         </Typography>
                        </Box>
                       ))}
                      </Box>
                     ) : (
                      <Typography component="p" textAlign="left">
                       {itemOutput.note}
                      </Typography>
                     )}
                    </>
                   )}
                  </CardContent>
                 </Card>
                ))}
               </Stack>
              ) : null}
              {detailRoadmap.businessBase.length > 1 ? (
               <>
                <Box mt={4}>
                 <Typography
                  component="h2"
                  fontSize="1em"
                  fontWeight={600}
                  textAlign="left"
                 >
                  Berbasis Bisnis
                 </Typography>
                </Box>
                <Stack direction="row" gap={2} width="100%" mt={1}>
                 {detailRoadmap.businessBase.map((itemOutput, index) => (
                  <Card
                   variant="outlined"
                   key={index}
                   sx={{
                    flex: "0 0 calc(20% - 12px)",
                    borderRadius: "10px",
                   }}
                  >
                   <CardContent
                    sx={{
                     bgcolor:
                      index === 0
                       ? alpha(orange[700], 1)
                       : index === 1
                       ? alpha(orange[700], 0.9)
                       : index === 2
                       ? alpha(orange[700], 0.8)
                       : index === 3
                       ? alpha(orange[700], 0.7)
                       : index === 4
                       ? alpha(orange[700], 0.6)
                       : index === 5
                       ? alpha(orange[700], 0.5)
                       : alpha(orange[700], 0.4),

                     color: "white",
                     borderRadius: "10px 10px 0 0",
                     py: 1,
                    }}
                   >
                    <Typography
                     variant="h6"
                     component="div"
                     lineHeight={1}
                     textTransform="capitalize"
                     fontWeight={600}
                     fontSize="1.1em"
                    >
                     {itemOutput.year}
                    </Typography>
                   </CardContent>
                   <CardContent>
                    {itemOutput.note.length < 1 ? (
                     <>
                      <Typography component="p" textAlign="left">
                       <Typography
                        component="strong"
                        fontWeight={500}
                        textAlign="left"
                       >
                        Output:
                       </Typography>{" "}
                       {itemOutput.output}
                      </Typography>
                      <Typography component="p" textAlign="left" mt={1}>
                       <Typography
                        component="strong"
                        fontWeight={500}
                        textAlign="left"
                       >
                        Ro Pendukung:
                       </Typography>{" "}
                       {itemOutput.roPendukung.length > 1 ? (
                        <Box component="ul" pl="20px !important">
                         {itemOutput.roPendukung.map((itemRop, index) => (
                          <Box component="li" key={index} textAlign="left">
                           <Typography
                            variant="body1"
                            key={index}
                            fontSize="0.9em"
                           >
                            {itemRop}
                           </Typography>
                          </Box>
                         ))}
                        </Box>
                       ) : (
                        <>
                         {itemOutput.roPendukung.map((itemRop) => (
                          <>{itemRop}</>
                         ))}
                        </>
                       )}
                      </Typography>
                     </>
                    ) : (
                     <>
                      {itemOutput.note.length > 1 ? (
                       <Box component="ul" pl="20px !important">
                        {itemOutput.note.map((itemNote, index) => (
                         <Box component="li" key={index} textAlign="left">
                          <Typography variant="body1" key={index}>
                           {itemNote}
                          </Typography>
                         </Box>
                        ))}
                       </Box>
                      ) : (
                       <Typography component="p" textAlign="left">
                        {itemOutput.note}
                       </Typography>
                      )}
                     </>
                    )}
                   </CardContent>
                  </Card>
                 ))}
                </Stack>
               </>
              ) : null}
             </>
            ))}
           </>
          )}
         </>
        )}
       </>
      ))}
     </Box>
    </>
   )}
   <DialogComponent
    width={800}
    dialogOpen={modalOpenOutput}
    dialogClose={handleModalClose}
    title="Project Roadmap Berbasis Output"
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
    <FormRoadmap mode="add" />
   </DialogComponent>
   <DialogComponent
    width={800}
    dialogOpen={modalOpenBisnis}
    dialogClose={handleModalClose}
    title="Project Roadmap Berbasis Bisnis"
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
    <FormRoadmap mode="add" />
   </DialogComponent>
  </CardItem>
 );
}
