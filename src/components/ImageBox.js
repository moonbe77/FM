import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  padding: 10%;
  background-image: url("../images/pattern-bg.svg");
  background-size: contain;
  background-repeat: no-repeat;

  img {
    border-radius: 5px;
    width: 100%;
  }
`;

export default function ImageBox({ data }) {
  return (
    <ImageContainer>
      <img src={data.imgPath} alt={data.name} />
    </ImageContainer>
  );
}
