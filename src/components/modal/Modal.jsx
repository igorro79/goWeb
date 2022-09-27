import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import arrowNext from "../../assets2/gallery/next.png";
import arrowPrev from "../../assets2/gallery/prev.png";
import closeIcon from "../../assets2/gallery/close.png";
import loader from "../../assets2/gallery/loading.gif";

const modalRoot = document.querySelector("#modal");

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const NavButton = styled.button`
  position: absolute;
  color: transparent;
  z-index: 10;
  width: 50%;
  height: 100%;
  opacity: 0;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`;
const RightNav = styled(NavButton)`
  display: ${(props) => (props.isVisible ? null : "none")};

  right: 0;
  background-position: right center;
  background-image: url(${arrowNext});
`;
const LeftNav = styled(NavButton)`
  display: ${(props) => (props.isVisible ? null : "none")};
  left: 0;
  background-position: left center;
  background-image: url(${arrowPrev});
`;
const CloseButton = styled.button`
  width: 27px;
  margin-right: 20px;
  margin-left: auto;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const Modal = ({ pictures, isOpen, onClose, startIndex }) => {
  const refImg = useRef(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(startIndex);
  const onSlide = () => setCurrentSlideIndex(refImg.current.getCurrentIndex());

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen, onClose]);
  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ImageGallery
        ref={refImg}
        loading={loader}
        items={pictures}
        startIndex={startIndex}
        infinite={false}
        showFullscreenButton={false}
        showPlayButton={false}
        lazyload={true}
        onSlide={onSlide}
        renderRightNav={(onClick, disabled) => (
          <RightNav
            isVisible={currentSlideIndex < pictures.length - 1}
            onClick={onClick}
            disabled={disabled}
            aria-label="Next picture"
            type="button"
          />
        )}
        renderLeftNav={(onClick, disabled) => (
          <LeftNav
            isVisible={currentSlideIndex > 0}
            onClick={onClick}
            disabled={disabled}
            aria-label="Previous picture"
            type="button"
          />
        )}
      />
      <CloseButton
        aria-label="Close modal window"
        type="button"
        onClick={onClose}
      >
        <img src={closeIcon} alt="Close button icon" />
      </CloseButton>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
