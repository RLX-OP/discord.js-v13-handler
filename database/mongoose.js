const mongoose = require("mongoose");
const { database } = require("../config.json");

module.exports = async () => {
        if (!database) return;
  await mongoose.connect(database, {
          useNewUrlParser: true,
        useUnifiedTopology: true,
          autoIndex: false,
          connectTimeoutMS: 100000,
          family: 4
    })
        
}

mongoose.connection.on("connected", () => {
                console.log(`[DB] DATABASE CONNECTED`)
        })

mongoose.connection.on("disconnected", () => {
                console.log(`[DB] DATABASE DISCONNECTED`)
        })

mongoose.connection.on("err", (err) => {
                console.log(`[DB] THERE WAS AN ERROR IN DATABASE ` + err)
        })