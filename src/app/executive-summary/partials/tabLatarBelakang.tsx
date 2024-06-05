import React from "react";
import { Stack } from "@mui/material";
import CardSwot from "./tabBackground/cardSwot";
import CardGoals from "./tabBackground/cardGoals";
import CardTagging from "./tabBackground/cardTagging";
import CardSegment from "./tabBackground/cardSegment";

export default function TabLatarBelakang() {
    return (
        <Stack gap={1}>
            <CardSwot />
            <CardGoals />
            <CardTagging />
            <CardSegment />
        </Stack>
    );
}
