import styled, { css } from 'styled-components';
import paramCase from 'param-case';

import { hasVariant } from '../variant';

export { styled, css };

const propsTypography = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight'];

const write = (element, key, cssProperty) => `${cssProperty || paramCase(key)}: ${element[key]};`;
const writeIf = (element, key, cssProperty) =>
  element && key in element ? write(element, key, cssProperty) : '';
const writeAllIf = (element, keys) => keys.map(k => writeIf(element, k));

export const ty = typography => css`
  ${writeAllIf(typography, propsTypography)}
`;

export const cl = (palette, bg, fg) => css`
  background-color: ${palette[bg]};
  color: ${palette[fg]};
`;

export const clWhenHasVariant = (variant, palette, bg, fg) => props =>
  hasVariant(props.variant, variant) ? cl(palette, bg, fg) : '';
