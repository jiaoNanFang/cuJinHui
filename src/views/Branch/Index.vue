<template>
  <div class="Branch_">
    <main class="content">
      <div class="crumbs">当前所在页面：首页>分支机构>{{navList[$route.params.id].name}}</div>
      <div class="New_wrap">
        <div class="nav_left">
          <div class=" wrap_left">
            <div class="navHeader">
              <img src="../../assets/images/about/u644.png" alt="">
              <div class="card_">
                <p>分支机构</p>
                <span>BRANCH</span>
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
              <div class="vip_item" v-for="item in InstitutionData" :key="item.id">
                <img :src="item.institutionImg" alt="">
                <div class="name">{{item.institutionName}}</div>
                <div class="title">
                  {{item.institutionIntroduce}}
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
          size:9
        },
        InstitutionData:[],
      }
    },
    methods: {
      handleNavTag(index) {
        this.$router.push({path: `/branch/${index}`})
      },
      handleJumpPage(e){
        this.dataForm.page = e
        this.getInstitution()
      },
      // 获取机构
      getInstitution() {
        let params = Object.assign({},this.dataForm)
        this.$api.home.findInstitution(params) .then(res => {
          if(res.code != '000000') {
            this.$message.error(res.message)
            return
          }
          this.InstitutionData = res.infos.list
          this.total =Math.ceil(res.infos.total/this.dataForm.size)

        })
      },
    },
    mounted() {

    },
    activated() {
      this.getInstitution()
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


