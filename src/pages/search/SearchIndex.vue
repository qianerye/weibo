<template>
    <div style="height: 100%;">
        <div>
            <div class="ntop-nav">
                <div class="nt-left" @click="handleBackClick">
                    <i class="m-font m-font-arrow-left"></i>
                </div>
                <div class="nt-sbox">
                    <form class="nt-search" onsubmit="return false;">
                        <i class="m-font m-font-search" @click="handleSearch(keyWords)"></i>
                        <input
                            type="text"
                            @keydown.enter="handleSearch(keyWords)"
                            :placeholder="`大家都在搜：${hotWord}`"
                            v-model="keyWords"
                        />
                    </form>
                </div>
            </div>
            <div class="card m-panel m-col-2">
                <div class="card-wrap">
                    <div class="card-main" v-if="cards.length > 0">
                        <div
                            class="m-item-search"
                            v-for="(card,index) in cards"
                            :key="index"
                            :class="{'m-item-box' : index <= 5}"
                        >
                            <div
                                class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                @click="heatSearchClick(card)"
                            >
                                <div class="m-box-dir text-box">
                                    <h4 class="m-text-cut">{{card.title_sub}}</h4>
                                </div>
                                <span class="m-link-icon" v-if="card.icon">
                                    <img :src="card.icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="card-main" v-else>
                        <div
                            class="m-item-search"
                            v-for="index in 8"
                            :key="index"
                            :class="{'m-item-box' : index <= 6}"
                        ></div>
                    </div>
                </div>
            </div>
            <div class="card card11 ctype-3">
                <div>
                    <div class="card-list">
                        <div class="card m-panel card16 m-col-6">
                            <div class="card-wrap">
                                <div class="card-main">
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E6%89%BE%E4%BA%BA.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">找人</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E5%8C%97%E4%BA%AC.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">同城</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E6%B8%B8%E6%88%8F.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">小游戏</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E4%B8%80%E7%9B%B4%E6%92%AD.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">直播</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E7%94%B5%E5%BD%B1.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">电影</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E5%B0%A4%E7%89%A9%E5%BF%97.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">尤物志</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190925_%E7%90%83%E8%BF%B7%E4%B9%8B%E5%A4%9C%E5%8F%91%E7%8E%B0%E5%85%A5%E5%8F%A3%E5%9B%BE%E6%A0%87.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">赛事</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E7%BA%A2%E4%BA%BA%E6%B7%98.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">红人淘</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E8%B4%A2%E7%BB%8F.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">财经</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E9%9F%B3%E4%B9%90.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">音乐</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E9%85%B7%E7%87%83.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">节目</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E6%88%BF%E4%BA%A7.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">房产</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E6%B1%BD%E8%BD%A6.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">汽车</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190417_%E7%BE%8E%E9%A3%9F.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">美食</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-item-box card19-mode">
                                        <div
                                            class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                        >
                                            <img
                                                src="https://simg.s.weibo.com/20190122195752_weigongyi.png"
                                                class
                                            />
                                            <div class="m-box-dir text-box">
                                                <h4 class="m-text-cut">微公益</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ajax } from "utils/ajax";
export default {
    props : ['hotWord1'],
    data() {
        return {
            cards: [],
            hotWord: this.hotWord1,
            keyWords: ""
        };
    },
    async beforeMount() {
        this.hotWord = this.$route.query.hotWord || '';
        let result = await ajax({
            url:
                "api/container/getIndex?containerid=231583&page_type=searchall",
            method: "get"
        });
        this.hotWord = this.$route.query.hotWord || result.data.data.hotwords[0].word;
        this.cards = result.data.data.cards[0].group;
    },
    methods: {
        handleBackClick() {
            this.$router.back()
        },
        async handleSearch(keyWords) {
            let result = await ajax({
                url: `/api/container/getIndex?containerid=100103type%3D1%26q%3D${keyWords}&page_type=searchall`,
                method: "get"
            });
            this.$store.dispatch('search/addAccurateSearchData' , {
                accurateSearchData : result.data.data
            })
            this.keyWords = ''
            this.$router.push({
                path : '/search',
                query : {
                    containerid : `100103type%3D1%26q%3D$${keyWords}`
                }
            })
        },
        async heatSearchClick(card){
            let reg = /^http[\w\W]+\?/
            let query = card.scheme.replace(reg, "")
            let result = await ajax({
                url : '/api/container/getIndex?' + query,
                method : 'get'
            })
            let jsonQuery = JSON.parse('{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}') ;
            jsonQuery.containerid = decodeURI(jsonQuery.containerid)
            this.$store.dispatch('search/addHeatSearchData' , {
                heatSearchData : result.data.data
            })    
            this.$router.push({
                path : '/search',
                query : jsonQuery,
            })
        }
    },

};
</script>

<style lang='stylus' scoped>
.ntop-nav
    background #fff
    display flex
    align-items center
    height 0.44rem
    padding 0 0.1rem
    .nt-left
        padding-right 0.19rem
        cursor pointer
        i
            font-size 0.16rem
    .nt-sbox
        height 28px
        border-radius 4px
        background-color #e3e4e6
        line-height 28px
        flex 1
        .nt-search
            position relative
            width 100%
            -ms-flex-preferred-size auto
            flex-basis auto
            -webkit-box-flex 1
            -ms-flex-positive 1
            flex-grow 1
            -ms-flex-negative 1
            flex-shrink 1
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-align center
            -ms-flex-align center
            align-items center
            .m-font-search
                padding-left 10px
                padding-right 8px
                color #8e8e93
            input
                background-color transparent
                border 0 none
                font-size 0.14rem
                color #333
                width 100%
                margin-right 0.32rem
.m-col-2
    border-top-width 1px
    border-right-width 0
    border-bottom-width 1px
    border-left-width 0
    border-color #e6e6e6
    border-style solid
    background #fff
    overflow hidden
    margin-bottom 0.1rem
    .m-item-box::after
        content ''
        position absolute
        bottom 0
        left 0.08rem
        right 0.08rem
        height 1px
        background-color #e6e6e6
    .card-wrap
        margin-left 0.12rem
        margin-right 0.12rem
        height 100%
        .card-main
            box-sizing border-box
            margin-left -0.12rem
            margin-right -0.12rem
            height 100%
            .m-item-search::after, .m-item-search::before
                content ''
                position absolute
            .m-item-search::before
                right 0
                top 0.08rem
                bottom 0.08rem
                width 1px
                background-color #e6e6e6
            .m-item-search
                display inline-block
                box-sizing border-box
                vertical-align top
                position relative
                color #333
                height 0.44rem
                line-height 0.44rem
                text-align center
                padding 0 0.08rem 0 0.12rem
                width 50%
                .m-box-center-a
                    display flex
                    align-items center
                .m-box-col
                    flex 1
                    width 100%
                    display flex
                    min-width 0
                    flex-direction row
                    .text-box
                        flex 1
                        overflow hidden
                        flex-direction column
                        white-space nowrap
                        text-overflow ellipsis
                        .m-text-cut
                            margin-left 0.04rem
                            text-align left
                            font-size 0.16rem
                            font-weight normal
                            overflow hidden
                            white-space nowrap
                            text-overflow ellipsis
                    .m-link-icon
                        width 0.14rem
                        margin-left 0.04rem
                        display inline-block
                        vertical-align top
                        height 0.14rem
                        font-size 0
                        position relative
                        img
                            width 100%
                            height 100%
                            position absolute
                            top 0
                            left 0
.card11
    background #fff
    .card-list
        .card-wrap
            padding 0 0.12rem
        .card-main
            box-sizing border-box
            margin-left -0.12rem
            margin-right -0.12rem
            height 100%
            overflow hidden
            .card19-mode
                width 16.6%
                height auto
                text-align center
                min-height 0.55rem
                display inline-flex
                align-items center
                box-sizing border-box
                vertical-align middle
                position relative
                color #333
                .m-box-col
                    display flex
                    align-items center
                    flex-direction column
                    position relative
                    height 100%
                    flex 1
                    width 100%
                    min-width 0
                    img
                        width 0.36rem
                        height 0.36rem
                .text-box
                    .m-text-cut
                        margin-top 0.07rem
                        font-size 0.12rem
                        font-weight normal
</style>
