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
    border-radius: 5px;
    width: 100%;
  }
  .css3-shadow {
    position: relative;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  /*==================================================
 * Drop shadow effect with box-shadow
 * ===============================================*/
  .css3-shadow:after {
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
    bottom: 0px;
    left: 10%;
    right: 10%;
    width: 80%;
    height: 50%;
    -moz-border-radius: 100%;
    border-radius: 100%;
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
