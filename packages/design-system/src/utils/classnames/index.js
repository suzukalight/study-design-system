import classnames from 'classnames';

const classNamesToArray = classNames => classnames(classNames || '').split(' ');
const classNamesFromArray = classNameArray => (classNameArray || []).join(' ');

export const hasVariant = (variant, key) => classNamesToArray(variant).some(v => v === key);
export const addVariant = (variant, newVar) => classnames(variant, newVar);
export const removeVariant = (variant, remVar) =>
  classNamesFromArray(classNamesToArray(variant).filter(v => v !== remVar));
