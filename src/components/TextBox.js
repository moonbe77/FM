import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  font-size: 0.55em;
  text-align: center;
  background-image: url("./images/pattern-quotes.svg");
  background-repeat: no-repeat;
  background-position-x: center;
  padding: 25px 15px 80px 15px;
  margin: 30px 0 0 0;
  background-size: 20%;

  @media screen and (min-width: 900px) {
    font-size: 1.1em;
    text-align: left;
    padding: 1.4em 0 0 2em;
    padding: 40px 25px 100px 25px;
    background-position-x: 120px;
  }
`;
const Testimony = styled.p`
  font-weight: 300;

  ::before {
    content: "“ ";
  }
  ::after {
    content: " ”";
  }
  @media screen and (min-width: 900px) {
    width: 135.5%;
    z-index: 2;
  }
`;

const TestimonyAuthor = styled.div`
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: baseline;
    font-size: 0.6em;
  }
`;

const Name = styled.span`
  font-weight: 700;
  margin-top: 10px;
  color: hsl(240, 38%, 20%);
`;
const Job = styled.span`
  font-weight: 300;
  color: hsl(240, 18%, 77%);

  @media screen and (min-width: 900px) {
    margin-left: 10px;
  }
`;

export default function TextBox({ data }) {
  return (
    <TextContainer>
      <Testimony>{data.testimonial}</Testimony>
      <TestimonyAuthor>
        <Name>{data.name}</Name>
        <Job>{data.job}</Job>
      </TestimonyAuthor>
    </TextContainer>
  );
}
