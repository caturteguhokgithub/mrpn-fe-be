import React from "react";
import { Stack } from "@mui/material";
import EmptyState from "@/app/components/empty";
import { IconEmptyData } from "@/app/components/icons";
import CardItem from "@/app/components/cardTabItem";
import TableOverall from "./tabOverall/table-overall";

export default function TabOverall({ project }: { project: string }) {
 const isEmpty = false;

 return (
  <Stack gap={1}>
   <CardItem title="Overall Risk">
    {isEmpty || project === "4" ? (
     <EmptyState
      dense
      icon={<IconEmptyData width={100} />}
      title="Data Kosong"
      description="Silahkan isi konten halaman ini"
     />
    ) : (
     <>
      <TableOverall project={project} />
     </>
    )}
   </CardItem>
  </Stack>
 );
}
