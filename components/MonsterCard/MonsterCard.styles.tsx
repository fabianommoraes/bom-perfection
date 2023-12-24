import { styled } from "@mui/material/styles";

import Image from "next/image";

export const MonsterImage = styled(Image)(() => ({
  borderRadius: "7px",
  marginBottom: "7px"
}));

export const StyledCard = styled("div")(() => ({
  padding: "6px",
  cursor: "pointer",
  border: "1px solid transparent",
  "&:hover": {
    border: "1px solid #10782E"
  },
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px"
}));

export const RadioButtonInput = styled("input")(() => ({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  "&:checked + div": {
    border: "1px solid #000"
  },
  "&:focus + div": {
    border: "1px solid #000"
  }
}));
