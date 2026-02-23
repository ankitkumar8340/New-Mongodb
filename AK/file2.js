
//Find Data 
db.users.find()  //to show all it shows first 20 result  and then iterate


db.users.find().skip(2)  //how many data we want to skip
db.users.findOne()  //return only the very first document it find


db.users.findOne({ name: "Ankit kumar" })  //to find specific one

db.users.find().sort({ name: 1 })  //1 A-Z   ||  -1 Z-A

db.users.find().limit(1)  //return first document by id

db.users.find().sort({ name: 1 }).limit(2)

db.users.insertMany([
    { name: "Ayush", section: "abcde", email: "ayush@gmail.com", department: "IT", salary: 100000 },
    { name: "Ankesh", section: "abcde", email: "ankesh@gmail.com", department: "IT", salary: 140000 },
    { name: "Rahul", section: "abcde", email: "rahul@gmail.com", department: "IT", salary: 300000, address: { city: gaya, post: sahiya } }
])

db.users.find({ department: "IT" })

db.users.find({ department: "CSE", section: "abcd" }) //  null

db.users.find({ department: "IT" }, { _id: 0, name: 1, email: 1, department: 1 })

// {} => filter 
// {} => projection / kya show krna hai kya nhi  


db.users.find({ department: "IT" }, { _id: 0, name: 0, email: 0, department: 0 })  //shows everything except the one we mentioned as 0

db.users.find({ department: "IT" }, { _id: 0, name: 1, email: 0, department: 0 })
//this is incorrect field should not be mixed



db.users.find({ department: "IT" }, { _id: false, name: true, email: true, department: true })

//Dot notation
db.users.insertOne(
    {
        name: "Rahul",
        section: "abcde",
        email: "rahul@gmail.com",
        department: "IT",
        salary: 300000,
        address: { city: "gaya", post: "sahiya"}
    })


db.users.find({ 'address.city': 'gaya' }) 
 
db.users.find().count()   //to count how many number of documents















