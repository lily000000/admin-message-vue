<template>
  <el-tabs type="border-card">
    <el-tab-pane label="家长信息">
      <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
        <div class="form-item">
          <el-form-item label="加v时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="微信号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="微信名">
            <el-input v-model="form.name"></el-input>
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
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="渠道号">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="微信号">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <el-form-item label="城市级联">
          <el-cascader :options="options" v-model="form.options"></el-cascader>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="家庭编号">
          <el-radio-group v-model="form.resource">
            <el-radio label="生成家庭编号"></el-radio>
            <el-radio label="绑定家庭编号"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <el-button type="primary" plain>打标签<i class="el-icon-plus el-icon--right"></i></el-button>
        </el-form-item>  
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button type="primary" @click="onSubmit">保存并新增推课</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="学生信息">配置管理</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
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
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss" scoped>
.form-item {
  display: flex;
  justify-content: flex-start;
}
</style>
