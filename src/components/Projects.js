import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* min-height: 175px; */
  background-color: teal;
  /* flex-grow: 1; */
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #795548;
  font-size: 1.5rem;
`
const StyledHeader = styled.h2`
  color: ghostwhite;
`

const ProjectImg = styled.img`
  width: 300px;
`

class Projects extends Component {
  render() {
    return (
      <Wrapper>

        <StyledHeader>Projects</StyledHeader>
        <ProjectsDiv>
          <ProjectDiv>
            <StyledLink href="https://hair-scheduler.herokuapp.com/">
              <ProjectImg src="https://i.imgur.com/eYQZg5j.png?1" alt="Hair Appointment scheduling app" />
              H.A.I.R
            </StyledLink>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="http://twmcdonaldhangman.bitballoon.com/">
              <ProjectImg src="https://i.imgur.com/3fZoEXR.png?1" alt="Western Hangman" />
              Hangman
            </StyledLink>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="https://young-bastion-12479.herokuapp.com/">
              <ProjectImg src="https://i.imgur.com/dZsLQ5Z.png?1" alt="Tree Time app" />
              TreeTime
            </StyledLink>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="https://lit-river-55055.herokuapp.com">
              <ProjectImg src="https://i.imgur.com/cA21UGV.png?1" alt="Sticktimes app" />
              Sticktimes
            </StyledLink>
          </ProjectDiv>
        </ProjectsDiv>

      </Wrapper>
    );
  }
}

export default Projects;