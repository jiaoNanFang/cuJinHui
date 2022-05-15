<template>
  <div class="About_">
    <main class="content">
      <div class="crumbs">当前所在页面：首页>关于慈诚>{{navList[$route.params.id].name}}</div>
      <div class="About_wrap">
        <div class="nav_left">
          <div class=" wrap_left">
            <div class="navHeader">
              <img src="../../assets/images/about/u644.png" alt="">
              <div class="card_">
                <p>关于协会</p>
                <span>ABOUT  CICHENG</span>
              </div>
            </div>
            <div class="navList active">
              <div :class="index == $route.params.id ? 'item_nav active' :  'item_nav' " @click="handleNavTag(index)" v-for="(item,index) in navList" :key="index">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="content_right">
          <!--协会简介-->
          <section class="cz_about" v-show="$route.params.id == 0 || $route.params.id == undefined ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="navList">
              <div :class="switchId === 1? 'item active' : 'item' " @click="handleSwitch(1)">logo介绍</div>
              <div :class="switchId === 2? 'item active' : 'item' " @click="handleSwitch(2)" >促进会章程</div>
              <div :class="switchId === 3? 'item active' : 'item' " @click="handleSwitch(3)">促进会宗旨</div>
              <div :class="switchId === 4? 'item active' : 'item' " @click="handleSwitch(4)">业务范围</div>
            </div>
            <img style="width: 350px; display: block; margin: 20px auto" src="../../assets/images/home/empty.png" alt="">
          </section>
          <!--组织机构-->
          <section class="zz_about" v-show="$route.params.id == 1 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <img src="../../assets/images/about/u443.png" alt="">
          </section>
          <!--领导题词-->
          <section class="zz_about" v-show="$route.params.id == 2 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <img src="../../assets/images/about/u527.jpg" alt="">
          </section>
          <!--发起人-->
          <section class="fq_about" v-show="$route.params.id == 3 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="person_wrap">
              <div class="item" v-for="item in sponsorData" :key="item.id">
                <img :src="item.profilePhoto" alt="">
                <div class="name">{{item.name}}</div>
                <div class="title">
                  <span>{{item.occupationName}}</span>
                </div>
              </div>
            </div>
          </section>
          <!--理事会-->
          <section class="ls_about" v-show="$route.params.id == 4 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="person_wrap">
              <div class="item" v-for="item in liShiData" :key="item.id">
                <img :src="item.profilePhoto" alt="">
                <div class="name">{{item.name}}</div>
                <div class="title">
                  <span>{{item.occupationName}}</span>
                </div>
              </div>
            </div>
          </section>
          <!--监事会-->
          <section class="js_about" v-show="$route.params.id == 5 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="person_wrap">
              <div class="item"  v-for="item in jianShiData" :key="item.id">
                <img :src="item.profilePhoto" alt="">
                <div class="name">{{item.name}}</div>
                <div class="title">
                  <span>{{item.occupationName}}</span>
                </div>
              </div>
            </div>
          </section>
          <!--资质证书-->
          <section class="zs_about" v-show="$route.params.id == 6 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <img style="width: 350px; display: block; margin: 0 auto" src="../../assets/images/home/empty.png" alt="">
            <div class="person_wrap" v-if="0">
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        navList: [
          {
            name: '协会简介'
          },
          {
            name: '组织机构'
          },
          {
            name: '领导题词'
          },
          {
            name: '发起人'
          },
          {
            name: '理事会'
          },
          {
            name: '监事会'
          },
          {
            name: '资质证书'
          }
        ],
        active: 0,
        flagScroll: false,
        switchId:1,
        sponsorData:[],
        liShiData:[],
        jianShiData:[],
      }
    },
    methods: {
      handleNavTag(index) {
        this.$router.push({path: `/about/${index}`})
      },
      // 协会简介切换
      handleSwitch(index) {
        this.switchId = index
      },
      // 获取发起人
      getPersonList() {
        let params = {
          page:1,
          size:9,
          functionalId:1
        }
        this.$api.home.findListPerson(params) .then(res => {
          if(res.code != '000000') {
            this.$message.error(res.message)
            return
          }
          this.sponsorData = res.infos.list
        })
      },
      // 获取理事会
      getLiShiList() {
        let params = {
          page:1,
          size:9,
          functionalId:2
        }
        this.$api.home.findListPerson(params) .then(res => {
          if(res.code != '000000') {
            this.$message.error(res.message)
            return
          }
          this.liShiData = res.infos.list
        })
      },
      // 获取监事会
      getJianShiList() {
        let params = {
          page:1,
          size:9,
          functionalId:3
        }
        this.$api.home.findListPerson(params) .then(res => {
          if(res.code != '000000') {
            this.$message.error(res.message)
            return
          }
          this.jianShiData = res.infos.list
        })
      },
    },
    mounted() {

    },
    activated() {
      this.getPersonList()
      this.getLiShiList()
      this.getJianShiList()
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
  @import "../../css/About.styl";
</style>


