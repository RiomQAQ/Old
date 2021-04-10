<template>
  <!-- 菜单导航栏 -->
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    unique-opened
    style="height:100%"
  >
    <!-- 遍历list取得各个模块菜单 -->
    <el-submenu
      v-for="(value, index) in list.Path"
      :key="index"
      :index="index.toString()"
      style="height:100%"
    >
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">{{ value.name }}</span>
      </template>
      <!-- 遍历list.Path.path，渲染出子菜单 -->
      <el-menu-item-group>
        <el-menu-item
          v-for="(val, ind) in value.path"
          :key="ind"
          :index="ind.toString()"
          @click="toPath(val.path)"
        >
          <router-link :to="val.path">{{ val.name }}</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  methods: {
    // 点击子菜单时调用
    toPath(path) {
      // console.log(path);
    },
  },
};
</script>
<style></style>
