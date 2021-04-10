<template>
  <div class="login fillcontain">
    <el-container>
      <!-- <el-header>
        <el-row style="width:100%;height:100%">
          <el-col :span="6" :offset="6" style="height:100%">
            <div class="login_logo" style="height:100%">
              <p style="display:inline-block">老年公寓管理系统</p>
            </div></el-col
          ></el-row
        ></el-header
      > -->
      <el-main>
        <transition name="el-fade-in-linear">
          <section class="login_main transition-box">
            <h4>老年公寓管理</h4>
            <!-- 用户表单 -->
            <el-form
              :model="LoginForm"
              ref="LoginFormRef"
              :rules="LoginFromRules"
            >
              <!-- 用户名 -->
              <el-form-item style="margin-top:32px" prop="username">
                <el-input
                  v-model="LoginForm.username"
                  size="small"
                  placeholder="普通用户"
                  v-if="!flag"
                  clearable
                  ><template slot="prepend"
                    ><i class="el-icon-user"></i></template
                ></el-input>
                <el-input
                  v-model="LoginForm.username"
                  v-if="flag"
                  size="small"
                  placeholder="管理员"
                  clearable
                  ><template slot="prepend"
                    ><i class="el-icon-user"></i></template
                ></el-input>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item style="margin-top:32px" prop="password">
                <el-input
                  v-model="LoginForm.password"
                  show-password
                  size="small"
                  placeholder="密码"
                  clearable
                  ><template slot="prepend"
                    ><i class="el-icon-lock"></i></template
                ></el-input>
              </el-form-item>
              <!-- 按钮 -->
              <el-form-item>
                <el-button
                  type="primary"
                  @click="onSubmit('LoginFormRef')"
                  style="width:100%"
                  >登录</el-button
                >
                <el-row>
                  <el-col :span="18" :offset="12">
                    <el-tooltip
                      content="切换用户"
                      placement="bottom"
                      effect="light"
                    >
                      <el-button type="text" @click="flag = !flag" v-if="!flag">
                        管理员登录
                      </el-button>
                      <el-button type="text" @click="flag = !flag" v-else>
                        普通用户登录
                      </el-button>
                    </el-tooltip>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </section>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用户表单属性数据
      LoginForm: {
        username: "",
        password: "",
      },
      // 用户表单校验规则
      LoginFromRules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
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
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
      flag: false,
      // true是管理员，false是普通用户
    };
  },
  methods: {
    // 提交按钮 onclick
    onSubmit(formName) {
      const name = formName;
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log("错误的用户名或密码");
          return false;
        }
      });
    },
    // 访问接口 登录
    async login() {
      let that = this;
      let url = "";

      // 访问管理员路径
      // url = that.APIurl.API.api.login;
      // url = "/eldermis/admin/login";
      if (that.flag) {
        url = that.APIurl.API.api.login.admin;
      } else {
        url = that.APIurl.API.api.login.user;
      }
      console.log(url);
      await that.$http
        .post(url, that.LoginForm)
        .then(function(response) {
          console.log(response);
          if (response.data.code == 200) {
            sessionStorage.setItem("username", that.LoginForm.username);
            that.$message.success("登录成功");
            // that.$router.push({ path: "/home" });

            // 判断权限进行路由跳转
            if (that.flag) {
              that.$router.push({ path: "/home" }); //页面路由跳转
            } else {
              that.$router.push({ path: "/userhome" }); //页面路由跳转
            }
          } else {
            that.$message.error(response.data.message);
          }
        })
        .catch(function(error) {
          //请求失败处理
          console.log(error);
          that.$message.error("用户名或密码错误!");
        });
    },
  },
};
</script>

<style lang="less" scoped>
// @import "../style/mixin";
@import "../../style/mixin.less";
.login {
  background: url(../../pic/p1.jpg) no-repeat;
  background-size: 100% 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  // text-align: center;
  line-height: 60px;
}
.login_logo {
  // position: absolute;
  width: 300px;
  // top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: white;
  }
}
.login_main {
  .wh(320px, 240px);
  .ctp(320px, 240px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  //   .submit_btn{
  //   	width: 100%;
  //   	font-size: 16px;
  // }
}
// .form-fade-enter-active,
// .form-fade-leave-active {
//   transition: all 3s;
// }
// .form-fade-enter,
// .form-fade-leave-active {
//   transform: translate3d(0, -50px, 0);
//   opacity: 0;
// }
</style>
