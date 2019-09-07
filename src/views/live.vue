<template>
  <el-card>
      <bread-crumb slot='header'>
        <template slot='title'>生命周期</template>
      </bread-crumb>
      <el-input v-model="name"></el-input>
      <el-input v-model="age"></el-input>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      name: '张三',
      age: 18
    }
  },
  beforeCreate () {
    //   鸡肋事件
    console.log('创建实例之前执行beforeCreate')
  },
  created () {
    //   一般用来加载数据  但是不能操作dom元素
    console.log('创建实例之后执行created')
    this.interFlag = setInterval(() => {
      this.name = '李四'
    }, 1000)
  },
  beforeMount () {
    //   一般加载数据  但是也不能操作dom元素
    console.log('页面渲染之前执行beforeMount')
  },
  mounted () {
    //   可以操作dom元素
    console.log('页面渲染之后执行mounted')
  },
  beforeUpdate () {
    console.log('数据更新前执行beforeUpdate')
  },
  updated () {
    console.log('数据更新后执行updated')
  },
  beforeDestroy () {
    //  一般用来 销毁定时器  因为之前定义的定时器 没有销毁  所以需要在退出前销毁掉
    clearInterval(this.interFlag)
    console.log('页面销毁之前beforeDestroy')
  },
  destroyed () {
    console.log('页面销毁之后destroyed')
  }
}
</script>

<style>

</style>
