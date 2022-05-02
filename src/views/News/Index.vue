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
              <div class="news_header">
                <img src="../../assets/images/news/u977.png" alt="">
                <div class="header_text">
                  <div class="title" @click="handleShow(5)">北京健康文化促进会成立并召开第一次会员大会</div>
                  <p>北京健康文化促进会9月8日宣布成立，促进会将为推进北京健康文化建设提供服务，搭建北京健康文化活动平台，
                    开展项目交流与合作，为首都的健康文化发展提供智库服务。北京健康文化促进会由市卫健委和市民政局批准成立，
                    是由北京地区医疗卫生、宣传教育、文化艺术传媒等行业的工作者以及企（事）业单位自愿联合发起成立的非营利性社会团体。………… </p>
                  <div class="list">
                    <div class="item_text">
                      <div @click="handleShow(5)">慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                      <p>2021-5-1</p>
                    </div>
                    <div class="item_text">
                      <div @click="handleShow(5)">慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                      <p>2021-5-1</p>
                    </div>
                    <div class="item_text">
                      <div @click="handleShow(5)">慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                      <p>2021-5-1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="news_pagination">
                <div class="text_list">
                  <div class="item_text">
                    <div @click="handleShow(5)">• 慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div @click="handleShow(5)">慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div @click="handleShow(5)">慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div @click="handleShow(5)">慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div>慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div>慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div>慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div>慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div>慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div>慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
                  </div>
                  <div class="item_text">
                    <div>慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
                    <p>2021-5-1</p>
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
          {
            name:'媒体报道'
          },
          {
            name:'项目动态'
          },
          {
            name:'最新公告'
          },
          {
            name:'对外交流'
          },
        ],
        active: 0,
        flagScroll: false,
        switchId:1,
        total:1,
        dataForm:{
          page:1,
          size:10
        }
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
        console.log(e);
      },
      handleShow(e) {
        this.$router.push({ path:`/news/show/${e}`})
      }
    },
    mounted() {

    },
    activated() {
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


