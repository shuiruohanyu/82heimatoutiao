<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容管理</template>
    </bread-crumb>
    <!-- 搜索工具栏 -->
    <el-form style="margin-left:40px">
      <el-form-item label='文章状态:'>
          <el-radio-group>
              <el-radio>全部</el-radio>
              <el-radio>草稿</el-radio>
              <el-radio>待审核</el-radio>
              <el-radio>审核通过</el-radio>
              <el-radio>审核失败</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
          <el-select></el-select>
      </el-form-item>
      <el-form-item label="时间选择:">
          <el-date-picker
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
           end-placeholder="结束日期">
         </el-date-picker>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {}
</script>

<style>
</style>
