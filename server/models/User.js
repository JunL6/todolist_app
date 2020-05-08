const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
});

userSchema.methods.verifyPassword = function (pwd) {
  return pwd === this.password ? true : false;
};

mongoose.model("User", userSchema);
