db.users.updateOne({}, {$inc:{age:23}})

db.users.updateMany({}, {$set:{age:22}})

db.users.updateOne({name:"Ankit kumar", section:"k23wf"}, {$set:{section:"k23pb"}})


db.users.updateMany({}, {$rename:{age:"points"}})

db.users.updateMany({},{$unset:{points:""}})


db.users.updateOne({email:"ank@gmail.com"}, {
    $set:{
    name:"Ankit kumar",
    section:"k23wf",
    email:"ank@gmail.com",
    department:"CSE",
    salary:3000000,
    age:21,
    date:Date()
    }},
    {$upsert:true}

)

db.users.updateMany({}, {$set:{date:Date()}})


//*upsert :- by adding upsert:true it create a new document if it does not exist
//* $set :- update the value of field and if does not exist it create a new one 


//TODO: DELETE

db.users.deleteOne({email:"rahul@gmail.com"})

db.users.deleteMany({...})


db.users.updateMany({},{$set:{points:0}})

db.users.updateMany({}, {$rename:{points:'score'}})

db.users.updateMany({}, {$set:{score:10}});

db.users.updateMany({}, {$unset:{score:""}})  //delete the field

