<template>
    <div>
        <div class="mainTop">
            <h2>关于我们</h2>
            <img src="@/assets/images/arrow.png" alt="">
            <p>坚持开源，不断创新</p>
            <ul class="clearfix">
                <li>
                    <router-link :to="{name:'Aboutus_1'}">公司简介</router-link>
                </li>
                <li>
                    <router-link :to="{name:'CompanyCulture'}">企业文化</router-link>
                </li>
                <li>
                    <router-link :to="{name:'CompanyHonor'}">荣誉资质</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
a.router-link-exact-active{
    color: #fff;
    background-color: #008bd3;
}
</style>
