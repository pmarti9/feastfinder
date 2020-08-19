const mongoose = require('mongoose');
const db = require("../models")

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/ffdatabase"
)

const userSeed = [
    {
        email: "parkerjmartin883@gmail.com",
        password: "password",
        name: "Parker Martin",
        date: new Date(Date.now())
    },
    {
        email: "test@test.com",
        password: "testpassword",
        name: "Tester McTesterson",
        date: new Date(Date.now())
    }
]

db.users
.remove({})
.then(()=> db.user.collection.insertMany(userSeed))
.then(data=>{
    console.log(data.result.n + " users inserted");
    process.exit(0)
}).catch(err=>{
    console.error(err);
    process.exit(1)
})