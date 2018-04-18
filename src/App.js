import React from 'react'
import styled from 'styled-components'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'

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
`

const App = () => (

  <div>

    <StyledHeader>
      <NameH2>Tyler McDonald</NameH2>
      <TitleH4>Software Engineer</TitleH4>
    </StyledHeader>

    <StyledMain>
      <AboutMe />
      <Projects />
      <SocialLinks />
    </StyledMain>

  </div>
);


export default App;
