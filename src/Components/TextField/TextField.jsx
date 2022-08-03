import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextField.module.css';

const TextField = ({
  type = 'text',
  value,
  style,
  onChange
}) => (
  <input
    className={`${styles.textField} ${style}`}
    type={type}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);
TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextField;
