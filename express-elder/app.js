var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");

var app = express();
app.use(cors());
// const cors = require("cors");
// app.use(cors());

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

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

//登录模组
app.use(require("./routes/login"));
app.use(require("./routes/admin/affair/zhusu"));
app.use(require("./routes/admin/affair/chuangwei"));
app.use(require("./routes/admin/affair/jiashu"));
app.use(require("./routes/admin/affair/qingjia"));
app.use(require("./routes/admin/basic/yuangong"));
app.use(require("./routes/admin/basic/bumen"));
app.use(require("./routes/admin/basic/laoren"));
app.use(require("./routes/admin/basic/sslou"));
app.use(require("./routes/admin/basic/user"));
app.use(require("./routes/admin/basic/notice"));
app.use(require("./routes/normal/old/old"));
app.use(require("./routes/normal/old/health"));
app.use(require("./routes/normal/old/huli"));
app.use(require("./routes/normal/old/laifang"));
app.use(require("./routes/normal/basic/notice"));
app.use(require("./routes/normal/basic/leaves"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PATCH, PUT, DELETE"
//   );
//   res.header("Allow", "GET, POST, PATCH, OPTIONS, PUT, DELETE");
//   next();
// });

// app.post("*", function(req, res) {
//   res.render("404.html", {
//     title: "No Found",
//   });
// });

module.exports = app;

// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// var request = require("request");
// var cors = require("cors");

// var app = express();

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// // app.use((req, res, next) => {
// //   res.set("Access-Control-Allow-Origin", "*");
// //   // ...
// //   next();
// // });

// function setResHeader(res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   ); // If needed
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Authorization,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,RequestID,X-Content-Type-Options,X-Content-Type-Options,X-Frame-Options,X-Powered-By,X-Version,x-xss-protection,Strict-Transport-Security"
//   ); // If needed
//   res.setHeader("Access-Control-Allow-Credentials", true); // If neede
// }

// app.options("/**", cors(), function(req, res) {
//   this.setResHeader(res);
//   var redirectURL = "http://127.0.0.1/api" + req.path;
//   res.send(redirectURL);
// });

// app.post("/**", function(req, res, next) {
//   this.setResHeader(res);
//   var redirectURL = "http://127.0.0.1/api" + req.path;

//   request.post(
//     { url: redirectURL, headers: req.headers, body: JSON.stringify(req.body) },
//     function(error, response, body) {
//       if (response) {
//         if (response.statusCode !== 200 && response.statusCode !== 201) {
//           res
//             .status(response.statusCode)
//             .send(response.body ? JSON.parse(response.body) : "");
//         } else {
//           res.send(response.body);
//         }
//       } else {
//         next(createError(404));
//       }
//     }
//   );
// });

// app.get("/**", function(req, res, next) {
//   this.setResHeader(res);
//   var redirectURL = "http://127.0.0.1/api" + req.originalUrl;
//   request.get({ url: redirectURL, headers: req.headers }, function(
//     error,
//     response,
//     body
//   ) {
//     if (response) {
//       if (response.statusCode !== 200 && response.statusCode !== 201) {
//         res
//           .status(response.statusCode)
//           .send(response.body ? JSON.parse(response.body) : "");
//       } else {
//         res.send(response.body);
//       }
//     } else {
//       next(createError(404));
//     }
//   });
// });

// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error", {
//     message: err.message,
//     error: err,
//   });
// });

// module.exports = app;
