import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Palette from './Palette';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ItemWrap = styled.div`
  margin-right: 2rem;
  margin-bottom: 2rem;
`;

const PanelizePresenter = ({ paletteItems }) => (
  <Wrap>
    {paletteItems.map(p => (
      <ItemWrap key={p.key}>
        <Palette name={p.key} palette={p.value} />
      </ItemWrap>
    ))}
  </Wrap>
);

PanelizePresenter.propTypes = {
  paletteItems: PropTypes.array,
};

const PanelizeAdapter = ({ presenter, palettes, ...props }) => {
  const paletteItems = Object.keys(palettes).map(key => ({ key, value: palettes[key] }));
  return presenter({ paletteItems, ...props });
};

const Panelize = props => <PanelizeAdapter presenter={PanelizePresenter} {...props} />;

export default Panelize;
