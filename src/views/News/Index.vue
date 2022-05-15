<template>
  <div class="New_">
    <main class="content">
      <div class="crumbs">当前所在页面：首页>{{navList[$route.params.id].name}}</div>
      <div class="New_wrap">
        <div class="nav_left">
          <div class=" wrap_left">
            <div class="navHeader">
              <img src="../../assets/images/about/u644.png" alt="">
              <div class="card_">
                <p>新闻中心</p>
                <span>NEWS</span>
              </div>
            </div>
            <div class="navList active">
              <div :class="index == $route.params.id ? 'item_nav active' :  'item_nav' " @click="handleNavTag(index)" v-for="(item,index) in navList" :key="index">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div  class="content_right">
          <!--促进会新闻-->
          <section class="cjh_news" v-show="$route.params.id == 0 || $route.params.id == undefined ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="content_right">
              <div class="news_header" v-if="newsData.length">
                <img :src="newsData[0].picture" alt="">
                <div class="header_text">
                  <div class="title" @click="handleShow(newsData[0].id)">{{newsData[0].title}}</div>
                  <p>{{newsData[0].artical}}</p>
                  <div class="list">
                    <div class="item_text" v-for="(item,index) in newsData" :key="item.id">
                      <div v-if="index>0&&index<4">
                        <div @click="handleShow(item.id)">{{item.title}}</div>
                        <p>{{item.uploadTime}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="news_pagination">
                <div class="text_list">
                  <div class="item_text" v-for="item in newsData" :key="item.id">
                    <div @click="handleShow(item.id)">{{item.title}}</div>
                    <p>{{item.uploadTime}}</p>
                  </div>
                </div>
                <div style="padding-top: 20px">
                  <Pagination  :total = total v-model="dataForm.page" @jumpPage =handleJumpPage />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Pagination from '../../components/pagination/index'
  export default {
    name: "news",
    components:{
      Pagination,
    },
    data() {
      return {
        navList:[
          {
            name:'促进会新闻'
          },
          // {
          //   name:'媒体报道'
          // },
          // {
          //   name:'项目动态'
          // },
          // {
          //   name:'最新公告'
          // },
          // {
          //   name:'对外交流'
          // },
        ],
        active: 0,
        flagScroll: false,
        switchId:1,
        total:1,
        dataForm:{
          page:1,
          size:14
        },
        newsData:[],
        TopData:[],
      }
    },
    methods: {
      handleNavTag(index) {
        this.$router.push({path: `/news/${index}`})
      },
      // 协会简介切换
      handleSwitch(index) {
        this.switchId = index
      },
      handleJumpPage(e){
        this.dataForm.page = e
        this.getNewList()
      },
      handleShow(e) {
        this.$router.push({ path:`/news/show/${e}`})
      },
      // 获取新闻内容
      getNewList() {
        let params = Object.assign({},this.dataForm)
        this.$api.home.findListContents(params) .then(res => {
          if(res.code != '000000') {
            this.$message.error(res.message)
            return
          }
          this.newsData = res.infos.list
          this.total =Math.ceil(res.infos.total/this.dataForm.size)
        })
      },
    },
    computed:{
      top() {
        return this.newsData[0]
      },
    },
    mounted() {

    },
    activated() {
      this.getNewList()
    },
    deactivated() {
    },
    // 调用当前组件时调用
    beforeRouteUpdate(to, from, next) {
      next()
    }

  }
</script>
<style lang="stylus" scoped>
  @import "../../css/New.styl";
</style>


