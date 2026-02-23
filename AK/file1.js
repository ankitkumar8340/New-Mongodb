
//open cmd and 

mongosh -version  //for checking version 

mongosh //to connect

// opened cmd

// show dbs  //to show data

// use placement
db.createCollection("users")
// show collections

db.users.renameCollection("tests")

db.users.find()  //to show data

//To insert in database
db.users.insertOne({name:"Ankit kumar", section:"k23wf", email:"ank@gmail.com", department:"CSE", salary:200000})


//multiple insert

db.users.insertMany([
    {name:"John", section:"abcd", email:"john@gmail.com", department:"CSE", salary:100000 },
    {name:"smith", section:"abcd", email:"smith@gmail.com", department:"CSE", salary:140000},
    {name:"roy", section:"abcd", email:"roy@gmail.com", department:"CSE", salary:300000}
])






















