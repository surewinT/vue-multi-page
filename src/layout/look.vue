<!--
 * @Date: 2022-05-20 16:30:42
 * @Author: surewinT 840325271@qq.com
 * @LastEditTime: 2022-05-23 00:17:35
 * @LastEditors: surewinT 840325271@qq.com
 * @Description: 组件预览-手机界面
-->

<template>
  <div class="layout-view">
    <iframe :src="src" frameborder="0" class="view-iframe"></iframe>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["currentUrl"],
  data() {
    return {};
  },
  mounted() {},
  computed: {
    src() {
      let url = `${location.origin}/view#/${this.currentUrl}`;
      return url;
    },
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.layout-view {
  position: fixed;
  width: 360px;
  height: 730px;
  background-image: url("~@/assets/phone.png");
  background-repeat: no-repeat;
  background-position: center 0;
  display: flex;
  top: 80px;
  right: 20px;
  justify-content: center;
  align-items: center;
  .view-iframe {
    position: absolute;
    width: 326px;
    height: 570px;
  }
}
</style>
