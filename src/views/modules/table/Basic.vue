<template>
  <div class="basic-table">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="name">
        <el-input v-model="formData.user" placeholder="请输入name"></el-input>
      </el-form-item>
      <el-form-item label="type">
        <el-select v-model="formData.region" placeholder="请选择">
          <el-option label="A" value="1"></el-option>
          <el-option label="B" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="date">
        <el-date-picker
          v-model="formData.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="imgPath" label="video" align="center">
        <!--插入图片链接的代码-->
        <template slot-scope="scope">
          <img
            :src="scope.row.imgPath"
            alt="获取视频失败"
            style="width: 50px; height: 50px"
          />
        </template>
      </el-table-column>
      <el-table-column label="name" width="120" align="center">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="type" label="type" align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="date"
        align="center"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        user: "",
        region: "",
        date: "",
      },
      tableData: [
        {
          imgPath: "@/assets/logo.png",
          name: "xxx",
          type: "A",
          date: "xxxx.xx.xx",
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    handleSubmit() {
      console.log(this.formData, 111);
    },
  },
};
</script>