import { useState } from "react";
import styled from "styled-components";
import useWindowResize from "../../hooks/useWindowResize";

import { Container } from "../container/Container";

import logo from "../../assets2/icons/logo.svg";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: ${(props) =>
    props.visible ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  transition: background-color 0.4s;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 22px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (min-width: 1360px) {
    width: 1360px;
  }
`;

const LogoText = styled.p`
  display: flex;
  align-items: center;
  color: #28a745;
  font-size: 35px;
  transition: all 0.5s;
  user-select: none;

  &::before {
    content: "";
    margin-right: 8px;
    width: 40px;
    height: 35px;
    display: inline-block;
    background-image: url(${logo});
    background-repeat: no-repeat;
  }

  &:hover {
    color: #2ebf4f;
    transform: scale(1.03);
  }
  @media screen and (max-width: 767px) {
    font-size: 28px;
    margin-bottom: 16px;
  }
`;
const LogoTextStyled = styled.span`
  color: #fff;
`;

const NavigationList = styled.ul`
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;

  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const NavigationItem = styled.li`
  padding-bottom: 2px;
  &:not(:first-child) {
    margin-left: 12px;
  }
  @media screen and (min-width: 768px) {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
  @media screen and (min-width: 1360px) {
    &:not(:first-child) {
      margin-left: 40px;
    }
  }
`;
const Button = styled.button`
  position: relative;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  padding: 0;
  border: none;

  &::before {
    z-index: 14;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #28a745;
    left: 0;
    bottom: 0;
    transform: scale(0, 1);
    transform-origin: 0 100%;
    transition: transform 0.5s;
  }

  &:hover,
  &.active {
    &::before {
      transform: scale(1, 1);
    }
  }
`;

const navLinks = ["Home", "About", "Cases", "Blog", "Contacts"];

export const Header = function ({ visibleSection }) {
  const [visible, setVisible] = useState(false);
  const windowWidth = useWindowResize();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (windowWidth < 768 ? scrolled > 120 : scrolled > 70) {
      setVisible(true);
    } else if (windowWidth < 768 ? scrolled <= 120 : scrolled <= 70) {
      setVisible(false);
    }
  };

  const handleNavClick = (e, item) => {
    const navId = item.toLowerCase();
    document.getElementById(navId).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <StyledHeader visible={visible}>
      <Container>
        <Wrapper>
          <LogoText>
            Finance <LogoTextStyled>Ledger</LogoTextStyled>
          </LogoText>
          <nav>
            <NavigationList>
              {navLinks.map((item) => (
                <NavigationItem key={item}>
                  <Button
                    className={
                      visibleSection === item.toLocaleLowerCase()
                        ? "active"
                        : null
                    }
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item}
                  </Button>
                  <a href={item.url}>{item.name}</a>
                </NavigationItem>
              ))}
            </NavigationList>
          </nav>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};
