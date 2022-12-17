<template>
    <div>
            <!-- banner start -->
    <div class="comBanner newsBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <staff-services-main-top :sortid="sortid"></staff-services-main-top>
            <div class="news_list">
                <ul>
                    <li v-for="item in list" :key="item.id">
                        <div class="list_left">
                            <h5>{{item.time | day}}</h5>
                            <p>{{item.time | yearAndMonth}}</p>
                        </div>
                        <div class="list_right">
                            <router-link :to="{name:'StaffServicesDetail',params:{id:item.id}}">
                                <h2>{{item.wl_name}}</h2>
                                <p v-html="item.list_show"></p>
                            </router-link>
                        </div>
                    </li>
                </ul>
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
                    <!-- 分页 -->
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
                     <!-- 尾页 -->
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
import time from '../mixins/formattime'
import page from '../mixins/page'
import { list } from '../api/staff_services'
import StaffServicesMainTop from '../components/StaffServicesMainTop.vue'
export default {
  components: { StaffServicesMainTop },
  mixins: [time, page],
  data () {
    return {
      list: [],
      sortid: ''
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.sortid = this.$route.query ? this.$route.query.sortid : ''
        this.listdata()
      },
      immediate: true
    }
  },
  mounted () {
    // this.listdata()
  },
  methods: {
    listdata () {
      const params = { sortid: this.sortid, page: this.page, size: this.size }
      list(params).then((res) => {
        console.log(res)
        this.list = res.data.data
        this.total = res.data.total
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
