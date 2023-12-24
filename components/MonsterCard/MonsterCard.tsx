// import { Typography } from "@mui/material";
// import {
//   StyledCard,
//   MonsterImage,
//   StyledInput,
//   RadioButtonWrappingLabel,
//   RadioButtonInput
// } from "./MonsterCard.styles";
// import { MonsterCardProps } from "./MonsterCard.types";

// const MonsterCard = ({
//   id,
//   name,
//   imageUrl,
//   onChange,
//   selectedMonster
// }: MonsterCardProps) => {
//   return (
//     <>
//       <StyledCard htmlFor={id} checked={selectedMonster === id}>
//         <MonsterImage src={imageUrl} width={137} height={99} alt={name} />
//         <StyledInput
//           type="radio"
//           name={name}
//           id={id}
//           value={id}
//           onChange={onChange}
//           checked={selectedMonster === id}
//         />
//         <Typography variant={"subtitle1"}>{name}</Typography>
//       </StyledCard>
//       {/* <RadioButtonWrappingLabel>
//         <RadioButtonInput
//           type="radio"
//           id={id}
//           name={name}
//           value={id}
//           checked={selectedMonster === id}
//           onChange={onChange}
//         />
//         <span>{name}</span>
//       </RadioButtonWrappingLabel> */}
//     </>
//   );
// };

// export default MonsterCard;

import React from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Typography } from "@mui/material";
import { MonsterCardProps } from "./MonsterCard.types";
import {
  StyledCard,
  MonsterImage,
  RadioButtonInput
} from "./MonsterCard.styles";

const MonsterCard = ({
  id,
  name,
  value,
  checked,
  labelText,
  imageUrl,
  onChange
}: MonsterCardProps) => {
  return (
    <label htmlFor={id}>
      <RadioButtonInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <StyledCard data-testid={`card-${id}`}>
        <MonsterImage src={imageUrl} width={137} height={99} alt={labelText} />
        <Typography variant={"subtitle1"}>{labelText}</Typography>
      </StyledCard>
    </label>
  );
};

export default MonsterCard;
