<template>
  <div class='layout-aside'>
      <div class='title'>
          <img :src="collapse ? smallImg : bigImg" alt="">
      </div>
    <el-menu
      background-color="#323745"
      text-color="#adafb5"
      :style="{width:collapse ? '61px' : '201px'  }"
      active-text-color="#ffd04b"
      router
      :collapse="collapse"
      >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- el-submenu是有折叠的菜单 -->
      <el-submenu index='1'>
          <!-- el-submenu定义具名插槽 title -->
          <template slot='title'>
            <i class="el-icon-s-order"></i>
            <span>内容管理</span>
          </template>
         <el-menu-item index="/home/publish">
             发布文章
         </el-menu-item>
         <el-menu-item index="/home/articles">
             内容列表
         </el-menu-item>
        <el-menu-item index="/home/comment">
             评论管理
         </el-menu-item>
         <el-menu-item index="/home/material">
             素材管理
         </el-menu-item>
      </el-submenu>
       <el-submenu index='2'>
          <!-- el-submenu定义具名插槽 title -->
          <template slot='title'>
            <i class="el-icon-s-custom"></i>
            <span>粉丝管理</span>
          </template>
         <el-menu-item index='/home/fansdata'>
             图文数据
         </el-menu-item>
         <el-menu-item index='/home/fansinfo'>
             粉丝概况
         </el-menu-item>
        <el-menu-item  index='/home/fanslist'>
             粉丝列表
         </el-menu-item>
         <el-menu-item index='/home/fansimg'>
             粉丝画像
         </el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/account">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
import eventBus from '../../utils/events'
export default {
  data () {
    return {
      collapse: false,
      smallImg: require('../../assets/img/toutiao.png'),
      bigImg: require('../../assets/img/logo_admin.png')
    }
  },
  created () {
    eventBus.$on('openOrClose', (status) => {
      this.collapse = status
    })
  }
}
</script>

<style lang='less' scoped>
   .layout-aside {
       height: 100vh;
       background-color: #323745;
       .title {
           text-align: center;
           background-color:  #2e2f32;
           padding: 10px 0;
           img {
               height: 30px;
           }
       }
   }
</style>
