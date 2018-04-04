import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 175px;
  flex-grow: 1;
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
`
const StyledHeader = styled.h2`
  color: teal;
`

class SocialLinks extends Component {
  render() {
    return (
      <Wrapper>
        <StyledHeader>Social</StyledHeader>
        <LinksDiv>
          <LinkDiv>
            <StyledLink href="https://twitter.com/tylermcdonald">Twitter</StyledLink>
          </LinkDiv>
          <LinkDiv>
            <StyledLink href="https://github.com/ManiacalBilby">Github</StyledLink>
          </LinkDiv>
          <LinkDiv>
            <StyledLink href="https://www.linkedin.com/in/tylerwmcdonald/">Linkedin</StyledLink>
          </LinkDiv>
        </LinksDiv>
      </Wrapper>
    );
  }
}

export default SocialLinks;