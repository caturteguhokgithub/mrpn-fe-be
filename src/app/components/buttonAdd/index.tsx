import React from "react";
import { Button, Icon } from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";

export default function AddButton({
 title,
 url,
 filled,
 small,
 onclick,
}: {
 title: string;
 url?: string;
 filled?: boolean;
 small?: boolean;
 onclick?: () => void;
}) {
 const buttonAdd = (
  <Button
   variant={filled ? "contained" : "outlined"}
   size={small ? "small" : "medium"}
   startIcon={
    <Icon
     baseClassName="fas"
     className={`fa-plus-circle`}
     sx={{
      fontSize: small ? "16px !important" : "18px",
     }}
    />
   }
   sx={{
    borderRadius: "50px",
    minHeight: 30,
    lineHeight: 1,
    "&:hover": {
     bgcolor: blue[800],
     color: "white",
    },
   }}
   onClick={onclick}
  >
   {title}
  </Button>
 );

 return <>{onclick ? buttonAdd : <Link href={`${url}`}>{buttonAdd}</Link>}</>;
}
