// import { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";

const StyledButton = styled.button`
  display: flex;
  margin-left: ${(props) => (props.noMargin ? 0 : "auto")};
  margin-right: ${(props) => (props.noMargin ? 0 : "auto")};
  align-items: center;
  padding: 16px 32px;
  border: ${(props) => (props.primary ? "none" : "1px solid #fff")};
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#28a745" : "transparent")};
  cursor: pointer;
  &:hover {
    border: ${(props) =>
      props.primary
        ? null
        : props.color
        ? "1px solid #0284D0"
        : "1px solid #28A745"};
    color: ${(props) =>
      props.primary ? "#fff" : props.color ? "#0284D0" : "#28A745"};
    background-color: ${(props) => (props.primary ? "#2ebf4f" : "#fff")};
  }

  ${(props) =>
    props.arrow &&
    `&::before {
        content: "";
    margin-right: 8px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    width: 9px;
    height: 14px;
    display: inline-block;
  }`}
`;
export const Button = function ({ children, ...rest }) {
  console.log(rest);

  return <StyledButton {...rest}>{children}</StyledButton>;
};
