<template>
  <el-dialog :title="tagTitle" :visible="delVisible" width="500px" @close="onCancel" left>
    <div class="del-dialog-cnt">
      <p class="toast-tilte" v-if="tagTitle =='批量打标签'">
        所有被选中的
        <span>88</span>位客户 将批量添加标签
      </p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标签对象">
          <el-radio-group v-model="radio">
            <el-radio :label="3">孩子</el-radio>
            <el-radio :label="6">家长</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="标签名称">
          <el-select
            v-model="value5"
            multiple
            placeholder="请选择"
            filterable
            @change="onTageChose(value5)"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="已选标签" class="tag-item">
          <div>
            <el-button
              type="danger"
              plain
              v-for="(item,index) in tagItem"
              :key="item"
              class="btn-item"
              @click="delBtn(index)"
            >
              {{item}}
              <i class="el-icon-error el-icon--right"></i>
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onCancel">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    delVisible: {
      type: Boolean
    },
    tagTitle: {
      type: String
    }
  },
  data() {
    return {
      radio: 3,
      value5: [],
      tagItem: [],
      options: [
        {
          value: "黄金糕",
          label: "黄金糕"
        },
        {
          value: "双皮奶",
          label: "双皮奶"
        },
        {
          value: "蚵仔煎",
          label: "蚵仔煎"
        },
        {
          value: "龙须面",
          label: "龙须面"
        },
        {
          value: "北京烤鸭",
          label: "北京烤鸭"
        }
      ],
      form: {
        name: "",
        region: "",
        options: "",
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
    onTageChose(value5) {
      this.tagItem = value5;
      console.log(value5);
    },
    delBtn(e) {
      console.log(e);
      this.tagItem.splice(e, 1);
    },
    onCancel() {
      console.log(12321)
      this.$emit('onCancel');
      this.resetData()
    },
    resetData(){
      this.form={
        name: "",
        region: "",
        options: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    }
  }
};
</script>

