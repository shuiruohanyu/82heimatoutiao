<template>
<!-- 最外层 用el-card卡片做页面 -->
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumb slot='header'>
     <!-- 面包屑的具名插槽 -->
      <template slot='title'>评论列表</template>
    </bread-crumb>
    <!-- 表格 需要数据 :data-->
    <el-table :data="list">
      <el-table-column width="700" label="标题" prop='name'></el-table-column>
      <el-table-column label="评论状态" prop='name'></el-table-column>
      <el-table-column label="总评论数" prop='name'></el-table-column>
      <el-table-column label="粉丝评论数" prop='name'></el-table-column>
      <el-table-column label="操作" prop='name'></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style>

</style>
