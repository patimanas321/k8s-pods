import { useState } from "react";

import Select from "../Select";
import TextField from "../TextField";

const SearchBox = ({
    searchColumns,
    onSearch
}) => {
    const [searchByCol, setSearchByCol] = useState('name');
    const [searchText, setSearchText] = useState();

    return (
        <div>
            <Select
                options={searchColumns}
                value={ searchByCol }
                onChange={setSearchByCol}
            />
            <TextField
                value={searchText}
                onChange={setSearchText}
            />
            <button
                onClick={() => onSearch(searchByCol, searchText)}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBox;
