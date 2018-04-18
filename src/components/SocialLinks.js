import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ghostwhite;
`

const LinksDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`
const LinkDiv = styled.div`
  margin: 0 5px 10px;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #795548;
  font-size: 1.5rem;
  &:hover {text-shadow: .5px .5px 0px rgba(7, 7, 7, 1)};
  transition: text-shadow 0.3s ease;
`
const StyledHeader = styled.h2`
  color: teal;
`

const SocialLinks = () => (

  <Wrapper>
    <StyledHeader>Connect</StyledHeader>
    <LinksDiv>
      <LinkDiv>
        <StyledLink href="https://twitter.com/tylermcdonald">Twitter</StyledLink>
      </LinkDiv>
      <LinkDiv>
        <StyledLink href="https://github.com/ManiacalBilby">GitHub</StyledLink>
      </LinkDiv>
      <LinkDiv>
        <StyledLink href="https://www.linkedin.com/in/tylerwmcdonald/">Linkedin</StyledLink>
      </LinkDiv>
    </LinksDiv>
  </Wrapper>
)

export default SocialLinks;
