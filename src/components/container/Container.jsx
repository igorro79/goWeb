import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;

export const Container = function ({ children }, ...rest) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
