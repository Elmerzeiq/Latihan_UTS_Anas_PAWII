let mongoose=require("mongoose")
//let dbURI ='mongodb://localhost:27017/pawII-si52';
let dbURI = "mongodb://localhost:27017/db_latihan_uts";
mongoose.connect(dbURI,{
   // useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
});
mongoose.connection.on("error", (error) => {
    console.log("Connection Error : " + error );

});
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB")
});

