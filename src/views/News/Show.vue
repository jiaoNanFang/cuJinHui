<template>
  <div class="content_show">
    <div class="Show_title">
      <div class="header">慈诚医疗与德州市第七人民医院举行战略合作签约仪式</div>
      <img src="../../assets/images/news/u1099.png" alt="">
      <div class="wrap">
        <p>北京健康文化促进会9月8日宣布成立，促进会将为推进北京健康文化建设提供服务，搭建北京健康文化活动平台，开展项目交流与合作，为首都的健康文化发展提供智库服务。</p>
        <p>北京健康文化促进会由市卫健委和市民政局批准成立，是由北京地区医疗卫生、宣传教育、文化艺术传媒等行业的工作者以及企（事）业单位自愿联合发起成立的非营利性社会团体。促进会立足于北京，秉持“政府主导，多部门合作，专业指导，社会广泛参与”的工作方针，坚持公共价值和公益责任，致力于向社会和人民提供优质健康文化服务，推动首都健康文化事业的发展。</p>
        <p>大会选举了会长、常务副会长、秘书长、监事长。新当选的会长刘娜表示，今后，促进会将探索健康文化的理论和实践；为推进北京健康文化建设提供服务，搭建北京健康文化活动平台，开展项目交流与合作，为首都的健康文化发展提供智库服务；开展学术交流、科普宣传、健康管理、技能培训、咨询服务等活动；融汇健康文化资源，促进健康产业发展；传承并创新中医文化；开展国内外健康文化交流等。</p>
        <p>市卫健委一级巡视员高小俊表示，市卫健委作为北京健康文化促进会的业务管理部门，希望促进会在健康中国战略和健康北京工作引领下，以健康文化的发展与繁荣为前提，构建首都特点的健康文化，为北京全国文化中心建设注入鲜活的精神文化内涵，为高起点推进健康北京建设与发展形成有力支撑。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsShow",
    data() {
      return {

      }
    },
    methods:{

    },
    mounted() {
      console.log(this.$route.params.ids);
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
        font-size: 16px;
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
      .wrap{
        margin-bottom 80px
        >p{
          font-size: 14px;
          color: #999999;
          line-height: 24px;
          text-indent 2em
          margin-bottom 10px
        }
      }

    }
  }
</style>


