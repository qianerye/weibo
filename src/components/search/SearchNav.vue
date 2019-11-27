<template>
    <div>
        <div class="m-container-max m-top-nav" style="z-index: 8">
            <div  class="m-box">
                <div  class="m-box-col nav-main slide-container">
                    <div  class="scroll-box nav_item">
                        <ul  class="nav-item center">
                            <li  :class="{'m-cur' : nowNavId == li.id}" 
                                v-for="li in titleNav.channel_list"
                                :key='li.id'
                                @click="handleClick(li.id)"
                            >
                                <span >{{li.name}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div  class="nav-plus m-box-center m-box-center-a">
                    <i  class="m-font m-font-plus"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['titleNav'],
    data() {
        return {
            nowNavId : this.titleNav.channel_list[0].id
        }
    },
    methods: {
        handleClick(id){
            this.nowNavId = id
        }
    },
};
</script>

<style lang='stylus' scoped>
@import '~assets/libs/border.styl'

.m-box:after
    content ""
    position absolute
    width 98%
    height 1px
    background #eee
    right 0
    bottom 0
.m-box
    height .4rem
    line-height .4rem
    display flex
    background #fff 
    position relative
    .nav-main
        flex 1
        overflow hidden
    .nav-plus 
        width .4rem
        text-align center
        position relative
    .nav-plus:before
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: .04rem;
        transform: translateX(-100%);
        -webkit-mask: -webkit-linear-gradient(top,transparent,#000 45%,#000 55%,transparent 100%);
        border-right: 1px solid #ccc;
        box-shadow: inset -3px 0 3px rgba(0,0,0,.11);
.scroll-box
    box-sizing: border-box;
    width 100%
    display: -webkit-box;
    overflow-y: hidden;
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    ul
        width max-content
        white-space nowrap
        padding 0 .08rem
        li
            display: inline-block;
            font-size: .15rem;
            line-height: .4rem;
            color: #939393;
            padding: 0 .09rem;
            position relative
            span
                display: block;
                position: relative;
                padding: 0 .04rem;
        li.m-cur
            color #333
            span:after
                content: '';
                position: absolute;
                left: 50%;
                transform: translate(-50%,0);
                bottom: .03rem;
                width: .24rem;
                height: .03rem;
                border-radius: .125rem;
                background-color: #FF8200;

            
</style>