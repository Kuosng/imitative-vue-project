<!-- 登录页 -->
<template>
  <div class="login-form">
    <h2 :style="{ textAlign: 'center' }">用户登录</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-position="left"
    >
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name">
          <i class="el-icon-user-solid" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input :type="isView ? 'text' : 'password'" v-model="ruleForm.pass">
          <i class="el-icon-lock" slot="prefix"> </i>
          <i
            :class="isView ? 'el-icon-view' : 'el-icon-more'"
            slot="suffix"
            @click="handleIconClick"
          >
          </i
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :style="{ width: '100%' }"
          type="primary"
          @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isView: false,
      ruleForm: {
        name: "",
        pass: "",
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleIconClick() {
      this.isView = !this.isView;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-form {
  width: 20%;
  margin: 10% auto;

  .btn-contianer {
    color: red;
    .el-form-item__content {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

