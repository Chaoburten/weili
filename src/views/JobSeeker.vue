<template>
    <div>
            <!-- banner start -->
    <div class="comBanner newsBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <recruitment-main-top></recruitment-main-top>
            <!-- 在线求职 -->
            <div class="onlineJobSearch clearfix">
                <img src="@/assets/images/seekJod.jpg" alt="">
                <div class="registerInfo">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item prop="username">
                            <label>姓名:</label>
                            <el-input v-model="ruleForm.username"></el-input>
                        </el-form-item>
                        <el-form-item prop="sex">
                            <label>性别:</label><br>
                            <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item prop="phone">
                            <label>手机号码:</label>
                            <el-input v-model="ruleForm.phone"></el-input>
                        </el-form-item>
                        <el-form-item prop="content">
                            <label>意向工作:</label>
                            <el-input type="textarea" v-model="ruleForm.content"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提 交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
    <!-- news content end -->
    </div>
</template>

<script>
import RecruitmentMainTop from '../components/RecruitmentMainTop.vue'
import seekerForm from '../mixins/seekerform'
export default {
  mixins: [seekerForm],
  components: { RecruitmentMainTop }
}
</script>

<style scoped>
.el-form-item {
    margin-bottom: 8px;
}
::v-deep .el-form-item__content {
    margin: 0 !important;
    font-size:16px;
}
::v-deep .el-form-item:last-child .el-form-item__content {
    margin-top: 10px !important
}
::v-deep .el-radio__label {
    font-size: 16px;
}
.el-button--primary {
    width: 139px;
    height: 50px;
    font-size: 16px;
    background-color: #008BD3;
    border-color: #008BD3;
}
.el-button--primary>span {
    display: inline-block;
    width: 139px;
    height: 50px;
}
</style>
