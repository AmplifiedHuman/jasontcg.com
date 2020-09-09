import React from 'react';
// import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import GithubIcon from '../images/icons/github-white.svg';
import LinkedInIcon from '../images/icons/linkedin-white.svg';
import MailIcon from '../images/icons/mail-white.svg';
import ResumeIcon from '../images/icons/resume-white.svg';

// need to change icon manually
const Footer = () => {
  const icons = [GithubIcon, LinkedInIcon, MailIcon, ResumeIcon];
  const { allLinksJson } = useStaticQuery(graphql`
    query FooterQuery {
      allLinksJson {
        edges {
          node {
            link
          }
        }
      }
    }
  `);

  return (
    <footer className='bg-blue-800'>
      <nav className='max-w-4xl p-4 mx-auto text-md md:p-3 text-white font-bold'>
        <p className='text-center'>
          © 2020 — Made & Designed with 💛 by Jason Tee
        </p>
        <div className='flex justify-center'>
          {allLinksJson.edges.map(({ node }, i) => {
            return (
              <a
                href={node.link}
                key={node.link}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={icons[i]}
                  className='m-2 hover:opacity-50 transition duration-300'
                  width='20px'
                  height='20px'
                />
              </a>
            );
          })}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
