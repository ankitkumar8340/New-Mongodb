db.users.find().collation({locale:'en', strength:2}).sort({name:1})

//collation :- it controlled how strings are compared and sorted in mongodb
//by default it uses binary comparison means ascii value comparison for strings

// locale tell about language en means english
// Levels of strength:
// Strength	Behavior
// 1	Ignore case + accents
// 2	Ignore case, but consider accents
// 3 (default)	Case-sensitive
// 4	Very strict (case + accents + punctuation)


db.users.aggregate([
    {$sort:{
        "name":1
    }},
    {
        $project:{
            "name":1,
            "department":1,
            "salary":1
        }
    },
    {
        $limit:4
    }
])



db.users.aggregate([
    {$match:{
        salary:{$gt:20000}
    }},

    {$group:{
        _id:'$department',
        Total:{$sum:'$salary'},
        Name : {$push: '$name'},
        Salary: {$push: '$salary'},
        department : {$push: '$department'}

    }},
    {
        $project:{
            department:'$_id',
            _id:0,
            Total:1,
            Name:1,
            Salary:1,
            
            
        }
    }

])
db.users.aggregate([
    {$match:{
        salary:{$gt:20000}
    }},

    {$group:{
        _id:'$department',
        Total:{$sum:'$salary'},
        Employees:{
            $push:{
        Name : '$name',
        Salary: '$salary',

        department :'$department'
            }}

    }},
    {
        $project:{
            department:'$_id',
            _id:0,
            Total:1,
            Employees:1
            
            
        }
    }

])


db.users.aggregate([

    {$unwind:"$Location"}
    
])