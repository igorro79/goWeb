import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../container/Container";
import { pictures } from "../../assets2/cases";
import { useInView } from "react-intersection-observer";

import Modal from "../modal/Modal";

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
    padding: 48px 32px 40px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 28px;
  }
`;

const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  font-size: 32px;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`;

const Text = styled.p`
  margin-bottom: ${(props) => props.mb || "16px"};
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 280px;
  grid-gap: 8px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;
  }
  @media screen and (min-width: 1360px) {
    grid-gap: 24px 20px;
  }
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
`;

export const Cases = function ({ onChange }) {
  const { ref, inView, entry } = useInView({ threshold: 0.4 });
  const isVisible = inView && entry.isIntersecting;

  useEffect(() => {
    if (isVisible) onChange(entry.target.id);
  }, [isVisible, onChange]);

  const [isOpen, setIsOpen] = useState(false);
  const [startImage, setStartImage] = useState(0);
  const body = document.querySelector("body");

  useEffect(() => {
    if (isOpen) body.style.overflow = "hidden";
    if (!isOpen) body.style.overflow = "auto";
  }, [body.style, isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Section ref={ref} id="cases">
        <Container>
          <Wrapper>
            <Text>This is what we do</Text>
            <Title>Business Cases</Title>
            <Text mb="31px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, sapiente!
            </Text>
            <Gallery>
              {pictures.map((picture, idx) => (
                <picture key={idx}>
                  <source
                    srcSet={`${picture.originalW} 1x, ${picture.originalW2x} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${picture.original} 1x, ${picture.original2x} 2x `}
                    type="image/jpeg"
                  />
                  <Img
                    data-gallery={idx}
                    onClick={() => {
                      setIsOpen(true);
                      setStartImage(idx);
                    }}
                    src={picture.original}
                    alt={picture.alt}
                  />
                </picture>
              ))}
            </Gallery>
            <Gallery></Gallery>
          </Wrapper>
        </Container>
      </Section>
      {isOpen && (
        <Modal
          pictures={pictures}
          startIndex={startImage}
          isOpen={isOpen}
          onClose={handleClose}
        />
      )}
    </>
  );
};
