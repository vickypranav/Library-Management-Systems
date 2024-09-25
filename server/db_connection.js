const mongoose = require("mongoose")

require("dotenv").config();

mongoose.set("strictQuery", false);
try {

    mongoose.connect(process.env.DB_URL);

    console.log("Connected To Database");

} catch (error) {

    console.log("error while loadind the data base", error);

}