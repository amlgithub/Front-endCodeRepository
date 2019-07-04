<template>
  <div class="login-container">
    <div>
      <div class="ss">
        <div class="text">用户登录</div>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
          <div class="bb">
            <el-input v-model="loginForm.username" size="large" placeholder="请输入用户名" name="username" type="text" class="inputs"><i slot="prefix" class="ymq-iconuser"></i></el-input>
            <el-input v-model="loginForm.password" :type="passwordType"  size="large" placeholder="请输入密码" name="password" @keyup.enter.native="handleLogin" class="inputs"><i slot="prefix" class="ymq-iconlock-fill" style="margin-top: 10px"></i></el-input>
          </div>

          <!--<div class="text2">忘记密码？</div>-->
          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;margin-top: 40px" @click.native.prevent="handleLogin"><span style="font-size: 20px">登 录</span></el-button>

        </el-form>
      </div>

    </div>
    <Footerr style="float: bottom;margin-top: 49%" ></Footerr>

  </div>



</template>

<script>
import { validUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import Footerr from '../assert/footerr'
// import SocialSign from './socialsignin'

export default {
  inject: ['reload'],
  name: 'Login',
  components: {
    LangSelect,
    Footerr
  },
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 2) {
    //     callback(new Error('The password can not be less than 6 digits'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        // password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        username: [
          { required: true, message: 'Please enter the correct user name', trigger: 'blur' },
          { min: 3, max: 16, message: 'The password can not be less than 4 digits', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter the correct password', trigger: 'blur' },
          { min: 3, max: 16, message: 'The password can not be less than 3 digits', trigger: 'blur' }
        ]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined,
      show: false,
      role: '',
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            localStorage.setItem('name',this.loginForm.username);
            // console.log('ewfwefwef'+this.$store.getters.code)
            // var code = this.$store.getters.code
            // if (code === '200'){
            //   this.$router.push({ path: this.redirect || '/' })
            // }
            // if (code === '401') {
            //   this.loading=true;
            //   this.$message.error("用户名或密码错误");
            //   this.$router.push('/login')
            //   // this.reload()
            // }
            this.role = localStorage.getItem('role')
            this.loading = false
            if (this.role==='2'){
              this.$router.push('/assert/assertApplys')
            }else if (this.role=== '4') {
              this.$router.push('/assert/disposition')
            }else if (this.role=== '3'){
              this.$router.push('/assert/maintain')
            }
            else if (this.role === '1') {
              this.$router.push('/assert/assertApplyIndex')
            }
            else  {
              this.$router.push('/dashboard')
            }
            // this.$router.push({ path: this.redirect || '/' })
            // this.show=true;
            // // this.loading = true
            // setTimeout(() => {
            //
            //
            //   this.$router.push({ path: this.redirect || '/' })
            // }, 1500)

            // var code = localStorage.getItem("code");
            // console.log(typeof code);
            // if (code === '200'){
            //   this.$router.push({ path: this.redirect || '/' })
            // }
            // if (code === '401') {
            //   this.loading=true;
            //   this.$message.error("用户名或密码错误");
            //   this.$router.push('/login')
            //   // this.reload()
            // }

          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  }
}
</script>

<!--<style rel="stylesheet/scss" lang="scss">-->
  <!--/* 修复input 背景不协调 和光标变色 */-->
  <!--/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */-->

  <!--$bg:#283443;-->
  <!--$light_gray:#eee;-->
  <!--$cursor: #fff;-->

  <!--@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {-->
    <!--.login-container .el-input input{-->
      <!--color: $cursor;-->
      <!--&::first-line {-->
        <!--color: $light_gray;-->
      <!--}-->
    <!--}-->
  <!--}-->

  <!--/* reset element-ui css */-->

  <!--.login-container {-->

    <!--.el-input {-->
      <!--display: inline-block;-->
      <!--height: 47px;-->
      <!--width: 85%;-->
      <!--input {-->
        <!--background: transparent;-->
        <!--border: 0px;-->
         <!-- -webkit-appearance: none;-->
        <!--border-radius: 0px;-->
        <!--padding: 12px 5px 12px 15px;-->
        <!--color: $light_gray;-->
        <!--height: 47px;-->
        <!--caret-color: $cursor;-->
        <!--&:-webkit-autofill {-->
           <!-- -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;-->
           <!-- -webkit-text-fill-color: $cursor !important;-->
        <!--}-->
      <!--}-->
    <!--}-->
    <!--.el-form-item {-->
      <!--border: 1px solid rgba(255, 255, 255, 0.1);-->
      <!--background: rgba(0, 0, 0, 0.1);-->
      <!--border-radius: 5px;-->
      <!--color: #454545;-->
    <!--}-->
  <!--}-->
<!--</style>-->

<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
<!--$bg:#2d3a4b;-->
<!--$dark_gray:#889aa4;-->
<!--$light_gray:#eee;-->

<!--.login-container {-->
  <!--/*background: url("../../assets/七大罪01.mp4");*/-->
  <!--position: relative;-->
  <!--background: url("../../assets/123.jpg");-->
  <!--width:100%;-->
  <!--height:100%;-->
  <!--background-size: 100%;-->


  <!--/*min-height: 100%;*/-->
  <!--/*width: 100%;*/-->
  <!--//background-color: $bg;-->
  <!--/*overflow: revert;*/-->

  <!--.login-form {-->
    <!--position: relative;-->
    <!--width: 520px;-->
    <!--max-width: 100%;-->
    <!--padding: 160px 35px 0;-->
    <!--margin: 0 auto;-->
    <!--overflow: hidden;-->
  <!--}-->
  <!--.tips {-->
    <!--font-size: 14px;-->
    <!--color: #fff;-->
    <!--margin-bottom: 10px;-->
    <!--span {-->
      <!--&:first-of-type {-->
        <!--margin-right: 16px;-->
      <!--}-->
    <!--}-->
  <!--}-->
  <!--.svg-container {-->
    <!--padding: 6px 5px 6px 15px;-->
    <!--color: $dark_gray;-->
    <!--vertical-align: middle;-->
    <!--width: 30px;-->
    <!--display: inline-block;-->
  <!--}-->
  <!--.title-container {-->
    <!--position: relative;-->
    <!--.title {-->
      <!--font-size: 26px;-->
      <!--color: $light_gray;-->
      <!--margin: 0px auto 40px auto;-->
      <!--text-align: center;-->
      <!--font-weight: bold;-->
    <!--}-->
    <!--.set-language {-->
      <!--color: #fff;-->
      <!--position: absolute;-->
      <!--top: 3px;-->
      <!--font-size:18px;-->
      <!--right: 0px;-->
      <!--cursor: pointer;-->
    <!--}-->
  <!--}-->
  <!--.show-pwd {-->
    <!--position: absolute;-->
    <!--right: 10px;-->
    <!--top: 7px;-->
    <!--font-size: 16px;-->
    <!--color: $dark_gray;-->
    <!--cursor: pointer;-->
    <!--user-select: none;-->
  <!--}-->
  <!--.thirdparty-button {-->
    <!--position: absolute;-->
    <!--right: 0;-->
    <!--bottom: 6px;-->
  <!--}-->
  <!--.loader {-->
    <!--position: absolute;-->
    <!--top: 50%;-->
    <!--left: 50%;-->
       <!-- -webkit-transform: translate(-50%, -50%);-->
       <!-- -moz-transform: translate(-50%, -50%);-->
       <!-- -mos-transform: translate(-50%, -50%);-->
       <!-- -o-transform: translate(-50%, -50%);-->
    <!--transform: translate(-50%, -50%);-->
    <!--text-align:center;-->
    <!--/* disable selection and cursor changes */-->
       <!-- -webkit-touch-callout: none;-->
       <!-- -webkit-user-select: none;-->
       <!-- -khtml-user-select: none;-->
       <!-- -moz-user-select: none;-->
       <!-- -ms-user-select: none;-->
    <!--user-select: none;-->
    <!--cursor:default;-->
  <!--}-->

  <!--/* Text align it the center of screen and connect the looped animation for 2 seconds */-->
  <!--.text{-->
    <!--position: absolute;-->
    <!--left: -1.3em;-->
    <!--top: -1.7em;-->
       <!-- -webkit-animation: text 2s infinite;-->
       <!-- -moz-animation: text 2s infinite;-->
       <!-- -moz-animation: text 2s infinite;-->
       <!-- -ms-animation: text 2s infinite;-->
       <!-- -o-animation: text 2s infinite;-->
    <!--animation: text 2s infinite;-->
  <!--}-->

  <!--/* Set for the first layer vertical position */-->
  <!--.vertical{-->
    <!--position:absolute;-->
    <!--top: -1.84em;-->
    <!--left: -0.4em;-->
       <!-- -webkit-transform: rotate(90deg);-->
       <!-- -moz-transform: rotate(90deg);-->
       <!-- -ms-transform: rotate(90deg);-->
       <!-- -o-transform: rotate(90deg);-->
    <!--transform: rotate(90deg);-->
  <!--}-->

  <!--/* Set for the second layer horizontal position */-->
  <!--.horizontal{-->
    <!--position:absolute;-->
    <!--top:0em;-->
    <!--left:0em;-->
       <!-- -webkit-transform: rotate(0deg);-->
       <!-- -moz-transform: rotate(0deg);-->
       <!-- -ms-transform: rotate(0deg);-->
       <!-- -o-transform: rotate(0deg);-->
    <!--transform: rotate(0deg);-->
  <!--}-->

  <!--/* The next two classes do mirror for animation */-->
  <!--.circlesup{-->
    <!--position:absolute;-->
    <!--top: -4.7em;-->
    <!--right: 12.1em;-->
  <!--}-->

  <!--.circlesdwn{-->
    <!--position:absolute;-->
    <!--top:2.5em;-->
    <!--right:-13.5em;-->
       <!-- -webkit-transform: rotate(180deg);-->
       <!-- -moz-transform: rotate(180deg);-->
       <!-- -ms-transform: rotate(180deg);-->
       <!-- -o-transform: rotate(180deg);-->
    <!--transform: rotate(180deg);-->
  <!--}-->

  <!--/* Create a container for our circles, rotate it 45 degrees and set animation*/-->
  <!--.circle {-->
    <!--position: absolute;-->
    <!--width: 15em;-->
    <!--height: 15em;-->
       <!-- -webkit-transform: rotate(45deg);-->
       <!-- -moz-transform: rotate(45deg);-->
       <!-- -ms-transform: rotate(45deg);-->
       <!-- -o-transform: rotate(45deg);-->
    <!--transform: rotate(45deg);-->
       <!-- -webkit-animation: orbit 2s infinite;-->
       <!-- -moz-animation: orbit 2s infinite;-->
       <!-- -moz-animation: orbit 2s infinite;-->
       <!-- -ms-animation: orbit 2s infinite;-->
       <!-- -o-animation: orbit 2s infinite;-->
    <!--animation: orbit 2s infinite;-->
    <!--z-index:5;-->
  <!--}-->
  <!--.videos{-->
    <!--position: fixed;-->
    <!--width: auto;-->
    <!--height: auto;-->

    <!--right: 0;-->
    <!--bottom: 0;-->
    <!--min-width: 100%;-->
    <!--min-height: 100%;-->
    <!--z-index: -100;-->
    <!--background-size: cover;-->
  <!--}-->

  <!--/* Style's of our circles */-->
  <!--.circle:after {-->
    <!--content: '';-->
    <!--position: absolute;-->
    <!--width: 2em;-->
    <!--height: 2em;-->
       <!-- -webkit-border-radius: 100%;-->
       <!-- -moz-border-radius: 100%;-->
       <!-- -ms-border-radius: 100%;-->
       <!-- -o-border-radius: 100%;-->
    <!--border-radius: 100%;-->
    <!--background: #13A3A5; /* Pick a color 1*/-->
  <!--}-->

  <!--.circle:nth-child(2) {-->
       <!-- -webkit-animation-delay: 100ms;-->
       <!-- -moz-animation-delay: 100ms;-->
       <!-- -ms-animation-delay: 100ms;-->
       <!-- -o-animation-delay: 100ms;-->
    <!--animation-delay: 100ms;-->
    <!--z-index:4;-->
  <!--}-->

  <!--.circle:nth-child(2):after  {-->
    <!--background: #56bebf; /* Pick a color 2*/-->
       <!-- -webkit-transform: scale(0.8,0.8);-->
       <!-- -moz-transform: scale(0.8,0.8);-->
       <!-- -ms-transform: scale(0.8,0.8);-->
       <!-- -o-transform: scale(0.8,0.8);-->
    <!--transform: scale(0.8,0.8);-->
  <!--}-->

  <!--.circle:nth-child(3) {-->
       <!-- -webkit-animation-delay: 225ms;-->
       <!-- -moz-animation-delay: 225ms;-->
       <!-- -ms-animation-delay: 225ms;-->
       <!-- -o-animation-delay: 225ms;-->
    <!--animation-delay: 225ms;-->
    <!--z-index:3;-->
  <!--}-->

  <!--.circle:nth-child(3):after  {-->
    <!--background: #ffa489; /* Pick a color 3*/-->
       <!-- -webkit-transform: scale(0.6,0.6);-->
       <!-- -moz-transform: scale(0.6,0.6);-->
       <!-- -ms-transform: scale(0.6,0.6);-->
       <!-- -o-transform: scale(0.6,0.6);-->
    <!--transform: scale(0.6,0.6);-->
  <!--}-->

  <!--.circle:nth-child(4) {-->
       <!-- -webkit-animation-delay: 350ms;-->
       <!-- -moz-animation-delay: 350ms;-->
       <!-- -ms-animation-delay: 350ms;-->
       <!-- -o-animation-delay: 350ms;-->
    <!--animation-delay: 350ms;-->
    <!--z-index:2;-->
  <!--}-->

  <!--.circle:nth-child(4):after  {-->
    <!--background: #ff6d37; /* Pick a color 4*/-->
       <!-- -webkit-transform: scale(0.4,0.4);-->
       <!-- -moz-transform: scale(0.4,0.4);-->
       <!-- -ms-transform: scale(0.4,0.4);-->
       <!-- -o-transform: scale(0.4,0.4);-->
    <!--transform: scale(0.4,0.4);-->
  <!--}-->


  <!--.circle:nth-child(5) {-->
       <!-- -webkit-animation-delay: 475ms;-->
       <!-- -moz-animation-delay: 475ms;-->
       <!-- -ms-animation-delay: 475ms;-->
       <!-- -o-animation-delay: 475ms;-->
    <!--animation-delay: 475ms;-->
    <!--z-index:1;-->
  <!--}-->

  <!--.circle:nth-child(5):after  {-->
    <!--background: #DB2F00; /* Pick a color 5*/-->
       <!-- -webkit-transform: scale(0.2,0.2);-->
       <!-- -moz-transform: scale(0.2,0.2);-->
       <!-- -ms-transform: scale(0.2,0.2);-->
       <!-- -o-transform: scale(0.2,0.2);-->
    <!--transform: scale(0.2,0.2);-->
  <!--}-->

  <!--/* Animation keys */-->
  <!--@-webkit-keyframes orbit {-->
    <!--0%		{ -webkit-transform:rotate(45deg); }-->

    <!--5%		{ -webkit-transform:rotate(45deg);-->
         <!-- -webkit-animation-timing-function: ease-out; }-->

    <!--70%		{ -webkit-transform:rotate(405deg);-->
         <!-- -webkit-animation-timing-function: ease-in; }-->

    <!--100%	{ -webkit-transform:rotate(405deg); }-->
  <!--}-->

  <!--@-moz-keyframes orbit {-->
    <!--0%		{ -moz-transform:rotate(45deg); }-->

    <!--5%		{ -moz-transform:rotate(45deg);-->
         <!-- -moz-animation-timing-function: ease-out; }-->

    <!--70%		{ -moz-transform:rotate(405deg);-->
         <!-- -moz-animation-timing-function: ease-in; }-->

    <!--100%	{ -moz-transform:rotate(405deg); }-->
  <!--}-->
  <!--@-ms-keyframes orbit {-->
    <!--0%		{ -ms-transform:rotate(45deg); }-->

    <!--5%		{ -ms-transform:rotate(45deg);-->
         <!-- -ms-animation-timing-function: ease-out; }-->

    <!--70%		{ -ms-transform:rotate(405deg);-->
         <!-- -ms-animation-timing-function: ease-in; }-->

    <!--100%	{ -ms-transform:rotate(405deg); }-->
  <!--}-->

  <!--@-o-keyframes orbit {-->
    <!--0%		{ -o-transform:rotate(45deg); }-->

    <!--5%		{ -o-transform:rotate(45deg);-->
         <!-- -o-animation-timing-function: ease-out; }-->

    <!--70%		{ -o-transform:rotate(405deg);-->
         <!-- -o-animation-timing-function: ease-in; }-->

    <!--100%	{ -o-transform:rotate(405deg); }-->
  <!--}-->

  <!--@keyframes orbit {-->
    <!--0%		{ transform:rotate(45deg); }-->

    <!--5%		{ transform:rotate(45deg);-->
      <!--animation-timing-function: ease-out; }-->

    <!--70% 	{ transform:rotate(405deg);-->
      <!--animation-timing-function: ease-in; }-->

    <!--100%	{ transform:rotate(405deg); }-->
  <!--}-->


  <!--@-webkit-keyframes text {-->
    <!--0%		{-webkit-transform:scale(0.2,0.2);-->
         <!-- -webkit-animation-timing-function: ease-out; }-->

    <!--40%,60%{ -webkit-transform:scale(1,1);-->
         <!-- -webkit-animation-timing-function: ease-out;  }-->

    <!--70%,100%{ -webkit-transform:scale(0.2,0.2);  }-->
  <!--}-->

  <!--@-moz-keyframes text {-->
    <!--0%		{-moz-transform:scale(0.2,0.2);-->
         <!-- -moz-animation-timing-function: ease-out; }-->

    <!--50%		{ -moz-transform:scale(1,1);-->
         <!-- -moz-animation-timing-function: ease-out;  }-->

    <!--60%		{ -moz-transform:scale(1,1);-->
         <!-- -moz-animation-timing-function: ease-out;  }-->

    <!--100%	{ -moz-transform:scale(0.2,0.2);  }-->
  <!--}-->

  <!--@-mos-keyframes text {-->
    <!--0%		{-mos-transform:scale(0.2,0.2);-->
         <!-- -mos-animation-timing-function: ease-out; }-->

    <!--50%		{ -mos-transform:scale(1,1);-->
         <!-- -mos-animation-timing-function: ease-out;  }-->

    <!--60%		{ -mos-transform:scale(1,1);-->
         <!-- -mos-animation-timing-function: ease-out;  }-->

    <!--100%	{ -mos-transform:scale(0.2,0.2);  }-->
  <!--}-->

  <!--@-o-keyframes text {-->
    <!--0%		{ -o-transform:scale(0.2,0.2);-->
         <!-- -o-animation-timing-function: ease-out; }-->

    <!--50%		{ -o-transform:scale(1,1);-->
         <!-- -o-animation-timing-function: ease-out;  }-->

    <!--60%		{ -o-transform:scale(1,1);-->
         <!-- -o-animation-timing-function: ease-out;  }-->

    <!--100%	{ -o-transform:scale(0.2,0.2);  }-->
  <!--}-->

  <!--@keyframes text {-->
    <!--0%		{ transform:scale(0.2,0.2);-->
      <!--animation-timing-function: ease-out; }-->

    <!--50%		{ transform:scale(1,1);-->
      <!--animation-timing-function: ease-out;  }-->

    <!--60%		{ transform:scale(1,1);-->
      <!--animation-timing-function: ease-out;  }-->

    <!--100%	{ transform:scale(0.2,0.2);  }-->
  <!--}-->
<!--}-->
  <!--/*.ss{*/-->
    <!--/*position: absolute;*/-->
    <!--/*width:100%;*/-->
    <!--/*height:100%;*/-->
    <!--/*background-image: url(../../assets/1.jpg);*/-->
    <!--/*background-size: 100%;*/-->
  <!--/*}*/-->
  <!--/*.s-login{-->
    <!--position: absolute;-->
    <!--left:50%;-->
    <!--top:50%;-->
    <!--width:350px;-->
    <!--margin:-190px 0 0 -175px;-->
    <!--border-radius: 5px;-->
    <!--background: rgba(255,255,255, 0.7);-->
    <!--overflow: hidden;-->
  <!--}*/-->
<!--</style>-->
<style>
  .login-container{
    width:100%;
    height:100%;
    background-image: url(../../assets/123.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /*background-position: center  -20px;*/
    position: absolute;

  }
  .ss{
    position: absolute;
    width: 35%;
    height: 55%;
    background-color: rgba(220, 233, 249, 0.9);
    border-radius: 8px;
    top: 31%;
    left: 55%

  }
  .bb {
    border: 1px solid #C9C9C9;
    border-radius: 4px;
    background-color: #DBE6F8;
  }
  .text {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size:22px;
    margin-top: 7%;
  }
  .login-form{
    width: 60%;
    margin: 10% auto;
  }
  .el-form-item{
    margin-bottom: 0;
  }
  /*.el-input__inne{*/
    /*height: 50px;*/
    /*line-height: 50px;*/
    /*border-radius: 1px;*/

  /*}*/
   .text2{
     color: #D80403;
     margin-left: 65%;
     margin-top: 20px;
   }
  /*.el-input__inner{*/
    /*background-color: rgba(255,255,255, 1);*/
  /*}*/
  /*.svg-container {*/
    /*padding: 6px 5px 6px 15px;*/
    /*color: $dark_gray;*/
    /*vertical-align: middle;*/
    /*width: 30px;*/
    /*display: inline-block;*/
  /*}*/
  .inputs .el-input__inner{
    border-radius: 4px;
    border: 0 solid grey;
    background-color: #DBE6F8;
    height: 50px;
    font-size: 14px;
    padding-top: 10px;

  }
  .inputs .el-input__prefix, .el-input__suffix{
    top: 5px

  }
  .inputs .el-input__prefix{
    margin-top: 10px;
  }
  .el-input--prefix .el-input__inner{
    padding-left: 40px;
  }
  .ymq-iconuser:before {
    font-size: 22px;
  }
  .ymq-iconlock-fill:before{
    font-size: 22px;
  }
  /**, *:before, *:after{*/
    /*font-size: 22px;*/
  /*}*/
</style>
