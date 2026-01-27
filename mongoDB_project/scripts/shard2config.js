rs.initiate({
    _id: "shard2-rs",
    members: [
        { _id: 0, host: "shard2-primary:27017", priority: 2},
        { _id: 1, host: "shard2-secondary01:27017", priority: 1},
        { _id: 2, host: "shard2-secondary02:27017", priority: 1},
        { _id: 3, host: "shard2-hidden:27017", priority: 0, hidden: true, votes: 0}
    ]
});