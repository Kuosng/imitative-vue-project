<template>
  <div class="basic-table">
    <column-select :checks="option" @checkChange="handleChange" />
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
import ColumnSelect from "./ColumnSelect";

const option = {
  video: { label: "video", isShow: true },
  name: { label: "name", isShow: true },
  type: { label: "type", isShow: true },
  date: { label: "date", isShow: true },
};
export default {
  components: {
    ColumnSelect,
  },
  data() {
    return {
      formData: {
        user: "",
        region: "",
        date: "",
      },
      option,
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
    handleChange(val) {
      console.log(val);
      console.log(this.$refs.multipleTable, 1);
    },
    handleSubmit() {
      console.log(this.formData, 111);
    },
  },
};
</script>