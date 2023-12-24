import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title = styled(Typography)(() => ({
  marginBottom: "35px",
  marginTop: "63px",
  fontSize: "36px"
}));

Title.defaultProps = {
  variant: "h1"
};

export const SelectMessage = styled(Typography)(() => ({
  marginBottom: "14px",
  fontSize: "22px"
}));

SelectMessage.defaultProps = {
  variant: "h2"
};

export const StyledBox = styled("fieldset")(() => ({
  display: "inline-flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: "16px",
  marginBottom: "35px",
  justifyContent: "center",
  alignItems: "center",
  border: "none"
}));

export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column"
}));
