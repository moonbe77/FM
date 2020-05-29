import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  font-size: 1.1em;
  text-align: center;
  padding: 0 25px;
  background-image: url("../images/pattern-quotes.svg");
  background-repeat: no-repeat;
  background-position-x: center;
  padding-top: 40px;
  padding-bottom: 100px;
`;
const Testimony = styled.div`
  font-weight: 300;
`;
const Name = styled.div`
  font-weight: 700;
  margin-top: 10px;
`;
const Job = styled.div`
  font-weight: 300;
  color: hsl(240, 18%, 77%);
`;

export default function TextBox({ data }) {
  return (
    <TextContainer>
      <Testimony>{data.testimonial}</Testimony>
      <Name>{data.name}</Name>
      <Job>{data.job}</Job>
    </TextContainer>
  );
}
