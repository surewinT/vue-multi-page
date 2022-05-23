<!--
 * @Author: surewinT 840325271@qq.com
 * @Date: 2022-05-22 21:49:13
 * @LastEditors: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-23 00:17:46
 * @Description: 菜单
-->

<template>
  <div class="">
    <el-menu class="p-el-menu">
      <p-el-menu v-bind="$attrs" v-on="$listeners" />
    </el-menu>
  </div>
</template>

<script>
import Menutree from "./p-el-menu";
export default {
  components: {
    "p-el-menu": Menutree,
  },
  props: [],
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.p-el-menu {
  width: 200px;
  background-color: #304156;
}

::v-deep {
  .el-submenu__title {
    color: rgb(191, 203, 217) !important;
  }
  .el-menu-item {
    color: rgb(191, 203, 217) !important;
  }
  .el-submenu {
    .el-menu-item {
      color: rgb(191, 203, 217) !important;
      background-color: #001528 !important;
    }
    .el-submenu {
      background-color: #001528 !important;
    }
  }
}
</style>
