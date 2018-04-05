import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "Questrial", sans-serif;
  background-color: ghostwhite;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 75px;
`
const NameH2 = styled.h2`
  margin: 15px 0 0 0 ;
  color: teal;
`

const TitleH4 = styled.h4`
  margin-top: 0;
  color: #795548;
`

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90%;
`

class App extends Component {
  render() {
    return (

        <Wrapper>

          <StyledHeader>
            <NameH2>Tyler McDonald</NameH2>
            <TitleH4>Software Engineer</TitleH4>
          </StyledHeader>

          <StyledMain>
            <AboutMe />
            <Projects />
            <SocialLinks />
          </StyledMain>

        </Wrapper>
    );
  }
}

export default App;
