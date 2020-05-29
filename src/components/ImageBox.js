import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  padding: 10%;
  background-image: url("../images/pattern-bg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  img {
    box-shadow: -3px 41px 70px -52px rgba(81, 67, 190, 1);
    border-radius: 5px;
    width: 100%;
  }

  @media screen and (min-width: 900px) {
    padding: 5%;   
  }
`;

const Buttons = styled.div`
  left: -19em;
  bottom: 0px;
  position: absolute;
  width: 100px;
  height: 40px;
  margin: auto;
  left: 50%;
  transform: translate(-50%, -25px);
  display: flex;
  flex-direction: row;

  div {
    background-color: white;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: initial;
      transition: all 0.2s ease;
    }

    img:hover {
      transform: scale(1.5);
    }
  }

  #button_prev {
    border-radius: 50% 0% 0% 50%;
    /* width: 25px; */
  }
  #button_next {
    border-radius: 0% 50% 50% 0%;
    /* width: 25px; */
  }
  @media screen and (min-width: 900px) {
    transform: translate(-200px, -55px);
  }
`;

export default function ImageBox({ data, handlePrevClick, handleNextClick }) {
  return (
    <ImageContainer>
      <img
        className='css3-shadow'
        src={data.imgPath}
        alt={data.name}
        title={data.name}
      />
      <Buttons>
        <div id='button_prev' onClick={handlePrevClick}>
          <img src='./images/icon-prev.svg' alt='' title='' />
        </div>
        <div id='button_next' onClick={handleNextClick}>
          <img src='./images/icon-next.svg' alt='' title='' />
        </div>
      </Buttons>
    </ImageContainer>
  );
}
