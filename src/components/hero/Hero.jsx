import styled from "styled-components";
import { Container } from "../container/Container";
import { Button } from "../button/Button";
import { useInView } from "react-intersection-observer";

import bg from "../../assets2/home/showcase.jpg";
import bgW from "../../assets2/home/showcase.webp";
import bgW2 from "../../assets2/home/showcase@2x.webp";
import bg2 from "../../assets2/home/showcase@2x.jpg";

const Section = styled.section`
  width: 100%;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  height: 533px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${bg});

  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    image-set(url(${bg}) 1x, url(${bg2}) 2x);

  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    -webkit-image-set(url(${bgW}) 1x, url(${bgW2}) 2x);

  background-repeat: no-repeat;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 40px;
  @media screen and (max-width: 767px) {
    width: 200px;
  
    }
  }
`;
const Text = styled.p`
  margin-bottom: 24px;
  font-size: 26px;
  line-height: 32px;
`;
export const Hero = function () {
  const { ref } = useInView({ threshold: 0.1 });

  return (
    <Section ref={ref} id="home">
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
