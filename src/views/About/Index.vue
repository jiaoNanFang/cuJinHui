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
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
            </div>
          </section>
          <!--理事会-->
          <section class="ls_about" v-show="$route.params.id == 4 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="person_wrap">
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
            </div>
          </section>
          <!--监事会-->
          <section class="js_about" v-show="$route.params.id == 5 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="person_wrap">
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <span>北京协和医院原党委书记、副院长</span>
                  <span>国务院政府特殊津贴专家</span>
                  <span>北京医师协会原会长</span>
                  <span>中国医师协会副会长</span>
                </div>
              </div>
            </div>
          </section>
          <!--资质证书-->
          <section class="zs_about" v-show="$route.params.id == 6 ">
            <div style="width: 100%;height: 1px;background: #BCBCBC; margin-bottom: 30px"></div>
            <div class="person_wrap">
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
        switchId:1
      }
    },
    methods: {
      handleNavTag(index) {
        this.$router.push({path: `/about/${index}`})
      },
      // 协会简介切换
      handleSwitch(index) {
        this.switchId = index
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
  @import "../../css/About.styl";
</style>


