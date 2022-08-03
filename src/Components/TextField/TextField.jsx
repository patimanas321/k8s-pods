import React from 'react';
import styles from './TextField.module.css';
import PropTypes from 'prop-types';

const TextField = ({
  type = 'text',
  value,
  onChange
}) => (
  <input
    className={styles.textField}
    type={type}
    value={value}
    onChange={(event) => onChange(event.target.value)}
  />
);
TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextField;
