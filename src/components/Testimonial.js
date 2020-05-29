import React, { useState } from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import db from "../utils/db.json";

const TestimonialContainer = styled.div`
  max-width: 375px;
  margin: auto;
  background-image: url("../images/pattern-curve.svg");
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 300px;

  @media screen and (min-width: 900px) {
    width: 100%;
    max-width: 1220px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 1em;
    background-size: 500px;

    div {
      flex: 1;
      z-index: 0;
    }
  }
`;

export default function Testimonial() {
  const data = db.data;
  const [testimonyNumber, setTestimonyNumber] = useState(0);

  const handlePrevClick = (event) => {
    if (testimonyNumber > 0) {
      setTestimonyNumber(testimonyNumber - 1);
    }
  };
  const handleNextClick = (event) => {
    if (testimonyNumber < data.length - 1) {
      setTestimonyNumber(testimonyNumber + 1);
    }
  };

  console.log(testimonyNumber);
  return (
    <TestimonialContainer className='testimonial-container'>
      <ImageBox
        data={data[testimonyNumber]}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <TextBox data={data[testimonyNumber]} />
    </TestimonialContainer>
  );
}
