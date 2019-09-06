<template>
  <el-card>
      <bread-crumb slot='header'>
       <template slot="title">发布文章</template>
      </bread-crumb>
      <!-- 表单 model 数据对象  rules 绑定规则 -->
      <el-form ref="publishForm" :model="formData" :rules="publishRules" style='margin-left:100px' label-width="100px">
          <el-form-item prop="title" label="标题">
              <el-input v-model="formData.title" style='width:400px'></el-input>
          </el-form-item>
          <el-form-item prop="content" label="内容">
              <quill-editor  v-model="formData.content" style='height:400px;width:800px' ></quill-editor>
          </el-form-item>
          <el-form-item label="封面" style="margin-top:120px">
              <el-radio-group v-model="formData.cover.type">
                  <el-radio :label="1">单图</el-radio>
                  <el-radio :label="3">三图</el-radio>
                  <el-radio :label="0">无图</el-radio>
                  <el-radio :label="-1">自动</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item prop="channel_id" label="频道">
              <el-select  v-model="formData.channel_id">
                  <!-- label(显示值)  value(真实值) -->
                <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item>
              <el-button @click="publish(false)" type='primary'>发表文章</el-button>
              <el-button @click="publish(true)">存入草稿</el-button>
          </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        title: '',
        content: '',
        cover: {
          // 封面类型 -1:自动，0-无图，1-1张，3-3张
          type: 0,
          images: []
        },
        channel_id: null
      },
      publishRules: {
        title: [{
          required: true,
          message: '标题不能为空'
        }],
        content: [{
          required: true,
          message: '内容不能为空'
        }],
        channel_id: [{
          required: true,
          message: '频道不能为空'
        }]
      }
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    //  发布文章
    publish (draft) {
      this.$refs.publishForm.validate((isOK) => {
        if (isOK) {
          // 只有校验成功了 才去管是新增还是修改
          let { articleId } = this.$route.params // 获取id
          this.$axios({
            url: articleId ? `/articles/${articleId}` : '/articles',
            method: articleId ? 'put' : 'post',
            params: { draft }, // draft 为true时 就是草稿
            data: this.formData
          }).then(() => {
            //   编程式导航
            this.$router.push('/home/articles') // 跳转到文章列表页面
          })
        }
      })
    },
    // 通过id获取文章详情
    getArticleById (articleId) {
      this.$axios({
        url: `/articles/${articleId}`
      }).then(result => {
        this.formData = result.data
      })
    }
  },
  created () {
    this.getChannels() // 获取频道
    let { articleId } = this.$route.params // 获取id
    if (articleId) {
      // 如果存在 说明是修改文章 通过id 获取当前的文章数据
      this.getArticleById(articleId)
    }
  }
}
</script>

<style>

</style>
