import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GithubIcon from '../images/icons/github.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledHeader } from './Font';

const StyledProjects = styled.div.attrs({ className: 'gap-4 mt-2' })`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const StyledProjectCard = styled.div.attrs({
  className: 'flex flex-col px-4 py-4 shadow-md rounded-md border border-gray',
})``;

const StyledProjectHeader = styled.div.attrs({
  className: 'flex items-center',
})``;

const StyledProjectDescription = styled.p.attrs({
  className: 'text-sm text-gray-600 mt-2 mb-8 flex-grow',
})``;

const StyledTopicsContainer = styled.div.attrs({
  className: 'flex mb-2 flex-wrap',
})``;

const StyledTopicPill = styled.span.attrs({
  className:
    'inline-block rounded-full px-2 py-1 font-bold mr-1 mt-2 text-gray-700 bg-gray-200',
})`
  font-size: 13px;
`;

const StyledFooter = styled.div.attrs({
  className: 'flex items-center',
})``;

const StyledSmallText = styled.p.attrs({
  className: 'text-sm',
})`
  margin: 0px 3px;
`;

const StyledViewMore = styled.a.attrs({
  className:
    'bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mt-8 cursor-pointer font-sans text-sm',
})``;

const ProjectCard = ({ project }) => {
  return (
    <StyledProjectCard>
      <StyledProjectHeader>
        <a
          href={project.url}
          className='flex hover:opacity-75 hover:text-black'
          target='_blank'
          rel='noreferrer'
        >
          <h2>{project.name}</h2>
          <img
            src={GithubIcon}
            width='25'
            height='25'
            className='my-0 ml-2 opacity-75'
          />
        </a>
        {project.homepageUrl && (
          <a
            href={project.homepageUrl}
            target='_blank'
            rel='noreferrer'
            className='hover:text-black'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              width='25px'
              heigh='25px'
              className='mx-2 hover:opacity-50'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </a>
        )}
      </StyledProjectHeader>
      <StyledProjectDescription>{project.description}</StyledProjectDescription>
      <StyledTopicsContainer>
        {project.languages.edges.map(({ node }) => {
          return <StyledTopicPill key={node.name}>{node.name}</StyledTopicPill>;
        })}
        {project.repositoryTopics.edges.map(({ node }) => {
          return (
            <StyledTopicPill key={node.topic.name}>
              {node.topic.name}
            </StyledTopicPill>
          );
        })}
      </StyledTopicsContainer>
      <StyledFooter>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          width='18px'
          height='18px'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
        <StyledSmallText>{project.stargazers.totalCount}</StyledSmallText>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 10 16'
        >
          <path
            fillRule='evenodd'
            d='M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'
          />
        </svg>
        <StyledSmallText>{project.forkCount}</StyledSmallText>
      </StyledFooter>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

const Projects = () => {
  const {
    github: {
      user: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(graphql`
    query GithubQuery {
      github {
        user(login: "AmplifiedHuman") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on GitHub_Repository {
                  id
                  name
                  url
                  homepageUrl
                  description
                  shortDescriptionHTML
                  stargazers {
                    totalCount
                  }
                  forkCount
                  repositoryTopics(first: 4) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                  languages(
                    first: 4
                    orderBy: { direction: DESC, field: SIZE }
                  ) {
                    totalCount
                    edges {
                      node {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div className='mb-12 md:mb-20'>
      <StyledHeader>Projects</StyledHeader>
      <StyledProjects>
        {edges.map(({ node }) => {
          return <ProjectCard project={node} key={node.id} />;
        })}
      </StyledProjects>
      <div className='flex justify-center'>
        <StyledViewMore
          href='https://github.com/AmplifiedHuman?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          View More
        </StyledViewMore>
      </div>
    </div>
  );
};

export default Projects;
