<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover" style="height:360px;">
          <div slot="header" class="clearfix">
            <span>数据简报</span>
          </div>
          <div class="data-analyze">
            <ul>
              <li>
                <p>
                  加v客户:
                  <span>66</span>
                  个
                </p>
              </li>
              <li>
                <p>
                  试听客户:
                  <span>88</span>个
                </p>
              </li>
              <li>
                <p>
                  推荐客户:
                  <span>22</span>个
                </p>
              </li>
              <li>
                <p>
                  报名:
                  <span>22</span>
                  个
                </p>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="hover" style="height:360px;">
          <div slot="header" class="clearfix">
            <span>业绩排行榜</span>
          </div>
          <el-tabs type="border-card">
            <el-tab-pane label="报名量">
              <ul class="applynum">
                <li class="applyitem">
                  <span class="applyranking">1</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">2</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">3</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">4</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">5</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="推荐量">
              <ul class="applynum">
                <li class="applyitem">
                  <span class="applyranking">1</span>
                  <span class="applycont">教育伙伴2</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">2</span>
                  <span class="applycont">教育伙伴2</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">3</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">4</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">5</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="咨单率">
              <ul class="applynum">
                <li class="applyitem">
                  <span class="applyranking">1</span>
                  <span class="applycont">教育伙伴3</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">2</span>
                  <span class="applycont">教育伙伴3</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">3</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">4</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">5</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="推单率">
              <ul class="applynum">
                <li class="applyitem">
                  <span class="applyranking">1</span>
                  <span class="applycont">教育伙伴4</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">2</span>
                  <span class="applycont">教育伙伴4</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">3</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">4</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">5</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="推荐率">
              <ul class="applynum">
                <li class="applyitem">
                  <span class="applyranking">1</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">2</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">3</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">4</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
                <li class="applyitem">
                  <span class="applyranking">5</span>
                  <span class="applycont">教育伙伴1</span>
                  <span>数量</span>
                  <span>占比</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover" style="height:200px;">
          <div slot="header" class="clearfix">
            <span>漏斗转化</span>
          </div>

          <ul class="data-analyze">
            <li>
              <p>
                验证客户:
                <span>66</span>
                个
              </p>
            </li>
            <li>
              <p>
                确定客户意向:
                <span>88</span>个
              </p>
            </li>
            <li>
              <p>
                试听客户:
                <span>22</span>个
              </p>
            </li>
            <li>
              <p>
                报名客户:
                <span>22</span>
                个
              </p>
            </li>
          </ul>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card shadow="hover" style="height:200px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
          </div>
              <ul class="data-analyze">
            <li>
              <p>
                暂无事项
              </p>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" <style lang="scss" scoped>
.el-tabs__content {
  height: 190px;
  overflow-y: scroll;
}
.el-row {
  margin-bottom: 10px;
}

.applynum {
  .applyitem {
    zoom: 1;
    display: flex;
    align-items: center;
    margin-top: 16px;
    .applyranking {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: 1.5px;
      margin-right: 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background-color: #f5f5f5;
      border-radius: 20px;
    }
    .applycont {
      span {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        line-height: 22px;
      }

      flex: 1 1;
      margin-right: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>


