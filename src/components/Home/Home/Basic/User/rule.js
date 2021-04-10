export const searchrule = {
  // username: [
  //   { required: true, message: "请输入名称", trigger: "change" },
  //   {
  //     min: 1,
  //     max: 32,
  //     message: "长度在 1 到 32 个字符",
  //     trigger: "blur",
  //   },
  // ],
};
export const addrule = {
  createtime: [
    { required: true, message: "请选择创建时间", trigger: "change" },
  ],
  creator: [
    { required: true, message: "请输入创建者", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  email: [
    { required: true, message: "请输入邮箱地址", trigger: "blur" },
    {
      type: "email",
      message: "请输入正确的邮箱地址",
      trigger: ["blur", "change"],
    },
  ],
  nickname: [
    { required: true, message: "请输入昵称", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  username: [
    { required: true, message: "请输入用户名", trigger: "change" },
    {
      min: 3,
      max: 15,
      message: "长度在 3 到 15 个字符",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "change" },
    {
      min: 5,
      max: 15,
      message: "长度在 3 到 15 个字符",
      trigger: "blur",
    },
  ],
  realname: [
    { required: true, message: "请输入实名", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  tel: [
    { required: true, message: "请输入电话", trigger: "blur" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入正确的电话号码",
      trigger: "blur",
    },
  ],
};
export const editrule = {
  createtime: [
    { required: true, message: "请选择创建时间", trigger: "change" },
  ],
  creator: [
    { required: true, message: "请输入创建者", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  email: [
    { required: true, message: "请输入邮箱地址", trigger: "blur" },
    {
      type: "email",
      message: "请输入正确的邮箱地址",
      trigger: ["blur", "change"],
    },
  ],
  nickname: [
    { required: true, message: "请输入昵称", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  username: [
    { required: true, message: "请输入用户名", trigger: "change" },
    {
      min: 3,
      max: 15,
      message: "长度在 3 到 15 个字符",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "change" },
    {
      min: 5,
      max: 15,
      message: "长度在 3 到 15 个字符",
      trigger: "blur",
    },
  ],
  realname: [
    { required: true, message: "请输入实名", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  tel: [
    { required: true, message: "请输入电话", trigger: "blur" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入正确的电话号码",
      trigger: "blur",
    },
  ],
};
