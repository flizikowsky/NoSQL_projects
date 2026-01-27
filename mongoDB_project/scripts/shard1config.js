rs.initiate({
    _id: "shard1-rs",
    members: [
        { _id: 0, host: "shard1-primary:27017", priority: 2},
        { _id: 1, host: "shard1-secondary01:27017", priority: 1},
        { _id: 2, host: "shard1-secondary02:27017", priority: 1},
        { _id: 3, host: "shard1-hidden:27017", priority: 0, hidden: true, votes: 0}
    ]
});

rs.config()