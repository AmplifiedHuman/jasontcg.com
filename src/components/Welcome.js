import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledHeader, StyledParagraph } from './Font';

// styled components
const StyledWelcome = styled.div.attrs({
  className: 'mb-12 md:mb-20',
})``;

const StyledTitle = styled.h1.attrs({
  className: 'py-2 text-3xl tracking-wider sm:text-4xl',
})``;

const StyledLinkWrapper = styled.div.attrs({
  className: 'flex text-xs font-sans flex-wrap',
})``;

const StyledLink = styled.a.attrs({
  className:
    'my-1 bg-transparent transform hover:-translate-y-1 transition duration-300 ease-in-out hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mr-2',
})``;

const Welcome = () => {
  // get social links and dessc
  const { allLinksJson, descJson } = useStaticQuery(graphql`
    query WelcomeQuery {
      descJson {
        status
        description
      }
      allLinksJson {
        edges {
          node {
            link
            type
          }
        }
      }
    }
  `);

  return (
    <StyledWelcome>
      <StyledTitle>Hello 👋</StyledTitle>
      <StyledTitle>
        I&rsquo;m <span className='text-blue-500'>Jason Tee</span>
      </StyledTitle>
      <StyledHeader>{descJson.description}</StyledHeader>
      <StyledParagraph>{descJson.status}</StyledParagraph>
      <StyledLinkWrapper>
        {allLinksJson.edges.map(({ node }) => (
          <StyledLink
            href={node.link}
            key={node.type}
            target='_blank'
            rel='noreferrer'
          >
            {node.type}
          </StyledLink>
        ))}
      </StyledLinkWrapper>
    </StyledWelcome>
  );
};

export default Welcome;
