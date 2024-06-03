import React, { Fragment } from "react";
import { Button, DialogActions, Typography } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import dynamic from "next/dynamic";
import DialogComponent from "@/app/components/dialog";
import { dataTema } from "../../dataTema";

export default function CardGoals({ project }: { project: string }) {
 const [modalOpenGoal, setModalOpenGoal] = React.useState(false);

 const [value, setValue] = React.useState("");

 const handleModalOpenGoal = () => {
  setModalOpenGoal(true);
 };
 const handleModalClose = () => {
  setModalOpenGoal(false);
 };

 const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

 const isEmpty = false;

 return (
  <CardItem
   title="Tujuan Utama/Goals Proyek"
   setting
   settingEditOnclick={handleModalOpenGoal}
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
     {dataTema.map((itemGoals, index) => (
      <Fragment key={index}>
       {project === itemGoals.temaId && (
        <>
         {itemGoals.goals.length > 1 ? (
          <ol type="1">
           {itemGoals.goals.map((detailGoals, index) => (
            <li key={index}>
             <Typography variant="body1">{detailGoals}</Typography>
            </li>
           ))}
          </ol>
         ) : (
          <Typography variant="body1">{itemGoals.goals}</Typography>
         )}
        </>
       )}
      </Fragment>
     ))}
    </>
   )}
   <DialogComponent
    dialogOpen={modalOpenGoal}
    dialogClose={handleModalClose}
    title="Tujuan Utama/Goals Proyek"
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
    <ReactQuill theme="snow" value={value} onChange={setValue} />
   </DialogComponent>
  </CardItem>
 );
}
