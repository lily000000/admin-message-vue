<template>
  <el-form
    ref="form"
    :model="form"
    label-width="80px"
    :label-position="labelPosition"
    :disabled="readonly"
  >
    <div class="form-item">
      <el-form-item label="孩子姓名">
        <el-input v-model="form.name" style="width:200px" placeholder="请输入家长姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="请选择性别" style="width:200px">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学生年级" label-width="100px">
        <el-select v-model="form.gender" placeholder="请输入学生年级" style="width:200px">
          <el-option label="一年级" value="一年级"></el-option>
          <el-option label="二年级" value="二年级"></el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-item">
      <el-form-item label="城市级联">
        <el-cascader :options="options" v-model="form.city" style="width:200px"></el-cascader>
      </el-form-item>
      <el-form-item label="性格类型">
        <el-select v-model="form.character" placeholder="请选择性格类型" style="width:200px">
          <el-option label="害羞" value="害羞"></el-option>
          <el-option label="开朗" value="开朗"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="兴趣爱好">
        <el-input v-model="form.name" style="width:200px" placeholder="请输入兴趣爱好"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="备注">
      <el-input type="textarea" v-model="form.desc" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <el-button type="primary" plain>
        打标签
        <i class="el-icon-plus el-icon--right"></i>
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button type="primary" @click="onSubmit">保存并新增推课</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      readonly: false,
      labelPosition: "right",
      addTitile: "新增客户",
      options: [
        {
          value: "guangdong",
          label: "广东省",
          children: [
            {
              value: "guangzhou",
              label: "广州市",
              children: [
                {
                  value: "tianhe",
                  label: "天河区"
                },
                {
                  value: "haizhu",
                  label: "海珠区"
                }
              ]
            },
            {
              value: "dongguan",
              label: "东莞市",
              children: [
                {
                  value: "changan",
                  label: "长安镇"
                },
                {
                  value: "humen",
                  label: "虎门镇"
                }
              ]
            }
          ]
        },
        {
          value: "hunan",
          label: "湖南省",
          children: [
            {
              value: "changsha",
              label: "长沙市",
              children: [
                {
                  value: "yuelu",
                  label: "岳麓区"
                }
              ]
            }
          ]
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        options: [],
        delivery: false,
        type: [],
        resource: 3,
        desc: "",
        role: "",
        occupation: "",
        gender: "",
        grade: "",
        city: [],
        character: "",
        chat: "",
        chatName: "",
        chatNote: "",
        parentsName: "",
        addChatName: "",
        parentsRole: "",
        economicRole: "",
        education: "",
        appeal: "",
        familyNum: ""
      },
      rules: {
        chatName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    //1新增2编辑3查看
    console.log(this.$route.query.id);
    if (this.$route.query.id == 1) {
      this.readonly = false;
      this.addTitile = "新增客户";
    } else if (this.$route.query.id == 2) {
      this.readonly = false;
      this.addTitile = "编辑客户";
    } else {
      this.readonly = true;
      this.addTitile = "查看信息";
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    radioChange(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.form-item {
  display: flex;
  justify-content: flex-start;
}
.el-form-item__content {
  width: 200px;
}
.el-input--small .el-input__inner {
  width: 200px !important;
}
.warn {
  color: #f56c6c;
}
.customertite {
  color: #606266;
  margin-bottom: 10px;
}
.serial {
  margin-left: 30px;
}
</style>

