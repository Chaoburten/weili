<template>
    <div>
        <div class="mainTop">
            <h2>联系我们</h2>
            <img src="@/assets/images/arrow.png" alt="">
            <p>提供最有价值的人力资源服务和解决方案，持续为客户创造最大价值</p>
            <ul class="clearfix">
                <li>
                    <router-link to="/contactus">联系我们</router-link>
                </li>
                <li>
                    <router-link to="/message">在线留言</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a.router-link-exact-active{
    color: #fff;
    background-color: #008bd3;
}
</style>
