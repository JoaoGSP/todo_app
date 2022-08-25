import Image from "next/image";
import React, { useState } from "react";
import CheckIcon from "../../../public/images/icon-check.svg";
import CheckBg from '../../../public/images/check-bg.svg'

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
} from "./style";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange} bg={CheckBg}>
      <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
      <StyledCheckbox checked={checked}>
        <Image alt="checkIcon" style={{ width: "25px" }} src={CheckIcon} />
      </StyledCheckbox>
    </CheckboxContainer>
  );
}
