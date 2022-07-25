<template>
  <div class="header">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumb"
          :key="item.path"
          :to="index !== breadcrumb.length - 1 ? { path: item.path } : ''"
          >{{ item.meta && item.meta.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="user-info">用户信息</div>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumb() {
      // 根据路由配置meta中的showInbreadcrumb字段过滤
      let matchedArr = this.$route.matched.filter((item) => {
        // return item.meta.showInbreadcrumb;
        return item;
      });
      // 因为首页比较特殊，必须一直显示在面包屑第一个，如果没有首页路由信息，手动添加到最前面
      if (matchedArr[0].meta.label !== "主页") {
        matchedArr.unshift({
          path: "/home",
          meta: {
            label: "主页",
          },
        });
      }
      return matchedArr;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
  .user-info {
    display: flex;
  }
}
</style>