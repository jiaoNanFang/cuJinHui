<template>
  <div class="content_show">
    <div class="Show_title">
      <div class="header">{{newsData.title}}</div>
      <img v-if="newsData.type != 1" v src="../../assets/images/news/u1099.png" alt="">
      <!--video-->
      <div class="video_wrap" v-else>
        <Video class="video_p" :videoUrl=newsData.video :videoPoster="newsData.picture"></Video>
      </div>
      <div class="wrap">
        <p>{{newsData.artical}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Video from '../../components/video/index'
  export default {
    name: "NewsShow",
    components:{
      Video
    },
    data() {
      return {
        newsData:{},
      }
    },
    methods:{
      // 获取新闻内容
      getNewList(id) {
        let params = {
          contentId:id
        }
        this.$api.home.findContentInfo(params) .then(res => {
          if(res.code != '000000') {
            this.$message.error(res.message)
            return
          }
          this.newsData = res.infos
        })
      },
    },
    activated() {
      this.getNewList(this.$route.params.ids)
    }
  }
</script>
<style lang="stylus" scoped>
  .content_show{
    width: 1200px
    margin 40px auto
    .Show_title{
      .header{
        font-weight: 700;
        font-style: normal;
        font-size: 24px;
        color: #005CA1;
        line-height: 24px;
        text-align: center
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer
      }
      >img{
        width: 478px;
        height: 270px;
        display block
        margin 20px auto
      }
      .video_wrap{
        margin  20px 0 80px 0
        .video_p{
          width: 814px;
          height: 425px;
        }
      }
      .wrap{
        margin-bottom 80px
        >p{
          font-size: 16px;
          color: #999999;
          line-height: 24px;
          text-indent 2em
          margin-bottom 10px
        }
      }

    }
  }
</style>


