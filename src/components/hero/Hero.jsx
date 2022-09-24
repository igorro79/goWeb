import styled from "styled-components";
import { Container } from "../container/Container";
import { Button } from "../button/Button";
import bgImage from "../../assets/hero/city1x.jpg";

const Section = styled.section`
  width: 100%;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));

  color: #fff;
`;
const Wrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 533px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${bgImage});
  background-repeat: no-repeat;
`;
const Title = styled.h1`
  padding-top: 160px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;

  width: 200px;
  font-size: 40px;
`;

const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  font-size: 26px;
  line-height: 32px;
`;
export const Hero = function () {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>The Sky Is The Limit</Title>
          <Text>We provide world class financial assistance</Text>
          <Button primary arrow>
            Read More
          </Button>
        </Wrapper>
      </Container>
    </Section>
  );
};
