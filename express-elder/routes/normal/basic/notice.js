var express = require("express");
var router = express.Router();
// 实现与MySQL交互
var mysql = require("mysql");
var config = require("../../../model/config");
var Url = require("../../../url/databaseuser");
// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);

// 获取条件查询
router.get("/manager/nor/notice/search", function(req, res, next) {
  let { name = "", current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var length = 0;
    if (name) {
      var $sql = Url.noticegetname(name, (current - 1) * size, size);
      connection.query(
        `SELECT * from Notice where 1=1 and title like '%${name}%'`,
        function(err, result) {
          if (err) console.log(err);
          length = result.length;
          // res.json(result); // 以json形式，把操作结果返回给前台页面
        }
      );
    } else {
      var $sql = Url.noticeget((current - 1) * size, size);
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
router.get("/manager/nor/notice", function(req, res, next) {
  var { current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.noticeget((current - 1) * size, size);
    console.log($sql);
    var length = 0;
    connection.query("SELECT * from notice where 1=1", function(err, result) {
      if (err) console.log(err);
      length = result.length;
    });
    connection.query($sql, function(err, result) {
      if (err) console.log(err);
      var resultJson = result;
      // console.log(resultJson.length);
      res.json({
        code: "200",
        msg: "success",
        data: result,
        total: length,
      });
      // res.json(result); // 以json形式，把操作结果返回给前台页面
      connection.release(); // 释放连接
    });
  });

  // res.send(current + "-" + size);
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
