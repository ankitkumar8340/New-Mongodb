

db.users.updateOne({email:"ank@gmail.com"}, {$set:{Locations:['bihar', 'delhi']}})

db.users.updateOne({email:"ank@gmail.com"}, {$addToSet:{Locations:['gaya','meheru']}})  //this will create a new array inside the existing one

// to remove this we use
db.users.updateOne({email:"ank@gmail.com"},
    {$pull:{Locations:" "}} // it will remove all " " from locations 
)



db.users.updateOne({email:"ank@gmail.com"}, 
    {$addToSet:
        {Locations:
            {$each:['gaya', 'meheru', 'bihar']}  //it will add the data inside the existing array
        }})

        //*when we use $addToSet this will add check if that data already exist it will not add
        //*when we use $push this will add data, it does not care about existing data

db.users.updateOne(
    {email:"ank@gmail.com"},
    {$push:{
         Locations: {$each: ['gaya', 'bihar']  }
    }}

)



db.users.find({email:"ank@gmail.com"}).explain("executionStats")


db.users.createIndex({email:1})  //this will create a index in ascending order in all emails

db.users.getIndexes()  // to check whether index is created or not

//* this is use for finding fast data suppose a page number in book 
//* to check whether it is running or not   run this db.users.find({email:"ank@gmail.com"}).explain("executionStats") and check for "stage":"IXSCAN"  THEN IT IS WORKING FINE






































