import { useState, useEffect } from "react";

import DataGrid from "../../Components/DataGrid";
import PodsClient from "../../APIs/pods.client";
import styles from './Pods.module.css';

const Pods = () => {
    const [podList, setPodList] = useState([]);

    const refreshData = async () => {
        const pods = await PodsClient.getAllPods();

        setPodList(pods);
    };

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

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <DataGrid columns={cols} rows={podList} />
    );
};

export default Pods;