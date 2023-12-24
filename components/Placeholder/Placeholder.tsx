import { StyledTypography } from "./Placeholder.styles";
import { PlaceHolderProps } from "./Placeholder.types";

const Placeholder = ({ name }: PlaceHolderProps) => {
  return <StyledTypography>{name}</StyledTypography>;
};

export default Placeholder;
