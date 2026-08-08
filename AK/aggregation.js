
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



db.users.aggregate([
    {$match:{
        department:'IT'
    }},

    {
        $group:{
            _id:"$department",
            Total:{$sum:"$salary"}
        }
    },

    {
        $project:{
            department:"$_id",
            _id:0,
            Total:1

        }
    }
])



db.users.aggregate([

    {
        $match:{
            Location:"lehsun"
        }
    },
    {
        $group:{
            _id:"$Location",
            Name:{$push: "$name"},
            Email:{$push: "$email"},
        }
    },
    {
        $project:{
            Location:"$_id",
            Name:1,
            Email:1
        }
    }

])


db.users.aggregate([

    {
        $match:{
            Location:"lehsun"
        }
    },
    {
        $group:{
            _id:"$Location",
            Employee:{
                $push:{
                    Name:"$name",
                    Email:"$email"
                }
            }
            
        }
    },
    {
        $project:{
            Location:"$_id",
            Employee:1
        }
    }

])


db.users.aggregate([
    {$match:{
        salary:{$gte:20000}
    }},

    {$group:{
        _id:"salary",
        Sum: {$sum: "$salary"},
        AVG : {$avg: "$salary"},
       

        Employee: {   $push:{
                Name:"$name",
                Email:"$email"
                
            }
        }
    }},

    {
        $project:{
            salary:"$_id",
            Sum:1,
            AVG:1,
            Employee:1,
            message:"you are qualified"
        }
    }

])








