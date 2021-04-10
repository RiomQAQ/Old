<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>后台用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <p>hello</p> -->
    <!-- 表单之上 -->
    <div>
      <el-row style="margin-top:1%">
        <!-- 搜索表单 -->
        <el-col :span="6">
          <el-form
            :inline="true"
            :model="searchForm"
            :rules="searchRules"
            ref="searchFormRef"
            label-width="80px"
            class="demo-ruleForm"
            hide-required-asterisk
          >
            <!--搜索框  -->
            <el-form-item label="用户名" prop="username" style="margin:0px">
              <el-input v-model="searchForm.username" size="small"></el-input>
            </el-form-item>

            <!-- 搜索点击按钮 -->
            <el-form-item style="margin-left:10px">
              <el-tooltip
                class="item"
                effect="dark"
                content="搜索"
                placement="top"
              >
                <el-button
                  class="el-icon-search"
                  type="primary"
                  circle
                  @click="Search()"
                  :loading="searchload"
                ></el-button>
              </el-tooltip>
            </el-form-item>
          </el-form>
        </el-col>

        <!-- 按钮组 -->

        <!-- 上传 按钮 -->
        <!-- <el-col :offset="7" :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
          <el-tooltip class="item" effect="dark" content="上传" placement="top"> -->
        <!-- :on-remove="handleRemove"
              :file-list="fileListUpload"
              :on-exceed="handleExceed"-->
        <!-- <el-upload
              class="upload-demo"
              action
              :on-change="handleChange"
              :limit="limitUpload"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              :auto-upload="false"
              ref="uploadRef"
            >
              <el-button
                class="el-icon-upload2"
                circle
                type="primary"
              ></el-button>
            </el-upload>
          </el-tooltip>
        </el-col> -->

        <!-- 下载 按钮 -->
        <!-- <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
          <el-tooltip class="item" effect="dark" content="下载" placement="top">
            <el-popconfirm
              title="点击确认按钮导出数据"
              @onConfirm="Download"
              @onCancel="DownloadCancel"
              confirmButtonText="确认"
              cancelButtonText="取消"
              icon="el-icon-info"
              iconColor="green"
            >
              <el-button
                class="el-icon-download"
                circle
                type="primary"
                slot="reference"
              ></el-button>
            </el-popconfirm>
          </el-tooltip>
        </el-col> -->
        <!-- 添加老人 按钮 -->
        <!-- <el-col :span="1" :offset="17">
          <el-tooltip class="item" effect="dark" content="添加" placement="top">
            <el-button
              class="el-icon-plus"
              circle
              type="primary"
              @click="Add()"
            ></el-button>
          </el-tooltip>
        </el-col> -->

        <!-- 删除部门 按钮 -->
        <!-- <el-col :span="1">
          <el-tooltip
            class="item"
            effect="dark"
            content="删除部门"
            placement="top"
          >
            <el-button
              class="el-icon-minus"
              circle
              type="primary"
              @click="Minus()"
            ></el-button>
          </el-tooltip>
        </el-col> -->

        <!-- 修改部门 按钮
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
            <el-tooltip class="item" effect="dark" content="修改部门" placement="top">
              <el-button class="el-icon-edit" circle type="primary" @click="Edit()"></el-button>
            </el-tooltip>
          </el-col>-->

        <!-- 打印部门 按钮 -->
        <!-- <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
            <el-tooltip class="item" effect="dark" content="打印部门信息" placement="top">
              <el-button class="el-icon-printer" circle type="primary" @click="Printer()"></el-button>
            </el-tooltip>
          </el-col> -->
      </el-row>
    </div>

    <div>
      <!--表格块  -->
      <div>
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%;"
          max-height="350"
          v-loading="tableload"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          ref="tableRef"
        >
          <!-- 表头 -->
          <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
          <el-table-column
            prop="id"
            label="编号"
            width="100"
            align="center"
            fixed
          ></el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="150"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="roleid"
            label="角色"
            align="center"
            width="150"
            v-if="false"
          ></el-table-column>
          <el-table-column
            prop="rolename"
            label="角色"
            align="center"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="createtime"
            label="创建时间"
            align="center"
            width="200"
          ></el-table-column>

          <el-table-column
            prop="email"
            label="绑定邮箱"
            align="center"
            width="150"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="tel"
            label="电话"
            align="center"
            width="150"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="logtimes"
            label="登录次数"
            align="center"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="realname"
            label="真名"
            align="center"
            width="150"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="nickname"
            label="昵称"
            align="center"
            width="100"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            align="center"
            width="150"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="creator"
            label="创建人"
            align="center"
            width="150"
            :show-overflow-tooltip="true"
          ></el-table-column>

          <!-- <el-table-column
            prop="photo"
            label="相片"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column> -->
          <!-- <el-table-column
            prop="roleid"
            label="用户类型"
            align="center"
            width="150"
            :show-overflow-tooltip="true"
          ></el-table-column> -->
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
            align="center"
          >
            <!-- <template slot-scope="scope"> -->
            <template slot-scope="scope">
              <el-button
                @click="Edit(scope.row)"
                type="text"
                size="small"
                style="height:10px;padding-right:3px"
                >编辑</el-button
              >
              <el-popconfirm
                title="删除后不可恢复,确认要删除此条数据吗？"
                @confirm="MinusConfirm(scope.row)"
                @cancel="MinusCancel()"
                confirmButtonText="确认"
                cancelButtonText="取消"
                icon="el-icon-info"
                iconColor="red"
              >
                <el-button
                  type="text"
                  size="small"
                  style="height:10px"
                  slot="reference"
                  >删除</el-button
                >
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>

        <!-- 信息分页 -->
        <div class="box_bottom">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[7, 10, 15, 20]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>

    <!--编辑 按钮 dialog  -->
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisibleEdit"
      width="40%"
      :before-close="handleCloseEdit"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form
        :model="editForm"
        :rules="editRules"
        ref="editFormRef"
        label-width="80px"
        class="demo-ruleForm"
        hide-required-asterisk
        size="mini"
        :inline="true"
      >
        <el-form-item label="编号" prop="id">
          <el-input v-model="editForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="editForm.password"></el-input>
        </el-form-item>
        <el-form-item label="真名" prop="realname">
          <el-input v-model="editForm.password"></el-input>
        </el-form-item>

        <el-form-item label="角色" prop="roleid">
          <el-select v-model="editForm.roleid" placeholder="请选择">
            <el-option
              v-for="item in role"
              :key="item.id"
              :label="item.name"
              :value="parseInt(item.id)"
            >
              <span style="float: left">{{ item.name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{
                item.id
              }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="editForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="editForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="editForm.sex">
            <el-option label="男" value="男"></el-option>
            <el-option
              label="女"
              value="女"
              style="margin-bottom:10px"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="EditCancel()">取 消</el-button>
        <el-button type="primary" @click="EditConfirm()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { searchrule, addrule, editrule } from "./rule";
export default {
  data() {
    return {
      // 搜索表单
      searchForm: {
        username: "",
      },
      // 搜索规则
      searchRules: searchrule,
      // 搜索按钮加载
      searchload: false,

      // 表格数据
      tableData: [],
      // 分页
      page: {
        current: 1, //当前页
        size: 10, //每页显示条目数
      },
      //数据总数
      total: 0,
      tableload: false, //表格加载 判断
      //flag，判断搜索还是加载整个表格
      flag: false,
      // 表格加载判断
      tableload: false,

      // dialog显示判断

      // 添加dialog 判断
      dialogVisibleAdd: false,
      // 添加表单
      addForm: {
        createtime: "",
        creator: "",
        email: "",
        nickname: "",
        username: "",
        password: "",
        realname: "",
        sex: "",
        tel: "",
        roleid: 1,
      },
      // 添加表单规则
      addRules: addrule,

      // 编辑 dialog 判断
      dialogVisibleEdit: false,
      // 添加表单
      editForm: {
        // id: "",
        // createtime: "",
        // creator: "",
        // email: "",
        // nickname: "",
        // username: "",
        // password: "",
        // realname: "",
        // sex: "",
        // tel: "",
      },
      // 添加表单规则
      editRules: {},
      role: [],
    };
  },
  mounted() {
    this.UrlTableData();
    this.getRole();
  },
  computed: {},
  methods: {
    async getRole() {
      let that = this;
      const url = that.APIurl.API.api.admin.basic.users.role;
      await that.$http
        .get(url)
        .then(function(response) {
          console.log(response);
          // 获取数据
          that.role = response.data.data;
          // that.total = response.data.total;
          that.$message.success("获取管理信息成功");
          // that.flag = false;
        })
        .catch(function(error) {
          //请求失败处理
          that.$message.error("获取管理信息失败");
        });
    },
    // 点击搜索按钮
    Search() {
      // 校验name是否符合规则
      this.$refs.searchFormRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        this.searchload = true;
        this.flag = true;
        this.getTableData();
      });
    },
    //根据姓名搜索
    async UrlSearch() {
      let that = this;
      const url = that.APIurl.API.api.admin.basic.users.search;
      await that.$http
        .get(url + that.searchForm.username, {
          params: that.page,
        })
        .then(function(response) {
          // console.log(response);
          // 获取数据
          that.tableData = response.data.data;
          that.total = response.data.total;
          that.$message.success("搜索成功");
          // that.flag = false;
        })
        .catch(function(error) {
          //请求失败处理
          that.$message.error("搜索失败");
        });
      // 定时器，清楚输入框内容
      setTimeout(() => {
        this.searchload = false;
        this.$refs.searchFormRef.clearValidate();
      }, 3000);
    },

    // 点击添加按钮
    Add() {
      this.dialogVisibleAdd = true;
    },

    // 点击编辑按钮
    Edit(row) {
      this.dialogVisibleEdit = true;
      // this.editForm = new Object(row);
      this.editForm = row;
    },

    // 点击删除 确认按钮
    async MinusConfirm(row) {
      // console.log(row);
      let that = this;
      const url = that.APIurl.API.api.admin.basic.users.delete;
      await that.$http
        .delete(url + row.id)
        .then(function(response) {
          that.$message.success("删除编号为" + row.id + "的数据");
          that.getTableData();
        })
        .catch(function(error) {
          //请求失败处理
          that.$message.error("删除失败");
        });
    },
    // 点击删除 取消按钮
    MinusCancel() {
      this.$message("已取消删除");
    },

    // 访问后端获取表格数据
    async UrlTableData() {
      let that = this;
      const url = that.APIurl.API.api.admin.basic.users.get;
      await that.$http
        .get(url, {
          params: that.page,
        })
        .then(function(response) {
          that.tableData = response.data.data;
          that.total = response.data.total;
        })
        .catch(function(error) {
          //请求失败处理
          console.log(error);
        });
    },
    // 访问后端获取表格数据
    getTableData() {
      // 表格加载 访问后台获取数据
      this.tableload = true; // this.UrlTableData();
      if (this.flag) {
        // flag=true时，调用Search方法
        this.UrlSearch();
      } else {
        // flag=false时，调用获取全部数据方法
        this.UrlTableData();
      } //将data数据赋值表格数组
      this.tableload = false;
    },
    //监听页码值改变的事件
    handleSizeChange(newSize) {
      this.page.size = newSize;
      this.getTableData();
    },
    // //监听页码值改变的事件
    handleCurrentChange(newPage) {
      this.page.current = newPage;
      this.getTableData();
    },

    //dialog

    // 添加 dialog

    // dialog关闭前回调函数
    handleCloseAdd() {
      this.$refs.addFormRef.resetFields();
      this.dialogVisibleAdd = false;
      this.$message("停留在当前页面");
    },
    // 添加取消
    AddCancel() {
      this.$refs.addFormRef.resetFields();
      this.dialogVisibleAdd = false;
      this.$message("已取消输入");
    },
    // 添加确认 点击
    AddConfirm() {
      // 校验addForm是否符合规则
      let that = this;
      that.$refs.addFormRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        that.UrlAdd();
        // 访问后台更新数据
        that.getTableData();
      });
    },
    // 添加
    async UrlAdd() {
      let that = this;
      const url = that.APIurl.API.api.admin.basic.users.post;
      await that.$http
        .post(url, this.addForm)
        .then(function(response) {
          that.$message.success("添加成功");
          that.dialogVisibleAdd = false;
          that.$refs.addFormRef.resetFields();
          that.getTableData();
        })
        .catch(function(error) {
          //请求失败处理
          that.$message.error("添加失败");
        });
    },

    // 编辑 dialog

    // dialog关闭前回调函数
    handleCloseEdit() {
      // this.$refs.editFormRef.resetFields();
      this.dialogVisibleEdit = false;
      this.$message("停留在当前页面");
    },
    // 编辑取消
    EditCancel() {
      // this.$refs.editFormRef.resetFields();
      this.dialogVisibleEdit = false;
      this.$message("已取消输入");
    },
    // 编辑确认 点击
    EditConfirm() {
      // 校验addForm是否符合规则
      let that = this;
      that.$refs.editFormRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        that.UrlEdit();
        // 访问后台更新数据
        that.getTableData();
      });
    },
    // 编辑
    async UrlEdit() {
      let that = this;
      const url = that.APIurl.API.api.admin.basic.users.put;
      await that.$http
        .put(url, this.editForm)
        .then(function(response) {
          that.$message.success("编辑成功");
          that.dialogVisibleEdit = false;
          that.getTableData();
        })
        .catch(function(error) {
          //请求失败处理
          that.$message.error("编辑失败");
        });
    },
  },
};
</script>
<style>
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 40px !important;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 40px !important;
}
.box_bottom {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.el-select-dropdown .el-scrollbar .el-scrollbar__wrap {
  overflow: scroll !important;
}
</style>
