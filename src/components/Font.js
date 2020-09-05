import styled from 'styled-components';

const StyledHeader = styled.h2.attrs({
  className: 'py-2 sm:text-2xl text-xl tracking-normal sm:py-4',
})``;

const StyledParagraph = styled.p.attrs({
  className: 'py-2 flex tracking-normal sm:text-lg text-sm',
})``;

export { StyledHeader, StyledParagraph };
