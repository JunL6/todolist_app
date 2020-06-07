const mongoose = require("mongoose");
const log = require("../utils/logging");

const User = mongoose.model("User");

module.exports = (app) => {
  app.get("/api/getUserData", (req, res) => {
    console.log(req.user);
    if (!req.user) {
      return res.status(401).send("Not authorized");
    } else {
      User.findById(req.user._id).exec((err, userDoc) => {
        if (err) {
          console.error(err);
          res.send(`error has occured.`);
        } else {
          console.log(userDoc);
          res.json(userDoc);
        }
      });
    }
  });

  app.post("/api/insertTodo", (req, res) => {
    console.log(req.user);
    if (!req.user) {
      return res.status(401).send("Not authorized");
    } else {
      const { groupName, todoContent, createdTime, ...rest } = req.body;
      User.findById(req.user._id).exec((err, userDoc) => {
        if (err) {
          console.error(err);
          res.send(`error has occured.`);
        } else {
          userDoc.todos.push({
            groupName,
            todoContent,
            isDone: false,
            createdTime,
          });
          userDoc.save((err) => {
            if (err) {
              console.error(err);
            } else {
              res.send("todo inserted");
            }
          });
        }
      });
    }
  });
};
