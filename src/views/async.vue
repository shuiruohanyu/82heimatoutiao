<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">async异步方案</template>
      </bread-crumb>
      <el-button type="primary" @click="test2">
        测试异步方案
      </el-button>
      <p>{{name}}</p>
  </el-card>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      name: '张三'
    }
  },
  methods: {
    axios (flag) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (flag === 1) {
            resolve('success')
          } else {
            reject(new Error('fail'))
          }
        }, 3000)
      })
    },
    // 传统axios 异步写法 回调函数
    test1 () {
      this.axios().then(function (result) {
        alert(result)
      })
      this.name = '李四'
    },
    // 同步写法
    async test2 () {
      try {
        let result = await this.axios(2) // 强制等待  =>  后面promise reslove
        alert(result)
        this.name = '李四'
      } catch (error) {
        alert(error.message)
      }
    },
    test3 () {
      this.test1()
      this.test2()
    //   ...其他方法
    }
  }
}
</script>

<style>

</style>
