<!--
 * @Author: surewinT 840325271@qq.com
 * @Date: 2022-05-22 21:49:13
 * @LastEditors: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-23 21:57:04
 * @Description: 主界面-布局
-->

<template>
  <div class="layout-body">
    <el-container class="layout-container">
      <el-aside class="layout-side">
        <p-menu :menuList="menuList" @click-menu="clickMenu" />
      </el-aside>
      <el-container>
        <el-header class="layout-header">Header</el-header>
        <el-main>
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
          <p-look :currentUrl="currentUrl" />
        </el-main>
        <el-footer class="layout-footer">
          ©surewinT 2022-05-20
          <span @click="clickFooter" class="github">[Github]</span>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "./menu";
import Look from "./look.vue";
import { routes } from "@/router";
export default {
  components: {
    "p-menu": Menu,
    "p-look": Look,
  },
  props: [],
  data() {
    return {
      menuList: [],
      currentUrl: "",
    };
  },
  mounted() {
    this.menuList = routes;
  },
  watch: {},
  methods: {
    clickFooter() {
      window.open("https://github.com/surewinT/vue-multi-page");
    },

    clickMenu(menu) {
      this.currentUrl = menu.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-body {
  height: 100vh;
  .layout-container {
    height: inherit;
  }
  .layout-side {
    width: 200px !important;
    height: 100%;
    background-color: #304156;
    overflow-x: hidden;
  }
  .layout-header {
    height: 50px;
    line-height: 50px;
    color: rgb(191, 203, 217);
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
  .layout-footer {
    font-size: 12px;
    text-align: center;
    height: 20px !important;
    line-height: 20px;
    background: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 5px,
        hsla(0, 0%, 0%, 0.025) 5px,
        hsla(0, 0%, 0%, 0.025) 10px
      )
      hsla(203, 11%, 95%, 0.4);
  }
  .github {
    cursor: pointer;
    border-bottom: 1px solid;
    margin: 0 10px;
    &:hover {
      color: #409eff;
    }
  }
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  position: relative;
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(30px);
}
</style>
