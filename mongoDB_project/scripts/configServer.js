rs.initiate({
    _id: "config-rs",
    configsvr: true,
    members: [
        {_id: 0, host: "configServer1:27017"},
        {_id: 1, host: "configServer2:27017"},
        {_id: 2, host: "configServer3:27017"}
    ]
});