var express = require("express"); //引入express模块
const cors = require("cors");
var mysql = require("mysql"); //引入mysql模块
var app = express(); //创建express的实例
var config = require("./config");

app.use(cors());

// var connection = mysql.createConnection({
//   //创建mysql实例
//   host: "127.0.0.1",
//   port: "3306",
//   user: "root",
//   password: "root",
//   database: "old",
// });

//设置跨域访问
app.all("*", function(req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Access-Control-Allow-Origin"
  );
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});

// connection.connect();
// var sql = "SELECT * FROM users";
// connection.query(sql, function(err, result) {
//   if (err) {
//     console.log("[SELECT ERROR]:", err.message);
//   }
//   console.log(result); //数据库查询结果返回到result中
// });
// app.get("/", function(req, res) {
//   res.send("Hello,myServer");
//   //   服务器响应请求;
// });
// app.post("/", function(req, res) {
//   res.send("Hello,myServer");
//   //   服务器响应请求;
// });
// connection.end();

var pool = mysql.createPool(config.mysql);
app.get("/manager/login", function(req, res, next) {
  res.render("index", { title: "Express" });
});
app.post("/manager/login", function(req, res, next) {
  var username = ((req || {}).body || {}).username; //获取前台请求的参数
  var password = ((req || {}).body || {}).password;
  pool.getConnection(function(err, connection) {
    //先判断该账号是否存在
    var $sql = "select * from users where username=?";
    connection.query($sql, [username], function(err, result) {
      var resultJson = result;
      console.log(resultJson.length);
      if (resultJson.length === 0) {
        result = {
          code: 300,
          message: "该账号不存在",
        };
        res.json(result);
        connection.release();
      } else {
        //账号存在，可以登录，进行密码判断
        var $sql1 = "select password from users where username=?";
        connection.query($sql1, [username], function(err, result) {
          var temp = result[0].password; //取得数据库查询字段值
          console.log(temp);
          if (temp == password) {
            result = {
              code: 200,
              message: "密码正确",
            };
          } else {
            result = {
              code: 400,
              message: "密码错误",
            };
          }
          res.json(result); // 以json形式，把操作结果返回给前台页面
          connection.release(); // 释放连接
        });
      }
    });
  });
});

app.listen(8080, function() {
  //   监听8080端口;
  console.log("Server running at 8080 port");
});
