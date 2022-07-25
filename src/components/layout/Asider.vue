<template>
  <div class="asider">
    <el-menu router class="el-menu-vertical-demo">
      <template v-for="item in routes">
        <el-menu-item
          :index="item.path"
          :key="item.path"
          v-if="item.meta && item.meta.hidden !== true && !item.children"
        >
          <span>{{ item.meta.label }}</span>
        </el-menu-item>
        <el-submenu
          :index="item.path"
          :key="item.path"
          v-else-if="item.meta && item.meta.hidden !== true && item.children"
        >
          <template slot="title">
            <span>{{ item.meta.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="childItem in item.children"
              :index="childItem.path"
              :key="childItem.path"
              >{{ childItem.meta.label }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { routes } from "@/router";

export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="less" scoped>
.asider {
  width: 20%;
  .el-menu {
    height: 100%;
  }
}
</style>