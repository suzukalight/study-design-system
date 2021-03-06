import { palette, theme, shadows } from './colors';
import { sizings, spacings, raduises } from './sizings';
import { typographies } from './typographies';
import { mediaQueries } from './media-queries';
import { zIndexes } from './z-indexes';

const token = {
  cl: {
    palette,
    theme,
    shadows,
  },
  sz: sizings,
  sp: spacings,
  rd: raduises,
  ty: typographies,
  mq: mediaQueries,
  zi: zIndexes,
};

export default token;
