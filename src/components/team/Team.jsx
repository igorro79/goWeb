import styled from "styled-components";
// import { useInView } from "react-intersection-observer";

import { Container } from "../container/Container";
import { pictures } from "../../assets2/team";
import { TeammateCard } from "../teammateCard/teammateCard";

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  text-align: center;
  color: #333333;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 56px 20px 40px;
  @media screen and (min-width: 768px) {
    padding: 80px 28px 88px;
  }
`;

const Title = styled.h2`
  @media screen and (max-width: 767px) {
    width: 200px;
  }
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  font-size: 32px;
`;

const Text = styled.p`
  margin-bottom: ${(props) => props.mb || "16px"};
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
  }
  @media screen and (min-width: 1360px) {
    grid-template-columns: 420px 420px 420px;

    grid-gap: 20px;
  }
`;

export const Team = function () {
  return (
    <Section id="team">
      <Container>
        <Wrapper>
          <Text>Who we are</Text>
          <Title>Our Professional Team</Title>
          <Text mb="31px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
          <Gallery>
            <TeammateCard
              picture={pictures[0]}
              name="John Doe"
              position="President"
            />
            <TeammateCard
              picture={pictures[1]}
              name="Jane Doe"
              position="Vice President"
            />
            <TeammateCard
              picture={pictures[2]}
              name="Steve Smith"
              position="Marketing Head"
            />
          </Gallery>
          <Gallery></Gallery>
        </Wrapper>
      </Container>
    </Section>
  );
};
