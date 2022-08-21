// Using Node.js `require()`
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://nguyenhuuthuat:Thuat123@cluster0.cs9d8wh.mongodb.net/f8_education_dev?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connect mongo successfully !!!");
  } catch (error) {
    console.log("Connect mongo faile");
  }
}
module.exports = { connect };
