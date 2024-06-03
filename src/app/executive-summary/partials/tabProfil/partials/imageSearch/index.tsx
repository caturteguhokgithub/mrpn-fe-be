import React from "react";
import { useState } from "react";
import SearchBar from "./searchBar";
import ImageGallery from "./imageGallery";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const images = [
 //  { url: "https://picsum.photos/id/122/200/300", alt: "Beautiful sunrise" },
 {
  name: "BPOM",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955901/mrpn/company_logo/logo_bpom_ktik6o.png",
 },
 {
  name: "Kementerian Pertanian",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956186/mrpn/company_logo/logo_kementan_de8q7e.png",
 },
 {
  name: "Kementerian Kehutanan & Lingkungan Hidup",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955830/mrpn/company_logo/logo_klhk_wplagd.png",
 },
 {
  name: "Kementerian Perhubungan",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955963/mrpn/company_logo/logo_kemenhub_ivgjzh.png",
 },
 {
  name: "BPOM",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955901/mrpn/company_logo/logo_bpom_ktik6o.png",
 },
 {
  name: "Kementerian Pertanian",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711956186/mrpn/company_logo/logo_kementan_de8q7e.png",
 },
 {
  name: "Kementerian Kehutanan & Lingkungan Hidup",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955830/mrpn/company_logo/logo_klhk_wplagd.png",
 },
 {
  name: "Kementerian Perhubungan",
  logo:
   "https://res.cloudinary.com/caturteguh/image/upload/v1711955963/mrpn/company_logo/logo_kemenhub_ivgjzh.png",
 },
];

export default function ImageGalleryStakeholder({
 project,
}: {
 project?: string;
}) {
 const [filteredImages, setFilteredImages] = useState(images);
 const [searchTerm, setSearchTerm] = useState("");

 const handleSearch = (query: any) => {
  setSearchTerm(query);
  if (query) {
   const lowercasedQuery = query.toLowerCase();
   setFilteredImages(
    images.filter((image) => image.name.toLowerCase().includes(lowercasedQuery))
   );
  } else {
   setFilteredImages(images);
  }
 };

 return (
  <Stack>
   <SearchBar onSearch={handleSearch} />
   <Typography
    mt={1}
    variant="caption"
    component="span"
    color={grey[600]}
    fontStyle="italic"
   >
    Klik logo untuk pilih multi-anggota stakeholder
   </Typography>
   <ImageGallery
    images={filteredImages}
    searchTerm={searchTerm}
    project={project}
   />
  </Stack>
 );
}
