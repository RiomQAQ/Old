var express = require("express");
var router = express.Router();
// 实现与MySQL交互
var mysql = require("mysql");
var config = require("../../../model/config");
var Url = require("../../../url/databaseuser");
// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);

// 获取条件查询
router.get("/manager/nor/leaves/search", function(req, res, next) {
  let { accountname = "", current = 1, size = 10, name = "" } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var length = 0;
    if (name) {
      var $sql = Url.leavesgetname(
        accountname,
        name,
        (current - 1) * size,
        size
      );
      connection.query(
        `SELECT * from Leaves where 1=1 and accountname ='${accountname}' and xtype like '%${name}%'`,
        function(err, result) {
          if (err) console.log(err);
          length = result.length;
          // res.json(result); // 以json形式，把操作结果返回给前台页面
        }
      );
    } else {
      var $sql = Url.leavesget(accountname, (current - 1) * size, size);
    }
    connection.query($sql, function(err, result) {
      if (err) return console.log(err);
      res.json({
        code: "200",
        msg: "success",
        data: result,
        total: length || result.length,
      });
      // res.json(result); // 以json形式，把操作结果返回给前台页面
      connection.release(); // 释放连接
    });
  });

  // res.send(current + "-" + size);
});

// 获取列表所有数据
router.get("/manager/nor/leaves", function(req, res, next) {
  var { accountname = "", current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.leavesget(accountname, (current - 1) * size, size);
    console.log($sql);
    var length = 0;
    connection.query($sql, function(err, result) {
      if (err) console.log(err);
      var resultJson = result;
      // console.log(resultJson.length);
      res.json({
        code: "200",
        msg: "success",
        data: result,
        total: result.length,
      });
      // res.json(result); // 以json形式，把操作结果返回给前台页面
      connection.release(); // 释放连接
    });
  });

  // res.send(current + "-" + size);
});

// 更新列表数据
router.put("/manager/nor/leaves", function(req, res, next) {
  var info = req.body;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.leaveput(info);
    console.log($sql);
    var length = 0;
    connection.query($sql, function(err, result) {
      if (err) console.log(err);
      //   var resultJson = result;
      // console.log(resultJson.length);
      res.json({
        code: "200",
        msg: "success",
        data: result,
      });
      // res.json(result); // 以json形式，把操作结果返回给前台页面
      connection.release(); // 释放连接
    });
  });

  // res.send(current + "-" + size);
});

// 添加列表数据
router.post("/manager/nor/leaves", function(req, res, next) {
  var info = req.body;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.leavepost(info);
    console.log($sql);
    connection.query($sql, function(err, result) {
      if (err) return console.log(err);

      // var resultJson = result;
      // res.json({
      //   code: "200",
      //   msg: "success",
      //   data: result,
      //   total: resultJson.length,
      // });
      // res.send(result);
      connection.release(); // 释放连接
    });
  });
});

// 删除列表数据
router.delete("/manager/nor/leaves/delete", function(req, res, next) {
  let { id } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.leavesdelete(id);
    console.log($sql);
    connection.query($sql, function(err, result) {
      // if (err) return console.log(err);

      // var resultJson = result;
      res.json({
        code: "200",
        msg: "success",
        data: result,
      });
      // res.send(result);
      connection.release(); // 释放连接
    });
  });
});

function switchTimeFormat(time) {
  const dateTime = new Date(time);
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();
  const second = dateTime.getSeconds();

  return `${year}-${addZero(month)}-${addZero(date)} ${addZero(hour)}:${addZero(
    minute
  )}:${addZero(second)}`;
}
function addZero(v) {
  return v < 10 ? "0" + v : v;
}

module.exports = router;
