<template>
    <div class="header">
        <div class="header-top">
            <div id="logo">
                <img src="~assets/images/logo.png" alt />
            </div>
            <div id="search" @click="handleSearchClick">
                <label class="m-search">
                    <i class="m-font m-font-search"></i>
                    <div class="m-text-cut">大家都在搜：{{hotWord}}</div>
                </label>
            </div>
            <div id="write" @click="handleWriteClick">
                <div class="lite-iconf lite-iconf-releas"></div>
            </div>
        </div>
        <nav>
            <div id="nav">
                <ul>
                    <li
                        @click="handleClick('popular')"
                        ref="popular"
                        :class="{active : hightLight === 'popular'}"
                    >
                        <span>
                            热门
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('novelty')"
                        ref="novelty"
                        :class="{active : hightLight === 'novelty'}"
                    >
                        <span>
                            新鲜事
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('samecity')"
                        ref="samecity"
                        :class="{active : hightLight === 'samecity'}"
                    >
                        <span>
                            同城
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('funny')"
                        ref="funny"
                        :class="{active : hightLight === 'funny'}"
                    >
                        <span>
                            搞笑
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('emotion')"
                        ref="emotion"
                        :class="{active : hightLight === 'emotion'}"
                    >
                        <span>
                            情感
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('star')"
                        ref="star"
                        :class="{active : hightLight === 'star'}"
                    >
                        <span>
                            明星
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('sociology')"
                        ref="sociology"
                        :class="{active : hightLight === 'sociology'}"
                    >
                        <span>
                            社会
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('digital')"
                        ref="digital"
                        :class="{active : hightLight === 'digital'}"
                    >
                        <span>
                            数码
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('sports')"
                        ref="sports"
                        :class="{active : hightLight === 'sports'}"
                    >
                        <span>
                            体育
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('car')"
                        ref="car"
                        :class="{active : hightLight === 'car'}"
                    >
                        <span>
                            汽车
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('movie')"
                        ref="movie"
                        :class="{active : hightLight === 'movie'}"
                    >
                        <span>
                            电影
                            <em></em>
                        </span>
                    </li>
                    <li
                        @click="handleClick('game')"
                        ref="game"
                        :class="{active : hightLight === 'game'}"
                    >
                        <span>
                            游戏
                            <em></em>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="nav-list" @click="handleListClick">
                <i class="m-font m-font-arrow-down" :class="listShow ? 'rotate1' :'rotate2'"></i>
            </div>
        </nav>
        <div class="lite-nav-sublist m-col-4" v-show="listShow">
            <ul class="m-auto-list">
                <li
                    class="m-auto-box"
                    @click="handleClick('popular')"
                    :class="{cur : hightLight === 'popular'}"
                >
                    <span class="m-text-cut">热门</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('novelty')"
                    :class="{cur : hightLight === 'novelty'}"
                >
                    <span class="m-text-cut">新鲜事</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('samecity')"
                    :class="{cur : hightLight === 'samecity'}"
                >
                    <span class="m-text-cut">同城</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('funny')"
                    :class="{cur : hightLight === 'funny'}"
                >
                    <span class="m-text-cut">搞笑</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('emotion')"
                    :class="{cur : hightLight === 'emotion'}"
                >
                    <span class="m-text-cut">情感</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('star')"
                    :class="{cur : hightLight === 'star'}"
                >
                    <span class="m-text-cut">明星</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('sociology')"
                    :class="{cur : hightLight === 'sociology'}"
                >
                    <span class="m-text-cut">社会</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('digital')"
                    :class="{cur : hightLight === 'digital'}"
                >
                    <span class="m-text-cut">数码</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('sports')"
                    :class="{cur : hightLight === 'sports'}"
                >
                    <span class="m-text-cut">体育</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('car')"
                    :class="{cur : hightLight === 'car'}"
                >
                    <span class="m-text-cut">汽车</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('movie')"
                    :class="{cur : hightLight === 'movie'}"
                >
                    <span class="m-text-cut">电影</span>
                </li>
                <li
                    class="m-auto-box"
                    @click="handleClick('game')"
                    :class="{cur : hightLight === 'game'}"
                >
                    <span class="m-text-cut">游戏</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ajax } from "utils/ajax";
import BScroll from "better-scroll";
export default {
    props: ["type"],
    data() {
        return {
            hightLight: this.type || "popular",
            hotWord: "",
            listShow: false
        };
    },
    async beforeMount() {},
    async mounted() {
        let result = await ajax({
            method: "get",
            url: "api/config/list"
        });
        this.hotWord = result.data.data.hot.hotWord;
        this.$emit("hotWord", this.hotWord);
        this.bscroll = new BScroll("#nav", {
            scrollX: true,
            bounce: false,
            click: true
        });
    },
    async activated() {
         let result = await ajax({
            method: "get",
            url: "api/config/list"
        });
        this.hotWord = result.data.data.hot.hotWord;
        this.$emit("hotWord", this.hotWord);
    },
    methods: {
        handleWriteClick(){
            this.$router.push({
                path : '/compose'
            })
        },
        handleListClick() {
            this.listShow = !this.listShow;
        },
        handleSearchClick() {
            this.$router.push({
                path: "/search",
                query : {
                    containerid : 231583
                }
            });
        },
        handleClick(obj) {
            this.hightLight = obj;
            this.$emit("hightLight", obj);
            this.listShow = false;
            this.bscroll.scrollToElement(this.$refs[obj], ".5s", true);
        }
    },
};
</script>
<style lang='stylus' scoped>
@import '~assets/libs/border.styl'

.rotate1
    transform rotate(180deg)
    transition all 0.5s
.rotate2
    transform rotate(0deg)
    transition all 0.5s
.header
    box-sizing border-box
    height 0.84rem
    background #fafafa
    position relative
    .header-top
        padding 0 0.12rem
        height 0.4rem
        display flex
        #logo
            padding-top 0.1rem
            margin-right 0.14rem
            img
                width 0.26rem
        #search
            margin-top 0.09rem
            height 0.28rem
            background #ebebec
            flex 1
            overflow hidden
            white-space nowrap
            .m-search
                width 100%
                font-size 0.14rem
                color #bdbdbd
                position relative
                line-height 0.28rem
                .m-font-search
                    position absolute
                    left 0.1rem
                .m-text-cut
                    width 100%
                    padding-left 0.3rem
                    padding-right 0.1rem
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
        #write
            width 0.2rem
            padding-top 0.12rem
            margin-left 0.16rem
            padding-right 0.02rem
    nav
        display flex
        height 0.44rem
        $border(0 0 1px 0)
        #nav
            flex 1
            overflow-x hidden
            ul
                height 100%
                width max-content
                display flex
                margin-right 0.2rem
                li
                    font-size 0.16rem
                    line-height 0.44rem
                    padding 0 0.12rem
                    color #a5adb5
                    white-space nowrap
                    text-overflow hidden
                    span
                        position relative
                        vertical-align middle
                        cursor pointer
                li.active
                    color #000
                    em
                        display block
                        position absolute
                        bottom -0.08rem
                        left 50%
                        margin-left -0.07rem
                        width 0.14rem
                        border-top 2px solid #282f3c
        .nav-list
            width 0.44rem
            line-height 0.44rem
            color #a5adb5
            font-size 0.16rem
            text-align center
            position relative
        .nav-list:after
            content ''
            height 0.44rem
            width 0.12rem
            background linear-gradient(270deg, #fafafa 0, #fafafa 20%, hsla(0, 0%, 98%, 0))
            position absolute
            left -0.11rem
            top 0
            z-index 2
.lite-nav-sublist
    position absolute
    top 0.83rem
    left 0
    right 0
    text-align left
    padding 0.08rem 0.08rem 0.1rem
    color #333
    background-color #fafafa
    z-index 2
    .m-auto-list
        width 100%
        overflow hidden
        .m-auto-box
            display inline-block
            vertical-align top
            box-sizing border-box
            position relative
            padding 0 0.04rem
            height 0.44rem
            text-align center
            margin-top 0.08rem
            width 25%
            font-size 0.14rem
            .m-text-cut
                display inline-block
                width 100%
                height 0.34rem
                line-height 0.34rem
                padding 0 0.04rem
                vertical-align middle
                background-color #eee
                border-radius 3px
        .m-auto-box.cur
            color #ff8200
        .m-auto-box:nth-of-type(4n+1)
            margin-left -0.02rem
</style>