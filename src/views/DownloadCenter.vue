<template>
    <div>
            <!-- banner start -->
    <div class="comBanner newsBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <div class="mainTop">
                <h2>下载中心</h2>
                <img src="@/assets/images/arrow.png" alt="">
                <p>提供最有价值的人力资源服务和解决方案，持续为客户创造最大价值</p>
            </div>
            <div class="downloadInfo">
                <div class="recruitmentList download_center">
                    <li class="clearfix">
                        <dd>名称</dd>
                        <dd>发布时间</dd>
                        <dd>下载</dd>
                    </li>
                    <li class="clearfix" v-for="item in list" :key="item.id">
                        <dd>{{item.wl_name}}</dd>
                        <dd>{{item.time | yearAndMonth}}</dd>
                        <dd>
                            <a :href="item.pic" :download="item.wl_name">立即下载</a>
                        </dd>
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
import { list } from '../api/download_center'
import time from '../mixins/formattime'
import page from '../mixins/page'
export default {
  mixins: [time, page],
  data () {
    return {
      list: [],
      filename: ''
    }
  },
  mounted () {
    this.listdata()
  },
  methods: {
    listdata () {
      list().then((res) => {
        console.log(res)
        this.list = res.data.data
      })
    }
  }

}
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
