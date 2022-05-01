<template>
  <div class="Home">
    <main>
      <!--轮播公告区-->
      <section class="focus">
        <!--轮播-->
        <div id="bigOne_swiper" class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/images/home/1000.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/home/1000.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/home/1000.jpg" alt="">
            </div>
          </div>
        </div>
        <!--公告-->
        <div class="bulletin">
          <div class="bulletin_title">
            <div class="title">
              <div class="txt">新闻公告</div>
              <div class="btn_right" @click="$router.push({ path:'/'})">MORE >>></div>
            </div>
          </div>
          <div class="bulletin_content">
            <ul class="bulletin_list">
              <li class="item">
                <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
                <time class="time">2022-2-1</time>
              </li>
              <li class="item">
                <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
                <time class="time">2022-2-1</time>
              </li>
              <li class="item">
                <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
                <time class="time">2022-2-1</time>
              </li>
              <li class="item">
                <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
                <time class="time">2022-2-1</time>
              </li>
              <li class="item">
                <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
                <time class="time">2022-2-1</time>
              </li>
              <li class="item">
                <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
                <time class="time">2022-2-1</time>
              </li>
              <li class="item">
                <div class="title">北京健康文化促进会成立并召开第一次会员大会</div>
                <time class="time">2022-2-1</time>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!--关于我们-->
      <section class="about">
        <div class="about_title">
          <div class="title">
            <div>关于我们</div>
            <span>ABOUT  US</span>
          </div>
          <div class="divider">
            <div class="mask"></div>
            <div class="advantage"></div>
            <div class="btn_right" @click="$router.push({ path:'/'})">MORE>>>></div>
          </div>
        </div>
        <p style="cursor: pointer;" class="home_text" @click="$router.push({ path:'/'})">北京健康文化促进会由市卫健委和市民政局批准成立，是由北京地区医疗卫生、宣传教育、文化艺术传媒等行业的工作者以及企（事）业单位自愿联合发起成立的非营利性社会团体。促进会立足于北京，秉持“政府主导，多部门合作，专业指导，社会广泛参与”的工作方针，坚持公共价值和公益责任，致力于向社会和人民提供优质健康文化服务，推动首都健康文化事业的发展。</p>
        <div class="about_content">
          <div class="left_wrap">
            <div class="mask"></div>
            <div class="name">发起人</div>
            <div class="mask"></div>
          </div>
          <!--轮播-->
          <div class="right_sw">
            <div id="fameDoctor_swiper" class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item_s,index) in num" :key="index">
                  <div class="swiper_listBox"  v-for="(item,indexs) in doctorData " :key="item.doctorId"  v-if="indexs>=index*4 && indexs <(index+1)*4">
                    <!--上-->
                    <div class="slide_top">
                      <img :src="item.headImage" alt="">
                    </div>
                    <div class="name">哈哈哈哈哈</div>
                    <div class="person_title">
                      <p>北京协和医院原党委书记、副院长</p>
                      <p>国务院政府特殊津贴专家</p>
                      <p>北京医师协会原会长</p>
                      <p>中国医师协会副会长</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--健康文化-->
      <section class="culture">
        <div class="culture_title">
          <div class="title">
            <div>健康文化</div>
            <span>CULTURE</span>
          </div>
          <div class="divider">
            <div class="mask"></div>
            <div class="advantage"></div>
            <div class="btn_right" @click="$router.push({ path:'/'})">MORE>>>></div>
          </div>
        </div>
        <div class="service_list">
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/ylfw.png" alt="">
            <div class="item_content">
              <div class="title">探索</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>探索健康文化的</span>
                <span>理论及实践</span>
              </div>
            </div>
          </div>
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/jkbz.png" alt="">
            <div class="item_content">
              <div class="title">建设</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>为推进北京健康文化</span>
                <span>建设提供服务</span>
              </div>
            </div>
          </div>
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/jkkp.png" alt="">
            <div class="item_content">
              <div class="title">合作</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>搭建北京健康文化活动平台</span>
                <span>开展项目交流与合作</span>
                <span>为首都的健康文化发展提供智库服务</span>
              </div>
            </div>
          </div>
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/u45.jpg" alt="">
            <div class="item_content">
              <div class="title">活动</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>开展学术交流、科普宣传</span>
                <span>健康管理、技能培训</span>
                <span>咨询服务等活动</span>
              </div>
            </div>
          </div>
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/yxzx.png" alt="">
            <div class="item_content">
              <div class="title">发展</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>融汇健康文化资源</span>
                <span>促进健康产业发展</span>
              </div>
            </div>
          </div>
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/qyjk.png" alt="">
            <div class="item_content">
              <div class="title">传承</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>传承并创新中医药文化</span>
              </div>
            </div>
          </div>
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/u55.png" alt="">
            <div class="item_content">
              <div class="title">交流</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>开展国内外健康文化交流</span>
              </div>
            </div>
          </div>
          <div @click="$router.push({ path:'/'})" class="service_item">
            <img src="../assets/images/home/u52.png" alt="">
            <div class="item_content">
              <div class="title">其他</div>
              <div class="mark">
                <div></div>
              </div>
              <div class="text">
                <span>完成政府部门交办的任务及</span>
                <span>其它事项</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <!--组织建设-->
      <section class="organization">
        <div class="organization_title">
          <div class="title">
            <div>组织建设</div>
            <span>ORGANIZATION</span>
          </div>
          <div class="divider">
            <div class="mask"></div>
            <div class="advantage"></div>
            <div class="btn_right" @click="$router.push({ path:'/'})">MORE>>>></div>
          </div>
        </div>
        <!--轮播-->
        <div class="organization_sw">
          <div id="organization_swiper" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item_s,index) in num" :key="index">
                <div class="swiper_listBox"  v-for="(item,indexs) in doctorData " :key="item.doctorId"  v-if="indexs>=index*4 && indexs <(index+1)*4">
                  <!--上-->
                  <div class="slide_top">
                    <img :src="item.headImage" alt="">
                  </div>
                  <div class="name">哈哈哈哈哈</div>
                  <div class="person_title">
                    这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--插图-->
      <section class="aside_wrap">
        <div class="aside_left">
          <img src="../assets/images/home/logo2.png" alt="">
        </div>
        <div class="aside_right">
          <div class="mask_wrap">
            北京健康文化促进会秉持“政府主导，多部门合作，专业指导，
            社会广泛参与”的工作方针，坚持公共价值和公益责任，
            致力于向社会和人民提供优质健康文化服务，推动首都健康文化事业的发展</div>
        </div>
      </section>
      <!--分支机构-->
      <section class="branch">
        <div class="branch_title">
          <div class="title">
            <div>分支机构</div>
            <span>BRANCH</span>
          </div>
          <div class="divider">
            <div class="mask"></div>
            <div class="advantage"></div>
            <div class="btn_right" @click="$router.push({ path:'/'})">MORE>>>></div>
          </div>
        </div>
        <!--轮播-->
        <div class="branch_sw">
          <div id="branch_swiper" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item_s,index) in num" :key="index">
                <div class="swiper_listBox"  v-for="(item,indexs) in doctorData " :key="item.doctorId"  v-if="indexs>=index*3 && indexs <(index+1)*3">
                  <!--上-->
                  <div class="slide_top">
                    <img :src="item.headImage" alt="">
                  </div>
                  <div class="name">哈哈哈哈哈</div>
                  <div class="person_title">
                    这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分会简介这里是分
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" style="color: #007dbd;"></div>
          <div class="swiper-button-next" style="color: #007dbd;"></div>
        </div>
      </section>
    </main>


    <div style="width: 1px;height: 600px;"></div>
  </div>
</template>

<script>
   import Swiper from 'swiper'
   import { Button,Calendar ,Input } from 'element-ui';
  export default {
    name: "Home",
    components:{
      Button,
      Calendar,
      Input,
    },
    data() {
      return {
        num:[],
        doctorData:[],
      }
    },
    methods:{
      // 初始化头部轮播
      _initSwiper() {
        let mySwiper = new Swiper('#bigOne_swiper', {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop : true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //用户操作后, autoplay会默认停止, 这个是取消禁止autoplay
          autoplayDisableOnInteraction: false,
        })
      },
      // 关于我们轮播
      _initFameAboutSwiper() {
        let mySwiper = new Swiper('#fameDoctor_swiper', {
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop : true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          //用户操作后, autoplay会默认停止, 这个是取消禁止autoplay
          autoplayDisableOnInteraction: false,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
        })
      },
      // 组织建设轮播
      _initOrganizationSwiper() {
        let mySwiper = new Swiper('#organization_swiper', {
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop : true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          //用户操作后, autoplay会默认停止, 这个是取消禁止autoplay
          autoplayDisableOnInteraction: false,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
        })
      },
      _initBranchSwiper() {
        let mySwiper = new Swiper('#branch_swiper', {
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop : true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          //用户操作后, autoplay会默认停止, 这个是取消禁止autoplay
          autoplayDisableOnInteraction: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
        })
      },
      getDoctorList() {
        let params = {
          page:1,
          size:10,
        }
        this.$api.home.findDoctorTree(params) .then(res => {
          if(res.code == '000000') {
            this.doctorData = res.infos.list
            this.num = Math.ceil(res.infos.list.length/5)
            this.$nextTick(() => {
              this._initFameAboutSwiper()
              this._initOrganizationSwiper()
              this._initBranchSwiper()
            })
          }
        })
      },
    },
    mounted() {
      this._initSwiper()
      this.getDoctorList()
    },
  }
</script>
<style lang="stylus" scoped>
  @import "../css/Home.styl"
</style>


