
db.users.aggregate([
    {$match:
        {department:"CSE"}
    },

    {
        $group:{
            _id:"$department",
            Total:{$sum: "$salary"}
        }
    },

    {$project:
        {department:"$_id",
            Total:1,
            _id:0

        }
    }

])

// Expression	Meaning
// $dept	    value of dept field
// $salary	    value of salary field
// _id:         "$dept"	group by dept
// _id: 0	    hide _id
// "$_id"	    use previous _id value












