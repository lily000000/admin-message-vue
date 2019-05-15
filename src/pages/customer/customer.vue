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
        <el-button type="primary" icon="delete" class="handle-del mr10" @click="batchTag()">批量打标签</el-button>
        <el-button type="primary" icon="delete" class="handle-del mr10" @click="batchPartner()">批量更换教育伙伴</el-button>
      </div>
      <!-- 表格 -->
      <el-table :data="tableData" v-loading="loading" border style="width: 100%">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column fixed prop="date" label="创建时间" width="150"></el-table-column>
        <el-table-column prop="chatName" label="微信号" width="120"></el-table-column>
        <el-table-column prop="chatRemark" label="微信备注" width="120"></el-table-column>
        <el-table-column prop="channl" label="渠道" width="120"></el-table-column>
        <el-table-column prop="childName" label="孩子姓名" width="100"></el-table-column>
        <el-table-column prop="grade" label="孩子年级" width="100"></el-table-column>
        <el-table-column prop="diqu" label="地区" width="100"></el-table-column>
        <el-table-column prop="appeals" label="加v诉求" width="120"></el-table-column>
        <el-table-column prop="requirement" label="学习需求" width="120"></el-table-column>
        <el-table-column prop="huyuan" label="会员" width="120"></el-table-column>
        <el-table-column prop="tuike" label="推课记录" width="120">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p v-for="item in scope.row.tuike" :key="item.id">
                <span>{{item}}</span>
              </p>
              <div slot="reference" class="name-wrapper">
                <!-- <el-tag size="medium">{{ scope.row.tuike }}</el-tag> -->
                <el-link
                  :underline="false"
                  type="primary"
                  @click="onPushClass(scope.row)"
                >{{ scope.row.tuike[0] }}</el-link>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="fuqu" label="服务状态" width="120"></el-table-column>
        <el-table-column prop="genjin" label="跟进计划" width="120"></el-table-column>
        <el-table-column prop="genjintime" label="最后跟进时间" width="120"></el-table-column>
        <el-table-column prop="xiugai" label="最后修改时间" width="120"></el-table-column>
        <el-table-column prop="huoban" label="教育伙伴" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="280">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="onSee">查看信息</el-button>
            <el-button @click="onRedact" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="onTag">打标签</el-button>
            <el-button type="text" size="small">跟进记录</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">新增推课</el-button>
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
          :total="total"
        ></el-pagination>
        <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
      </div>
    </div>
    <!-- 打标签提示框 -->
    <tag-toast :delVisible="delVisible" :tagTitle ="tagTitle" @onCancel="onCancel"></tag-toast>
    <!-- <el-dialog :title="tagTitle" :visible.sync="delVisible" width="500px" left>
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
              <el-button type="danger" plain v-for="(item,index) in tagItem" :key="item" class="btn-item" @click="delBtn(index)">
                {{item}}
                <i class="el-icon-error el-icon--right"></i>
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog> -->
    <!-- 打标签提示框 -->
    
    <el-dialog title="批量更换教育伙伴" :visible.sync="educatioToast" width="500px" left>
      <div class="del-dialog-cnt">
        <p class="toast-tilte">
          所有被选中的
          <span>88</span>位客户 将批量更换教育伙伴
        </p>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="教育伙伴">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="educatioToast = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import tagToast from "components/tagToast/index.vue"
export default {
  components:{
    tagToast
  },
  data() {
    return {
      delVisible: false,
      educatioToast: false,
      loading: false,
      tableData: [],
      pageNo: 1,
      pageSize: 20,
      search: "",
      total: 0,
      radio: 3,
      tagItem: [],
      tagTitle: "打标签",
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
      value5: [],
      value: "",//教育伙伴
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
  mounted() {
    this.getCustomerTables();
  },
  methods: {
    //客户管理表格数据请求
    getCustomerTables() {
      const params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        search: this.search
      };
      this.loading = true;
      this.$API.getCustomerTables(params).then(res => {
        const { data, message, success } = res;
        if (success) {
          this.tableData = data.data;
          this.total = data.total;
          this.loading = false;
        }
      });
    },
    //重置
    onReset() {
      this.search = "";
      this.pageNo = 1;
      this.getCustomerTables();
    },
    handleClick(row) {
      console.log(row);
    },
    //搜索
    onSearch() {
      this.pageNo = 1;
      this.getCustomerTables();
    },
    //新增客户
    addcustomer() {
      alert(1);
      this.$router.push({path:"/addcustomer", query:{id: 1}});
    },
    //编辑
    onRedact(){
      alert(2);
      this.$router.push({path:"/addcustomer", query:{id: 2}});
    },
    //查看客户
    onSee() {
      alert(3);
      this.$router.push({path:"/addcustomer", query:{id: 3}});
    },
    onCancel(){
      this.delVisible=false
    },
    //打标签
    onTag() {
      this.tagTitle = "打标签";
      this.delVisible = true;

      // this.$API.getTagData({}).then(res => {
      //   console.log(res);
      //   const { data, message, success } = res;
      //   if (success) {
      //     this.tagItem = data.tagItem;
      //   }
      // });
    },
    batchTag() {
      this.tagTitle = "批量打标签";
      this.delVisible = true;
    },
    batchPartner() {
      this.educatioToast = true;

    },
    onTageChose(value5) {
      this.tagItem = value5;
      console.log(value5);
    },
    delBtn(e){
      console.log(e);
      this.tagItem.splice(e, 1)


    },
    onSubmit() {
      console.log("submit!");
    },
    //查看推课
    onPushClass(cont) {
      console.log("查看推课", cont);
    },
    //请求第几页
    handleCurrentChange(currentPage) {
      console.log(currentPage);
      this.pageNo = currentPage;
      this.getCustomerTables();
    },
    //每页展示多少条
    handleSizeChange(pageSize) {
      console.log(pageSize);
      this.pageNo = 1;
      this.pageSize = pageSize;
      this.getCustomerTables();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./customer.scss";
</style>


