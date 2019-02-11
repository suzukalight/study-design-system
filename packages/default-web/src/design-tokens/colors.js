export const palette = {
  ink: {
    light2: '#637381',
    light1: '#454f5b',
    main: '#212b36',
  },
  white: {
    light1: '#f4f6f8',
    main: '#dfe3e8',
    dark1: '#c4cdd5',
  },
  green: {
    light2: '#e3f1df',
    light1: '#bbe5b3',
    main: '#50b83c',
    dark1: '#108043',
  },
  blue: {
    light2: '#ebf5fa',
    light1: '#b4e1fa',
    main: '#007ace',
    dark1: '#084e8a',
  },
  red: {
    light1: '#fead9a',
    main: '#de3618',
    dark1: '#bf0711',
  },
  yellow: {
    light1: '#ffea8a',
    main: '#eec200',
    dark1: '#8a6116',
  },
};

export const semantic = {
  primary: palette.green,
  secondary: palette.blue,
};

export const shadows = {};

export const colors = {
  palette,
  semantic,
  shadows,
};

export default colors;
