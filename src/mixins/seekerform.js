import { save } from '../api/recruitment'
// 手机号验证
var isMobileNumber = (rule, value, callback) => {
  if (!value) {
    return new Error('请输入电话号码')
  } else {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    const isPhone = reg.test(value)
    value = Number(value) // 转换为数字
    if (typeof value === 'number' && !isNaN(value)) { // 判断是否为数字
      value = value.toString() // 转换成字符串
      if (value.length < 0 || value.length > 12 || !isPhone) { // 判断是否为11位手机号
        callback(new Error('手机号码格式如:138xxxx8754'))
      } else {
        callback()
      }
    } else {
      callback(new Error('请输入电话号码'))
    }
  }
}
export default {
  data () {
    return {
      ruleForm: {
        sex: '男'
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: isMobileNumber, trigger: 'blur' }
        ],
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
        //   console.log(typeof this.ruleForm) // object
          this.ruleForm.sex = this.ruleForm.sex === '男' ? '0' : '1'
          save(this.ruleForm).then((res) => {
            console.log(res)
            alert('提交成功')
            this.ruleForm = {}
            this.ruleForm.sex = '男'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
