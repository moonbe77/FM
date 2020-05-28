import React from "react";
import styled from "styled-components";
import Wrapper from './Wrapper';

const Main = styled.main`
  background-color: red;
`;



function App() {
  return (
    <Main className='App'>
      <Wrapper>


        <p>
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </p>
        <p>Tanya Sinclair UX</p>
        <p>
          Engineer “ If you want to lay the best foundation possible I’d
          recommend taking this course. The depth the instructors go into is
          incredible. I now feel so confident about starting up as a
          professional developer. ”
        </p>
        <p>John Tarkpor Junior Front-end Developer</p>
      </Wrapper>
    </Main>
  );
}

export default App;
