import React, { useState, useEffect } from 'react';

import { DataGrid } from '../../Components/core';
import SearchBox from '../../Components/SearchBox';
import PodsClient from '../../APIs/pods.client';
import AppConstants from '../../Constants/AppConstants';
import { filter, sort } from './utils';

const Pods = () => {
  const cols = [
    {
      title: 'Name',
      field: 'name',
      sortable: true
    },
    {
      title: 'Namespace',
      field: 'namespace',
      sortable: true
    },
    {
      title: 'Status',
      field: 'status',
      sortable: true
    },
    {
      title: 'Age',
      field: 'age',
      sortable: true
    }
  ];

  const [allPods, setAllPods] = useState([]);
  const [visiblePods, setVisiblePods] = useState([]);
  const [sortCol, setSortCol] = useState(cols[0].field);
  const [sortOrder, setSortOrder] = useState(AppConstants.SORT_ORDER.Ascending);

  const refreshData = async () => {
    const pods = await PodsClient.getAllPods();

    setAllPods(pods);
  };

  const handleSearch = (searchByCol, searchText) => {
    setVisiblePods(
      sort(
        filter(allPods, searchByCol, searchText),
        sortCol, sortOrder
      )
    );
  };

  const handleSort = (col, order) => {
    setSortCol(col);
    setSortOrder(order);
    setVisiblePods(sort(visiblePods, col, order));
  };

  useEffect(() => {
    handleSearch();
  }, [allPods]);

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <DataGrid
        columns={cols}
        rows={visiblePods}
        defaultSortModel={{
          col: cols[0].field,
          order: AppConstants.SORT_ORDER.Ascending
        }}
        sortCol={sortCol}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </>
  );
};

export default Pods;
