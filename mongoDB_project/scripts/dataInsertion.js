use SupplyChainDB

db.shipments.insertMany([
  {
    _id: 1,
    tracking_number: "TRK100001",
    origin_zip: "10001",
    destination_zip: "90001",
    status: "pending",
    weight: 12.5,
    created_at: ISODate("2025-01-01T10:15:00Z")
  },
  {
    _id: 2,
    tracking_number: "TRK100002",
    origin_zip: "30301",
    destination_zip: "60601",
    status: "delivered",
    weight: 5.2,
    created_at: ISODate("2025-01-02T08:20:00Z")
  },
  {
    _id: 3,
    tracking_number: "TRK100003",
    origin_zip: "73301",
    destination_zip: "85001",
    status: "pending",
    weight: 20.0,
    created_at: ISODate("2025-01-03T09:45:00Z")
  },
  {
    _id: 4,
    tracking_number: "TRK100004",
    origin_zip: "94105",
    destination_zip: "10001",
    status: "delivered",
    weight: 7.8,
    created_at: ISODate("2025-01-03T11:30:00Z")
  },
  {
    _id: 5,
    tracking_number: "TRK100005",
    origin_zip: "60601",
    destination_zip: "30301",
    status: "pending",
    weight: 15.4,
    created_at: ISODate("2025-01-04T13:10:00Z")
  },
  {
    _id: 6,
    tracking_number: "TRK100006",
    origin_zip: "85001",
    destination_zip: "73301",
    status: "delivered",
    weight: 9.1,
    created_at: ISODate("2025-01-05T07:50:00Z")
  },
  {
    _id: 7,
    tracking_number: "TRK100007",
    origin_zip: "10001",
    destination_zip: "30301",
    status: "pending",
    weight: 3.4,
    created_at: ISODate("2025-01-06T14:00:00Z")
  },
  {
    _id: 8,
    tracking_number: "TRK100008",
    origin_zip: "90001",
    destination_zip: "60601",
    status: "delivered",
    weight: 18.9,
    created_at: ISODate("2025-01-06T16:40:00Z")
  },
  {
    _id: 9,
    tracking_number: "TRK100009",
    origin_zip: "30301",
    destination_zip: "94105",
    status: "pending",
    weight: 6.0,
    created_at: ISODate("2025-01-07T09:05:00Z")
  },
  {
    _id: 10,
    tracking_number: "TRK100010",
    origin_zip: "60601",
    destination_zip: "85001",
    status: "delivered",
    weight: 22.3,
    created_at: ISODate("2025-01-07T11:25:00Z")
  }
])

db.warehouses.insertMany([
  {
    _id: 1,
    name: "NY Central Warehouse",
    zip_code: "10001",
    city: "New York",
    sqft_capacity: 50000
  },
  {
    _id: 2,
    name: "LA West Warehouse",
    zip_code: "90001",
    city: "Los Angeles",
    sqft_capacity: 65000
  },
  {
    _id: 3,
    name: "Chicago Hub",
    zip_code: "60601",
    city: "Chicago",
    sqft_capacity: 55000
  },
  {
    _id: 4,
    name: "Atlanta Distribution Center",
    zip_code: "30301",
    city: "Atlanta",
    sqft_capacity: 48000
  },
  {
    _id: 5,
    name: "Phoenix Storage Facility",
    zip_code: "85001",
    city: "Phoenix",
    sqft_capacity: 42000
  }
])

db.courier_logs.insertMany([
  {
    _id: 1,
    shipment_id: 1,
    vehicle_id: "VEH-101",
    courier_id: "CR-501",
    timestamp: ISODate("2025-01-01T12:00:00Z")
  },
  {
    _id: 2,
    shipment_id: 2,
    vehicle_id: "VEH-102",
    courier_id: "CR-502",
    timestamp: ISODate("2025-01-02T09:30:00Z")
  },
  {
    _id: 3,
    shipment_id: 3,
    vehicle_id: "VEH-103",
    courier_id: "CR-503",
    timestamp: ISODate("2025-01-03T10:15:00Z")
  },
  {
    _id: 4,
    shipment_id: 4,
    vehicle_id: "VEH-101",
    courier_id: "CR-501",
    timestamp: ISODate("2025-01-03T13:00:00Z")
  },
  {
    _id: 5,
    shipment_id: 5,
    vehicle_id: "VEH-104",
    courier_id: "CR-504",
    timestamp: ISODate("2025-01-04T15:20:00Z")
  },
  {
    _id: 6,
    shipment_id: 6,
    vehicle_id: "VEH-105",
    courier_id: "CR-505",
    timestamp: ISODate("2025-01-05T08:40:00Z")
  },
  {
    _id: 7,
    shipment_id: 7,
    vehicle_id: "VEH-102",
    courier_id: "CR-502",
    timestamp: ISODate("2025-01-06T14:30:00Z")
  },
  {
    _id: 8,
    shipment_id: 8,
    vehicle_id: "VEH-103",
    courier_id: "CR-503",
    timestamp: ISODate("2025-01-06T17:10:00Z")
  },
  {
    _id: 9,
    shipment_id: 9,
    vehicle_id: "VEH-104",
    courier_id: "CR-504",
    timestamp: ISODate("2025-01-07T10:00:00Z")
  },
  {
    _id: 10,
    shipment_id: 10,
    vehicle_id: "VEH-105",
    courier_id: "CR-505",
    timestamp: ISODate("2025-01-07T12:45:00Z")
  }
])