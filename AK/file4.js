db.users.updateOne({}, {$inc:{age:23}})

db.users.updateMany({}, {$set:{age:22}})

db.users.updateOne({name:"Ankit kumar", section:"k23wf"}, {$set:{section:"k23pb"}})


db.users.updateMany({}, {$rename:{age:"points"}})

db.users.updateMany({},{$unset:{points:""}})


