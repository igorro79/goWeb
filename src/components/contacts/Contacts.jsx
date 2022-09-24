import styled from "styled-components";
import { Container } from "../container/Container";
import { Button } from "../button/Button";
import { picture } from "../../assets/contacts";

const Section = styled.section`
  width: 100%;
  background-color: #fff;
  //   text-align: center;
  color: #333;
`;
const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  width: 100%;

  background-repeat: no-repeat;
`;

// const Banner = styled.div`
//   @media screen and (max-width: 767px) {
//     width: 100%;
//   }
//   width: 50%;
//   height: 220px;
//   background-image: url(${picture});
//   background-repeat: no-repeat;
// `;

const TextWrapper = styled.div`
  padding: 51px 20px 25px;
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
export const Contacts = function () {
  return (
    <Section>
      <Container>
        <Wrapper>
          <picture>
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
          <TextWrapper>
            <Title>Request Callback</Title>
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
