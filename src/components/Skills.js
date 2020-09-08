import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledHeader } from './Font';

const StyledPill = styled.span.attrs({
  className:
    'inline-block rounded-full px-2 py-1 sm:text-sm text-xs font-bold mr-2 mt-4',
})``;

const StyledSkills = styled.div.attrs({
  className: 'mb-12 md:mb-20',
})``;

const Skills = () => {
  const { allSkillsJson } = useStaticQuery(graphql`
    query SkillsQuery {
      allSkillsJson {
        edges {
          node {
            id
            skills
            category
            style
          }
        }
      }
    }
  `);

  return (
    <StyledSkills>
      <StyledHeader>Skills</StyledHeader>
      <div className='mt-2 md:mt-4'>
        {allSkillsJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className='mb-4 md:mb-8'>
              <h3 className=''>{node.category}</h3>
              {node.skills.map((skill) => {
                return (
                  <StyledPill key={skill} className={node.style}>
                    {skill}
                  </StyledPill>
                );
              })}
            </div>
          );
        })}
      </div>
    </StyledSkills>
  );
};

export default Skills;
