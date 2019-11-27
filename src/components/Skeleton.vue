<template>
    <div class="main-scroll">
        <div class="card-wrap" 
            v-for="count in forCount"
            :key="count"
        >
            <div class="weibo-top">
                <div class="top-circular"></div>
                <div class="top-line"></div>
            </div>
            <article class="weibo-main">
                <p class="empty-bg"></p>
                <p class="empty-bg"></p>
                <p class="empty-bg"></p>
                <p class="empty-bg"></p>
                <p class="empty-bg"></p>
            </article>
            <div class="weibo-footer">
                <div class="m-diy-btn">
                    <i class="lite-iconf lite-iconf-report"></i>
                    <span>转发</span>
                </div>
                <div class="m-diy-btn">
                    <i class="lite-iconf lite-iconf-comments"></i>
                    <span>评论</span>
                </div>
                <div class="m-diy-btn">
                    <i class="lite-iconf lite-iconf-like"></i>
                    <span>赞</span>
                </div>
                <div class="m-diy-options">
                    <h4 class="m-diy-options">···</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            forCount : [1 , 2, 3 , 4 , 5]
        }
    },
};
</script>

<style lang='stylus' scoped>
.main-scroll
    width 100%
    height 100%
    overflow-y hidden
    .card-wrap
        padding 0.15rem 0.1rem
        background #fff
        border-bottom 1px solid #EBEBEC
        .weibo-top
            display flex
            height .36rem
            .top-circular
                width .36rem
                border-radius 50%
                background #EBEBEC
            .top-line
                width 0.8rem
                height 0.06rem
                background #EBEBEC
                margin .15rem 
        .weibo-main
            .empty-bg
                width 100%
                height 0.06rem
                background #EBEBEC
                margin 0.15rem 0
        .weibo-footer
            display flex
            font-size 0.14rem
            span 
                display inline-block
                margin-left .05rem
            .m-diy-btn
                width 0.7rem
            .m-diy-options
                flex 1
                text-align right
                font-weight 700
                padding-right 0.1rem
</style>