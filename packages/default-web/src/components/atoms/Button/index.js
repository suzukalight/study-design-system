import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, type = 'button', ...props }) {
  return (
    <button type={type || 'button'} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
