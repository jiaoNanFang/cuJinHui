<template>
  <div class="navWarp">
    <nav>
      <div :class="$route.meta.id === item.meta? 'active nav_item':'nav_item'" v-for="(item,index) in navList" :key="index" @click.stop="handleClick(index,item.url)">
        <div class="item_title">{{item.name}}</div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data() {
      return {
        navList:[
          {
            name:'网站首页',
            meta:1000,
            url:'/',
          },
          {
            name:'关于我们',
            meta:1001,
            url:'/about',
          },
          {
            name:'新闻中心',
            meta:1002,
            url:'/news',
          },
          {
            name:'健康文化',
            meta:1003,
            url:'/culture',
          },
          {
            name:'组织建设',
            meta:'About',
            url:'/about',
          },
          {
            name:'分支机构',
            meta:'About',
            url:'/about',
          },
        ],
        active:0,
      }
    },
    methods:{
      // 切换nav
      handleClick(e,url){
        if(url == '/'){
          this.$router.push({ path:url})
          return
        }
        this.$router.push({ path:url+'/0'})
      }
    },
    mounted() {

    },
  }
</script>
<style lang="stylus" scoped>
  .navWarp{
    width: 100%;
    height: 50px;
    background: #007dbd;
    >nav{
      width: 1200px
      height: 50px
      box-sizing border-box
      /*background: deepskyblue*/
      margin 0 auto
      display flex
      justify-content space-between
      align-items center
      .nav_item{
        display flex
        cursor: pointer
        height: 50px
        width: 150px
        justify-content center
        align-items center
        box-sizing border-box
        position relative
        &.active{
          .item_title{
            &::after{
              display block
            }
          }
        }
        .item_title{
          color: #FFFFFF
          font-size 18px
          font-weight 700
          width 100%
          height: 50px
          display flex
          justify-content center
          align-items center
          position relative
          z-index 10
          &::after{
            display none
            content ''
            width: 74px
            height: 4px
            background: #fff
            position absolute
            bottom:0
            left:50%
            transform translateX(-50%)
          }
        }
      }
    }
  }
</style>


