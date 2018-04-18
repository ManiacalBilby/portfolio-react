import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  background-image: url("https://i.imgur.com/aLr5Jn2.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: ghostwhite;
  text-shadow: 2px 2px 5px rgba(7, 7, 7, 1);
  @media (min-width: 768px) and (min-height: 450px) {
    font-size: 1.5rem;
  };
  @media (min-width: 1225px) {
    font-size: 1.75rem;
  };
  `
const AboutP = styled.p`
    margin: 8px auto;
    width: 98%;
  `

const AboutMe = () => (
  <Wrapper>
    <AboutP>I am a full-stack developer who enjoys a collaborative work environment
      while solving problems small and large with clean, concise code.
    </AboutP>
    <AboutP>Having worked in fields strongly relying on my education in psychology,
      I bring an understanding of human behavior and interactions
      that is valuable when working with teams and clients.
    </AboutP>
  </Wrapper>

)

export default AboutMe;
