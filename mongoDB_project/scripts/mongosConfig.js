sh.addShard("shard1-rs/shard1-primary:27017,shard1-secondary01:27017,shard1-secondary02:27017");
sh.addShard("shard2-rs/shard2-primary:27017,shard2-secondary01:27017,shard2-secondary02:27017");

sh.enableSharding("SupplyChainDB");

// Zones
// Zone West -> shard1
// Zone East -> shard2

sh.addShardToZone("shard1-rs", "Zone_West")
sh.addShardToZone("shard2-rs", "Zone_East")

// Shard Key Ranges
sh.updateZoneKeyRange("test.shipments", { "origin_zip": "00000"}, {"origin_zip": "50000"},  "Zone_West")
sh.updateZoneKeyRange("test.shipments", { "origin_zip": "50000"}, {"origin_zip": "99999"},  "Zone_East")

//list shards
db.adminCommand({ listShards: 1 })

