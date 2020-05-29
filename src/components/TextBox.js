import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  font-size: 0.55em;
  text-align: center;
  background-image: url("../images/pattern-quotes.svg");
  background-repeat: no-repeat;
  background-position-x: center;
  padding: 40px 25px 100px 25px;
`;
const Testimony = styled.div`
  font-weight: 300;
`;
const Name = styled.div`
  font-weight: 700;
  margin-top: 10px;
  color: hsl(240, 38%, 20%);
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
