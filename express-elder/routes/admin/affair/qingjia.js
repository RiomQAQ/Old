var express = require("express");
var router = express.Router();
// 实现与MySQL交互
var mysql = require("mysql");
var config = require("../../../model/config");
var Url = require("../../../url/database");
// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);

// 获取条件查询
router.get("/manager/qingjia/search", function(req, res, next) {
  let { name = "", current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    let length = 0;
    if (name) {
      var $sql = Url.qingjiagetname(name, (current - 1) * size, size);
      connection.query(
        `SELECT * from Leaves where 1=1 and zgname like '%${name}%' `,
        function(err, result) {
          if (err) console.log(err);
          length = result.length;
          //   console.log(length);
          // res.json(result); // 以json形式，把操作结果返回给前台页面
        }
      );
    } else {
      var $sql = Url.qingjiaget((current - 1) * size, size);
    }
    console.log($sql);
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
router.get("/manager/qingjia", function(req, res, next) {
  var { current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.qingjiaget((current - 1) * size, size);
    console.log($sql);
    var length = 0;
    connection.query(`SELECT * from Leaves`, function(err, result) {
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

// 获取列表所有数据
router.put("/manager/qingjia", function(req, res, next) {
  var info = req.body;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.qingjiaput(info);
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

// 删除列表数据
router.delete("/manager/qingjia/delete", function(req, res, next) {
  let { id } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.qingjiadelete(id);
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

module.exports = router;
