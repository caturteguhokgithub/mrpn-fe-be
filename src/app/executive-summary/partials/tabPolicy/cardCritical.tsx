import React from "react";
import Image from "next/image";
import {
 Typography,
 Button,
 DialogActions,
 Box,
 Tooltip,
 Zoom,
} from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import DialogComponent from "@/app/components/dialog";
import dynamic from "next/dynamic";
import { dataTema } from "../../dataTema";

export default function CardCritical({ project }: { project: string }) {
 const [modalOpenCritical, setModalOpenCritical] = React.useState(false);
 const [value, setValue] = React.useState("");
 const [modalOpenImgCritical, setModalOpenImgCritical] = React.useState(false);
 const handleModalOpenCritical = () => {
  setModalOpenCritical(true);
 };
 const handleModalImgCritical = () => {
  setModalOpenImgCritical(true);
 };

 const handleModalClose = () => {
  setModalOpenCritical(false);
  setModalOpenImgCritical(false);
 };
 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <CardItem
   title="Critical Path Prioritas Proyek"
   setting
   settingEditOnclick={handleModalOpenCritical}
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
      {dataTema.map((itemCritical) => (
       <>
        {project === itemCritical.temaId && (
         <>
          {itemCritical.criticalPath.length < 1 ? (
           <EmptyState
            dense
            icon={<IconEmptyData width={100} />}
            title="Data Kosong"
            description="Silahkan isi konten halaman ini"
           />
          ) : (
           <>
            {itemCritical.criticalPath.map((detailCritical, index) => (
             <>
              <Tooltip
               key={index}
               title="Klik untuk perbesar gambar"
               placement="right"
               followCursor
               TransitionComponent={Zoom}
              >
               <Image
                alt="Critical Path Prioritas Proyek"
                src={detailCritical}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                 width: "70%",
                 height: "auto",
                 margin: "0 auto",
                 cursor: "pointer",
                }}
                onClick={handleModalImgCritical}
               />
              </Tooltip>
              <DialogComponent
               width="80%"
               dialogOpen={modalOpenImgCritical}
               dialogClose={handleModalClose}
              >
               <Image
                alt="Critical Path Prioritas Proyek"
                src={detailCritical}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                 width: "100%",
                 height: "auto",
                 margin: "0 auto",
                }}
               />
              </DialogComponent>
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
    dialogOpen={modalOpenCritical}
    dialogClose={handleModalClose}
    title="Critical Path Prioritas Proyek"
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
    <Typography variant="caption" component="div" mb={2}>
     Format gambar: <strong>.png / .jpg / .jpeg</strong>. Ukuran gambar{" "}
     <strong>max. 200kb</strong>
    </Typography>
    <ReactQuill theme="snow" value={value} onChange={setValue} />
   </DialogComponent>
  </CardItem>
 );
}
