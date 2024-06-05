import theme from "@/theme";
import {
    Box,
    TextField,
    Paper,
    Stack,
    Typography,
    FormGroup, Checkbox, FormControlLabel
} from "@mui/material";
import { TemaRequest } from "@/app/tema/repositories";

export default function ListRKP(
    {
        data,
        requestTema,
        setRequestTema,
        setApSearchValue,
    }: {
        data: any[],
        requestTema: TemaRequest;
        setRequestTema: any;
        setApSearchValue:any;
    }
) {
    return (
        <Paper variant="outlined" sx={{ minWidth: "100% !important", p: 2 }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography>Pilih AP
                    <Typography fontWeight={600} fontSize={14} component="span"></Typography>
                </Typography>
                <Box
                    sx={{ ".MuiInputBase-root": { borderRadius: "50px" } }}
                >
                    <TextField
                        onChange={(event) => setApSearchValue(event.target.value)}
                        variant="outlined"
                        size="small"
                        placeholder="Cari AP"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
            </Stack>
            <Box
                mt={2}
                sx={{
                    maxHeight: "30vh",
                    //  maxHeight: "15vh",
                    overflow: "auto",
                    "&::-webkit-scrollbar": {
                        width: "3px",
                    },
                }}
            >
                <FormGroup>
                    {
                        data && data.map((post: any) => {
                            return <FormControlLabel
                                key={post.id}
                                control={<Checkbox
                                    value={post.id}
                                    checked={requestTema.ap_ids.indexOf(post.id) !== -1}
                                    onClick={(event: any) => {
                                        const index = requestTema.ap_ids.indexOf(post.id)
                                        let curVal = {...requestTema}

                                        if (event.target.checked && index === -1) {
                                            curVal.ap_ids.push(post.id)
                                        }
                                        if (!event.target.checked && index !== -1) {
                                            curVal.ap_ids.splice(index, 1)
                                        }
                                        setRequestTema(curVal)
                                    }}

                                />}
                                label={
                                    <Stack direction="row" gap={1}>
                                        <Typography color={theme.palette.secondary.dark}>{post.code}</Typography> -{" "}
                                        <Typography color={theme.palette.secondary.dark}>{post.value}</Typography>
                                    </Stack>
                                }
                            />;
                        })
                    }
                </FormGroup>
            </Box>
        </Paper>

    )
}