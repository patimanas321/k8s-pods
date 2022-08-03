import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './IconButton.module.css';

const IconButton = ({
  icon,
  type,
  ariaLabel
}) => (
  <button
    aria-label={ariaLabel}
    className={styles.iconBtn}
    type={type}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);
IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired
};

export default IconButton;
