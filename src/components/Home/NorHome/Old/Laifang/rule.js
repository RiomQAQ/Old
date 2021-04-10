export const searchrule = {
  username: [
    { required: true, message: "请输入名称", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
};
export const addrule = {
  name: [
    { required: true, message: "请输入部门名称", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  telephone: [
    { required: true, message: "请输入电话", trigger: "blur" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入正确的电话号码",
      trigger: "blur",
    },
  ],
  createDate: [
    { required: true, message: "请选择创立时间", trigger: "change" },
  ],
};
export const editrule = {
  name: [
    { required: true, message: "请输入部门名称", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  telephone: [
    { required: true, message: "请输入电话", trigger: "change" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入正确的电话号码",
    },
  ],
  createDate: [
    { required: true, message: "请选择创立时间", trigger: "change" },
  ],
};
