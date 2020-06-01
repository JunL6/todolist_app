const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  groupName: String,
  todoContent: String,
  isDone: Boolean,
  createdTime: Date,
});

const userSchema = new Schema({
  username: String,
  password: String,
  todos: [TodoSchema],
});

userSchema.methods.verifyPassword = function (pwd) {
  return pwd === this.password ? true : false;
};

mongoose.model("User", userSchema);
