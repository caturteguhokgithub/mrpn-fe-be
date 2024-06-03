import React, { Fragment } from "react";
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
import GanttChart from "@/app/penetapan-konteks/konteks-strategis/form/partials/gantt/gantt";
import { tasks } from "@/app/penetapan-konteks/konteks-strategis/setting";
import FormMilestone from "@/app/penetapan-konteks/konteks-strategis/form/partials/form-milestone";
import { Chart } from "react-google-charts";
import { dataCritical1, dataRowCritical } from "../../data";
import { GanttDefault } from "./gantt";

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

 const options = {
  gantt: {
   trackHeight: 50,
   criticalPathEnabled: true,
   criticalPathStyle: {
    stroke: "#e64a19",
    strokeWidth: 5,
   },
   arrow: {
    angle: 100,
    width: 5,
    color: "green",
    radius: 0,
   },
   labelStyle: {
    fontFamily: "'Inter',sans-serif",
    fontSize: 16,
    color: "black !important",
   },
   innerGridHorizLine: {
    stroke: "#e0e0e0",
    strokeWidth: 1,
   },
   innerGridTrack: { fill: "#f1f8e9" },
   innerGridDarkTrack: { fill: "#dcedc8" },
   showRowLabels: true,
   showTaskLabels: true,
  },
  timeline: {
   showBarLabels: true,
  },
  hAxis: {
   format: "yyyy",
   gridlines: { count: -1 },
  },
  vAxis: {
   title: "yyyy",
  },
  tooltip: {
   isHtml: true,
  },
 };

 console.log({ project });

 const dataCritical = [dataRowCritical, ...dataCritical1];

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
      <GanttChart tasks={tasks} />
      {/* {dataTema.map((itemCritical) => (
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
      ))} */}
     </Box>
    </>
   )}
   <Chart
    chartType="Gantt"
    width="100%"
    height="300px"
    // data={project === "1" ? dataCritical1 : dataCritical1}
    options={options}
    data={dataCritical}
   />
   {/* <GanttDefault /> */}
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
    <FormMilestone mode="edit" />
   </DialogComponent>
  </CardItem>
 );
}
