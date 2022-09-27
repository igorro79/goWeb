import { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { Container } from "../container/Container";
import { Form } from "../form/Form";
import bg from "../../assets2/home/contact.jpg";
import bg2 from "../../assets2/home/contact@2x.jpg";
import bgW from "../../assets2/home/contact.webp";
import bgW2 from "../../assets2/home/contact@2x.webp";

const Section = styled.section`
  width: 100%;
  background-color: #f4f4f4;

  color: #333;
`;

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) and (max-width: 1359px) {
    margin-bottom: 40px;
  }
  width: 100%;
`;

const Thumb = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 354px;
  }
  @media screen and (min-width: 1360px) {
    width: 670px;
    height: 454px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  padding: 51px 20px 0px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  width: 50%;
`;

const Title = styled.h2`
  margin-bottom: 69px;
  font-size: 32px;
`;

export const Contacts = function ({ onChange }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
  });
  const isVisible = inView && entry.isIntersecting;

  useEffect(() => {
    if (isVisible) onChange(entry.target.id);
  }, [isVisible, onChange]);

  return (
    <Section ref={ref} id="contacts">
      <Container>
        <Wrapper>
          <Thumb>
            <picture>
              <source srcSet={`${bgW} 1x, ${bgW2} 2x`} type="image/webp" />
              <source srcSet={`${bg} 1x, ${bg2} 2x `} type="image/jpeg" />
              <Img src={bg} alt="coworker" />
            </picture>
          </Thumb>
          <TextWrapper>
            <Title>Request Callback</Title>
            <Form />
          </TextWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};
