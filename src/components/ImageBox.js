import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  width: 75%;
`;

export default function ImageBox() {
  return (
    <ImageContainer>
      <img src='../assets/images/image-john.jpg' alt='John' />
    </ImageContainer>
  );
}
