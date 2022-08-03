import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './IconButton.module.css';

const IconButton = ({
  icon,
  type,
  ariaLabel,
  testId
}) => (
  <button
    aria-label={ariaLabel}
    className={styles.iconBtn}
    type={type}
    data-testid={testId}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);
IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  testId: PropTypes.string
};

export default IconButton;
