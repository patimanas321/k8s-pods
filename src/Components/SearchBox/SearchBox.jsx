import React, { useState } from 'react';

import Select from '../Select';
import TextField from '../TextField';
import PropTypes from 'prop-types';

const SearchBox = ({
  searchColumns,
  onSearch
}) => {
  const [searchByCol, setSearchByCol] = useState('name');
  const [searchText, setSearchText] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(searchByCol, searchText);
  };

  return (
    <form onSubmit={onSubmit}>
      <Select
        options={searchColumns}
        value={ searchByCol }
        onChange={setSearchByCol}
      />
      <TextField
        value={searchText}
        onChange={setSearchText}
      />
      <button type='submit'>Search</button>
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
