import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchBox.module.css';
import Select from '../Select';
import IconButton from '../IconButton';
import TextField from '../TextField';

const SearchBox = ({
  searchColumns,
  onSearch
}) => {
  const [searchByCol, setSearchByCol] = useState('name');
  const [searchText, setSearchText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(searchByCol, searchText);
  };

  return (
    <form className={styles.searchBox} onSubmit={onSubmit}>
      <Select
        options={searchColumns}
        value={ searchByCol }
        onChange={setSearchByCol}
      />
      <TextField
        value={searchText}
        onChange={setSearchText}
      />
      <IconButton icon={faMagnifyingGlass} type='submit' />
    </form>
  );
};
SearchBox.propTypes = {
  searchColumns: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchBox;
