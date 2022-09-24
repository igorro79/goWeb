import styled from "styled-components";
import { Container } from "../container/Container";
import { images, images2x } from "../../assets/cases";
import image1 from "../../assets/cases/r1.jpg";

const Section = styled.section`
  width: 100%;
  background-image: linear-gradient(#28a745, #28a745);
  text-align: center;
  color: #333333;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 56px 20px 40px;
`;

const Title = styled.h2`
  margin-bottom: 24px;

  font-size: 32px;
`;

const Text = styled.p`
  margin-bottom: ${(props) => props.mb || "16px"};
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

export const Cases = function () {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Text>This is what we do</Text>
          <Title>Business Cases</Title>
          <Text mb="31px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
          <Gallery>
            <img src={images.image1} alt="pisture" />
          </Gallery>
          <Gallery>
            <img src={image1} alt="pisture" />
          </Gallery>
        </Wrapper>
      </Container>
    </Section>
  );
};
