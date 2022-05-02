<template>
  <div class="Footer">
    <footer>
      <div class="footer_nav">
        <div class="nav_wrap">
          <div class="left_f">
            <div class="header_name">友情链接</div>
            <div class="footer_content">
              <div class="left">
                <div class="link_box">
                  <div>北京医师协会</div>
                  <div>北京慈诚医疗</div>
                </div>
                <img src="../../assets/images/header/logo1.png" alt="">
              </div>
            </div>
          </div>
          <div class="cen">
            <div class="item_nav" >
              <div class="item_title">联系我们</div>
              <div class="right_phone">
                <div class="phone_wrap">
                  <div class="phone_item">
                    <img src="../../assets/images/footer/phone.png" alt="">
                    <p>联系电话：400-666-1200（010-84351761）</p>
                  </div>
                  <div class="phone_item">
                    <img src="../../assets/images/footer/cz.png" alt="">
                    <p>传真地址：010-84351752</p>
                  </div>
                  <div class="phone_item">
                    <img src="../../assets/images/footer/wz.png" alt="">
                    <p>公司地址：北京市朝阳区世奥国际中心A座25层</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right_f">
            <div class="title">关注我们</div>
            <img src="../../assets/images/footer/gongzhonghao.jpeg" alt="">
          </div>
        </div>
        <div class="footer_zs">
          <p>Copyright © 2016 - 2022 北京健康文化促进会  All Rights Reserved.  京ICP备13019105号-1 京卫网审[2013]第0169号      DESIGN BY FENGYUN</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
      }
    },
    methods:{
      // 切换nav
      handleClick(e,url){
        if(url == '/'){
          this.$router.push({ path:url})
          return
        }
        this.$router.push({ path:url+'/0'+'/'+1})
        window.scrollTo(0,0);
      },
      handlePushRouter(row,index){
        this.$router.push({ path:row.router+'/'+index+'/'+2})
      }
    },
  }
</script>
<style lang="stylus" scoped>
  .Footer{
    >footer{
      width: 100%
      background: rgba(83, 153, 213, 0.0980392156862745);
      padding-top 30px
      padding-bottom 10px
      .footer_nav{
        .nav_wrap{
          width: 1200px
          margin 0 auto
          display flex
          justify-content space-between
          .left_f{
            .header_name{
              font-weight: 700;
              font-style: normal;
              font-size: 16px;
              color: #333
            }

            .footer_content{
              padding-top 10px
              margin-top 30px
              display flex
              justify-content space-between
              .left{
                .link_box{
                  display flex
                  padding-left 20px
                  >div{
                    font-size: 16px
                    font-weight:700
                    color: #007DBD
                    margin-right 20px
                    cursor: pointer
                  }
                }
                >img{
                  width: 320px
                  height: 84px
                  margin-top 30px
                }
              }
            }
          }
          .cen{
            .item_nav{
              .item_title{
                cursor: pointer
                font-weight: 700;
                font-style: normal;
                font-size: 16px;
                color: #333
                cursor: pointer
              }
              .child_list{
                margin-top 20px
                >div{
                  font-size: 14px;
                  color: #333
                  margin-bottom 20px
                  text-align: center
                  cursor: pointer

                }
              }
              .right_phone{
                position relative
                .phone_wrap{
                  margin-top 30px
                  .phone_item{
                    margin-bottom 20px
                    display flex
                    align-items flex-end
                    >img{
                      margin-right 10px
                    }
                    >p{
                      font-size: 14px;
                      color: #5E5E5E;
                    }
                  }
                }
                .tg_code{
                  position absolute
                  top: 140px
                  left: -86px
                  display flex
                  align-items center
                  .code_item{
                    width: 200px
                    display flex
                    flex-direction column
                    align-items center
                    justify-content center
                    margin-right 20px
                    >img{
                      width: 108px
                      height: 108px
                    }
                    >div{
                      margin-top 10px
                      font-size: 14px;
                      color: #5E5E5E;
                    }
                  }
                }
              }
            }
          }
          .right_f{
            .title{
              cursor: pointer
              font-weight: 700;
              font-style: normal;
              font-size: 16px;
              color: #333
              cursor: pointer
            }
            >img{
              margin-top 28px
              width: 128px
              height: 128px
            }
          }
        }
        .footer_zs{
          margin 40px 0 0px 0
          display flex
          flex-direction column
          align-items center
          justify-content center
          >p{
            font-size: 14px;
            color: #333
            line-height: 24px
          }
        }
      }
    }
  }
</style>


