import React from "react";

import { useSelector } from "react-redux";

import { themeProps } from "../../Redux/features/theme/themeSlice";

import { Container } from "./style";

export default function Header() {
  const themeDefinitions = useSelector(themeProps)

  return <Container theme={{themeDefinitions}}/>;
}
