<template>
    <div>
            <!-- banner start -->
    <div class="comBanner aboutusBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <contactus-main-top></contactus-main-top>
            <!-- 联系我们 -->
            <div class="contactUs">
                <div class="contactUs_top">
                    <h3>江西为力人力资源服务有限公司</h3>
                    <p>联系电话：<span>{{list.phone}}</span></p>
                    <p>QQ：<span>{{list.QQ}}</span></p>
                    <p>邮箱：<span>{{list.email}}</span></p>
                    <p>地址：<span>{{list.address}}</span></p>
                </div>
                <div class="map">
                    <!-- 高德地图 -->
                    <el-amap vid="amap" :plugin="plugin" class="amap map" :center="center" :zoom="zoom">
                      <!-- 坐标点标识 -->
                      <el-amap-marker :position="center" vid="amapMarker"></el-amap-marker>
                      <!-- 文本 -->
                      <el-amap-text v-if="textShow==false" text="南昌为力人力资源服务有限公司" :position="window.position" :events="events"></el-amap-text>
                      <!-- 窗体信息 -->
                      <el-amap-info-window v-if="textShow==true" closeWhenClickMap="true" :position="window.position" :content="window.content" :events="window.events"></el-amap-info-window>
                    </el-amap>
                </div>
            </div>
        </div>
    </div>
    <!-- news content end -->
    </div>
</template>

<script>
import ContactusMainTop from '../components/ContactusMainTop.vue'
import { list } from '../api/contactus'
export default {
  components: { ContactusMainTop },
  data () {
    const center = [115.938500, 28.662600]
    return {
      list: [],
      // 高德地图
      center: center, // 高德地图中心点
      zoom: 15, // 地图缩放
      textShow: true, // 控制窗体信息与文本的切换
      // 文本点击事件处理
      events: {
        click: () => {
          this.textShow = true
        }
      },
      window: {
        position: center,
        content: '<h3 style="color:#CC5522;font-size:14px;padding-right:13px">南昌为力人力资源服务有限公司</h3><p style="color:#000;font-size:12px;padding-top:4px">联系电话：0791-82203970<br>QQ：512763522</p>',
        // 窗体关闭事件处理
        events: {
          close: () => {
            this.textShow = false
          }
        }
      },
      plugin: [
        'AMap.Autocomplete', // 输入提示插件
        'AMap.Scale', // 右下角缩略图插件 比例尺
        'AMap.OverView', // 地图鹰眼插件
        'AMap.ToolBar', // 工具栏
        'AMap.MapType', // 地图类型
        'AMap.CircleEditor', //
        'AMap.Geolocation'// 定位控件，用来获取和展示用户主机所在的经纬度位置
      ]
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
::v-deep .amap-overlay-text-container{
  font-size: 12px;
}
</style>
