import React from "react";
import {
    Box,
    Chip,
    FormControl,
    Grow,
    MenuItem,
    Paper,
    SelectChangeEvent,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import theme from "@/theme";
import SelectCustomTheme from "../select";
import DropdownKp from "../dropdownKp";
import { grey } from "@mui/material/colors";
import { usePathname } from "next/navigation";
import { listSelectKp } from "@/app/executive-summary/data";
import { listTriwulan } from "@/app/utils/data";
import DateRangePicker from "@/components/dateRange";

export default function ContentPage({
                                        title,
                                        children,
                                        withCard,
                                        chooseKonteks,
                                        chooseProject,
                                        chooseRo,
                                        chipRo,
                                        chooseProjectPage,
                                        titleChild,
                                        breadcrumb,
                                        noPadding,
                                        heightTitleBreadcrumb,
                                        overflowHidden,
                                        addButton,
                                        project,
                                        handleChangeProject,
                                        dowloadAttachmentFile,
                                        triWulan,
                                        hasAlert,
                                        chipKp,
                                        sxCard,
                                        dateRangeDropdown
                                    }: {
    children: React.ReactNode;
    title?: string;
    withCard?: boolean;
    noPadding?: boolean;
    chooseProject?: React.ReactNode;
    chooseProjectPage?: React.ReactNode;
    chooseKonteks?: boolean;
    chooseRo?: boolean;
    chipRo?: boolean;
    heightTitleBreadcrumb?: boolean;
    titleChild?: React.ReactNode;
    breadcrumb?: React.ReactNode;
    overflowHidden?: boolean;
    addButton?: React.ReactNode;
    project?: any;
    handleChangeProject?: any;
    dowloadAttachmentFile?: React.ReactNode;
    triWulan?: boolean;
    hasAlert?: React.ReactNode;
    chipKp?: boolean;
    sxCard?: React.CSSProperties;
    dateRangeDropdown?: boolean;
}) {
    const [konteks, setKonteks] = React.useState("");
    const [roDropdown, setRoDropdown] = React.useState("");
    const [triwulanDropdown, setTriwulanDropdown] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleChangeKonteks = (event: SelectChangeEvent) => {
        setKonteks(event.target.value);
    };
    const handleChangeRo = (event: SelectChangeEvent) => {
        setRoDropdown(event.target.value);
    };
    const handleChangeTriwulan = (event: SelectChangeEvent) => {
        setTriwulanDropdown(event.target.value);
    };

    const konteksLabel =
        "Penguatan Kebijakan Perlindungan Akses Pasar Dalam Negeri";

    const listRo = [
        "Pemantauan tumbuh kembang balita",
        "Peningkatan sanitasi",
        "Peningkatan ketersediaan pangan keluarga 1000 HPK"
    ];

    const labelChipRo = "Peningkatan ketersediaan pangan keluarga 1000 HPK";

    const pathname = usePathname();
    const flagPathnameTheme = [pathname === "/", pathname === "/tema"].includes(
        true
    );

    const nameOfKp = listSelectKp[4].name;

    const currentDate = new Date();

    const minDate = new Date();
    const maxDate = new Date();

    minDate.setFullYear(currentDate.getFullYear() - 10);
    maxDate.setFullYear(currentDate.getFullYear() + 20);

    return (
        <Box>
            {flagPathnameTheme ? (
                <Stack
                    // bgcolor={theme.palette.secondary.dark}
                    width="calc(100% + 84px)"
                    // height="200px"
                    m="-42px"
                    mb={0}
                    px={4}
                    //  pt={6}
                    pt={0}
                    pb={20}
                    direction="row"
                    alignItems="center"
                    sx={{
                        background:
                        //  "linear-gradient(0deg,rgba(0, 0, 0, 0) 20%, rgba(31, 41, 55, 1) 100%),linear-gradient(350deg,rgba(0, 0, 0, 0.2) 20%, rgba(31, 41, 55, 0.92) 60%), url(https://res.cloudinary.com/caturteguh/image/upload/v1715503420/mrpn/bg-page_mynfvi.jpg)",
                            "linear-gradient(0deg, rgba(0, 0, 0, 0) 20%, rgba(31, 41, 55, 1) 100%), url(https://res.cloudinary.com/caturteguh/image/upload/v1715503420/mrpn/bg-page_mynfvi.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center 70%"
                    }}
                >
                    <Stack>
                        <Stack direction="row" alignItems="center" mb={2}>
                            <Box
                                component="img"
                                src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
                                alt="MRPN 2024"
                                sx={{
                                    //  display: "flex",
                                    //  alignItems: "center",
                                    width: "50px"
                                }}
                            />
                        </Stack>
                        <Typography color={grey[400]} component="div" mb={1}>
                            Selamat datang <strong>Administrator</strong>,
                        </Typography>
                        <Stack direction="row" gap={2} alignItems="center">
                            <Stack direction="row" alignItems="center">
                                <Box
                                    //  component="img"
                                    //  src="https://res.cloudinary.com/caturteguh/image/upload/v1708049745/mrpn/logo-2024_ne4yaj.png"
                                    //  alt="MRPN 2024"
                                    sx={{
                                        //  display: "flex",
                                        //  alignItems: "center",
                                        width: "30px"
                                    }}
                                />
                            </Stack>
                            <Box>
                                <Typography
                                    component="p"
                                    // fontWeight="700"
                                    // fontSize="20px"
                                    fontWeight={700}
                                    fontSize="2em"
                                    letterSpacing="0.5px"
                                    lineHeight={1.1}
                                    color="white"
                                    sx={{
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "1em",
                                            lineHeight: 1.2
                                        }
                                    }}
                                >
                                    <Box
                                        component="span"
                                        color={theme.palette.primary.main}
                                        textTransform="uppercase"
                                    >
                                        Na
                                    </Box>
                                    tional{" "}
                                    <Box
                                        component="span"
                                        color={theme.palette.primary.main}
                                        textTransform="uppercase"
                                    >
                                        R
                                    </Box>
                                    i
                                    <Box
                                        component="span"
                                        color={theme.palette.primary.main}
                                        textTransform="uppercase"
                                    >
                                        s
                                    </Box>
                                    k{" "}
                                    <Box
                                        component="span"
                                        sx={{
                                            [theme.breakpoints.up("md")]: {
                                                display: "none"
                                            }
                                        }}
                                    >
                                        <br />
                                    </Box>
                                    <Box
                                        component="span"
                                        color={theme.palette.primary.main}
                                        textTransform="uppercase"
                                    >
                                        I
                                    </Box>
                                    nformation{" "}
                                    <Box
                                        component="span"
                                        color={theme.palette.primary.main}
                                        textTransform="uppercase"
                                    >
                                        S
                                    </Box>
                                    ystem
                                </Typography>
                            </Box>
                        </Stack>
                        {/* <Typography
      color="#009fe5"
      fontWeight={700}
      fontSize="2em"
      component="div"
      lineHeight={1.2}
      textTransform="uppercase"
     >
      Sistem Manajemen Risiko
      <br />
      Pembangunan Nasional
     </Typography> */}
                    </Stack>
                </Stack>
            ) : null}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb="1.25rem"
                mt={flagPathnameTheme ? "-180px" : 0}
                // sx={{
                //  [theme.breakpoints.down("md")]: {
                //   flexDirection: "column",
                //   gap: 3,
                //  },
                // }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={1}
                    width="100%"
                >
                    <Stack direction="row" alignItems="center" gap={2}>
                        <Stack direction="column">
                            {breadcrumb}
                            {title && (
                                <Typography
                                    component="h2"
                                    fontWeight="600"
                                    fontSize="1.25rem"
                                    textTransform="capitalize"
                                >
                                    {title}
                                </Typography>
                            )}
                        </Stack>
                        {titleChild}
                        {chipKp && (
                            <Chip
                                color="primary"
                                variant="outlined"
                                label={
                                    <>
                                        <Stack direction="row" alignItems="center">
                                            <Stack
                                                direction="row"
                                                bgcolor={theme.palette.primary.main}
                                                px={2}
                                                alignItems="center"
                                                height="34px"
                                                sx={{
                                                    borderTopLeftRadius: 24,
                                                    borderBottomLeftRadius: 24
                                                }}
                                            >
                                                <Typography
                                                    fontSize={13}
                                                    color="white"
                                                    fontWeight={600}
                                                    lineHeight={1}
                                                >
                                                    KP
                                                </Typography>
                                            </Stack>
                                            <Typography px={1.5} fontSize={13} fontWeight={600}>
                                                {nameOfKp}
                                            </Typography>
                                        </Stack>
                                    </>
                                }
                                sx={{
                                    height: "34px",
                                    bgcolor: "white",
                                    fontWeight: 600,
                                    lineHeight: 1,
                                    cursor: "default",

                                    ".MuiChip-label": {
                                        px: 0
                                    }
                                }}
                            />
                        )}
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1}>
                    {chooseProjectPage}
                    {dowloadAttachmentFile}
                    {chooseProject && (
                        <>
                            <DropdownKp />

                            {/* <FormControl size="small">
        <SelectCustomTheme small value={project} onChange={handleChangeProject}>
         <MenuItem value="" disabled>
          <Typography fontSize={14} fontStyle="italic">
           Pilih Kegiatan Pembangunan (KP)
          </Typography>
         </MenuItem>
         <MenuItem value="1" defaultChecked>
          KP.02 - Penurunan stunting
         </MenuItem>
         <MenuItem value="2">
          KP.03 - Peningkatan pelayanan kesehatan...
         </MenuItem>
         <MenuItem value="3">
          KP.04 - Penyediaan Akses Terhadap Rumah...
         </MenuItem>
        </SelectCustomTheme>
       </FormControl> */}
                        </>
                    )}
                    {chooseRo && (
                        <FormControl size="small">
                            <SelectCustomTheme
                                rounded
                                small
                                anchorRight
                                value={roDropdown}
                                onChange={handleChangeRo}
                            >
                                <MenuItem value="" disabled>
                                    <Typography
                                        fontSize={14}
                                        fontStyle="italic"
                                        color={grey[600]}
                                        fontWeight={600}
                                    >
                                        Pilih rincian output
                                    </Typography>
                                </MenuItem>
                                {listRo.map((roLabel, index) => (
                                    <MenuItem key={index} value={roLabel}>
                                        {roLabel.length >= 35 ? (
                                            <Tooltip title={roLabel} followCursor TransitionComponent={Grow}>
                                                <Typography
                                                    aria-owns={open ? "mouse-over-popover" : undefined}
                                                    aria-haspopup="true"
                                                    onMouseEnter={handlePopoverOpen}
                                                    onMouseLeave={handlePopoverClose}
                                                    sx={{ fontSize: 14 }}
                                                >
                                                    {roLabel.substring(0, 35) + "..."}
                                                </Typography>
                                            </Tooltip>
                                        ) : (
                                            roLabel
                                        )}
                                    </MenuItem>
                                ))}
                            </SelectCustomTheme>
                        </FormControl>
                    )}
                    {chipRo && (
                        <Chip
                            color="primary"
                            variant="outlined"
                            label={
                                labelChipRo.length >= 40 ? (
                                    <>
                                        <Stack direction="row" alignItems="center">
                                            <Stack
                                                direction="row"
                                                bgcolor={theme.palette.primary.main}
                                                px={2}
                                                alignItems="center"
                                                height="34px"
                                                sx={{
                                                    borderTopLeftRadius: 24,
                                                    borderBottomLeftRadius: 24
                                                }}
                                            >
                                                <Typography
                                                    fontSize={14}
                                                    color="white"
                                                    fontWeight={600}
                                                    lineHeight={1}
                                                >
                                                    Rincian Output
                                                </Typography>
                                            </Stack>
                                            <Tooltip title={labelChipRo} followCursor TransitionComponent={Grow}>
                                                <Typography
                                                    aria-owns={open ? "mouse-over-popover" : undefined}
                                                    aria-haspopup="true"
                                                    onMouseEnter={handlePopoverOpen}
                                                    onMouseLeave={handlePopoverClose}
                                                    px={1.5}
                                                    fontSize={14}
                                                    fontWeight={600}
                                                >
                                                    {labelChipRo.substring(0, 40) + "..."}
                                                </Typography>
                                            </Tooltip>
                                        </Stack>
                                    </>
                                ) : (
                                    labelChipRo
                                )
                            }
                            sx={{
                                height: "34px",
                                bgcolor: "white",
                                fontWeight: 600,
                                lineHeight: 1,
                                cursor: "default",

                                ".MuiChip-label": {
                                    px: 0
                                }
                            }}
                        />
                    )}
                    {/* {chipKp && (
      <Chip
       color="primary"
       variant="outlined"
       label={
        <>
         <Stack direction="row" alignItems="center">
          <Stack
           direction="row"
           bgcolor={theme.palette.primary.main}
           px={2}
           alignItems="center"
           height="34px"
           sx={{
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
           }}
          >
           <Typography
            fontSize={13}
            color="white"
            fontWeight={600}
            lineHeight={1}
           >
            KP
           </Typography>
          </Stack>
          <Tooltip title={nameOfKp} followCursor TransitionComponent={Grow}>
           <Typography
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            px={1.5}
            fontSize={12}
            fontWeight={600}
           >
            {nameOfKp.length >= 40
             ? nameOfKp.substring(0, 40) + "..."
             : nameOfKp}
            {nameOfKp}
           </Typography>
          </Tooltip>
         </Stack>
        </>
       }
       sx={{
        height: "34px",
        bgcolor: "white",
        fontWeight: 600,
        lineHeight: 1,
        cursor: "default",

        ".MuiChip-label": {
         px: 0,
        },
       }}
      />
     )} */}
                    {chooseKonteks && (
                        <FormControl size="small">
                            <SelectCustomTheme
                                rounded
                                small
                                anchorRight
                                value={konteks}
                                onChange={handleChangeKonteks}
                            >
                                <MenuItem value="" disabled>
                                    <Typography
                                        fontSize={14}
                                        fontStyle="italic"
                                        color={grey[600]}
                                        fontWeight={600}
                                    >
                                        Pilih konteks strategis
                                    </Typography>
                                </MenuItem>
                                <MenuItem value="1" defaultChecked>
                                    {konteksLabel.length >= 35 ? (
                                        <Tooltip title={konteksLabel} followCursor TransitionComponent={Grow}>
                                            <Typography
                                                aria-owns={open ? "mouse-over-popover" : undefined}
                                                aria-haspopup="true"
                                                onMouseEnter={handlePopoverOpen}
                                                onMouseLeave={handlePopoverClose}
                                                sx={{ fontSize: 14 }}
                                            >
                                                {konteksLabel.substring(0, 35) + "..."}
                                            </Typography>
                                        </Tooltip>
                                    ) : (
                                        konteksLabel
                                    )}
                                </MenuItem>
                            </SelectCustomTheme>
                        </FormControl>
                    )}
                    {triWulan && (
                        <FormControl size="small">
                            <SelectCustomTheme
                                rounded
                                small
                                anchorRight
                                value={triwulanDropdown}
                                onChange={handleChangeTriwulan}
                            >
                                <MenuItem value="" disabled>
                                    <Typography
                                        fontSize={14}
                                        fontStyle="italic"
                                        color={grey[600]}
                                        fontWeight={600}
                                    >
                                        Pilih periode
                                    </Typography>
                                </MenuItem>
                                {listTriwulan.map((triwulanLabel, index) => (
                                    <MenuItem key={index} value={triwulanLabel}>
                                        {triwulanLabel.length >= 35 ? (
                                            <Tooltip
                                                title={triwulanLabel}
                                                followCursor
                                                TransitionComponent={Grow}
                                            >
                                                <Typography
                                                    aria-owns={open ? "mouse-over-popover" : undefined}
                                                    aria-haspopup="true"
                                                    onMouseEnter={handlePopoverOpen}
                                                    onMouseLeave={handlePopoverClose}
                                                    sx={{ fontSize: 14 }}
                                                >
                                                    {triwulanLabel.substring(0, 35) + "..."}
                                                </Typography>
                                            </Tooltip>
                                        ) : (
                                            triwulanLabel
                                        )}
                                    </MenuItem>
                                ))}
                            </SelectCustomTheme>
                        </FormControl>
                    )}
                    {dateRangeDropdown && (
                        <DateRangePicker
                            small
                            placeholder="Pilih periode"
                            rounded
                            sxInput={{
                                backgroundColor: "red"
                            }}
                        />
                    )}
                    {addButton && addButton}
                </Stack>
            </Stack>
            {hasAlert && hasAlert}
            <Box
                height={
                    heightTitleBreadcrumb
                        ? "calc(100vh - 258px)"
                        : overflowHidden
                            ? "calc(100vh - 244px)"
                            : flagPathnameTheme
                                ? "calc(100vh - 328px)"
                                : "calc(100vh - 244px)"
                }
                overflow={overflowHidden ? "hidden" : "auto"}
                margin={-1}
                sx={{
                    overflowX: "hidden",
                    "&::-webkit-scrollbar": {
                        width: "3px"
                    },
                    [theme.breakpoints.down("sm")]: { height: "auto" }
                }}
            >
                {withCard ? (
                    <Paper
                        elevation={2}
                        sx={{
                            borderRadius: "1.25rem",
                            p: noPadding ? 0 : "1.5rem",
                            m: 1,
                            ...sxCard
                        }}
                    >
                        {children}
                    </Paper>
                ) : (
                    children
                )}
            </Box>
        </Box>
    );
}
