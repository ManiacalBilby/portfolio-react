import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 0 0 10px 10px;
  background-image: url("https://i.imgur.com/spM38v9.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  color: white;
  text-shadow: 2px 2px 5px rgba(7, 7, 7, 1);
  @media (min-width: 768px) {
    font-size: 1.75rem;
  };
  @media (min-width: 1225px) {
    font-size: 2.5rem;
  };
  `

  const SecondParagraph = styled.p`
    margin-top: 0;
  `

class AboutMe extends Component {
  render() {
    return (
      <Wrapper>
        <p>I am a full-stack developer who enjoys a collaborative work environment while solving problems small and large with clean, concise code.</p> 
        <SecondParagraph>Having worked in fields strongly relying on my education in psychology, I bring an understanding of human behavior and interactions that is valuable when working with teams and clients.</SecondParagraph>
      </Wrapper>
    );
  }
}

export default AboutMe;