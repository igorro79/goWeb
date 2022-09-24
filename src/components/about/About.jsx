import styled from "styled-components";
import { Container } from "../container/Container";
import { Button } from "../button/Button";
import bgImage from "../../assets/about/people1x.jpg";

const Section = styled.section`
  width: 100%;
  background-image: linear-gradient(#28a745, #28a745);
  //   text-align: center;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  width: 100%;

  background-repeat: no-repeat;
`;

const Banner = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  width: 50%;
  height: 220px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
`;

const TextWrapper = styled.div`
  padding: 79px 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  width: 50%;
`;

const Title = styled.h2`
  margin-bottom: 24px;

  font-size: 32px;
`;

const Text = styled.p`
  margin-bottom: ${(props) => props.mb || "16px"};
`;
export const About = function () {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Banner />{" "}
          <TextWrapper>
            <Text>What you are looking for</Text>
            <Title>We provide bespoke solutions</Title>
            <Text mb="24px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button>Read More</Button>
          </TextWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};
