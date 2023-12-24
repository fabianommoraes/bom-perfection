import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledCardProps } from "./FullCard.types";

export const StyledCard = styled(Card)<StyledCardProps>(({ selected }) => ({
  padding: "12px",
  height: "415px",
  display: "flex",
  justifyContent: "center",
  alignItems: selected ? "start" : "center"
}));
