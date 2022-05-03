<template>
  <div class="Branch_">
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
          <!--会员-->
          <section class="vip_Branch" v-show="$route.params.id == 0 | $route.params.id == undefined">
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
            name:'各专业委员会'
          }
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
        this.$router.push({path: `/branch/${index}`})
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
  @import "../../css/Branch.styl";
</style>


