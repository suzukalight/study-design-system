import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getLuminance } from 'polished';

const Name = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const ColorCode = styled.div`
  flex-grow: 1;
  text-align: right;
`;

const Row = styled.div`
  display: flex;
  padding: 1rem;

  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1;

  color: ${({ colorCode }) => (getLuminance(colorCode) > 0.5 ? 'black' : 'white')};
  background-color: ${props => props.colorCode};

  &:first-of-type {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &:last-of-type {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

const Palette = ({ name, colorCode }) => (
  <Row colorCode={colorCode}>
    <Name>{name}</Name>
    <ColorCode>{colorCode}</ColorCode>
  </Row>
);

Palette.propTypes = {
  name: PropTypes.string,
  colorCode: PropTypes.string,
};

export default Palette;
