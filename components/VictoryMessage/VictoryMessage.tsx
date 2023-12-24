import { StyledBox, Winner } from "./VictoryMessage.styles";
import { VictoryMessageProps } from "./VictoryMessage.types";

const VictoryMessage = ({ winner }: VictoryMessageProps) => {
  return (
    <StyledBox data-testid={"cypress-winner"}>
      <Winner>{winner} wins!</Winner>
    </StyledBox>
  );
};

export default VictoryMessage;
