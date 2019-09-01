<template>
  <div class='layout-aside'>
      <div class='title'>
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
<el-menu
      background-color="#323745"
      text-color="#adafb5"
      active-text-color="#ffd04b">
      <el-menu-item index="2">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- el-submenu是有折叠的菜单 -->
      <el-submenu>
          <!-- el-submenu定义具名插槽 title -->
          <template slot='title'>
            <i class="el-icon-s-order"></i>
            <span>内容管理</span>
          </template>
         <el-menu-item>
             发布文章
         </el-menu-item>
         <el-menu-item>
             内容列表
         </el-menu-item>
        <el-menu-item>
             评论管理
         </el-menu-item>
         <el-menu-item>
             素材管理
         </el-menu-item>
      </el-submenu>
       <el-submenu>
          <!-- el-submenu定义具名插槽 title -->
          <template slot='title'>
            <i class="el-icon-s-custom"></i>
            <span>粉丝管理</span>
          </template>
         <el-menu-item>
             图文数据
         </el-menu-item>
         <el-menu-item>
             粉丝概况
         </el-menu-item>
        <el-menu-item>
             粉丝列表
         </el-menu-item>
         <el-menu-item>
             粉丝画像
         </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
   .layout-aside {
       width: 200px;
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
