/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("test");

// Create a new document in the collection.
db.getCollection("users").insertOne({
    Roll_No:101,
    Name: "Amit Sharma",
    Age: 20,
    Gender:"Male",
    Course:"BCA",
    Semester:3,
    Marks:85,
    City:"Delhi",
    Attendance:92,
    isHosteller:true
});
