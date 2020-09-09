import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { StyledHeader } from './Font';

const StyledAbout = styled.div.attrs({
  className:
    'flex flex-col md:flex-row shadow-md rounded-md border border-gray mt-2',
})``;

const StyledDescription = styled.div.attrs({
  className:
    'py-6 px-8 max-w-sm md:max-w-6xl md:w-2/4 m-auto',
})``;

const About = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "profile/profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      descJson {
        about
      }
    }
  `);
  return (
    <div className='mb-12 md:mb-20' id='about'>
      <StyledHeader>About</StyledHeader>
      <StyledAbout>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt='Avatar Pic'
          className='m-0 rounded-md flex-grow'
        />
        <StyledDescription>
          <h2 className='text-2xl text-gray-800 font-bold'>
            A little bit about <span className='text-indigo-600'>myself</span>
          </h2>
          <p className='mt-4 text-gray-700 leading-relaxed'>
            {data.descJson.about}
          </p>
        </StyledDescription>
      </StyledAbout>
    </div>
  );
};

export default About;
