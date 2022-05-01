<template>
  <header class="header">
    <div class="header_content">
      <h1>
        <img src="../../assets/images/header/logo1.png" alt="">
      </h1>
      <div class="header_input">
        <Input
          class="input_main"
          placeholder="请输入关键字搜索"
          suffix-icon="el-icon-search"
          v-model="search">
        </Input>
      </div>
    </div>
  </header>
</template>

<script>
  import { Input } from 'element-ui';
  export default {
    name: "Header",
    components:{
      Input
    },
    data() {
      return {
        search:null,
      }
    },
  }
</script>
<style lang="stylus" scoped>
  .header{
    width: 100%
    height: 130px
    background-image: url("../../assets/images/header/header.png");
    background-repeat no-repeat
    .header_content{
      width: 1200px
      height: 100%
      margin 0 auto
      display flex
      align-items center
      justify-content space-between
      >h1 >img{
        width: 385px
        height: 101px
      }
      .header_input{
        .input_main {
          >>> .el-input__inner {
            width: 334px
            height: 40px
            border 1px solid rgba(83, 153, 213, 1)
            border-radius: 150px;
          }
          >>> .el-input__icon{
            margin-right 18px
          }
          >>> .el-icon-search:before{
            font-size 22px
          }
        }

      }
    }
  }
</style>


