import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 4,
  marginBottom: "11px",
  boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.25)",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#D9D9D9"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
    backgroundColor: "#00FF00"
  },
  minWidth: "100px"
}));

export const StatName = styled(Typography)(() => ({
  marginBottom: "5px"
}));
