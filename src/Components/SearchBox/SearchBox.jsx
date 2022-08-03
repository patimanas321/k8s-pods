import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchBox.module.css';
import { Select, IconButton, TextField } from '../core';
import AppConstants from '../../Constants/AppConstants';

const searchOptions = {
  name: 'name',
  status: 'status'
};

const SearchBox = ({
  onSearch
}) => {
  const [searchByCol, setSearchByCol] = useState('name');
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (searchByCol === searchOptions.name) {
      onSearch('name', searchText);
    } else if (searchByCol === searchOptions.status) {
      onSearch('status', status);
    } else {
      onSearch();
    }
  };

  const statusOptions = Object.values(AppConstants.POD_STATUS).map(status => ({
    label: status,
    value: status
  }));

  return (
    <form className={styles.searchBox} onSubmit={onSubmit}>
      <Select
        options={[
          { label: 'Name', value: searchOptions.name },
          { label: 'Status', value: searchOptions.status }
        ]}
        value={searchByCol}
        onChange={setSearchByCol}
      />
      {
        searchByCol === 'name' && (
          <TextField
            value={searchText}
            style={styles.searchField}
            onChange={setSearchText}
          />
        )
      }
      {
        searchByCol === 'status' && (
          <Select
            options={statusOptions}
            value={status}
            style={styles.searchField}
            onChange={setStatus}
          />
        )
      }
      <IconButton icon={faMagnifyingGlass} type='submit' />
    </form>
  );
};
SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchBox;
