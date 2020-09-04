import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'hover.css';

// styled components
const StyledHeader = styled.header.attrs({
  className: 'bg-white px-4 py-2',
})``;

const StyledHeaderContainer = styled.div.attrs({
  className:
    'flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-4',
})``;

const StyledNav = styled.nav.attrs({
  className: 'md:block md:items-center w-full md:w-auto',
})``;

const Header = () => {
  // hooks
  const [isExpanded, toggleExpansion] = useState(false);
  // routes
  const routes = [
    {
      route: `/about`,
      title: `About`,
    },
    {
      route: `/`,
      title: `Projects`,
    },
    {
      route: `/`,
      title: `Contact`,
    },
  ];
  // static query
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Link to='/' className='hover:text-black hvr-grow'>
          <h1 className='text-2xl'>{site.siteMetadata.title}</h1>
        </Link>

        <button
          className='items-center block px-3 py-2 text-black rounded md:hidden'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg viewBox='0 0 100 80' width='30' height='30'>
            <rect width='100' height='20'></rect>
            <rect y='30' width='100' height='20'></rect>
            <rect y='60' width='100' height='20'></rect>
          </svg>
        </button>

        <StyledNav className={`${isExpanded ? `block` : `hidden`}`}>
          {routes.map((link) => (
            <Link
              className='block mt-4 no-underline md:inline-block md:mt-0 md:ml-6'
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </StyledNav>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
