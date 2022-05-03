<template>
  <div class="Organization_">
    <main class="content">
      <div class="crumbs">当前所在页面：首页>组织建设>{{navList[$route.params.id].name}}</div>
      <div class="New_wrap">
        <div class="nav_left">
          <div class=" wrap_left">
            <div class="navHeader">
              <img src="../../assets/images/about/u644.png" alt="">
              <div class="card_">
                <p>组织建设</p>
                <span>ORGANIZATION</span>
              </div>
            </div>
            <div class="navList active">
              <div :class="index == $route.params.id ? 'item_nav active' :  'item_nav' " @click="handleNavTag(index)" v-for="(item,index) in navList" :key="index">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div  class="content_right">
          <!--理论研究-->
          <section class="yj_organization_" v-show="$route.params.id == 0 || $route.params.id == undefined ">
            <div class="yj_content">
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
            </div>
            <div style="padding-top: 40px">
              <Pagination  :total = total v-model="dataForm.page" @jumpPage =handleJumpPage />
            </div>
          </section>
          <!--会员-->
          <section class="vip_organization_" v-show="$route.params.id == 1">
            <div class="vip_content">
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
              <div class="vip_item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍这里是会员单位的相关介绍
                </div>
              </div>
            </div>
            <div style="padding-top: 40px">
              <Pagination  :total = total v-model="dataForm.page" @jumpPage =handleJumpPage />
            </div>
          </section>
          <!--专家-->
          <section class="zj_organization_" v-show="$route.params.id == 2">
            <div class="yj_content">
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/images/about/doctor.png" alt="">
                <div class="name">张三三</div>
                <div class="title">
                  <div>北京协和医院原党委书记、副院长</div>
                  <div>国务院政府特殊津贴专家</div>
                  <div>北京医师协会原会长</div>
                  <div>中国医师协会副会长</div>
                </div>
              </div>
            </div>
            <div style="padding-top: 40px">
              <Pagination  :total = total v-model="dataForm.page" @jumpPage =handleJumpPage />
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
            name:'个人会员'
          },
          {
            name:'单位会员'
          },
          {
            name:'智库专家'
          },
        ],
        active: 0,
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
        this.$router.push({path: `/organization/${index}`})
      },
      handleJumpPage(e){
        console.log(e);
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
  @import "../../css/Organization.styl";
</style>


