<!--
 * @Date: 2022-05-10 11:45:08
 * @Author: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-22 23:26:14
 * @LastEditors: surewinT 840325271@qq.com
 * @Description: 递归生成菜单
-->

<template>
  <div class="">
    <div v-for="(menu, index) in menuList" :key="index">
      <template v-if="!menu.hidden">
        <el-menu-item
          v-if="!menu.children || menu.children.length == 0"
          :index="menu.path"
          @click="clickMenu(menu)"
        >
          <i :class="menu.icon ? menu.icon : 'el-icon-menu'"></i>
          <span slot="title" class="group_title">{{ menu.label }}</span>
        </el-menu-item>
        <el-submenu v-else :index="menu.path">
          <template slot="title">
            <i :class="menu.icon ? menu.icon : 'el-icon-menu'"></i>
            <span>{{ menu.label }}</span>
          </template>
          <!-- 递归自身 -->
          <p-el-menu :menuList="menu.children" v-on="$listeners" />
        </el-submenu>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  // 必须写name
  name: "p-el-menu",
  components: {},
  props: ["menuList"],
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {
    clickMenu(menu) {
      this.$emit("click-menu", menu);
      this.$router.push("/" + menu.path).catch((err) => {
        err;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
