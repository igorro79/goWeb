import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { Container } from "../container/Container";
import { Button } from "../button/Button";
import bg from "../../assets2/home/blog.jpg";
import bg2 from "../../assets2/home/blog@2x.jpg";
import bgW from "../../assets2/home/blog.webp";
import bgW2 from "../../assets2/home/blog@2x.webp";
import { useEffect } from "react";

const Section = styled.section`
  width: 100%;
  background-color: #0284d0;
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
  height: 493px;
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
  padding: 48px 20px 58px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    // width: 100%;
    padding: 59px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 30px 80px 20px;
  }
  width: 50%;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 54px;
  }
`;

const Text = styled.p`
  margin-bottom: ${(props) => props.mb || "16px"};
  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 25px;
  }
`;
export const Blog = function ({ onChange }) {
  const { ref, inView, entry } = useInView({ threshold: 0.8 });
  const isVisible = inView && entry.isIntersecting;

  useEffect(() => {
    if (isVisible) onChange(entry.target.id);
  }, [isVisible, onChange]);

  return (
    <Section ref={ref} id="blog">
      <Container>
        <Wrapper>
          <TextWrapper>
            <Text>April 16 2020</Text>
            <Title>Blog Post One</Title>
            <Text mb="24px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button
              color="true"
              noMargin
              aria-label="Read our blog"
              type="button"
            >
              Read Our Blog
            </Button>
          </TextWrapper>{" "}
          <Banner>
            <picture>
              <source srcSet={`${bgW} 1x, ${bgW2} 2x`} type="image/webp" />
              <source srcSet={`${bg} 1x, ${bg2} 2x `} type="image/jpeg" />
              <Img src={bg} alt="notebook" />
            </picture>
          </Banner>
        </Wrapper>
      </Container>
    </Section>
  );
};
