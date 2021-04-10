import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
// 登录
const login = (r) =>
  require.ensure([], () => r(require("@/components/Login/login")), "login");
// 主页
const home = (r) =>
  require.ensure([], () => r(require("@/components/Home/Home/home")), "home");

const main = (r) =>
  require.ensure([], () => r(require("@/components/Home/Home/Main")), "main");

// // 老人信息管理
// const old = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/PeopleManager/PeopleManager")),
//     "home"
//   );
// // 管理员信息管理
// const admin = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/AdminManager/AdminManager")),
//     "admin"
//   );
// // 员工管理
// const worker = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/WorkerManager/WorkerManager")),
//     "worker"
//   );
// // 公寓楼信息管理
// const block = (r) =>
//   require.ensure(
//     [],
//     () =>
//       r(
//         require("@/components/Home/Home/ApartmentBlockManager/ApartmentBlockManager")
//       ),
//     "block"
//   );
// // 公寓信息管理
// const apartment = (r) =>
//   require.ensure(
//     [],
//     () =>
//       r(require("@/components/Home/Home/ApartmentManager/ApartmentManager")),
//     "apartment"
//   );
// // 公寓安排管理
// const plan = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/PlanManager/PlanManager")),
//     "plan"
//   );
// // 缴费管理
// const pay = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/PayManager/PayManager")),
//     "pay"
//   );
// // 健康管理信息管理
// const health = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/HealthManager/HealthManager")),
//     "health"
//   );
// // 紧急联系人管理
// const contact = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/ContactManager/ContactManager")),
//     "contact"
//   );
// // 出入信息管理
// const access = (r) =>
//   require.ensure(
//     [],
//     () => r(require("@/components/Home/Home/AccessManager/AccessManager")),
//     "access"
//   );

const chuangwei = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Affair/Chuangwei/Chuangwei.vue")),
    "chuangwei"
  );
const jiasu = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Affair/Jiasu/Jiasu.vue")),
    "jiasu"
  );
const qingjia = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Affair/Qingjia/Qingjia.vue")),
    "qingjia"
  );
const zhusu = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Affair/Zhusu/Zhusu.vue")),
    "zhusu"
  );
const bumen = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Basic/Bumen/Bumen.vue")),
    "bumen"
  );
const laoren = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Basic/Laoren/Laoren.vue")),
    "laoren"
  );
const notice = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Basic/Notice/Notice.vue")),
    "notice"
  );
const user = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Basic/User/User.vue")),
    "user"
  );
const yuangong = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Basic/Yuangong/Yuangong.vue")),
    "yuangong"
  );
const zhusulou = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/Basic/Zhusulou/Zhusulou.vue")),
    "zhusulou"
  );
const editInfo = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/System/EditInfo/EditInfo.vue")),
    "editInfo"
  );
const editPassword = (r) =>
  require.ensure(
    [],
    () =>
      r(require("@/components/Home/Home/System/EditPassword/EditPassword.vue")),
    "editPassword"
  );
const info = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/Home/System/Info/Info.vue")),
    "info"
  );

// 普通用户
const elderinfo = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/Old/ElderInfo/ElderInfo")),
    "elderinfo"
  );
const health = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/Old/Health/Health")),
    "health"
  );
const huli = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/Old/Huli/Huli")),
    "huli"
  );
const laifang = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/Old/Laifang/Laifang")),
    "laifang"
  );
const leavesapply = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/Basic/Leaves/Leaves")),
    "leavesapply"
  );
const noticecheck = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/Basic/Notice/Notice")),
    "noticecheck"
  );
const usermain = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/Main")),
    "usermain"
  );

const userhome = (r) =>
  require.ensure(
    [],
    () => r(require("@/components/Home/NorHome/home")),
    "userhome"
  );

const routes = [
  {
    path: "/",
    component: login,
  },
  {
    path: "/home",
    component: home,
    beforeEnter: (to, from, next) => {
      if (null != sessionStorage.getItem("username")) {
        next();
      } else {
        next("/");
        window.alert("请登录");
      }
    },
    redirect: "/main",
    children: [
      {
        path: "/main",
        component: main,
      },
      {
        path: "chuangwei",
        component: chuangwei,
      },
      {
        path: "jiasu",
        component: jiasu,
      },
      {
        path: "qingjia",
        component: qingjia,
      },
      {
        path: "zhusu",
        component: zhusu,
      },
      {
        path: "bumen",
        component: bumen,
      },
      {
        path: "laoren",
        component: laoren,
      },
      {
        path: "notice",
        component: notice,
      },
      {
        path: "user",
        component: user,
      },
      {
        path: "yuangong",
        component: yuangong,
      },
      {
        path: "zhusulou",
        component: zhusulou,
      },
      {
        path: "editInfo",
        component: editInfo,
      },
      {
        path: "editPassword",
        component: editPassword,
      },
      {
        path: "info",
        component: info,
      },
    ],
  },
  {
    path: "/userhome",
    component: userhome,
    beforeEnter: (to, from, next) => {
      if (null != sessionStorage.getItem("username")) {
        next();
      } else {
        next("/");
        window.alert("请登录");
      }
    },
    redirect: "/usermain",
    children: [
      {
        path: "/usermain",
        component: usermain,
      },
      {
        path: "elderinfo",
        component: elderinfo,
      },
      {
        path: "health",
        component: health,
      },
      {
        path: "huli",
        component: huli,
      },
      {
        path: "laifang",
        component: laifang,
      },
      {
        path: "leaves",
        component: leavesapply,
      },
      {
        path: "notice",
        component: noticecheck,
      },
    ],
  },
  {
    path: "/*",
    component: login,
  },
];

export default new Router({
  routes,
  mode: "history",
  strict: process.env.NODE_ENV !== "production",
});
