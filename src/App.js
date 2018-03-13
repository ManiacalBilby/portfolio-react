import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import styled from 'styled-components'

const StyledBody = styled.body`
  width: 100vw;
  height: 100vh;
  font-family: "Questrial", sans-serif;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NameH2 = styled.h2`
  margin: 15px 0 0 0 ;
  color: teal;
`

const TitleH4 = styled.h4`
  margin-top: 0;
  color: #795548;
`

class App extends Component {
  render() {
    return (
      <StyledBody>

        <StyledHeader>
          <NameH2>Tyler McDonald</NameH2>
          <TitleH4>Software Engineer</TitleH4>
        </StyledHeader>

        <main>
          <AboutMe />
          <Projects />
          <SocialLinks />
        </main>

        <script src="app.js"></script>
      </StyledBody>
    );
  }
}

export default App;
