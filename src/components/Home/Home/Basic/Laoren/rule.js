export const searchrule = {
  name: [
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
    { required: true, message: "请输入姓名", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  birthday: [{ required: true, message: "请选择出生日期", trigger: "change" }],
  number: [
    { required: true, message: "请输入身份证号", trigger: "blur" },
    {
      validator: validID,
      trigger: "blur",
    },
  ],
  phone: [
    { required: true, message: "请输入电话", trigger: "blur" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入正确的电话号码",
      trigger: "blur",
    },
  ],
  building: [{ required: true, message: "请选择公寓楼", trigger: "change" }],
};
export const editrule = {
  name: [
    { required: true, message: "请输入姓名", trigger: "change" },
    {
      min: 1,
      max: 32,
      message: "长度在 1 到 32 个字符",
      trigger: "blur",
    },
  ],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  birthday: [{ required: true, message: "请选择出生日期", trigger: "change" }],
  number: [
    { required: true, message: "请输入身份证号", trigger: "change" },
    {
      validator: validID,
      trigger: "change",
    },
  ],
  phone: [
    { required: true, message: "请输入电话", trigger: "blur" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入正确的电话号码",
      trigger: "blur",
    },
  ],
  building: [{ required: true, message: "请选择公寓楼", trigger: "change" }],
};

function validID(rule, value, callback) {
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("身份证号码不正确"));
  }
}
