import styled from "styled-components";

const Wrapper = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;

export const Container = function ({ children }, ...rest) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
