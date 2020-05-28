import React from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";

const wrapper = styled.section`
  width: 375px;
  border: 1px solid red;
`;

export default function Wrapper({ children }) {
  return (
    <wrapper>
      <ImageBox />
      {children}
    </wrapper>
  );
}
