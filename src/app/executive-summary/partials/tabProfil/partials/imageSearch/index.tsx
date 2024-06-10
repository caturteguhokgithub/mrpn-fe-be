import React from "react";
import { useState } from "react";
import SearchBar from "./searchBar";
import ImageGallery from "./imageGallery";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


export default function ImageGalleryStakeholder(
{
    images,
    type,
    data,
    setData
}: {
    images?:any[];
    type:string;
    data:any;
    setData?:any;
}) {
    const [filteredImages, setFilteredImages] = useState(images);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (query: any) => {
        setSearchTerm(query);
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            setFilteredImages(
                images.filter((image) => image.value.toLowerCase().includes(lowercasedQuery))
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
                data={data}
                type={type}
                setData={setData}
            />
        </Stack>
    );
}
