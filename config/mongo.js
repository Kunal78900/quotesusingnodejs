const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/todo_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', ()=>{
  console.error("Error connecting to db");
})
db.once('open', ()=>{
    console.log("Connected to database")
})