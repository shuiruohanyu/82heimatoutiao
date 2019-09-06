<template>
  <el-card>
      <bread-crumb slot='header'>
         <template slot='title'>
             账户信息
         </template>
      </bread-crumb>
      <el-form ref="userForm" :model="userInfo" :rules="userRules" label-width="100px">
          <el-form-item label="用户名" prop="name">
              <el-input v-model="userInfo.name" style='width:300px'></el-input>
          </el-form-item>
          <el-form-item label="简介" prop="intro">
              <el-input v-model="userInfo.intro" style='width:300px'></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
              <el-input v-model="userInfo.email" style='width:300px'></el-input>
          </el-form-item>
          <el-form-item label="手机号">
              <el-input v-model="userInfo.mobile" style='width:300px' disabled></el-input>
          </el-form-item>
          <el-form-item>
              <el-button @click="saveUserInfo" type='primary'>保存</el-button>
          </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      },
      userRules: {
        name: [{
          required: true,
          message: '用户名不能为空'
        }, {
          min: 2,
          max: 8,
          message: '用户名长度必须为4-8位'
        }],
        email: [{
          pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
          message: '邮箱格式不正确'
        }]
      }
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.userInfo = result.data
      })
    },
    saveUserInfo () {
      this.$refs.userForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            url: '/user/profile',
            method: 'patch',
            data: this.userInfo
          }).then(() => {
            this.$message({ type: 'success', message: '恭喜您保存用户信息成功' })
          })
        }
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style>

</style>
