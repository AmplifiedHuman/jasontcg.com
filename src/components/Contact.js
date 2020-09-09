import React from 'react';
import styled from 'styled-components';
import { StyledHeader } from './Font';
import PropTypes from 'prop-types';

const StyledSubmit = styled.button.attrs({
  className:
    'bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full mt-8 cursor-pointer font-sans text-sm transition duration-300',
})``;

const StyledLabel = styled.span.attrs({
  className: 'text-gray-700',
})``;

const StyledTextInput = styled.input.attrs({
  className: 'form-input mt-1 block w-full',
})``;

const StyledTextArea = styled.textarea.attrs({
  className: 'form-textarea mt-1 block w-full',
})``;

class EmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    window.location.href = `mailto:cheeguantee@gmail.com?subject=[${encodeURI(
      this.props.name
    )}]%20-%20${encodeURI(this.props.subject)}&body=${encodeURI(
      this.props.content
    )}`;
  }
  render() {
    return <StyledSubmit onClick={this.onClick}>Send</StyledSubmit>;
  }
}

EmailButton.propTypes = {
  content: PropTypes.string,
  subject: PropTypes.string,
  name: PropTypes.string,
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', subject: '', content: '' };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  onContentChange = (event) => {
    this.setState({ content: event.target.value });
  };

  render() {
    return (
      <div className='mb-12 md:mb-20' id='contact'>
        <StyledHeader>Contact</StyledHeader>
        <label className='block'>
          <StyledLabel>Name</StyledLabel>
          <StyledTextInput
            placeholder='Jane Doe'
            onChange={this.onNameChange}
          />
        </label>
        <label className='block mt-4'>
          <StyledLabel>Subject</StyledLabel>
          <StyledTextInput
            placeholder='Subject'
            onChange={this.onSubjectChange}
          />
        </label>
        <label className='block mt-4'>
          <StyledLabel>Message</StyledLabel>
          <StyledTextArea
            rows='3'
            placeholder='Send me something'
            onChange={this.onContentChange}
          />
        </label>
        <EmailButton
          subject={this.state.subject}
          content={this.state.content}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default Contact;
