import styled from "styled-components";
import sprite from "../../assets2/icons/sprite.svg";

const IconWrapper = styled.div`
  display: flex;
  width: 216px;
  justify-content: space-between;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  //   margin-bottom: 12px;
  color: #fff;
  background-repeat: no-repeat;
`;
const StyledLink = styled.a`
  &:hover {
    opacity: ${(props) => (props.footer ? null : "0.8")};
    color: ${(props) => (props.footer ? "#28a745" : null)};
  }
`;
export const Social = function (props) {
  return (
    <IconWrapper>
      <StyledLink
        {...props}
        href="http://twitter.com"
        aria-label="Visit our twitter page"
      >
        <svg width="35px" height="36px" alt="twitter icon">
          <use href={sprite + "#twitter"}></use>
        </svg>
      </StyledLink>
      <StyledLink
        {...props}
        href="http://facebook.com"
        aria-label="Visit our facebook page"
      >
        <svg width="35px" height="35px" alt="facebook icon">
          <use href={sprite + "#facebook"}></use>
        </svg>
      </StyledLink>
      <StyledLink
        {...props}
        href="http://youtube.com"
        aria-label="Visit our youtube"
      >
        <svg width="40px" height="35px" alt="facebook icon">
          <use href={sprite + "#youtube"}></use>
        </svg>
      </StyledLink>
      <StyledLink
        {...props}
        href="http://linkedin.com"
        aria-label="Visit our linkedin page"
      >
        <svg width="35px" height="35px" alt="facebook icon">
          <use href={sprite + "#linkedin"}></use>
        </svg>
      </StyledLink>
    </IconWrapper>
  );
};
