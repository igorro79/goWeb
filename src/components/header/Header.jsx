import { useState } from "react";
import styled from "styled-components";
// import background from "../../assets/hero/city1.jpg";
import logo from "../../assets/logo.svg";
import { Container } from "../container/Container";

const Wrapper = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 320px;
  padding: 22px;
  background-color: transparent;
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const LogoText = styled.p`
  display: flex;
  aling-items: center;
  color: #28a745;
  font-size: 35px;
  transition: all 0.5s;

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
  color: #fff;

  display: flex;
  justify-content: space-between;
`;
const NavigationItem = styled.li`
  position: relative;
  overflow: hidden;

  &:hover {
    &::after {
      visibility: visible;
      transform: translateX(100%);
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #28a745;
    left: -100%;
    bottom: 0;
    transition: transform 0.5s;
    visibility: hidden;
  }
`;

const config = [
  { url: "/#", name: "Home" },
  { url: "/#", name: "About" },
  { url: "/#", name: "Cases" },
  { url: "/#", name: "Blog" },
  { url: "/#", name: "Contact" },
];

export const Header = function () {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 120) {
      setVisible(true);
    } else if (scrolled <= 120) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <header>
      <Container>
        <Wrapper visible={visible}>
          <LogoText>
            Finance <LogoTextStyled>Ledger</LogoTextStyled>
          </LogoText>
          <nav>
            <NavigationList>
              {config.map((item) => (
                <NavigationItem key={item.name}>
                  <a href={item.url}>{item.name}</a>
                </NavigationItem>
              ))}
            </NavigationList>
          </nav>
        </Wrapper>
      </Container>
    </header>
  );
};
