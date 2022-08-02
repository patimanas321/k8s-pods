import { useState, useEffect } from "react";

import PodsClient from "../../APIs/pods.client";

const Pods = () => {
    const [podList, setPodList] = useState([]);

    const refreshData = async () => {
        const pods = await PodsClient.getAllPods();

        setPodList(pods);
    };

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <div>
            {
                podList.map(pod => (
                    <div key={pod.id}>
                        <div>Name: {pod.name}</div>
                        <div>Namespace: {pod.namespace}</div>
                        <div>Age: {pod.age}</div>
                        <div>Status: {pod.status}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Pods;