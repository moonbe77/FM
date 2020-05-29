import React from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";
import background from "../assets/images/pattern-bg.svg";

const wrapper = styled.div`
  display: flex;
  flex-flow: column;
  background-image: url("../assets/images/pattern-bg.svg");
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function Wrapper({ children }) {
  return (
    <wrapper>
      <ImageBox />
      <Button>test</Button>
    </wrapper>
  );
}
