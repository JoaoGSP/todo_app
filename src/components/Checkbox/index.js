import React, { useState } from "react";

import {useSelector} from 'react-redux'
import { themeProps } from "../../Redux/features/theme/themeSlice";



import {
  CheckboxContainer,
  HiddenCheckbox,
} from "./style";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);
  const theme = useSelector(themeProps)

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange} theme={{theme}}>
      <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
    </CheckboxContainer>
  );
}
