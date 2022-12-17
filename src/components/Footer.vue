<template>
    <div>
        <!-- links start -->
        <div class="links">
            <div class="clearfix">
                <ul>
                    <li>
                        <span>友情链接：</span>
                    </li>
                    <li>
                        <a href="">hao123</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">360导航</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">搜狗导航</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">东方财富</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">新浪财经</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">金融界</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">金十数据</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">和讯</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">网易财经</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">汇通网</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">证券之星</a>
                    </li>
                    <li>|</li>
                    <li>
                        <a href="">FX168</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- links end -->
        <!-- bottom start -->
        <div class="bottom">
            <div>
                <div class="bottomLeft">
                    <router-link to="/">{{list.wl_name}}</router-link>
                    <ul>
                        <li>联系电话： <span>{{list.telephone}}</span></li>
                        <li>邮箱： <span>{{list.email}}</span></li>
                        <li>QQ：<span>{{list.QQ}}</span></li>
                        <li>地址：<span>{{list.address}}</span> 备案号：<a href="">{{list.record}}</a></li>
                        <li><span>版权所有 © 2015-2018 江西为力人力资源有限公司</span> 技术支持：
                            <a href="">南昌雅腾信息科技有限公司</a>
                        </li>
                    </ul>
                </div>
                <div class="link">
                    <ul>
                        <li>
                             <router-link to="/">网站首页</router-link>
                        </li>
                        <li>
                            <router-link to="/corporate_services_detail?sortid=15">企业服务</router-link>
                        </li>
                        <li>
                            <router-link to="/staff_services">员工服务</router-link>
                        </li>
                        <li>
                            <router-link to="/news">新闻资讯</router-link>
                        </li>
                        <li>
                            <router-link to="/recruitment_info">求职招聘</router-link>
                        </li>
                        <li>
                            <router-link to="/contactus">联系我们</router-link>
                        </li>
                    </ul>
                </div>
                <div class="bottomRight">
                    <img src="@/assets/images/QRcode.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- bottom end -->
    </div>
</template>
<script>
import sysset from '../mixins/sysset'
export default {
  mixins: [sysset]
}
</script>
