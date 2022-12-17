<template>
    <div>
            <!-- banner start -->
    <div class="comBanner aboutusBanner"></div>
    <!-- banner end -->

    <!-- news content start -->
    <div class="main">
        <div>
            <contactus-main-top></contactus-main-top>
            <!-- 在线留言 -->
            <div class="onlineJobSearch clearfix">
                <div class="onlineMessage">
                    <li>
                        <h3>我们会做的更好！</h3>
                        <h3>WE WILL DO BETTER</h3>
                    </li>
                    <li>
                        <p>如果您对我们有什么建议、投诉、需求，可以通过 留言告诉我们，我们会在第一时间了解并及时与您联系。
                        </p>
                    </li>
                    <li>
                        <h4>THANKS !</h4>
                    </li>
                </div>
                <div class="registerInfo">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item prop="username">
                            <label>姓名:</label>
                            <el-input v-model="ruleForm.username"></el-input>
                        </el-form-item>
                        <el-form-item prop="phone">
                            <label>手机号码:</label>
                            <el-input v-model="ruleForm.phone"></el-input>
                        </el-form-item>
                        <el-form-item prop="content">
                            <label>您的留言:</label>
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
import ContactusMainTop from '../components/ContactusMainTop.vue'
import { save } from '../api/message'
import seekerForm from '../mixins/seekerform'
export default {
  mixins: [seekerForm],
  components: { ContactusMainTop },
  data () {
    return {
      ruleForm: {},
      rules: {
        content: [
          { required: true, message: '请填写意向工作', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
          save(this.ruleForm).then((res) => {
            console.log(res)
            alert('提交成功')
            this.ruleForm = {}
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }

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
