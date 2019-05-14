<template>
  <div>
    <div class="container">
      <div class="handle-box search-wrap">
        <el-input placeholder="筛选关键词" class="handle-input mr10" v-model="search"></el-input>
        <el-button type="primary" icon="search" @click="onSearch">查询</el-button>
        <el-button @click="onReset">重置</el-button>
        <el-button type="danger" @click="addcustomer">新增</el-button>
      </div>
      <div class="handle-box">
        <el-button type="primary" icon="delete" class="handle-del mr10">批量打标签</el-button>
        <el-button type="primary" icon="delete" class="handle-del mr10">批量更换教育伙伴</el-button>
      </div>
      <el-table :data="tableData" v-loading="loading" border style="width: 100%">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="chatName" label="微信号" width="120"></el-table-column>
        <el-table-column prop="chatRemark" label="微信备注" width="120"></el-table-column>
        <el-table-column prop="channl" label="渠道" width="120"></el-table-column>
        <el-table-column prop="childName" label="孩子姓名" width="100"></el-table-column>
        <el-table-column prop="grade" label="孩子年级" width="100"></el-table-column>
        <el-table-column prop="appeals" label="加v诉求" width="120"></el-table-column>
        <el-table-column prop="zip" label="学习需求" width="120"></el-table-column>
        <el-table-column prop="zip" label="会员" width="120"></el-table-column>
        <el-table-column prop="zip" label="推课记录" width="120"></el-table-column>
        <el-table-column prop="zip" label="服务状态" width="120"></el-table-column>
        <el-table-column prop="zip" label="跟进计划" width="120"></el-table-column>
        <el-table-column prop="zip" label="最后跟进时间" width="120"></el-table-column>
        <el-table-column prop="zip" label="最后修改时间" width="120"></el-table-column>
        <el-table-column prop="zip" label="教育伙伴" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="compile">编辑</el-button>
            <el-button type="text" size="small">跟进</el-button>
            <el-button type="text" size="small">新增</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageNo"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
        <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
      </div>
    </div>
    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="600px" left>
      <div class="del-dialog-cnt">
        <el-form ref="form" :model="form" label-width="80px">
          <div class="dialog-input">
            <el-form-item label="活动名称">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域三" value="xixi"></el-option>
                <el-option label="区域四" value="haha"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      delVisible: false,
      loading:false,
      pageNo:1,
      pageSize:20,
      search:'',
      total:0,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        
      },
      tableData: []
    };
  },
  mounted(){
    this.getCustomerTables();
  },
  methods: {
    getCustomerTables(){
      const params = {
        pageNo:this.pageNo,
        pageSize:this.pageSize,
        search:this.search
      }
      this.loading=true;
      this.$API.getCustomerTables(params).then(res=>{
      const {data,message,success} = res;
      if(success){
        this.tableData = data.data;
        this.total = data.total;
        this.loading=false;
      }
    })
    },
    onReset(){
      this.search = '';
      this.pageNo = 1 
      this.$nextTick(()=>{
        this.getCustomerTables();
      })
      
    },
    handleClick(row) {
      console.log(row);
    },
    onSearch () {
      this.pageNo=1,
      this.$nextTick(()=>{
        this.getCustomerTables()
      })
    },
    addcustomer() {
      alert(1);
      this.$router.push("/addcustomer");
    },
    compile() {
      this.delVisible = true;
    },
    onSubmit() {
      console.log("submit!");
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      this.pageNo=currentPage;
      this.$nextTick(()=>{
        this.getCustomerTables()
      })
    },
    handleSizeChange(pageSize) {
      console.log(pageSize)
      this.pageNo=1;
      this.pageSize=pageSize;
      this.$nextTick(()=>{
        this.getCustomerTables()
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.search-wrap {
  text-align: right;
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.del-dialog-cnt {
  text-align: left;
}
</style>


