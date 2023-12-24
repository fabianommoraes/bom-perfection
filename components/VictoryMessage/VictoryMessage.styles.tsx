import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(() => ({
  borderRadius: "4px",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  marginBottom: "35px",
  backgroundColor: "#E1F8FF",
  padding: "18px 28px",
  width: "100%",
  border: "1px solid black"
}));

export const Winner = styled(Typography)(() => ({
  fontSize: "22px"
}));
