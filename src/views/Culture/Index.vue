<template>
  <div class="Culture_">
    <main class="content">
      <div class="crumbs">当前所在页面：首页>健康文化>{{navList[$route.params.id].name}}</div>
      <div class="New_wrap">
        <div class="nav_left">
          <div class=" wrap_left">
            <div class="navHeader">
              <img src="../../assets/images/about/u644.png" alt="">
              <div class="card_">
                <p>健康文化</p>
                <span>CULTURE</span>
              </div>
            </div>
            <div class="navList active">
              <div :class="index == $route.params.id ? 'item_nav active' :  'item_nav' " @click="handleNavTag(index)" v-for="(item,index) in navList" :key="index">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div  class="content_right">
          <!--理论研究-->
          <section class="yj_culture" v-show="$route.params.id == 0 || $route.params.id == undefined ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <img class="bg_img" src="../../assets/images/culture/u1201.png" alt="">
            <div class="content_wrap">
              <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
              <p>北京健康文化促进会9月8日宣布成立，促进会将为推进北京健康文化建设提供服务，
                搭建北京健康文化活动平台，开展项目交流与合作，为首都的健康文化发展提供智库服务。
                北京健康文化促进会由市卫健委和市民政局批准成立，是由北京地区医疗卫生、宣传教育、
                文化艺术传媒等行业的工作者以及企（事）业单位自愿联合发起成立的非营利性社会团体</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "news",
    components:{
    },
    data() {
      return {
        navList:[
          {
            name:'理论研究'
          },
          {
            name:'科普宣传'
          },
          {
            name:'学术交流'
          },
          {
            name:'会议服务'
          },
          {
            name:'咨询服务'
          },
          {
            name:'专业培训'
          },
        ],
        active: 0,
        switchId:1,
      }
    },
    methods: {
      handleNavTag(index) {
        this.$router.push({path: `/culture/${index}`})
      },
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
  @import "../../css/Culture.styl";
</style>


