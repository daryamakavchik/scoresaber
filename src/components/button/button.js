import React from "react";
import { ButtonStyled } from "./button.styled";

function Button({ children }) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

export default Button;
