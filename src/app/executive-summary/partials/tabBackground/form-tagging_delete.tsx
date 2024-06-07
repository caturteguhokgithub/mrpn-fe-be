import React from "react";
import {
    Box,
    Chip,
    FormControl,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useGlobalStore } from "@/provider"
import type ReactQuill from 'react-quill'
import { Kebijakan } from "./cardTagging";

interface IWrappedComponent extends React.ComponentProps<typeof ReactQuill> {
    forwardedRef: React.LegacyRef<ReactQuill>
}

export default function FormTagging({ data, setData }: { data:Kebijakan,setData:any }) {
    const { kebijakanOption } = useGlobalStore((state) => state)

    const [policyName, setPolicyName] = React.useState<string[]>(data.kebijakan.split(","));

    const handleChangeMultiSelect = (
        event: SelectChangeEvent<typeof policyName>
    ) => {
        const {
            target: { value },
        } = event;
        const kebijakanData = typeof value === "string" ? value.split(",") : value;
        setPolicyName(kebijakanData);
        setData((prev:Kebijakan) => {
            return {...prev, kebijakan:kebijakanData.join(",")}
        })
    };

    const ReactQuill = dynamic(async () => {
        const { default: RQ } = await import('react-quill')

        function QuillJS({ forwardedRef, ...props }: IWrappedComponent) {
            return <RQ ref={forwardedRef} {...props} />
        }

        return QuillJS
    },
        {
            ssr: false,
        },);
    const quillRef = React.useRef<ReactQuill>(null)

    const selectMultipleTag = (
        <Select
            size="small"
            multiple
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={policyName}
            onChange={handleChangeMultiSelect}
            renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                    {selected.map((value) => (
                        <Chip
                            key={value}
                            label={value}
                            sx={{
                                height: 28,
                                lineHeight: 1,
                                borderRadius: "50px",
                                px: "4px",
                            }}
                        />
                    ))}
                </Box>
            )}
            MenuProps={{
                PaperProps: {
                    style: {
                        maxHeight: 48 * 4.5 + 8,
                        width: 250,
                    },
                },
            }}
        >
            <MenuItem value="" disabled>
                <Typography fontSize={14} fontStyle="italic">
                    Pilih Kode KL
                </Typography>
            </MenuItem>
            {kebijakanOption.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
            ))}
        </Select>
    );

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <FormControl fullWidth>
                        <Typography gutterBottom>Kebijakan</Typography>
                        {selectMultipleTag}
                    </FormControl>
                </Grid>
                <Grid item lg={12}>
                    <FormControl fullWidth>
                        <Typography gutterBottom>Keterangan</Typography>
                        <ReactQuill
                            theme="snow"
                            defaultValue={data.value}
                            forwardedRef={quillRef}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
}
