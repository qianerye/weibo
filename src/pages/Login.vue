<template>
    <div class="login-box">
        <div class="login-container">
            <div class="login-back" @click="handleBackClick">
                <i class="yo-ico">&#xe62e;</i>
            </div>
        </div>
        <div class="verify-box">
            <p class="v-b-tit">登录注册更精彩</p>
            <p class="v-b-info">
                登录注册表示同意
                <a>同户协议</a>、
                <a>隐私条款</a>
            </p>
            <form>
                <div class="input">
                    <span class="code-text">+86</span>
                    <select data-v-ed01a188 class="box-select">
                        <option data-v-ed01a188 value="86">中国大陆</option>
                        <option data-v-ed01a188 value="852">香港地区</option>
                        <option data-v-ed01a188 value="886">台湾地区</option>
                        <option data-v-ed01a188 value="853">澳门地区</option>
                        <option data-v-ed01a188 value="81">日本</option>
                        <option data-v-ed01a188 value="82">韩国</option>
                        <option data-v-ed01a188 value="65">新加坡</option>
                        <option data-v-ed01a188 value="60">马来西亚</option>
                        <option data-v-ed01a188 value="1">美国</option>
                        <option data-v-ed01a188 value="1">加拿大</option>
                        <option data-v-ed01a188 value="61">澳大利亚</option>
                        <option data-v-ed01a188 value="44">英国</option>
                        <option data-v-ed01a188 value="60">马来西亚</option>
                        <option data-v-ed01a188 value="33">法国</option>
                        <option data-v-ed01a188 value="49">德国</option>
                        <option data-v-ed01a188 value="33">法国</option>
                        <option data-v-ed01a188 value="7">俄罗斯</option>
                        <option data-v-ed01a188 value="91">印度</option>
                        <option data-v-ed01a188 value="66">泰国</option>
                        <option data-v-ed01a188 value="55">巴西</option>
                        <option data-v-ed01a188 value="62">印尼</option>
                        <option data-v-ed01a188 value="855">柬埔寨</option>
                        <option data-v-ed01a188 value="95">缅甸</option>
                        <option data-v-ed01a188 value="673">文莱</option>
                        <option data-v-ed01a188 value="63">菲律宾</option>
                        <option data-v-ed01a188 value="84">越南</option>
                        <option data-v-ed01a188 value="856">老挝</option>
                        <option data-v-ed01a188 value="64">新西兰</option>
                        <option data-v-ed01a188 value="39">意大利</option>
                        <option data-v-ed01a188 value="34">西班牙</option>
                    </select>
                    <span class="yo-ico icon">&#xe603;</span>
                    <input 
                        type="number" 
                        @keydown="handleNumInput" 
                        v-model="phoneNum" 
                        placeholder="输入手机号" 
                    />
                    <span v-show="deleteBtnShow" @click="handleCleanInput" data-v-abb19b88="" class="icon-cross" style=""></span>
                </div>
            </form>
            <div class="get-code-btn">
                <a href="javascript:void(0)">获取验证码</a>
            </div>
            <div class="password-login">
                <a href="javascript:void(0)">用账号密码登录</a>
            </div>
            <div class="other-login">
                <span>其他登录方式</span>
            </div>
            <div class="qq-login">
                <i class="yo-ico">&#xe611;</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phoneNum : '',
            deleteBtnShow : false
        }
    },
    watch: {
        phoneNum(){
            console.log(this.phoneNum.length)
            if(this.phoneNum.length > 11)this.phoneNum = this.phoneNum.substring(0 , 11)
        }
    },
    methods: {
        handleBackClick(){
            this.$router.back()
        },
        handleNumInput(){
            this.deleteBtnShow = this.phoneNum.length > 0 ? true : false
        },
        handleCleanInput(){
            this.phoneNum = ""
        }
    },
};
</script>

<style lang='stylus' scoped>
.login-box
    width 100%
    height 100%
    z-index 9
    background #fff
    position relative
    .login-back
        width 0.4rem
        height 0.4rem
        font-size 0.24rem
        line-height 0.4rem
        text-align center
    .verify-box
        padding 0 0.24rem
        a
            color #507DAF
        .v-b-tit
            font-size 0.3rem
            padding 0.2rem 0 0.1rem
        .v-b-info
            color #636363
        form
            .input
                margin-top 0.6rem
                margin-bottom 0.5rem
                width 100%
                border-bottom 1px solid #ddd
                height 0.45rem
                position relative
                .code-text
                    position absolute
                    line-height 0.45rem
                select
                    border none
                    color inherit
                    width 0.3rem
                    height auto
                    color transparent
                    margin-top 0.06rem
                    font-size 0.1rem
                    outline none
                    appearance none
                    -moz-appearance none
                    -webkit-appearance none
                    border none
                    background transparent
                .icon
                    line-height 0.45rem
                    font-size 0.24rem
                input
                    height 0.44rem
                    border none
                    padding 0.05rem 0
                input::-webkit-input-placeholder
                    color #ccc
                    font-size 0.18rem
        .get-code-btn
            background rgba(27, 154, 244, 0.5)
            width 100%
            height 0.4rem
            border-radius 0.5rem
            a
                display block
                text-align center
                line-height 0.4rem
                color #fff
                font-size 0.18rem
        .password-login
            margin-top 0.15rem
        .other-login
            margin-top 0.6rem
            text-align center
            span
                display inline-block
                position relative
                background #fff
                z-index 3
                font-size 0.14rem
                color #939393
        .qq-login
            border-top 1px solid #ddd
            position relative
            margin-top -0.12rem
            text-align center
            padding-top 0.2rem
            z-index 1
            i
                color #507DAF
                font-size 0.3rem
</style>