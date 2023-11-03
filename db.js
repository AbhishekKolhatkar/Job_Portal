const mongoose = require("mongoose");
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://abhishekkolhatkar2000:Abhi123@project.amave1n.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("Mongo DB Connection success");
  } catch (error) {
    console.log("Mongo DB Connection failed");
  }
}

module.exports = mongoose;
