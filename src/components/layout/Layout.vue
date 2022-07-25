<!-- 业务页面嵌套外壳 -->
<template>
  <div class="layout">
    <div class="contianer">
      <Asider />
      <div class="content">
        <Header />
        <router-view></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Asider from "./Asider";
import Footer from "./Footer";

export default {
  components: {
    Header,
    Asider,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  .contianer {
    display: flex;
    .content {
      flex: 1;
      padding: 0 30px;
    }
    height: 100%;
  }
}
</style>