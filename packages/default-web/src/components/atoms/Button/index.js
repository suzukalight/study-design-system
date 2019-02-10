import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.4rem;
  font-size: 1.6rem;
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
