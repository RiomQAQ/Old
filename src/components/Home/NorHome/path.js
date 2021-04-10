// let Path = [
//   [
//     // 人员信息管理
//     { name: "老人信息管理", path: "/oldmanager" },
//     { name: "管理员信息管理", path: "/oldmanager" },
//     { name: "员工信息", path: "/oldmanager" },
//   ],
//   [
//     // 公寓信息管理
//     { name: "公寓楼信息管理", path: "/oldmanager" },
//     { name: "公寓信息管理", path: "/oldmanager" },
//   ],
//   [
//     // 公寓安排管理
//     { name: "公寓安排管理", path: "/oldmanager" },
//     { name: "缴费管理", path: "/oldmanager" },
//   ],
//   [
//     // 健康管理信息管理
//     { name: "健康管理信息管理", path: "/oldmanager" },
//   ],
//   [
//     // 出入信息管理
//     { name: "出入信息管理", path: "/oldmanager" },
//   ],
// ];
let Path = [
  // 人员信息管理
  // {
  //   name: "人员信息管理",
  //   path: [
  //     { name: "老人信息管理", path: "/home/old" },
  //     { name: "管理员信息管理", path: "/home/admin" },
  //     { name: "员工信息", path: "/home/worker" },
  //   ],
  // },
  // // 公寓信息管理
  // {
  //   name: "公寓信息管理",
  //   path: [
  //     { name: "公寓楼信息管理", path: "/home/block" },
  //     // { name: "公寓信息管理", path: "/home/apartment" },
  //   ],
  // },
  // // 公寓安排管理
  // // {
  // //   name: "公寓安排管理",
  // //   path: [
  // //     { name: "公寓安排管理", path: "/home/plan" },
  // //     { name: "缴费管理", path: "/home/pay" },
  // //   ],
  // // },
  // // 健康管理信息管理
  // {
  //   name: "健康管理信息管理",
  //   path: [{ name: "健康管理信息管理", path: "/home/health" }],
  // },
  // // 紧急联系人管理
  // {
  //   name: "紧急联系人管理",
  //   path: [{ name: "紧急联系人管理", path: "/home/contact" }],
  // },
  // // 出入信息管理
  // {
  //   name: "出入信息管理",
  //   path: [{ name: "出入信息管理", path: "/home/access" }],
  // },

  // 事务管理
  {
    name: "老人管理",
    path: [
      { name: "老人信息查询", path: "/userhome/elderinfo" },
      { name: "健康档案管理", path: "/userhome/health" },
      { name: "护理管理", path: "/userhome/huli" },
      { name: "来访管理", path: "/userhome/laifang" },
    ],
  },
  // 基础信息
  {
    name: "基础信息",
    path: [
      { name: "系统公告管理", path: "/userhome/notice" },
      { name: "请假", path: "/userhome/leaves" },
    ],
  },
  // 系统设置
  {
    name: "账户设置",
    path: [
      { name: "账户信息", path: "/userhome/editInfo" },
      { name: "编辑账户", path: "/userhome/editPassword" },
      { name: "修改密码", path: "/userhome/info" },
    ],
  },
];

export default {
  Path: Path,
};
