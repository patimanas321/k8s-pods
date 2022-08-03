import React from 'react';
import styles from './Select.module.css';
import PropTypes from 'prop-types';

const Select = ({
  options,
  value,
  onChange
}) => (
  <select
    className={styles.select}
    value={ value }
    onChange={(event) => onChange(event.target.value)}
  >
    {
      options.map(({ label, value }) => (
        <option
          key={value}
          value={value}
        >
          {label}
        </option>
      ))
    }
  </select>
);
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
