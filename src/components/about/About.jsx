import styled from "styled-components";
import { Container } from "../container/Container";
import { Button } from "../button/Button";
import { useInView } from "react-intersection-observer";

import bg from "../../assets2/home/people.jpg";
import bg2 from "../../assets2/home/people@2x.jpg";
import bgW from "../../assets2/home/people.webp";
import bgW2 from "../../assets2/home/people@2x.webp";

const Section = styled.section`
  width: 100%;
  background-image: linear-gradient(#28a745, #28a745);
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
  height: 590px;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 220px;
  }
  @media screen and (min-width: 1360px) {
    width: 680px;
    height: 460px;
  }
`;
const Img = styled.img`
  width: 100%;

  height: 100%;
  object-fit: cover;
`;
const TextWrapper = styled.div`
  padding: 62px 32px;
  font-size: 18px;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 79px 20px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 30px 80px 20px;
  }
  width: 50%;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 44px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Text = styled.p`
  line-height: 22px;
  @media screen and (min-width: 768px) {
    line-height: 25px;
  }

  margin-bottom: ${(props) => props.mb || "16px"};
`;
export const About = function () {
  const { ref, inView, entry } = useInView({ threshold: 1 });
  const isVisible = inView && entry.isIntersecting;
  console.log(isVisible);
  return (
    <Section ref={ref} id="about">
      <Container>
        <Wrapper>
          <Banner>
            <picture>
              <source srcSet={`${bgW} 1x, ${bgW2} 2x`} type="image/webp" />
              <source srcSet={`${bg} 1x, ${bg2} 2x `} type="image/jpeg" />
              <Img src={bg} alt="people" />
            </picture>
          </Banner>
          <TextWrapper>
            <Text>What you are looking for</Text>
            <Title>We provide bespoke solutions</Title>
            <Text mb="24px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button noMargin>Read More</Button>
          </TextWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};
