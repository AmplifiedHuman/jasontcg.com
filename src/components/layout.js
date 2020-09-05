import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

// styled components
const StyledLayout = styled.div.attrs({
  className: 'flex flex-col min-h-screen text-gray-900',
})``;

const StyledMainContainer = styled.main.attrs({
  className: 'flex-1 w-full max-w-3xl px-4 py-8 mx-auto md:px-8 md:py-16',
})``;

function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />

      <StyledMainContainer>{children}</StyledMainContainer>

      <Footer />
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
