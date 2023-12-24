import { Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const MonsterImage = styled(Image)(() => ({
  borderRadius: "7px",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  marginBottom: "14px"
}));

MonsterImage.defaultProps = {
  width: 283,
  height: 178
};

export const MonsterName = styled(Typography)(() => ({
  marginBottom: "5px",
  fontSize: "22px"
}));

export const StyledDivider = styled(Divider)(() => ({
  marginBottom: "11px"
}));
