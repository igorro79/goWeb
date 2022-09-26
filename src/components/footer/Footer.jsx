import styled from "styled-components";
import { Container } from "../container/Container";
import { Social } from "../social/Social";

const Section = styled.footer`
  width: 100%;

  background-color: #333333;
  text-align: center;
  color: #fff;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 30px 20px;
`;

const Text = styled.p`
  margin-top: 12px;
  margin-bottom: ${(props) => props.mb || "16px"};
`;

export const Footer = function () {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Social footer />
          <Text>Copyright © 2021 - FinanceLedger</Text>
        </Wrapper>
      </Container>
    </Section>
  );
};
