import { BorderLinearProgress, StatName } from "./Stat.styles";
import { Box } from "@mui/material";
import { StatProps } from "./Stat.types";

const Stat = ({ name, value }: StatProps) => {
  return (
    <Box>
      <StatName variant="caption">{name}</StatName>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
  );
};

export default Stat;
