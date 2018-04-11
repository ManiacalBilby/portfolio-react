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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px 10px;
  min-height: 400px;
  width: 300px;
`

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #795548;
  font-size: 1.5rem;
`
// const StyledHeader = styled.h2`
//   color: ghostwhite;
//   margin: 10px 0 0;
// `

const ProjectImg = styled.img`
  width: 100%;
  max-width: 500px;
`

const ProjectTitle = styled.h3`
  margin: 0 0 5px 0;
`

class Projects extends Component {
  render() {
    return (
      <Wrapper>

        {/* <StyledHeader>Projects</StyledHeader> */}
        <ProjectsDiv>
          <ProjectDiv>
            <StyledLink href="https://hair-scheduler.herokuapp.com/">
            <ProjectTitle>H.A.I.R</ProjectTitle>
              <ProjectImg src="https://i.imgur.com/eYQZg5j.png?1" alt="Hair Appointment scheduling app" />
            </StyledLink>
            <p>My wife is a hair stylist and uses a paper and pen appointment book so I decided to make a scheduling app. The idea behind the app is to have access to your appointments from anywhere. Built using React, Ruby on Rails, and PostgreSQL </p>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="http://twmcdonaldhangman.bitballoon.com/">
            <ProjectTitle>Hangman</ProjectTitle>
              <ProjectImg src="https://i.imgur.com/3fZoEXR.png?1" alt="Western Hangman" />
            </StyledLink>
            <p>Bender, we're trying our best. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'!</p>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="https://young-bastion-12479.herokuapp.com/">
            <ProjectTitle>TreeTime</ProjectTitle>
              <ProjectImg src="https://i.imgur.com/dZsLQ5Z.png?1" alt="Tree Time app" />
            </StyledLink>
            <p>Bender, we're trying our best. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'!</p>
          </ProjectDiv>
          <ProjectDiv>
            <StyledLink href="https://lit-river-55055.herokuapp.com">
            <ProjectTitle>Sticktimes</ProjectTitle>
              <ProjectImg src="https://i.imgur.com/cA21UGV.png?1" alt="Sticktimes app" />
            </StyledLink>
            <p>Bender, we're trying our best. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'!</p>
          </ProjectDiv>
        </ProjectsDiv>

      </Wrapper>
    );
  }
}

export default Projects;