import styled from "styled-components";
import { Container } from "../container/Container";
import { pictures } from "../../assets/team";

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
  grid-gap: 30px;
`;
const Card = styled.div`
  width: 100%;
  text-align: center;
`;
const Name = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 20px;
`;
const Position = styled.p``;

export const Team = function () {
  console.log(pictures);
  return (
    <Section>
      <Container>
        <Wrapper>
          <Text>Who we are</Text>
          <Title>Our Professional Team</Title>
          <Text mb="31px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
          <Gallery>
            <Card>
              <picture>
                <source
                  srcset={`${pictures[0].imageW} 1x, ${pictures[0].imageW2x} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${pictures[0].image} 1x, ${pictures[0].image2x} 2x `}
                  type="image/jpeg"
                />
                <img src={pictures[0].image} alt={pictures[0].alt} />{" "}
              </picture>
              <Name>John Doe</Name>
              <Position>President</Position>
            </Card>
            <Card>
              <picture>
                <source
                  srcset={`${pictures[1].imageW} 1x, ${pictures[1].imageW2x} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${pictures[1].image} 1x, ${pictures[1].image2x} 2x `}
                  type="image/jpeg"
                />
                <img src={pictures[1].image} alt={pictures[1].alt} />{" "}
              </picture>
              <Name>Jane Doe</Name>
              <Position>Vice President</Position>
            </Card>
            <Card>
              <picture>
                <source
                  srcset={`${pictures[2].imageW} 1x, ${pictures[2].imageW2x} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${pictures[2].image} 1x, ${pictures[2].image2x} 2x `}
                  type="image/jpeg"
                />
                <img src={pictures[2].image} alt={pictures[2].alt} />{" "}
              </picture>
              <Name>Steve Smith</Name>
              <Position>Marketing Head</Position>
            </Card>
          </Gallery>
          <Gallery></Gallery>
        </Wrapper>
      </Container>
    </Section>
  );
};
