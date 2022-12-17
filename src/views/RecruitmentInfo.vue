<template>
    <div>
        <!-- banner start -->
    <div class="comBanner newsBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <recruitment-main-top></recruitment-main-top>
            <!-- 招聘信息2 -->
            <div class="recruitmentInfo">
                <div class="recruitmentList">
                    <li class="clearfix">
                        <dd>招聘岗位</dd>
                        <dd>招聘部门</dd>
                        <dd>学历要求</dd>
                        <dd>预计薪资</dd>
                        <dd>聘人数</dd>
                        <dd>发布时间</dd>
                    </li>
                    <li class="clearfix" v-for="item in list" :key="item.id">
                        <dd>{{item.job}}</dd>
                        <dd>{{item.department}}</dd>
                        <dd>{{item.address}}</dd>
                        <dd>{{item.salary}}</dd>
                        <dd>{{item.num}}</dd>
                        <dd>{{item.time | formattime}}</dd>
                        <ul class="recruitmentDetail">
                            <li>
                                <span>岗位职责</span>
                                <p v-html="item.responsibility"></p>
                            </li>
                            <li>
                                <span>岗位要求：</span>
                                <p v-html="item.requirements"></p>
                            </li>
                            <li>
                                <span>福利待遇</span>
                                <p v-html="item.welfare"></p>
                            </li>
                        </ul>
                    </li>
                </div>
                <div class="pages">
                  <!-- 记录总数 -->
                    <el-pagination
                    background
                    prev-text="上一页"
                    next-text="下一页"
                    :hide-on-single-page="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-size="size"
                    layout="slot"
                    :total="total">
                    <span>共{{Math.ceil(total/size)}}页,每页显示{{size}}条</span>
                    </el-pagination>
                    <!-- 首页 -->
                    <el-pagination
                    class="first-pager"
                    background
                    prev-text="上一页"
                    next-text="下一页"
                    :hide-on-single-page="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-size="size"
                    layout="slot"
                    :total="total">
                    <span @click="firstPage()">首页</span>
                    </el-pagination>
                    <!--分页 -->
                    <el-pagination
                    class="page"
                    background
                    prev-text="上一页"
                    next-text="下一页"
                    :hide-on-single-page="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-size="size"
                    layout="prev, pager, next"
                    :total="total">
                    </el-pagination>
                    <!--  尾页 -->
                    <el-pagination
                    class="last-pager"
                    background
                    prev-text="上一页"
                    next-text="下一页"
                    :hide-on-single-page="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-size="size"
                    layout="slot"
                    :total="total">
                    <span @click="lastPage()">尾页</span>
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
    <!-- news content end -->
    </div>
</template>

<script>
import $ from 'jquery'
import { list } from '../api/recruitment_info'
import time from '../mixins/formattime'
import page from '../mixins/page'
import RecruitmentMainTop from '../components/RecruitmentMainTop.vue'
export default {
  components: { RecruitmentMainTop },
  mixins: [time, page],
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.listdata()
  },
  methods: {
    listdata () {
      const params = { page: this.page, size: this.size }
      list(params).then((res) => {
        console.log(res)
        this.list = res.data.data
        this.total = res.data.total
      })
    }
  }
}
$(function () {
  $(document).on('click', '.recruitmentList>li', function () {
    $(this).find('ul').toggle()
    $(this).find('dd:nth-child(6)').toggleClass('upArrow')
  })
})
</script>

<style scoped>
::v-deep .el-pagination.is-background .el-pager li,
::v-deep .el-pagination.is-background button {
    color: #888;
    width: 40px;
    height: 40px;
    line-height: 40px;
}
::v-deep .el-pagination.is-background .btn-next,
::v-deep .el-pagination.is-background .btn-prev{
    margin: 0 5px;
    min-width: 68px;
    height: 40px;
    line-height: 40px;
    padding-top: 5px;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #008BD3;
    font-weight: bold;
    color: #fff;
}
.el-pagination{
  display: inline-block;
  color: #888 !important;
  font-weight: normal;
  margin-right: 10px;
  height: 40px;
}
.el-pagination span{
  margin-top: 5px;
}
.el-pagination:not(.page){
  background-color: #f6f6f6;
}
::v-deep .el-pagination button span{
  display: inline-block;
}
.first-pager,.last-pager{
  cursor: pointer;
}
</style>
