<!--
 * @Author: surewinT 840325271@qq.com
 * @Date: 2022-05-22 21:49:13
 * @LastEditors: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-23 00:15:34
 * @Description: 预览页面2
-->
<template>
  <div class="">
    <el-divider content-position="left">预览组件2</el-divider>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  prop: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
