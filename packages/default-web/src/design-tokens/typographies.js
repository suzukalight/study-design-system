export const fontFamilies = {
  text: 'sans-serif',
  monospace: 'monospace',
};

export const fontSizes = {
  xs: '0.8rem',
  s: '1.2rem',
  m: '1.6rem',
  l: '2rem',
  xl: '2.4rem',
};

export const fontWeights = {
  light: '300',
  normal: '500',
  bold: '700',
};

export const lineHeights = {
  s: '1',
  m: '1.5',
  l: '2',
};

export const typographies = {
  text: {
    fontFamily: fontFamilies.text,
    fontSize: fontSizes.s,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.m,
  },
  h1: {
    fontFamily: fontFamilies.monospace,
    fontSize: fontSizes.l,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.l,
  },
};

export default typographies;
