import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import errorIcon from "../../assets2/form/worning.svg";

import { Button } from "../button/Button";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const StyledForm = styled.form`
  margin-bottom: 24px;
`;

const InputWrapper = styled.label`
  display: block;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 16px 8px;
  border: none;
  outline: none;
`;
const Error = styled.p`
  position: absolute;
  left: 20px;
  bottom: -14px;
  font-size: 12px;
  padding: 0;
  color: red;
  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-image: url(${errorIcon});
    left: -16px;
    top: 0;
  }
`;
export function Form() {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data) => {
  //   alert(
  //     `Dear ${data.name} Thanks for registration! Please check your email: ${data.email}`
  //   );
  //   reset();
  // };

  return (
    <StyledForm
      data-netlify="true"
      netlify-honeypot="bot-field"
      name="contacts"
      onSubmit={handleSubmit()}
    >
      <input type="hidden" name="form-name" value="contacts" />
      <InputWrapper>
        <Input
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <Error errors={errors.length}>{errors.name?.message}</Error>
        )}
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="Enter your email*"
          {...register("email", { required: true })}
        />
        {errors.email && <Error>{errors.email?.message}</Error>}
      </InputWrapper>

      <Button type="submit" primary noMargin aria-label="Submit form">
        Send
      </Button>
    </StyledForm>
  );
}
