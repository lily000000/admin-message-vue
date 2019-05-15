<template>
  <el-form
    ref="form"
    :model="form"
    label-width="80px"
    :rules="rules"
    :label-position="labelPosition"
    :disabled="readonly"
  >
    <div class="form-item">
      <el-form-item label="加v时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 200px;"></el-date-picker>
      </el-form-item>
      <el-form-item label="微信号">
        <el-input v-model="form.chat" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="微信名" label-width="100px" prop="chatName">
        <el-input v-model="form.chatName" style="width:200px"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
      </el-form-item>-->
    </div>
    <div class="form-item">
      <el-form-item label="微信备注">
        <el-input v-model="form.chatNote" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="渠道号">
        <el-select v-model="form.region" placeholder="请选择渠道号" style="width:200px">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所加微信号" label-width="100px">
        <el-input v-model="form.addChatName" style="width:200px"></el-input>
      </el-form-item>
    </div>
    <div class="form-item">
      <el-form-item label="家长姓名">
        <el-input v-model="form.parentsName" style="width:200px" placeholder="请输入家长姓名"></el-input>
      </el-form-item>
      <el-form-item label="家庭角色">
        <el-select v-model="form.parentsRole" placeholder="请选择家庭角色" style="width:200px">
          <el-option label="爸爸" value="爸爸"></el-option>
          <el-option label="妈妈" value="妈妈"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="家长年龄" label-width="100px">
        <el-input v-model="form.name" style="width:200px" placeholder="请输入家长年龄"></el-input>
      </el-form-item>
    </div>
    <div class="form-item">
      <el-form-item label="职业">
        <el-select v-model="form.occupation" placeholder="请选择职业" style="width:200px">
          <el-option label="教师" value="教师"></el-option>
          <el-option label="白领" value="白领"></el-option>
          <el-option label="高管" value="高管"></el-option>
          <el-option label="政府事业单位" value="政府事业单位"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="经济能力">
        <el-select v-model="form.economicRole" placeholder="请选择经济能力" style="width:200px">
          <el-option label="爸爸" value="爸爸"></el-option>
          <el-option label="妈妈" value="妈妈"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学历" label-width="100px">
        <el-select v-model="form.education" placeholder="请选择学历" style="width:200px">
          <el-option label="博士" value="博士"></el-option>
          <el-option label="硕士" value="硕士"></el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="form-item">
      <el-form-item label="城市级联">
        <el-cascader :options="options" v-model="form.options" style="width:200px"></el-cascader>
      </el-form-item>
      <el-form-item label="加v诉求">
        <el-select v-model="form.appeal" placeholder="请选择加v诉求" style="width:200px">
          <el-option label="要优惠" value="要优惠"></el-option>
          <el-option label="闲谈" value="闲淡"></el-option>
        </el-select>
      </el-form-item>
    </div>
    <el-form-item label="家庭编号">
      <el-radio-group v-model="form.resource" @change="radioChange">
        <el-radio :label="3">生成家庭编号</el-radio>
        <el-radio :label="6">绑定家庭编号</el-radio>
      </el-radio-group>
      <el-select placeholder="请选择家庭编号" v-model="form.familyNum" style="width:200px">
        <el-option label="0" value="0"></el-option>
        <el-option label="1" value="1"></el-option>
      </el-select>
      <p class="warn">(若该家庭成员中，已有家长平台会员则无需生成，只需进行绑定家庭编号)</p>
    </el-form-item>
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

