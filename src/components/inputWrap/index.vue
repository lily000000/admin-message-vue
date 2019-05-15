<template>
  <el-form ref="form" :model="form" label-width="80px">
    <div>当前：{{xindex}}</div>
    <el-form-item label="活动名称1">
      <el-input v-model="form.name1"></el-input>
    </el-form-item>
    <el-form-item label="活动名称2">
      <el-input v-model="form.name2"></el-input>
    </el-form-item>
    <el-form-item label="活动名称3">
      <el-input v-model="form.name3"></el-input>
    </el-form-item>
    <el-form-item label="活动名称4">
      <el-input v-model="form.name4"></el-input>
    </el-form-item>
    <el-button  @click="onDelete">删除</el-button>
    <el-button @click="onAdd">添加</el-button>
  </el-form>
</template>
<script>
import { watch } from "fs";
export default {
    props:{
        xindex:{
            type:Number
        }
    },
  data() {
    return {
      form: {
        name1: "",
        name2: "",
        name3: "",
        name4: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onDelete(){
      this.$emit("onDelete");
    },
    onAdd(){
      this.$emit("onAdd");
    }
  },
  watch: {
    form: {
      deep: true,
      handler: function(val) {
        this.$emit("onChange", val);
      }
    }
  }
};
</script>

