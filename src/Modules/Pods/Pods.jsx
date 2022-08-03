import React, { useState, useEffect } from 'react';

import SearchBox from '../../Components/SearchBox';
import DataGrid from '../../Components/DataGrid';
import PodsClient from '../../APIs/pods.client';
import { filter } from './utils';

const Pods = () => {
  const [allPods, setAllPods] = useState([]);
  const [visiblePods, setVisiblePods] = useState([]);
  const cols = [
    {
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Namespace',
      field: 'namespace'
    },
    {
      title: 'Status',
      field: 'status'
    },
    {
      title: 'Age',
      field: 'age'
    }
  ];

  const refreshData = async () => {
    const pods = await PodsClient.getAllPods();

    setAllPods(pods);
  };

  const handleSearch = (searchByCol, searchText) => {
    setVisiblePods(filter(allPods, searchByCol, searchText));
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
      />
    </>
  );
};

export default Pods;
