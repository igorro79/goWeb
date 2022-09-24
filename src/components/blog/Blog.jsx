import styled from "styled-components";
import { Container } from "../container/Container";
import { Button } from "../button/Button";
import mobile from "../../assets/blog/mobile.jpg";

const Section = styled.section`
  width: 100%;
  background-color: #0284d0;
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
  background-image: url(${mobile});
  background-repeat: no-repeat;
`;

const TextWrapper = styled.div`
  padding: 48px 20px 58px;
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
export const Blog = function () {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Banner />{" "}
          <TextWrapper>
            <Text>April 16 2020</Text>
            <Title>Blog Post One</Title>
            <Text mb="24px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button color noMargin>
              Read Our Blog
            </Button>
          </TextWrapper>
        </Wrapper>
      </Container>
    </Section>
  );
};
