class Pod {
    id;
    name;
    namespace;
    status;
    createdOn;
    get age() {
        return new Date(this.createdOn).toLocaleString();
    }
    constructor(rawData) {
        if (!rawData) return;

        const { metadata, status } = rawData;

        this.id = metadata.uid;
        this.name = metadata.name;
        this.namespace = metadata.namespace;
        this.status = status.phase;
        this.createdOn = metadata.creationTimestamp;
    }
}

export default Pod;