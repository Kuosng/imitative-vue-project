<template>
  <el-checkbox-group v-model="checkedList" @change="handleChange">
    <el-checkbox
      v-for="item in checks"
      :key="item.label"
      :label="item.label"
    ></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  props: {
    checks: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      checkedList: [Object.values(checks)[0].label],
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleChange(val) {
      this.$emit("checkChange", val);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
</style>