<template>
  <div class='login'>
    <el-card class='login-card'>
      <div  class='logo'>
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单组件  el-form表单容器-->
      <!--数据校验 首先要给el-form 一个model属性 表示数据对象  -->
      <el-form ref='loginForm' :model="loginForm" :rules="loginRules" style='margin-top:20px'>
        <!-- 表单项  prop绑定需要校验的字段名 但是 不写loginForm.mobile 只写mobile-->
        <el-form-item prop="mobile">
          <!-- 放置组件内容 -->
          <!-- 绑定手机号 -->
          <el-input v-model="loginForm.mobile" placeHolder='请输入手机号'></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 绑定验证码 -->
           <el-input v-model="loginForm.code" placeHolder='请输入验证码' style='width:280px'></el-input>
           <el-button style='float:right'>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- 绑定是否勾选协议 -->
            <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style='width:100%'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack() // 如果value为true直接通过
      } else {
        callBack(new Error('您必须无条件同意被坑'))
      }
    }
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选协议
      },
      // 定义 rules 校验规则 表单是根据规则去校验 没有规则 就没有校验
      // key(字段名):value(数组对象=> 多个 => 一个字段 可能有一个或者多个校验规则)
      loginRules: {
        mobile: [{
          required: true, // 意味着必填
          message: '手机号不能为空' // 如果没有满足要求 就会提示message的内容
        }, {
          pattern: /^1[3456789]\d{9}$/, // 正则表达式
          message: '手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码必须为6位数字'
        }],
        check: [{
          validator
        }]
      }
    }
  },
  methods: {
    login () {
      // 通过el-form组件的validata方法 校验整个表单的数据
      // 传入一个回调函数 isOK为true 说明所有的校验规则都成功了
      // 如果为false 说明有错误
      this.$refs.loginForm.validate(isOk => {

      })
    }
  }
}
</script>

<style lang='less' scoped>
// 如果要用less/scss等预处理css语言的话 需要给一个lang属性 lang='less' lang='scss'
// lang属性 是对但css进行语言指定
// scoped 只针对当前的组件样式起作用
// 100vh 就是占据当前的屏幕的100%
.login {
  background-image: url('../../assets/img/login_bg.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width:440px;
    height:350px;
    .logo {
      text-align:center;
      img {
        height:45px;
      }
    }
  }
}
</style>
