const express = require("express");
const Router = express.Router();
const model = require("./model");
const utils = require("utility");
const User = model.getModel("user");
Router.get("/list", function(req, res) {
  // User.remove({}, function(err, doc) {});
  User.find({}, function(err, doc) {
    return res.json(doc);
  });
});
Router.get("/info", function(req, res) {
  return res.json({ code: 1 });
});
Router.post("/login", function(req, res) {
  console.log("req.body.data", req.body);
  const { user, pwd } = req.body;
  User.findOne({ user, pwd: md5Pwd(pwd) }, { pwd: 0 }, function(err, doc) {
    if (!doc) {
      return res.json({ code: 1, msg: "用户名或密码错误" });
    }
    return res.json({ code: 0, data: doc });
  });
});
Router.post("/register", function(req, res) {
  console.log("req.body.data", req.body);
  const { user, pwd, type } = req.body;
  User.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: "用户名重复" });
    }
    User.create({ user, type, pwd: md5Pwd(pwd) }, function(e, d) {
      if (e) {
        return res.json({ code: 1, msg: "后端出错了" });
      }
      return res.json({ code: 0 });
    });
  });
});
function md5Pwd(pwd) {
  const salt = "mikis";
  return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;
