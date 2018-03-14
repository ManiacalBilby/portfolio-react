import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 175px;
  background-color: teal;
`
const ProjectsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`

const ProjectDiv = styled.div`
  margin: 0 5px 10px;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #795548;
  font-size: 1.5rem;
`
const StyledHeader = styled.h2`
  color: ghostwhite;
`

class Projects extends Component {
  render() {
    return (
      <Wrapper>

        <StyledHeader>Projects</StyledHeader>
        <ProjectsDiv>
          <ProjectDiv>
            <StyledLink href="http://twmcdonaldhangman.bitballoon.com/">Hangman</StyledLink>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="https://lit-river-55055.herokuapp.com">Sticktimes</StyledLink>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="https://young-bastion-12479.herokuapp.com/">TreeTime</StyledLink>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="https://hair-scheduler.herokuapp.com/">H.A.I.R</StyledLink>
          </ProjectDiv>
        </ProjectsDiv>

      </Wrapper>
    );
  }
}

export default Projects;