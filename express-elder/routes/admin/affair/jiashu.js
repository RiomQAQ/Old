var express = require("express");
var router = express.Router();
// 实现与MySQL交互
var mysql = require("mysql");
var config = require("../../../model/config");
var Url = require("../../../url/database");
// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);

// 获取条件查询
router.get("/manager/jiashu/search", function(req, res, next) {
  let { name = "", current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    if (name) {
      var $sql = Url.jiashugetname(name, (current - 1) * size, size);
      connection.query(
        `SELECT count(0) FROM jiashu j LEFT JOIN elder e ON e.id = j.elderid WHERE 1 = 1 AND j.name LIKE '%${name}%'`,
        function(err, result) {
          if (err) console.log(err);
          length = result.length;
          // res.json(result); // 以json形式，把操作结果返回给前台页面
        }
      );
    } else {
      var $sql = Url.jiashuget((current - 1) * size, size);
    }
    let length = 0;

    connection.query($sql, function(err, result) {
      if (err) return console.log(err);
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

// 获取列表所有数据
router.get("/manager/jiashu", function(req, res, next) {
  var { current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.jiashuget((current - 1) * size, size);
    console.log($sql);
    var length = 0;
    connection.query(`SELECT * FROM jiashu`, function(err, result) {
      if (err) console.log(err);
      length = result.length;
      // res.json(result); // 以json形式，把操作结果返回给前台页面
    });
    connection.query($sql, function(err, result) {
      if (err) console.log(err);
      //   var resultJson = result;
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

// 获取老人所有数据
router.get("/manager/jiashu/elders", function(req, res, next) {
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.jiashugetelder();
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

// 更新列表数据
router.put("/manager/jiashu", function(req, res, next) {
  var info = req.body;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.jiashuput(info);
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
router.post("/manager/jiashu", function(req, res, next) {
  var info = req.body;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.jiashupost(info);
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
router.delete("/manager/jiashu/delete", function(req, res, next) {
  let { id } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.jiashudelete(id);
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
