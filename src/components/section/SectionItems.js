import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const HeaderBlockItems = ({
  title,
  backgroundImg,
  leftBtnText,
  rightBtnText,
  description,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <Subtitle>{description}</Subtitle>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          {title === "Model S" ? (
            <Fade bottom>
              <ArrowIcon>
                <DownArrow src="/images/down-arrow-.svg" width="25" />
              </ArrowIcon>
            </Fade>
          ) : (
            ""
          )}
        </Buttons>
      </Fade>
    </Wrap>
  );
};

export default HeaderBlockItems;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(backgroundImg) =>
    `url("/images/${backgroundImg.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  font-weight: 900;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 0 10px 30px 10px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.7;
  color: black;
`;

const ArrowIcon = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const DownArrow = styled.img`
  align-items: center;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  margin-top: 20px;
`;

const Buttons = styled.div``;

const Subtitle = styled.h4`
  font-weight: 400;
  font-size: 15px;
  color: #5c5e62;
  span {
    padding-bottom: 4px;
    padding-top: 15px;
    border-bottom: 1px solid black;
    color: #393c41;
    cursor: pointer;
    span:hover {
      border-bottom-width: 2px;
      color: black;
    }
  }
`;
