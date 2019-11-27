<template>
    <div>
        <div class="login-box">
            <a class="m-btn m-btn-blue login-btn" @click="handleLoginClick">登录/注册</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleLoginClick(){
            this.$router.push({
                path : '/login'
            }) 
        }
    },
};
</script>

<style lang='stylus' scoped>
.login-box
    position fixed
    width 100%
    max-width 750px
    bottom 0.3rem
    text-align center
</style>