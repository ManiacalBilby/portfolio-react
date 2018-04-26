import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: teal;
`
const ProjectsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`

const ProjectDiv = styled.div`
  min-height: 400px;
  width: 300px;
  margin: 20px;
`

const ProjectImg = styled.img`
  width: 100%;
  max-width: 500px;
  box-shadow: 0;
  transition: box-shadow 0.3s ease;
  border-radius: 1%;
`

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
  &:hover ${ProjectImg} {
    box-shadow: 7px 4px 32px 0 #074854;
    transition: box-shadow 0.3s ease;
  }
`

const ProjectTitle = styled.h3`
  margin: 0 0 5px 0;
  color: #795548;
  font-size: 1.5rem;
`

const Projects = () => (

  <Wrapper>

    <ProjectsDiv>
      <ProjectDiv>
        <StyledLink href="https://hair-scheduler.herokuapp.com/">
          <ProjectTitle>H.A.I.R</ProjectTitle>
          <ProjectImg src="https://i.imgur.com/eYQZg5j.png?1" alt="Hair Appointment scheduling app" />
          <p>My wife is a hair stylist and uses a paper and pen appointment book
          so I decided to make a scheduling app.
          The idea behind the app is to have access to your appointments from anywhere.
          Built using React, Ruby on Rails, and PostgreSQL.
          </p>
        </StyledLink>
      </ProjectDiv>
      <ProjectDiv>
        <StyledLink href="http://twmcdonaldhangman.bitballoon.com/">
          <ProjectTitle>Hangman</ProjectTitle>
          <ProjectImg src="https://i.imgur.com/3fZoEXR.png?1" alt="Western Hangman" />
          <p>A Hangman style game with a simple western theme.
                The player will click a letter from the alphabet box.
                If the letter is in the hidden word it will be displayed in each place it occurs.
                If it is incorrect the letter will fade and an
                incorrect guess counter will decrease by 1.
                Guesses will continue until the word is complete
                or 6 incorrect guesses have been used.
                Built using HTML, CSS, and jQuery.
          </p>
        </StyledLink>
      </ProjectDiv>
      <ProjectDiv>
        <StyledLink href="https://young-bastion-12479.herokuapp.com/">
          <ProjectTitle>TreeTime</ProjectTitle>
          <ProjectImg src="https://i.imgur.com/dZsLQ5Z.png?1" alt="Tree Time app" />
          <p>TreeTime is an app that can be used by disc golf players to save courses
          and keep an online inventory of their discs.
          Built using MERN stack(MongoDB, Express, React and Node).
          </p>
        </StyledLink>
      </ProjectDiv>
      <ProjectDiv>
        <StyledLink href="https://lit-river-55055.herokuapp.com">
          <ProjectTitle>Sticktimes</ProjectTitle>
          <ProjectImg src="https://i.imgur.com/cA21UGV.png?1" alt="Sticktimes app" />
          <p>I created an app that can be used by local amateur hockey players
          to keep track of available playing times
          at local ice rinks. These available playing times are referred to as sticktimes.
          The Sticktimes App allows a user to have favorite rinks and
          view the available stick times for each rink. Built using MongoDB, Express, and Node.
          </p>
        </StyledLink>
      </ProjectDiv>
    </ProjectsDiv>

  </Wrapper>
)

export default Projects;
