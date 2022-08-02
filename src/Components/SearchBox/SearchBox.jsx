import { useState } from "react";

import styles from "./SearchBox.module.css";

const SearchBox = ({
    searchColumns,
    onSearch
}) => {
    const [searchByCol, setSearchByCol] = useState('name');
    const [searchText, setSearchText] = useState();

    return (
        <div>
            <select
                className={styles.searchByCol}
                value={ searchByCol }
                onChange={(event) => setSearchByCol(event.target.value)}
            >
                {
                    searchColumns.map(({label, value}) => (
                        <option key={value} value={value}>{label}</option>
                    ))
                }
            </select>
            <input
                className={styles.search}
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
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
