import React from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";

const Main = styled.main`
  margin: auto;
`;

function App() {
  return (
    <Main className='App'>
      <Testimonial />
    </Main>
  );
}

export default App;
