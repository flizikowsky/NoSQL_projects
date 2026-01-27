// single shard targeted query (tracking a shipment)
db.shipments.find({
    origin_zip: "10001",
    _id: 1
})

// zone targeted query (pending shipments from western region)
db.shipments.find({
    origin_zip: { $lt: "50000" },
    status: "pending"
})

// identification of heavier loads across entire country
db.shipments.find({
    weight: { $gt: 5 }
}).sort({ weight: -1 });

// Aggregation to get shipment details along with latest courier log and warehouse info
db.shipments.aggregate([
  // join origin warehouse info
  {
    $lookup: {
      from: "warehouses",
      localField: "origin_zip",
      foreignField: "zip_code",
      as: "origin_warehouse"
    }
  },
  { $unwind: "$origin_warehouse" },

  // join courier logs
  {
    $lookup: {
      from: "courier_logs",
      localField: "_id",
      foreignField: "shipment_id",
      as: "logs"
    }
  },

  // add latest log per shipment
  {
    $addFields: {
      latest_log: { $arrayElemAt: [{ $slice: ["$logs", -1] }, 0] }
    }
  },

  // group by warehouse to compute numerical aggregation
  {
    $group: {
      _id: "$origin_warehouse.name",
      total_weight: { $sum: "$weight" },      // sum of shipment weights
      shipment_count: { $sum: 1 },            // number of shipments
      latest_courier_log: { $last: "$latest_log" } // latest log among all shipments
    }
  },

  // project final fields
  {
    $project: {
      _id: 0,
      warehouse_name: "$_id",
      total_weight: 1,
      shipment_count: 1,
      vehicle_id: "$latest_courier_log.vehicle_id",
      courier_id: "$latest_courier_log.courier_id",
      last_update: "$latest_courier_log.timestamp"
    }
  }
])