import React from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import db from "../utils/db.json";

const TestimonialContainer = styled.div`
  width: 375px;
  margin: auto;
  background-image: url("../images/pattern-curve.svg");
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 300px;
`;

export default function Testimonial() {
  return (
    <TestimonialContainer>
      <ImageBox data={db.data[0]} />
      <TextBox data={db.data[0]} />
    </TestimonialContainer>
  );
}
