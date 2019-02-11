import React from 'react';
import PropTypes from 'prop-types';

import dt from '../../../design-tokens';
import { styled, ty, clWhenHasVariant } from '../../../../../design-system/src/utils/styles';

export const StyledButton = styled.button`
  ${clWhenHasVariant('primary', dt.cl.theme.primary, 'main', 'light2')}
  ${clWhenHasVariant('secondary', dt.cl.theme.secondary, 'main', 'light2')}

  border-radius: ${dt.rd.m};
  padding: ${dt.sp.xxs} ${dt.sp.m};

  ${ty(dt.ty.text)}
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.string,
};
