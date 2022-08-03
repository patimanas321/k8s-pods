import React from 'react';
import PropTypes from 'prop-types';

import styles from './Avatar.module.css';

const Avatar = ({
  text,
  style
}) => {
  const words = text.split(text.includes(' ') ? ' ' : '-').filter(Boolean);
  const firstWord = words[0];
  const lastWord = words.length > 1 ? words[words.length - 1] : '';
  let initials = firstWord.charAt(0);
  if (lastWord) {
    initials += lastWord.charAt(0);
  }

  return (
    <div aria-hidden="true" className={`${styles.avatar} ${style}`}>{initials}</div>
  );
};
Avatar.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string
};

export default Avatar;
