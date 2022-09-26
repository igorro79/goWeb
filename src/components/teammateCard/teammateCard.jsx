import styled from "styled-components";
import { Social } from "../social/Social";

const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const Thumb = styled.div`
  min-width: 280px;
  // height: 186px;
  position: relative;
  @media screen and (min-width: 768px) {
    // width: 223px;
    // height: 148px;
  }
  @media screen and (min-width: 1360px) {
    width: 420px;
    height: 287px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
  ${Thumb}:hover & {
    transform: scale(1.1);
    box-shadow: 2px 2px 15px #000;
    filter: brightness(0.6);
  }
`;
const Overlay = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-cintent: center;
  opacity: 0;
  transition: all 0.5s;
  ${Thumb}:hover & {
    transform: scale(1.1);
    opacity: 1;
  }
`;
const Name = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 20px;
`;
const Position = styled.p``;

export function TeammateCard({ picture, name, position }) {
  return (
    <Card>
      <Thumb>
        <Overlay>
          <Social />
        </Overlay>
        <picture>
          <source
            srcSet={`${picture.imageW} 1x, ${picture.imageW2x} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${picture.image} 1x, ${picture.image2x} 2x `}
            type="image/jpeg"
          />
          <Img src={picture.image} alt={picture.alt} />{" "}
        </picture>
      </Thumb>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Card>
  );
}
