import classnames from 'classnames';

export const variantToArray = variants => classnames(variants || '').split(' ');
export const variantFromArray = variantArray => (variantArray || []).join(' ');

export const hasVariant = (variant, key) => variantToArray(variant).some(v => v === key);
export const addVariant = (variant, newVar) => classnames(variant, newVar);
export const removeVariant = (variant, remVar) =>
  variantFromArray(variantToArray(variant).filter(v => v !== remVar));
