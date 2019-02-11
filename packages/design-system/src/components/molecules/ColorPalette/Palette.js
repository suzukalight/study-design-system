import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 16rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid lightgray;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);

  background-color: white;
  color: gray;
`;

const ItemWrap = styled.div`
  flex-grow: 1;
`;

const Label = styled.p`
  flex-shrink: 0;
  margin: 0;
  padding-top: 1rem;
  line-height: 1;
`;

const PalettePresenter = ({ name, paletteItems }) => (
  <Wrap>
    <ItemWrap>
      {paletteItems.map(p => (
        <Item key={p.key} name={p.key} colorCode={p.value} />
      ))}
    </ItemWrap>

    <Label>{name}</Label>
  </Wrap>
);

PalettePresenter.propTypes = {
  name: PropTypes.string,
  paletteItems: PropTypes.array,
};

const PaletteAdapter = ({ presenter, palette, ...props }) => {
  const paletteItems = Object.keys(palette).map(key => ({ key, value: palette[key] }));
  return presenter({ paletteItems, ...props });
};

const Palette = props => <PaletteAdapter presenter={PalettePresenter} {...props} />;

export default Palette;
