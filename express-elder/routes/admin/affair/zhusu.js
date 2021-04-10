var express = require("express");
var router = express.Router();
// 实现与MySQL交互
var mysql = require("mysql");
var config = require("../../../model/config");
var Url = require("../../../url/database");
// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);

// 获取条件查询
router.get("/manager/zhusu/search", function(req, res, next) {
  let { name = "", current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var length = 0;
    if (name) {
      var $sql = Url.zhusugetname(name, (current - 1) * size, size);
      connection.query(
        `SELECT * from Zhushu where 1=1 and name like '%${name}%' `,
        function(err, result) {
          if (err) console.log(err);
          length = result.length;
          // res.json(result); // 以json形式，把操作结果返回给前台页面
        }
      );
    } else {
      var $sql = Url.zhusuget((current - 1) * size, size);
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
router.get("/manager/zhusu", function(req, res, next) {
  var { current = 1, size = 10 } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.zhusuget((current - 1) * size, size);
    console.log($sql);
    var length = 0;
    connection.query("SELECT * from Zhushu", function(err, result) {
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
        total: length || result.length,
      });
      // res.json(result); // 以json形式，把操作结果返回给前台页面
      connection.release(); // 释放连接
    });
  });

  // res.send(current + "-" + size);
});

// 获取宿舍楼信息
router.get("/manager/zhusu/sslou", function(req, res, next) {
  // let data = req.query;
  // var { current = 1, size = 10 } = data;

  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.zhusuget_sslou();
    connection.query($sql, function(err, result) {
      var resultJson = result;
      console.log(resultJson.length);
      // res.json({
      //   code: "200",
      //   msg: "success",
      //   data: result,
      //   total: resultJson.length,
      // });
      res.json(result); // 以json形式，把操作结果返回给前台页面
      connection.release(); // 释放连接
    });
  });

  // res.send(current + "-" + size);
});

// 更新列表数据
router.put("/manager/zhusu", function(req, res, next) {
  var info = req.body;
  const { chuangwei, fjno, idcardno, name, rzdate, sslou, id } = info;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.zhusuput(info);
    console.log($sql);
    connection.query(
      $sql,
      [chuangwei, fjno, idcardno, name, switchTimeFormat(rzdate), sslou, id],
      function(err, result) {
        // if (err) return console.log(err);

        // var resultJson = result;
        // res.json({
        //   code: "200",
        //   msg: "success",
        //   data: result,
        //   total: resultJson.length,
        // });
        res.send(result);
        connection.release(); // 释放连接
      }
    );
  });
});

// 删除列表数据
router.delete("/manager/zhusu/delete", function(req, res, next) {
  let { id } = req.query;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = Url.zhusudelete(id);
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
