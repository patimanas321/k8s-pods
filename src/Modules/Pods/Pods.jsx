import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faCircleXmark, faClock, faHourglass, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

import styles from './Pods.module.css';
import { DataGrid, Avatar } from '../../Components/core';
import SearchBox from '../../Components/SearchBox';
import PodsClient from '../../APIs/pods.client';
import AppConstants from '../../Constants/AppConstants';
import { filter, sort } from './utils';

const Pods = () => {
  const [allPods, setAllPods] = useState([]);
  const [visiblePods, setVisiblePods] = useState([]);
  const [sortCol, setSortCol] = useState('name');
  const [sortOrder, setSortOrder] = useState(AppConstants.SORT_ORDER.Ascending);

  const cols = [
    {
      title: 'Name',
      field: 'name',
      sortable: true,
      renderCell: (value) => (
        <>
          <Avatar text={value} />
          <span>{value}</span>
        </>
      )
    },
    {
      title: 'Namespace',
      field: 'namespace',
      sortable: true,
      renderCell: (value) => (
        <>
          <Avatar text={value} />
          <span>{value}</span>
        </>
      )
    },
    {
      title: 'Status',
      field: 'status',
      sortable: true,
      renderCell: (value) => {
        const statusIcon = statusIcons[value];

        return (
          <>
            {statusIcon}
            <span>{value}</span>
          </>
        );
      }
    },
    {
      title: 'Age',
      field: 'createdOn',
      sortable: true,
      renderCell: (value) => (
        <>
          <i aria-hidden="true" className={styles.icon}><FontAwesomeIcon icon={faEarthAmerica} /></i>
          <span>{value.toLocaleDateString('en-us', AppConstants.READABLE_DATE_FORMAT_OPTIONS)}</span>
        </>
      )
    }
  ];
  const statusIcons = {
    [AppConstants.POD_STATUS.success]: (
      <i aria-hidden="true" className={`${styles.icon} ${styles.success}`}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </i>
    ),
    [AppConstants.POD_STATUS.failed]: (
      <i aria-hidden="true" className={`${styles.icon} ${styles.failed}`}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </i>
    ),
    [AppConstants.POD_STATUS.pending]: (
      <i aria-hidden="true" className={`${styles.icon} ${styles.pending}`}>
        <FontAwesomeIcon icon={faHourglass} />
      </i>
    ),
    [AppConstants.POD_STATUS.running]: (
      <i aria-hidden="true" className={`${styles.icon} ${styles.running}`}>
        <FontAwesomeIcon icon={faClock} />
      </i>
    ),
    [AppConstants.POD_STATUS.unknown]: (
      <i aria-hidden="true" className={`${styles.icon} ${styles.unknown}`}>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </i>
    )
  };

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
        sortCol={sortCol}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </>
  );
};

export default Pods;
