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
    { required: true, message: "请输入姓名", trigger: "change" },
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
      min: 5,
      max: 15,
      message: "长度在 5 到 15 个字符",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "change" },
    {
      min: 5,
      max: 15,
      message: "长度在 5 到 15 个字符",
      trigger: "blur",
    },
  ],
  native: [{ required: true, message: "请选择籍贯", trigger: "change" }],
  nation: [{ required: true, message: "请选择民族", trigger: "change" }],
  sex: [{ required: true, message: "请选择性别", trigger: "change" }],
  number: [
    { required: true, message: "请输入身份证号", trigger: "change" },
    {
      validator: validID,
      trigger: "change",
    },
  ],
  qq: [
    { required: true, message: "请输入QQ", trigger: "change" },
    {
      min: 5,
      max: 11,
      message: "长度在 5 到 11 个字符",
      trigger: "blur",
    },
  ],
  tel: [
    { required: true, message: "请输入电话", trigger: "blur" },
    {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: "请输入正确的电话号码",
      trigger: "blur",
    },
  ],
  state: [{ required: true, message: "请选择身份", trigger: "change" }],
  bmid: [{ required: true, message: "请选择状态", trigger: "change" }],
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
// 民族
export const nation = {
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
// 地区
export const native = {
  11: "北京",
  12: "天津",
  13: "河北",
  14: "山西",
  15: "内蒙古",
  21: "辽宁",
  22: "吉林",
  23: "黑龙江",
  31: "上海",
  32: "江苏",
  33: "浙江",
  34: "安徽",
  35: "福建",
  36: "江西",
  37: "山东",
  41: "河南",
  42: "湖北",
  43: "湖南",
  44: "广东",
  45: "广西",
  46: "海南",
  50: "重庆",
  51: "四川",
  52: "贵州",
  53: "云南",
  54: "西藏",
  61: "陕西",
  62: "甘肃",
  63: "青海",
  64: "宁夏",
  65: "新疆",
  71: "台湾",
  81: "香港",
  82: "澳门",
  91: "国外",
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
