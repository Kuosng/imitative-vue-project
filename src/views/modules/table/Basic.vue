<template>
  <div class="basic-table">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="动漫名称">
        <el-input
          v-model="formData.user"
          placeholder="请输入动漫名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="动漫类型">
        <el-select v-model="formData.region" placeholder="动漫类型">
          <el-option label="热血" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开播日期">
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
      <el-table-column prop="imgPath" label="视频" align="center">
        <!--插入图片链接的代码-->
        <template slot-scope="scope">
          <img
            :src="scope.row.imgPath"
            alt="获取视频失败"
            style="width: 50px; height: 50px"
          />
        </template>
      </el-table-column>
      <el-table-column label="动漫名称" width="120" align="center">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="type" label="动漫类型" align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="开播日期"
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
          name: "轻音少女",
          type: "治愈",
          date: "xxxx.xx.xx",
        },
        // {
        //   imgPath: "",
        //   name: "强风吹佛",
        //   type: "青春",
        //   date: "xxxx.xx.xx",
        // },
        // {
        //   name: "比宇宙更遥远的地方",
        //   type: "理想",
        //   date: "xxxx.xx.xx",
        // },
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