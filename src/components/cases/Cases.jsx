import styled from "styled-components";
import { Container } from "../container/Container";
import { pictures } from "../../assets2/cases";
// import image1 from "../../assets/cases/r1.jpg";

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  text-align: center;
  color: #333333;
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 56px 20px 40px;
`;

const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 200px;
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
  console.log(pictures);
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
            {pictures.map((picture, idx) => (
              <picture key={idx}>
                <source
                  srcset={`${picture.imageW} 1x, ${picture.imageW2x} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${picture.image} 1x, ${picture.image2x} 2x `}
                  type="image/jpeg"
                />
                <img src={picture.image} alt={picture.alt} />{" "}
              </picture>
            ))}
          </Gallery>
          <Gallery></Gallery>
        </Wrapper>
      </Container>
    </Section>
  );
};
