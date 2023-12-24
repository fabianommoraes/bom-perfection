import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(() => ({
  display: "inline-flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: "25px",
  marginBottom: "35px",
  justifyContent: "center",
  alignItems: "center"
}));

export const StyledButton = styled(Button)(() => ({
  textTransform: "none",
  padding: "12px 30px",
  fontSize: "18px"
}));

StyledButton.defaultProps = {
  color: "success"
};
