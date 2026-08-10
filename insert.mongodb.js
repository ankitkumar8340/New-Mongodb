use("test");

db.users.find();

db.users.insertOne({name:"Ankit kumar"})



db.users.insertMany([
  {
    rollNo: 101,
    name: "Aarav Sharma",
    age: 20,
    gender: "Male",
    course: "B.Tech CSE",
    semester: 3,
    marks: 89,
    city: "Delhi",
    attendance: 92,
    isHosteller: true
  },
  {
    rollNo: 102,
    name: "Priya Verma",
    age: 19,
    gender: "Female",
    course: "B.Tech CSE",
    semester: 3,
    marks: 94,
    city: "Lucknow",
    attendance: 96,
    isHosteller: false
  },
  {
    rollNo: 103,
    name: "Rohan Gupta",
    age: 21,
    gender: "Male",
    course: "B.Tech IT",
    semester: 5,
    marks: 78,
    city: "Jaipur",
    attendance: 81,
    isHosteller: true
  },
  {
    rollNo: 104,
    name: "Sneha Patel",
    age: 20,
    gender: "Female",
    course: "BCA",
    semester: 4,
    marks: 85,
    city: "Ahmedabad",
    attendance: 90,
    isHosteller: false
  },
  {
    rollNo: 105,
    name: "Aditya Singh",
    age: 22,
    gender: "Male",
    course: "MCA",
    semester: 2,
    marks: 91,
    city: "Bhopal",
    attendance: 88,
    isHosteller: true
  }
]);


db.students.find();

db.students.find({city:{$in :["Delhi", "Bhopal"]}})
db.students.find({city:{$in :["Ahemdabaad", "jaipur"]}})













