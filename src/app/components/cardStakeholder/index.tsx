import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";

export default function CardStakeholder({
 title,
 img,
 description,
}: {
 title: string;
 img: string;
 description: React.ReactNode;
}) {
 return (
  <Card sx={{ maxWidth: 345 }} variant="outlined">
   <CardContent sx={{ minHeight: img ? 94 : "auto" }}>
    <Typography gutterBottom variant="h6" component="div" lineHeight={1.3}>
     {title}
    </Typography>
   </CardContent>
   {img ? (
    <CardContent sx={{ textAlign: "center", height: 200 }}>
     <Image
      alt={title}
      src={img}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
     />
    </CardContent>
   ) : null}
   <CardContent>
    <Typography variant="body2">{description}</Typography>
   </CardContent>
  </Card>
 );
}
