let apiUrl = "/manager";
let API = {
  api: {
    login: apiUrl + "/login", //普通用户登录
    loginadmin: apiUrl + "/loginadmin", //管理员登录
    login: {
      user: apiUrl + "/user/login",
      admin: apiUrl + "/admin/login",
    },

    // 新
    admin: {
      affair: {
        chuangwei: {
          get: apiUrl + "/chuangwei", //获取表格信息
          post: apiUrl + "/chuangwei", //提交更改信息,增加
          search: apiUrl + "/chuangwei/search?name=", //按条件查询
          put: apiUrl + "/chuangwei", //更改表格信息
          delete: apiUrl + "/access/delete?id=", //按条件删除
        },
        jiashu: {
          get: apiUrl + "/jiashu", //获取表格信息
          post: apiUrl + "/jiashu", //提交更改信息,增加
          search: apiUrl + "/jiashu/search?name=", //按条件查询
          put: apiUrl + "/jiashu", //更改表格信息
          delete: apiUrl + "/jiashu/delete?id=", //按条件删除
          getelder: apiUrl + "/jiashu/elders",
        },
        qingjia: {
          get: apiUrl + "/qingjia", //获取表格信息
          post: apiUrl + "/qingjia", //提交更改信息,增加
          search: apiUrl + "/qingjia/search?name=", //按条件查询
          put: apiUrl + "/qingjia", //更改表格信息
          delete: apiUrl + "/qingjia/delete?id=", //按条件删除
        },
        zhusu: {
          get: apiUrl + "/zhusu", //获取表格信息
          post: apiUrl + "/zhusu", //提交更改信息,增加
          search: apiUrl + "/zhusu/search?name=", //按条件查询
          put: apiUrl + "/zhusu", //更改表格信息
          delete: apiUrl + "/zhusu/delete?id=", //按条件删除
          sslou: apiUrl + "/zhusu/sslou",
        },
      },
      basic: {
        yuangong: {
          get: apiUrl + "/yuangong", //获取表格信息
          post: apiUrl + "/yuangong", //提交更改信息,增加
          search: apiUrl + "/yuangong/search?name=", //按条件查询
          put: apiUrl + "/yuangong", //更改表格信息
          delete: apiUrl + "/yuangong/delete?id=", //按条件删除
          bumen: apiUrl + "/yuangong/bumen",
        },
        bumen: {
          get: apiUrl + "/bumen", //获取表格信息
          post: apiUrl + "/bumen", //提交更改信息,增加
          search: apiUrl + "/bumen/search?name=", //按条件查询
          put: apiUrl + "/bumen", //更改表格信息
          delete: apiUrl + "/bumen/delete?id=", //按条件删除
        },
        laoren: {
          get: apiUrl + "/laoren", //获取表格信息
          post: apiUrl + "/laoren", //提交更改信息,增加
          search: apiUrl + "/laoren/search?name=", //按条件查询
          put: apiUrl + "/laoren", //更改表格信息
          delete: apiUrl + "/laoren/delete?id=", //按条件删除
        },
        sslou: {
          get: apiUrl + "/sslou", //获取表格信息
          post: apiUrl + "/sslou", //提交更改信息,增加
          search: apiUrl + "/sslou/search?name=", //按条件查询
          put: apiUrl + "/sslou", //更改表格信息
          delete: apiUrl + "/sslou/delete?id=", //按条件删除
        },
        users: {
          get: apiUrl + "/users", //获取表格信息
          post: apiUrl + "/users", //提交更改信息,增加
          search: apiUrl + "/users/search?name=", //按条件查询
          put: apiUrl + "/users", //更改表格信息
          delete: apiUrl + "/users/delete?id=", //按条件删除
          role: apiUrl + "/users/role",
        },
        notice: {
          get: apiUrl + "/notice", //获取表格信息
          post: apiUrl + "/notice", //提交更改信息,增加
          search: apiUrl + "/notice/search?name=", //按条件查询
          put: apiUrl + "/notice", //更改表格信息
          delete: apiUrl + "/notice/delete?id=", //按条件删除
        },
      },
    },
    normal: {
      old: {
        info: {
          get: apiUrl + "/nor/info", //获取表格信息
          post: apiUrl + "/nor/info", //提交更改信息,增加
          search: apiUrl + "/nor/info/search?name=", //按条件查询
          put: apiUrl + "/nor/info", //更改表格信息
          delete: apiUrl + "/nor/info/delete?id=", //按条件删除
        },
        health: {
          get: apiUrl + "/nor/health", //获取表格信息
          post: apiUrl + "/nor/health", //提交更改信息,增加
          search: apiUrl + "/nor/health/search?name=", //按条件查询
          put: apiUrl + "/nor/health", //更改表格信息
          delete: apiUrl + "/nor/health/delete?id=", //按条件删除
          elder: apiUrl + "/nor/health/elder",
        },
        huli: {
          get: apiUrl + "/nor/huli", //获取表格信息
          post: apiUrl + "/nor/huli", //提交更改信息,增加
          search: apiUrl + "/nor/huli/search?name=", //按条件查询
          put: apiUrl + "/nor/huli", //更改表格信息
          delete: apiUrl + "/nor/huli/delete?id=", //按条件删除
        },
        laifang: {
          get: apiUrl + "/nor/laifang", //获取表格信息
          post: apiUrl + "/nor/laifang", //提交更改信息,增加
          search: apiUrl + "/nor/laifang/search?name=", //按条件查询
          put: apiUrl + "/nor/laifang", //更改表格信息
          delete: apiUrl + "/nor/laifang/delete?id=", //按条件删除
        },
      },
      basic: {
        notice: {
          get: apiUrl + "/nor/notice", //获取表格信息
          post: apiUrl + "/nor/notice", //提交更改信息,增加
          search: apiUrl + "/nor/notice/search?name=", //按条件查询
          put: apiUrl + "/nor/notice", //更改表格信息
          delete: apiUrl + "/nor/notice/delete?id=", //按条件删除
        },
        leaves: {
          get: apiUrl + "/nor/leaves", //获取表格信息
          post: apiUrl + "/nor/leaves", //提交更改信息,增加
          search: apiUrl + "/nor/leaves/search?name=", //按条件查询
          put: apiUrl + "/nor/leaves", //更改表格信息
          delete: apiUrl + "/nor/leaves/delete?id=", //按条件删除
        },
      },
    },
  },
};
export default {
  API: API,
};
