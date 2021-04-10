var Mock = require("mockjs");
import { area } from "./area";

let Area = area;

Mock.setup({
  //表示 400 毫秒 后才会返回响应内容；
  timeout: "200-600",
});

//解析get请求url后面的参数转成JSON
function GetQueryJson(url) {
  let param = {}; // 存储最终JSON结果对象
  url.replace(/([^?&]+)=([^?&]+)/g, function(s, v, k) {
    param[v] = decodeURIComponent(k); //解析字符为中文
    return k + "=" + v;
  });
  return param;
}
//解析json的数据数组长度(判断url的参数是几个)
function getJsonObjLength(jsonObj) {
  var Length = 0;
  for (var item in jsonObj) {
    Length++;
  }
  return Length;
}

// 获取参数
function getUrlQuery(url) {
  let urlSplit = url.split("?");
  let urlSplit1 = urlSplit[1].split("&");
  let urlSplit2 = urlSplit1[0].split("=");
  return urlSplit2;
}

// 身份证和生日一一对应
function getnumber(idCard) {
  var birthday = "";
  if (idCard != null && idCard != "") {
    if (idCard.length == 15) {
      birthday = "19" + idCard.substr(6, 6);
    } else if (idCard.length == 18) {
      birthday = idCard.substr(6, 8);
    }

    birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
    return birthday;
  }
}

// 随机生成血型
function getBlood() {
  let num = Math.floor(Math.random() * (101 - 1)) + 1; //不含最大值，含最小值
  let a = "";
  if (num < 28) {
    a = "A";
  } else if (num < 52) {
    a = "B";
  } else if (num < 59) {
    a = "AB";
  } else if (num < 99) {
    a = "O";
  } else {
    a = "Other";
  }
  return a;
}

// 随机生成过敏史
function getAllergies() {
  let num = Math.floor(Math.random() * (101 - 1)) + 1; //不含最大值，含最小值
  let a = "";
  if (num < 96) {
    a = "无";
  } else {
    let ran = Math.floor(Math.random() * (5 - 1)) + 1;
    if (ran == 1) {
      a = "青霉素";
    } else if (ran == 2) {
      a = "磺胺";
    } else if (ran == 3) {
      a = "链霉素";
    } else {
      a = "其他";
    }
  }
  return a;
}

// 暴露史
function getExposure() {
  let num = Math.floor(Math.random() * (101 - 1)) + 1; //不含最大值，含最小值
  let a = "";
  if (num < 98) {
    a = "无";
  } else {
    let ran = Math.floor(Math.random() * (4 - 1)) + 1;
    if (ran == 1) {
      a = "化学品";
    } else if (ran == 2) {
      a = "毒物";
    } else if (ran == 3) {
      a = "射线";
    }
  }
  return a;
}

// 疾病史
function getIllness() {
  let num = Math.floor(Math.random() * (101 - 1)) + 1; //不含最大值，含最小值
  let a = "";
  if (num < 85) {
    a = "无";
  } else {
    let ran = Math.floor(Math.random() * (13 - 1)) + 1;
    if (ran == 1) {
      a = "高血压";
    } else if (ran == 2) {
      a = "糖尿病";
    } else if (ran == 3) {
      a = "冠心病";
    } else if (ran == 4) {
      a = "慢性阻塞性肺疾病";
    } else if (ran == 5) {
      a = "恶性肿瘤";
    } else if (ran == 6) {
      a = "脑卒中";
    } else if (ran == 7) {
      a = "严重精神障碍";
    } else if (ran == 8) {
      a = "结核病";
    } else if (ran == 9) {
      a = "肝炎";
    } else if (ran == 10) {
      a = "其他法定传染病";
    } else if (ran == 11) {
      a = "职业病";
    } else {
      a = "其他";
    }
  }
  return a;
}

// 残疾情况
function getDisability() {
  let num = Math.floor(Math.random() * (101 - 1)) + 1; //不含最大值，含最小值
  let a = "";
  if (num < 85) {
    a = "无";
  } else {
    let ran = Math.floor(Math.random() * (8 - 1)) + 1;
    if (ran == 1) {
      a = "视力残疾";
    } else if (ran == 2) {
      a = "听力残疾";
    } else if (ran == 3) {
      a = "言语残疾";
    } else if (ran == 4) {
      a = "肢体残疾";
    } else if (ran == 5) {
      a = "智力残疾";
    } else if (ran == 6) {
      a = "精神残疾";
    } else if (ran == 7) {
      a = "其他残疾";
    }
  }
  return a;
}

let areavalue = Object.values(Area);
let len = areavalue.length;
// 随机地址
function getArea() {
  let num = Math.floor(Math.random() * (len - 1)) + 1; //不含最大值，含最小值
  // console.log(areavalue[num]);
  return areavalue[num];
}

// 登录成员管理
let user = [{ username: "admin", password: "admin" }];

// 老人信息
let peopleList = [];
let buildings = ["舒逸楼", "白宁楼", "养心楼", "松鹤楼", "天颐楼", "未安排"];
let num = Math.floor(Math.random() * 101 - 1) + 10; //生成10-110的数
// 生成<num条老人数据
for (let i = 1; i < num; i++) {
  peopleList.push(
    Mock.mock({
      id: i, //编号
      name: "@cname",
      "sex|1": ["男", "女"],
      birthday: function() {
        return getnumber(this.number);
      },
      number: "@ID",
      phone: /^1(5|3|7|8)[0-9]{9}$/, //电话
      "building|1": buildings,
      bloodtype: function() {
        return getBlood();
      }, //血型
      allergies: function() {
        return getAllergies();
      }, //过敏史
      exposure: function() {
        return getExposure();
      }, //暴露史
      illness: function() {
        return getIllness();
      }, //疾病
      disability: function() {
        return getDisability();
      }, //残疾
      //紧急联系人 contact
      cname: "@cname",
      "csex|1": ["男", "女"],
      cphone: /^1(5|3|7|8)[0-9]{9}$/, //电话
      "crelation|1": ["直系血亲", "旁系血亲", "旁系眷亲", "旁系姻亲", "其他"],
      caddress: function() {
        return getArea();
      },
    })
  );
}

// 获取buildings
Mock.mock(/\/old\/apart/, "get", (options) => {
  return {
    code: "200",
    message: "success",
    data: {
      rows: buildings,
    },
  };
});

//1.根据id获取数据 2.分页表格数据 获取老人信息
Mock.mock(/\/old/, "get", (params) => {
  var info = GetQueryJson(params.url);
  var a = getJsonObjLength(info);
  // console.log(a);
  var b = getUrlQuery(params.url);
  // console.log(info);
  if (a <= 2) {
    var [pageIndex, pageSize, total] = [
      info.current,
      info.size,
      peopleList.length,
    ];
    var len = total / pageSize;
    //页码
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    //每页数据
    var newDataList = peopleList.slice(
      (pageIndex - 1) * pageSize,
      pageIndex * pageSize
    );
    return {
      code: "200",
      message: "success",
      data: {
        current: pageIndex,
        size: pageSize,
        rows: newDataList,
        total: total,
        totalPages: totalPages,
      },
    };
  } else if (a == 3 && b[0] == "name") {
    var arr = [];

    for (let item of peopleList) {
      if (b[1] == item.name) {
        arr.push(item);
      }
    }
    return {
      code: "200",
      message: "success",
      data: {
        rows: arr,
      },
    };
  } else {
    return {
      code: "200",
      message: "success",
      data: {
        rows: peopleList,
      },
    };
  }
});

//添加老人信息数据
Mock.mock(/\/old/, "post", (options) => {
  // console.log(options);
  var info = JSON.parse(options.body);
  var idInfo = peopleList.length + 1;
  peopleList.push({
    id: idInfo,
    name: info.name,
    sex: info.sex,
    birthday: info.birthday,
    number: info.number,
    phone: info.phone,
    building: info.building,
    bloodtype: "",
    allergies: "",
    exposure: "",
    illness: "",
    disability: "",
    cname: "",
    csex: "",
    cphone: "",
    crelation: "",
    caddress: "",
  });
  return {
    code: "200",
    message: "success",
  };
});

// 修改老人信息数据
Mock.mock(/\/old/, "put", (options) => {
  var info = JSON.parse(options.body);
  // peopleList[info.id-1].id = info.id
  peopleList[info.id - 1].name = info.name;
  peopleList[info.id - 1].sex = info.sex;
  peopleList[info.id - 1].birthday = info.birthday;
  peopleList[info.id - 1].number = info.number;
  peopleList[info.id - 1].phone = info.phone;
  peopleList[info.id - 1].building = info.building;
  return {
    code: "200",
  };
});

// 删除老人信息数据
Mock.mock(/\/old/, "delete", (configs) => {
  var info = GetQueryJson(configs.url);
  for (let i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == info.id) {
      peopleList.splice(i, 1);
    }
  }
  return {
    code: "200",
  };
});

// 管理员信息管理
let adminList = [];
let numadmin = Math.floor(Math.random() * 11 - 1) + 1; //生成1-11的数
// 生成创建日期
function getDate() {
  let year = Math.ceil(Math.random() * 20) + 2000;
  let mouth = Math.ceil(Math.random() * 12);
  if (mouth < 10) {
    mouth = "0" + mouth;
  }
  let day = Math.ceil(Math.random() * 28);
  if (day < 10) {
    day = "0" + day;
  }
  return year + "-" + mouth + "-" + day;
}
// 生成管理员并插入到user数组中
for (let i = 1; i < numadmin; i++) {
  adminList.push(
    Mock.mock({
      id: i, //编号
      createtime: function() {
        return getDate();
      },
      creator: "@name",
      email: "@email",
      nickname: "@last",
      username: "@first(5,8)",
      password: "@word(5,8)",
      realname: "@cname",
      "sex|1": ["男", "女"],
      tel: /^1(5|3|7|8)[0-9]{9}$/,
      // photo:"",
      // "roleid|1": [1, 2],
    })
  );
  // console.log(adminList);
  let flag = false;
  for (let u of user) {
    if (adminList[i - 1].username == u.username) {
      flag = !flag;
    }
  }
  if (!flag) {
    user.push({
      username: adminList[i - 1].username,
      password: adminList[i - 1].password,
    });
  }
  // console.log(user);
}

// 获取管理员信息
// Mock.mock(/\/admin/, "get", (params) => {
//   var info = GetQueryJson(params.url);
//   var a = getJsonObjLength(info);
//   var b = getUrlQuery(params.url);
//   if (a <= 2) {
//     var [pageIndex, pageSize, total] = [
//       info.current,
//       info.size,
//       adminList.length,
//     ];
//     var len = total / pageSize;
//     //页码
//     var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
//     //每页数据
//     var newDataList = adminList.slice(
//       (pageIndex - 1) * pageSize,
//       pageIndex * pageSize
//     );
//     return {
//       code: "200",
//       message: "success",
//       data: {
//         current: pageIndex,
//         size: pageSize,
//         rows: newDataList,
//         total: total,
//         totalPages: totalPages,
//       },
//     };
//   } else if (a == 3 && b[0] == "username") {
//     var arr = [];

//     for (let item of adminList) {
//       if (b[1] == item.username) {
//         arr.push(item);
//       }
//     }
//     return {
//       code: "200",
//       message: "success",
//       data: {
//         rows: arr,
//       },
//     };
//   } else {
//     return {
//       code: "200",
//       message: "success",
//       data: {
//         rows: adminList,
//       },
//     };
//   }
// });

//添加管理员信息数据
// Mock.mock(/\/admin/, "post", (options) => {
//   // console.log(options);
//   var info = JSON.parse(options.body);
//   var idInfo = adminList.length + 1;
//   adminList.push({
//     id: idInfo, //编号
//     createtime: info.createtime,
//     creator: info.creator,
//     email: info.email,
//     nickname: info.nickname,
//     username: info.username,
//     password: info.password,
//     realname: info.realname,
//     sex: info.sex,
//     tel: info.tel,
//   });
//   // 判断添加进 user
//   let flag = false;
//   for (let u of user) {
//     if (info.username == u.username) {
//       flag = !flag;
//     }
//   }
//   if (!flag) {
//     user.push({
//       username: info.username,
//       password: info.password,
//     });
//   }

//   return {
//     code: "200",
//     message: "success",
//   };
// });

// 修改管理员信息数据
// Mock.mock(/\/admin/, "put", (options) => {
//   var info = JSON.parse(options.body);
//   // adminList[info.id-1].id = info.id
//   adminList[info.id - 1].id = info.id;
//   adminList[info.id - 1].creator = info.creator;
//   adminList[info.id - 1].email = info.email;
//   adminList[info.id - 1].nickname = info.nickname;
//   adminList[info.id - 1].username = info.username;
//   adminList[info.id - 1].password = info.password;
//   adminList[info.id - 1].realname = info.realname;
//   adminList[info.id - 1].sex = info.sex;
//   adminList[info.id - 1].tel = info.tel;
//   for (let i = 0; i < user.length; i++) {
//     if (info.username == user[i].username) {
//       user[i].password = info.password;
//     }
//   }
//   return {
//     code: "200",
//   };
// });

// 删除管理员信息数据
// Mock.mock(/\/admin/, "delete", (configs) => {
//   let flag = false;
//   let username = "";
//   var info = GetQueryJson(configs.url);
//   for (let i = 0; i < adminList.length; i++) {
//     if (adminList[i].id == info.id) {
//       flag = !flag;
//       username = adminList[i].username;
//       adminList.splice(i, 1);
//     }
//   }
//   if (flag) {
//     for (let u = 0; u < user.length; u++) {
//       if (username == user[u].username) {
//         user.splice(u, 1);
//       }
//     }
//   }
//   return {
//     code: "200",
//   };
// });

// 随机生成民族
function getNation() {
  let dice = Math.floor(Math.random() * (100 - 1)) + 1;
  let min = Math.ceil(1);
  let max = Math.floor(57);
  let num = Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  let nation = {
    1: "汉族",
    2: "蒙古族",
    3: "回族",
    4: "藏族",
    5: "维吾尔族",
    6: "苗族",
    7: "彝族",
    8: "壮族",
    9: "布依族",
    10: "朝鲜族",
    11: "满族",
    12: "侗族",
    13: "瑶族",
    14: "白族",
    15: "土家族",
    16: "哈尼族",
    17: "哈萨克族",
    18: "傣族",
    19: "黎族",
    20: "傈僳族",
    21: "佤族",
    22: "畲族",
    23: "高山族",
    24: "拉祜族",
    25: "水族",
    26: "东乡族",
    27: "纳西族",
    28: "景颇族",
    29: "柯尔克孜族",
    30: "土族",
    31: "达斡尔族",
    32: "仫佬族",
    33: "羌族",
    34: "布朗族",
    35: "撒拉族",
    36: "毛难族",
    37: "仡佬族",
    38: "锡伯族",
    39: "阿昌族",
    40: "普米族",
    41: "塔吉克族",
    42: "怒族",
    43: "乌孜别克族",
    44: "俄罗斯族",
    45: "鄂温克族",
    46: "崩龙族",
    47: "保安族",
    48: "裕固族",
    49: "京族",
    50: "塔塔尔族",
    51: "独龙族",
    52: "鄂伦春族",
    53: "赫哲族",
    54: "门巴族",
    55: "珞巴族",
    56: "基诺族",
  };
  if (dice <= 91) {
    num = 1;
  }
  return nation[num];
}

// 随机身份
function getState() {
  let num = Math.floor(Math.random() * (101 - 1)) + 1; //不含最大值，含最小值
  let a = "";
  if (num < 95) {
    a = "护工";
  } else {
    a = "管理";
  }
  return a;
}

// 随机状态
function getBid() {
  let num = Math.floor(Math.random() * (101 - 1)) + 1; //不含最大值，含最小值
  let a = "";
  if (num < 95) {
    a = "工作";
  } else {
    let des = Math.floor(Math.random() * (3 - 1)) + 1;
    if (des == 1) {
      a = "请假";
    } else {
      a = "休假";
    }
  }
  return a;
}

// 测试数据 普通用户
let worker = [{ username: "worker", password: "worker" }];
let workerList = [];
let numworker = Math.floor(Math.random() * 21 - 1) + 5;
for (let i = 1; i < numworker; i++) {
  workerList.push(
    Mock.mock({
      id: i, //编号
      name: "@cname",
      // username: "@first(5,8)",
      // password: "@word(5,8)",
      // des:"",
      nation: function() {
        return getNation();
      },
      native: function() {
        return getArea();
      },
      "sex|1": ["男", "女"],
      number: "@ID",
      qq: /^[1-9]\d{5,10}/,
      tel: /^1(5|3|7|8)[0-9]{9}$/,
      state: function() {
        return getState();
      },
      bmid: function() {
        return getBid();
      },

      // photo:"",
      // "roleid|1": [1, 2],
    })
  );
  // console.log(workerList);
  // worker.push({
  //   username: workerList[i - 1].username,
  //   password: workerList[i - 1].password,
  // });
}

// 获取员工信息
Mock.mock(/\/worker/, "get", (params) => {
  var info = GetQueryJson(params.url);
  var a = getJsonObjLength(info);
  var b = getUrlQuery(params.url);
  if (a <= 2) {
    var [pageIndex, pageSize, total] = [
      info.current,
      info.size,
      workerList.length,
    ];
    var len = total / pageSize;
    //页码
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    //每页数据
    var newDataList = workerList.slice(
      (pageIndex - 1) * pageSize,
      pageIndex * pageSize
    );
    return {
      code: "200",
      message: "success",
      data: {
        current: pageIndex,
        size: pageSize,
        rows: newDataList,
        total: total,
        totalPages: totalPages,
      },
    };
  } else if (a == 3 && b[0] == "name") {
    var arr = [];

    for (let item of workerList) {
      if (b[1] == item.name) {
        arr.push(item);
      }
    }
    return {
      code: "200",
      message: "success",
      data: {
        rows: arr,
      },
    };
  } else {
    return {
      code: "200",
      message: "success",
      data: {
        rows: workerList,
      },
    };
  }
});

//添加员工信息数据
Mock.mock(/\/worker/, "post", (options) => {
  // console.log(options);
  var info = JSON.parse(options.body);
  var idInfo = workerList.length + 1;
  workerList.push({
    id: idInfo, //编号
    name: info.name,
    // username: info.username,
    // password: info.password,
    native: info.native,
    nation: info.nation,
    sex: info.sex,
    number: info.number,
    qq: info.qq,
    tel: info.tel,
    state: info.state,
    bmid: info.bmid,
  });
  return {
    code: "200",
    message: "success",
  };
});

// 修改员工信息数据
Mock.mock(/\/worker/, "put", (options) => {
  var info = JSON.parse(options.body);
  // workerList[info.id-1].id = info.id
  workerList[info.id - 1].id = info.id;
  workerList[info.id - 1].name = info.name;
  // workerList[info.id - 1].username = info.username;
  // workerList[info.id - 1].password = info.password;
  workerList[info.id - 1].native = info.native;
  workerList[info.id - 1].sex = info.sex;
  workerList[info.id - 1].number = info.number;
  workerList[info.id - 1].qq = info.qq;
  workerList[info.id - 1].tel = info.tel;
  workerList[info.id - 1].state = info.state;
  workerList[info.id - 1].bmid = info.bmid;
  return {
    code: "200",
  };
});

// 删除员工信息数据
Mock.mock(/\/worker/, "delete", (configs) => {
  var info = GetQueryJson(configs.url);
  for (let i = 0; i < workerList.length; i++) {
    if (workerList[i].id == info.id) {
      workerList.splice(i, 1);
    }
  }
  return {
    code: "200",
  };
});

// 公寓楼管理
// 获取公寓楼信息
Mock.mock(/\/build/, "get", (params) => {
  let buildList = [];
  for (let i = 0; i < buildings.length; i++) {
    buildList.push({
      id: i,
      blockname: buildings[i],
    });
  }
  var info = GetQueryJson(params.url);
  var a = getJsonObjLength(info);
  var b = getUrlQuery(params.url);
  if (a <= 2) {
    var [pageIndex, pageSize, total] = [
      info.current,
      info.size,
      buildList.length,
    ];
    var len = total / pageSize;
    //页码
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    //每页数据
    var newDataList = buildList.slice(
      (pageIndex - 1) * pageSize,
      pageIndex * pageSize
    );
    return {
      code: "200",
      message: "success",
      data: {
        current: pageIndex,
        size: pageSize,
        rows: newDataList,
        total: total,
        totalPages: totalPages,
      },
    };
  } else if (a == 3 && b[0] == "name") {
    var arr = [];

    for (let item of buildList) {
      if (b[1] == item.name) {
        arr.push(item);
      }
    }
    return {
      code: "200",
      message: "success",
      data: {
        rows: arr,
      },
    };
  } else {
    return {
      code: "200",
      message: "success",
      data: {
        rows: buildList,
      },
    };
  }
});

//添加公寓楼数据
Mock.mock(/\/build/, "post", (options) => {
  // console.log(options);
  var info = JSON.parse(options.body);
  // var idInfo = buildings.length + 1;
  buildings.push(info.blockname);
  return {
    code: "200",
    message: "success",
  };
});

// 修改公寓楼数据
Mock.mock(/\/build/, "put", (options) => {
  var info = JSON.parse(options.body);
  // buildList[info.id-1].id = info.id
  buildList[info.id - 1].id = info.id;
  buildList[info.id - 1].name = info.name;
  buildList[info.id - 1].username = info.username;
  buildList[info.id - 1].password = info.password;
  buildList[info.id - 1].native = info.native;
  buildList[info.id - 1].sex = info.sex;
  buildList[info.id - 1].number = info.number;
  buildList[info.id - 1].qq = info.qq;
  buildList[info.id - 1].tel = info.tel;
  buildList[info.id - 1].state = info.state;
  buildList[info.id - 1].bmid = info.bmid;
  return {
    code: "200",
  };
});

// 删除公寓楼数据
Mock.mock(/\/build/, "delete", (configs) => {
  var info = GetQueryJson(configs.url);

  buildings.splice(info.id, 1);

  return {
    code: "200",
  };
});

// 老人健康信息管理
//1.根据id获取数据 2.分页表格数据 获取老人信息
Mock.mock(/\/health/, "get", (params) => {
  var info = GetQueryJson(params.url);
  var a = getJsonObjLength(info);
  var b = getUrlQuery(params.url);
  // console.log(info);
  if (a <= 2) {
    var [pageIndex, pageSize, total] = [
      info.current,
      info.size,
      peopleList.length,
    ];
    var len = total / pageSize;
    //页码
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    //每页数据
    var newDataList = peopleList.slice(
      (pageIndex - 1) * pageSize,
      pageIndex * pageSize
    );
    return {
      code: "200",
      message: "success",
      data: {
        current: pageIndex,
        size: pageSize,
        rows: newDataList,
        total: total,
        totalPages: totalPages,
      },
    };
  } else if (a == 3 && b[0] == "name") {
    var arr = [];

    for (let item of peopleList) {
      if (b[1] == item.name) {
        arr.push(item);
      }
    }
    return {
      code: "200",
      message: "success",
      data: {
        rows: arr,
      },
    };
  } else {
    return {
      code: "200",
      message: "success",
      data: {
        rows: peopleList,
      },
    };
  }
});

//添加老人健康数据
// Mock.mock(/\/health/, "post", (options) => {
//   console.log(options);
//   var info = JSON.parse(options.body);
//   var idInfo = peopleList.length + 1;
//   peopleList.push({
//     id: idInfo,
//     name: info.name,
//     sex: info.sex,
//     birthday: info.birthday,
//     number: info.number,
//     phone: info.phone,
//     building: info.building,
//   });
//   return {
//     code: "200",
//     message: "success",
//   };
// });

// 修改老人健康数据
Mock.mock(/\/health/, "put", (options) => {
  var info = JSON.parse(options.body);
  // peopleList[info.id-1].id = info.id
  for (let i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == info.id) {
      peopleList[i].bloodtype = info.bloodtype;
      peopleList[i].allergies = info.allergies;
      peopleList[i].exposure = info.exposure;
      peopleList[i].illness = info.illness;
      peopleList[i].disability = info.disability;
    }
  }
  return {
    code: "200",
  };
});

// 删除老人健康数据
Mock.mock(/\/health/, "delete", (configs) => {
  var info = GetQueryJson(configs.url);
  for (let i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == info.id) {
      peopleList[i].bloodtype = "";
      peopleList[i].allergies = "";
      peopleList[i].exposure = "";
      peopleList[i].illness = "";
      peopleList[i].disability = "";
    }
  }
  return {
    code: "200",
  };
});

// 紧急联系人信息管理
//1.根据id获取数据 2.分页表格数据 获取老人信息
Mock.mock(/\/contact/, "get", (params) => {
  var info = GetQueryJson(params.url);
  var a = getJsonObjLength(info);
  var b = getUrlQuery(params.url);
  // console.log(info);
  if (a <= 2) {
    var [pageIndex, pageSize, total] = [
      info.current,
      info.size,
      peopleList.length,
    ];
    var len = total / pageSize;
    //页码
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    //每页数据
    var newDataList = peopleList.slice(
      (pageIndex - 1) * pageSize,
      pageIndex * pageSize
    );
    return {
      code: "200",
      message: "success",
      data: {
        current: pageIndex,
        size: pageSize,
        rows: newDataList,
        total: total,
        totalPages: totalPages,
      },
    };
  } else if (a == 3 && b[0] == "name") {
    var arr = [];

    for (let item of peopleList) {
      if (b[1] == item.name) {
        arr.push(item);
      }
    }
    return {
      code: "200",
      message: "success",
      data: {
        rows: arr,
      },
    };
  } else {
    return {
      code: "200",
      message: "success",
      data: {
        rows: peopleList,
      },
    };
  }
});

//添加紧急联系人数据
// Mock.mock(/\/contact/, "post", (options) => {
//   console.log(options);
//   var info = JSON.parse(options.body);
//   var idInfo = peopleList.length + 1;
//   peopleList.push({
//     id: idInfo,
//     name: info.name,
//     sex: info.sex,
//     birthday: info.birthday,
//     number: info.number,
//     phone: info.phone,
//     building: info.building,
//   });
//   return {
//     code: "200",
//     message: "success",
//   };
// });

// 修改紧急联系人数据
Mock.mock(/\/contact/, "put", (options) => {
  var info = JSON.parse(options.body);
  for (let i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == info.id) {
      peopleList[i].cname = info.cname;
      peopleList[i].csex = info.csex;
      peopleList[i].cphone = info.cphone;
      peopleList[i].crelation = info.crelation;
    }
  }
  return {
    code: "200",
  };
});

// 删除紧急联系人数据
Mock.mock(/\/contact/, "delete", (configs) => {
  var info = GetQueryJson(configs.url);
  for (let i = 0; i < peopleList.length; i++) {
    if (peopleList[i].id == info.id) {
      peopleList[i].cname = "";
      peopleList[i].csex = "";
      peopleList[i].cphone = "";
      peopleList[i].crelation = "";
      peopleList[i].caddress = "";
    }
  }
  return {
    code: "200",
  };
});

// 出入管理
function getGo() {
  let build = buildings;
  let num = Math.floor(Math.random() * (build.length + 1 - 1)) + 1;
  let a = "";
  if (num == build.length) {
    a = "其他";
  } else {
    a = build[num];
  }
  return a;
}
//返回时间
function getMonthBefor() {
  var resultDate, year, month, date, hms;
  var currDate = new Date();
  year = currDate.getFullYear();
  month = currDate.getMonth() + 1;
  date = currDate.getDate();
  // hms =
  //   currDate.getHours() +
  //   ":" +
  //   currDate.getMinutes() +
  //   ":" +
  //   (currDate.getSeconds() < 10
  //     ? "0" + currDate.getSeconds()
  //     : currDate.getSeconds());
  switch (month) {
    case 1:
    case 2:
    case 3:
      month += 9;
      year--;
      break;
    default:
      month -= 3;
      break;
  }
  month = month < 10 ? "0" + month : month;
  resultDate = year + "-" + month + "-" + date;
  return resultDate;
}
// 访客
let visitorList = [];
// 生成访客
let numvisitor = Math.floor(Math.random() * 6 - 1) + 5;
for (let i = 1; i < numvisitor; i++) {
  visitorList.push(
    Mock.mock({
      id: i, //编号
      name: "@cname",
      number: "@ID",
      tel: /^1(5|3|7|8)[0-9]{9}$/,
      date: function() {
        return getMonthBefor();
      },
      go: function() {
        return getGo();
      },
      remark: "",

      // photo:"",
      // "roleid|1": [1, 2],
    })
  );
  // console.log(workerList);
}
//1.根据id获取数据 2.分页表格数据 获取出入信息
Mock.mock(/\/access/, "get", (params) => {
  var info = GetQueryJson(params.url);
  var a = getJsonObjLength(info);
  // console.log(a);
  var b = getUrlQuery(params.url);
  // console.log(info);
  if (a <= 2) {
    var [pageIndex, pageSize, total] = [
      info.current,
      info.size,
      visitorList.length,
    ];
    var len = total / pageSize;
    //页码
    var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
    //每页数据
    var newDataList = visitorList.slice(
      (pageIndex - 1) * pageSize,
      pageIndex * pageSize
    );
    return {
      code: "200",
      message: "success",
      data: {
        current: pageIndex,
        size: pageSize,
        rows: newDataList,
        total: total,
        totalPages: totalPages,
      },
    };
  } else if (a == 3 && b[0] == "name") {
    var arr = [];

    for (let item of visitorList) {
      if (b[1] == item.name) {
        arr.push(item);
      }
    }
    return {
      code: "200",
      message: "success",
      data: {
        rows: arr,
      },
    };
  } else {
    return {
      code: "200",
      message: "success",
      data: {
        rows: visitorList,
      },
    };
  }
});

//添加出入信息数据
Mock.mock(/\/access/, "post", (options) => {
  // console.log(options);
  var info = JSON.parse(options.body);
  var idInfo = visitorList.length + 1;
  visitorList.push({
    id: idInfo,
    name: info.name,
    number: info.number,
    tel: info.tel,
    date: info.date,
    go: info.go,
    remark: info.remark,
  });
  return {
    code: "200",
    message: "success",
  };
});

// 修改出入信息数据
Mock.mock(/\/access/, "put", (options) => {
  var info = JSON.parse(options.body);
  // visitorList[info.id-1].id = info.id
  visitorList[info.id - 1].id = info.id;
  visitorList[info.id - 1].name = info.name;
  visitorList[info.id - 1].number = info.number;
  visitorList[info.id - 1].tel = info.tel;
  visitorList[info.id - 1].date = info.date;
  visitorList[info.id - 1].go = info.go;
  visitorList[info.id - 1].remark = info.remark;
  return {
    code: "200",
  };
});

// 删除出入信息数据
Mock.mock(/\/access/, "delete", (configs) => {
  var info = GetQueryJson(configs.url);
  for (let i = 0; i < visitorList.length; i++) {
    if (visitorList[i].id == info.id) {
      visitorList.splice(i, 1);
    }
  }
  return {
    code: "200",
  };
});

// 登录
Mock.mock(/\/login/, "post", (options) => {
  var info = JSON.parse(options.body);
  let flag = false;
  for (let a of user) {
    if (a.username == info.username && a.password == info.password) {
      flag = !flag;
    }
  }
  // console.log(flag);
  if (flag) {
    return {
      code: "200",
      message: "success",
    };
  } else {
    return {
      code: "200",
      message: "用户名或密码错误",
    };
  }
});

function getPeople() {
  let list = []; //存放{time:?,name:""}
  let buildlist = peopleList; //老人人数
  for (let a of buildlist) {
    let flag = false;
    for (let i = 0; i < list.length; i++) {
      if (a.building == list[i].name) {
        list[i].time++;
        flag = !flag;
        break;
      }
    }
    if (!flag) {
      list.push({ time: 1, name: a.building });
    }
  }
  return list;
}

// 扇形图尝试
Mock.mock(/\/sector/, "get", (params) => {
  // var info = GetQueryJson(params.url);
  // var a = getJsonObjLength(info);
  // var b = getUrlQuery(params.url);
  // if (a <= 2) {
  //   var [pageIndex, pageSize, total] = [
  //     info.current,
  //     info.size,
  //     visitorList.length,
  //   ];
  //   var len = total / pageSize;
  //   //页码
  //   var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len;
  //   //每页数据
  //   var newDataList = visitorList.slice(
  //     (pageIndex - 1) * pageSize,
  //     pageIndex * pageSize
  //   );
  //   return {
  //     code: "200",
  //     message: "success",
  //     data: {
  //       current: pageIndex,
  //       size: pageSize,
  //       rows: newDataList,
  //       total: total,
  //       totalPages: totalPages,
  //     },
  //   };
  // } else if (a == 3 && b[0] == "name") {
  //   var arr = [];

  //   for (let item of visitorList) {
  //     if (b[1] == item.name) {
  //       arr.push(item);
  //     }
  //   }
  //   return {
  //     code: "200",
  //     message: "success",
  //     data: {
  //       rows: arr,
  //     },
  //   };
  // } else {
  //   return {
  //     code: "200",
  //     message: "success",
  //     data: {
  //       rows: visitorList,
  //     },
  //   };
  // }
  console.log(user);
  let list = getPeople();
  return {
    code: "200",
    message: "success",
    data: {
      peoplelist: list,
    },
  };
});
