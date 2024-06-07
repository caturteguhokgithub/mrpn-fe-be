import React from "react";
import {
    FormControl,
    Grow,
    Tooltip,
    Autocomplete,
    TextField,
    Skeleton
} from "@mui/material";
import theme from "@/theme";
import { grey } from "@mui/material/colors";
import useSWRMutation from 'swr/mutation'
import { postRequest } from '@/utils/fetcher'
import { useGlobalStore, defaultInitGlobalState } from "@/provider";

const getListData = () => {

    const {
        data,
        trigger,
        isMutating
    } = useSWRMutation(
        '/api/misc/project-list',
        postRequest
    )

    return {
        fetchListData: trigger,
        listData: data,
        listDataLoading: isMutating
    }
}

export default function DropdownKp() {

    const { project, setProject } = useGlobalStore((state) => state)

    const initStateValue = project.id === undefined ? {id:0,label:"Pilih Kegiatan Pembangunan"} : {id:project.id,label:project.value};
    const [value, setValue] = React.useState<any>(initStateValue);
    const [data, setData] = React.useState<any[]>([]);

    const { listDataLoading, fetchListData } = getListData()

    const setListData = async () => {
        let data = [];
        if (project.level !== "") {
            try {
                data = await fetchListData({"level":project.level})
            } catch (error) {
                window.location.reload()
            }
            const genData = generateData(data)
            setData(genData)
        }
    }

    const generateData = (dataProject:any[]) => {
        let result: any[] = [{id:0,label:"Pilih Kegiatan Pembangunan"}]
        dataProject && dataProject.map((rkp: any) => {
            result.push({
                id:rkp.id,
                label:`${rkp.code} - ${rkp.value}`
            })
        })
        result.sort((a:{id:number,level:string},b:{id:number,level:string}) => a.id - b.id)
        return result
    }

    React.useEffect(() => {
        let y = {...project, id:value.id, value:value.label}
        setProject(y)
    }, [value])
    
    React.useEffect(() => {
        setListData()
    }, [project.level])

    return (listDataLoading) ?
        (
            <Skeleton animation="wave" variant="rounded" height={40} width={300} style={{borderRadius:40}} />
        )
        :
        (
            <FormControl size="small">
                <Autocomplete
                    size="small"
                    options={data}
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    value={value}
                    onChange={(event: any, newValue: any | null) => {
                        setValue(newValue ? newValue : initStateValue);
                    }}
                    renderInput={(params) => (
                        <Tooltip title={value.label} followCursor TransitionComponent={Grow}>
                            <TextField
                                {...params}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Pilih kegiatan pembangunan"
                                sx={SxAutocompleteTextField}
                            />
                        </Tooltip>
                    )}
                    sx={SxAutocomplete}
                />
            </FormControl>
        );
}

export const SxAutocompleteTextField = () => {
    return {
        "input::-webkit-input-placeholder": {
            //  color: "white",
            color: grey[600],
            opacity: 1,
            fontStyle: "italic",
            //  fontSize: 13,
        },
    };
};

export const SxAutocomplete = () => {
    return {
        minWidth: 300,
        color: theme.palette.primary.dark,
        ".MuiInputBase-root": {
            fontWeight: 600,
            fontSize: 14,
            py: 0,
            borderRadius: 6,
            bgcolor: "white",
            //   bgcolor: theme.palette.primary.main,
            [theme.breakpoints.down("md")]: {
                fontSize: 12,
            },
        },
        ".MuiSvgIcon-root": {
            //   fill: "white",
            fill: grey[600],
        },
        [theme.breakpoints.down("md")]: {
            minWidth: 200,
        },
    };
};
