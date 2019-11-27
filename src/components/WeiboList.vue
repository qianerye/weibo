<template>
    <div class="index-scroll">
        <div class="index-scroll-content">
            <div class="m-tips m-tips-tp">
                <img v-if="loading" src="~assets/images/ajax-loader.gif" />
                <i v-else class="m-font" :class="pullDown"></i>
                <span class="main-link">{{pullDownMessage}}</span>
            </div>
            <div v-if="cards.length > 0">
                <div class="wb-item-wrap" v-for="(card,index) in cards" :key="index">
                    <div class="wb-item">
                        <div class="card-wrap">
                            <div class="card-title f-card-title" v-if="type === 'novelty'">
                                <div class="m-ctrl-box">
                                    <div class="m-diy-btn m-box-col m-box-center m-box-center-a">
                                        <img
                                            src="https://h5.sinaimg.cn/upload/1080/674/2017/12/25/timeline_title_novelty3x_default.png"
                                        />
                                        <a>{{card.mblog.title.text}}</a>
                                    </div>
                                </div>
                            </div>
                            <header class="weibo-top m-box">
                                <div class="m-avatar-box m-box-center">
                                    <a href="javascript:void(0)" class="m-img-box">
                                        <img :src="card.mblog.user.profile_image_url" />
                                        <i
                                            v-if="card.mblog.user.mbrank > 0"
                                            class="m-icon m-icon-goldv"
                                        ></i>
                                    </a>
                                </div>
                                <div class="m-box-dir m-box-col m-box-center">
                                    <div class="m-text-box">
                                        <a href="javascript:void(0)">
                                            <h3 class="m-text-cut">
                                                {{card.mblog.user.screen_name}}
                                                <i
                                                    v-if="card.mblog.user.mbrank > 0"
                                                    class="m-icon"
                                                    :class="'m-icon-vipl' + card.mblog.user.mbrank"
                                                ></i>
                                            </h3>
                                        </a>
                                        <h4 class="m-text-cut">
                                            <span class="time">{{card.mblog.created_at}}</span>
                                            <span class="from" v-if="card.mblog.source"> 来自 {{card.mblog.source}}</span>
                                        </h4>
                                    </div>
                                </div>
                                <div class="m-add-box m-followBtn" v-if="type !== 'novelty'">
                                    <span class="m-add-box">
                                        <i class="m-font m-font-plus"></i>
                                        <h4>关注</h4>
                                    </span>
                                </div>
                            </header>
                        </div>
                        <article class="weibo-main">
                            <div class="weibo-og">
                                <div v-html="card.mblog.text" @click="detailClick(card.mblog.id , card)" class="weibo-text"></div>
                                <div
                                    class="weibo-media-wraps weibo-media f-media media-b"
                                    v-if="card.mblog.pic_num > 0"
                                >
                                    <ul class="m-auto-list" v-if="card.mblog.pics.length === 4">
                                        <li
                                            class="m-auto-box3"
                                            v-for="(pic,index) in card.mblog.pics"
                                            :key="pic.pid"
                                            style="width:34%"
                                        >
                                            <div class="m-img-box m-imghold-4-3">
                                                <img :src="pic.url" @click.stop="getImgs(card.mblog.pics , index)" class="f-bg-img" />
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="m-auto-list" v-else>
                                        <li
                                            class="m-auto-box3"
                                            v-for="(pic,index) in card.mblog.pics"
                                            :key="pic.pid"
                                        >
                                            <div class="m-img-box m-imghold-4-3">
                                                <img :src="pic.url" @click="getImgs(card.mblog.pics , index)" class="f-bg-img" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-video type-video" v-if="card.mblog.obj_ext && card.mblog.page_info">
                                    <div class="mwb-video mwbv-play mwbv-info">
                                        <div class="m-img-box" v-if="card.mblog.page_info">
                                            <img
                                                :src="card.mblog.page_info.page_pic.url"
                                            />
                                        </div>
                                        <button class="mwbv-play-button" @click="handleVideoShowClick(card.mblog.page_info.page_pic.url , card.mblog.page_info.media_info.mp4_hd_url)">
                                            <span class="mwbv-icon"></span>
                                        </button>
                                        <div class="mwbv-info-bar">
                                            <div class="m-box">
                                                <div class="m-box-col">{{card.mblog.obj_ext}}</div>
                                                <div class="time">{{parseInt(card.mblog.page_info.media_info.duration / 60)}} : {{card.mblog.page_info.media_info.duration % 60}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <footer class="f-footer-ctrl">
                            <div class="m-diy-btn m-box-center-a weibo-report">
                                <i class="lite-iconf lite-iconf-report"></i>
                                <h4
                                    v-if="card.mblog.reposts_count > 10000"
                                >{{parseInt(card.mblog.reposts_count / 1000) / 10}}万</h4>
                                <h4 v-else>{{card.mblog.reposts_count}}</h4>
                            </div>
                            <div  @click="detailClick(card.mblog.id , card)" class="m-diy-btn m-box-center-a weibo-comments">
                                <i class="lite-iconf lite-iconf-comments"></i>
                                <h4
                                    v-if="card.mblog.comments_count > 10000"
                                >{{parseInt(card.mblog.comments_count / 1000) / 10}}万</h4>
                                <h4 v-else>{{card.mblog.comments_count}}</h4>
                            </div>
                            <div class="m-diy-btn m-box-center-a weibo-like">
                                <i class="lite-iconf lite-iconf-like"></i>
                                <h4
                                    v-if="card.mblog.attitudes_count > 10000"
                                >{{parseInt(card.mblog.attitudes_count / 1000) / 10}}万</h4>
                                <h4 v-else>{{card.mblog.attitudes_count}}</h4>
                            </div>
                            <aside>
                                <i class="m-font m-font-dot-more"></i>
                            </aside>
                        </footer>
                    </div>
                </div>
            </div>

            <div class="m-tips m-tips-tp m-tips-bottom">
                <img v-if="loading" src="~assets/images/ajax-loader.gif" />
                <i v-else class="m-font" :class="pullUp"></i>
                <span class="main-link">{{pullUpMessage}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import BScoll from "better-scroll";
import { ajax } from "utils/ajax";
import store from 'store'

import { ImagePreview } from 'vant';
Vue.use(ImagePreview);

export default {
    props: ["cards", "type"],
    data() {
        return {
            number: 1,
            scrollLoginBlock: false,
            pullDown: "m-font-down",
            pullUp: "m-font-up",
            loading: false,
            pullDownMessage: "下拉刷新···",
            pullUpMessage: "上拉加载更多···"
        };
    },
    mounted() {
        this.inscroll(this);
    },
    methods: {
        handleVideoShowClick(img , video){
            this.$emit('video' , {img , video})
        },
        detailClick(id , card){
            store.set('h5_feed_card' , card)
            this.$router.push({
                path : `/detail/${id}`,  
            })
        },
        getImgs(images , index){
            let imgs = []
            images.forEach(item => {
                imgs.push(item.large.url)
            })
            ImagePreview({
                images: imgs,
                startPosition: index,
                showIndex : true,
                loop : false,
                maxZoom : 5
            });
        },
        inscroll(obj) {
            let _this = obj;
            let req = {
                popular: {
                    type: "popular",
                    name: "热门",
                    gid: "102803",
                    api: "api/container/getIndex?containerid=102803&openApp=0"
                },
                novelty: {
                    type: "novelty",
                    name: "新鲜事",
                    gid: "102803_ctg1_7978_-_ctg1_7978",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_7978_-_ctg1_7978&openApp=0"
                },
                samecity: {
                    type: "samecity",
                    name: "同城",
                    gid: "lbs",
                    api: "api/lbs/near?"
                },
                funny: {
                    type: "funny",
                    name: "搞笑",
                    gid: "102803_ctg1_4388_-_ctg1_4388",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_4388_-_ctg1_4388&openApp=0"
                },
                emotion: {
                    type: "emotion",
                    name: "情感",
                    gid: "102803_ctg1_1988_-_ctg1_1988",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_1988_-_ctg1_1988&openApp=0"
                },
                star: {
                    type: "star",
                    name: "明星",
                    gid: "102803_ctg1_4288_-_ctg1_4288",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_4288_-_ctg1_4288&openApp=0"
                },
                sociology: {
                    type: "sociology",
                    name: "社会",
                    gid: "102803_ctg1_4188_-_ctg1_4188",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_4188_-_ctg1_4188&openApp=0"
                },
                digital: {
                    type: "digital",
                    name: "数码",
                    gid: "102803_ctg1_5088_-_ctg1_5088",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_5088_-_ctg1_5088&openApp=0"
                },
                sports: {
                    type: "sports",
                    name: "体育",
                    gid: "102803_ctg1_1388_-_ctg1_1388",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_1388_-_ctg1_1388&openApp=0"
                },
                car: {
                    type: "car",
                    name: "汽车",
                    gid: "102803_ctg1_5188_-_ctg1_5188",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_5188_-_ctg1_5188&openApp=0"
                },
                movie: {
                    type: "movie",
                    name: "电影",
                    gid: "102803_ctg1_3288_-_ctg1_3288",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_3288_-_ctg1_3288&openApp=0"
                },
                game: {
                    type: "game",
                    name: "游戏",
                    gid: "102803_ctg1_4888_-_ctg1_4888",
                    api:
                        "api/container/getIndex?containerid=102803_ctg1_4888_-_ctg1_4888&openApp=0"
                }
            };
            let moreReq = {
                popular : 'sinceid=',
                novelty : 'page=',
                samecity : 'page=',
                funny : 'sinceid=',
                emotion : 'sinceid=',
                star : 'sinceid=',
                sociology : 'sinceid=',
                digital : 'sinceid=',
                sports : 'sinceid=',
                car : 'sinceid=',
                movie : 'sinceid=',
                game : 'sinceid=',

            }
            let bscroll = new BScoll(".index-scroll", {
                pullUpLoad: {
                    threshold: 0
                },
                pullDownRefresh: {
                    threshold: 0,
                    stop: 0
                },
                probeType: 2,
                mouseWheel: {
                    speed: 20,
                    easeTime: 300
                },
                click : true,
                disableTouch: false
            });
            bscroll.scrollTo(0, -40);

            bscroll.on("scroll", function() {
                if (this.y > 0 && !_this.loading) {
                    _this.pullDown = "m-font-up";
                    _this.pullDownMessage = "释放更新···";
                } else if (!_this.loading) {
                    _this.pullDown = "m-font-down";
                    _this.pullDownMessage = "下拉刷新···";
                }
                if(!_this.scrollLoginBlock){
                    setTimeout(() => { 
                        _this.$emit('loginShow' , bscroll.movingDirectionY)  
                        _this.scrollLoginBlock = false
                    } , 500)
                    _this.scrollLoginBlock = true
                }
            });
            bscroll.on("scrollEnd", function() {
                if (this.y > -40 && this.y <= 0) {
                    this.scrollTo(0, -40, 500);
                }
            });
            bscroll.on("pullingDown", async function() {
                let url = req[_this.type].api
                _this.pullDownMessage = "加载中···";
                _this.loading = true;
                let res = await ajax({
                    method: "get",
                    url: url
                });
                _this.cards = res.data.data.cards;
                this.finishPullDown();
                this.refresh();
                _this.loading = false;
                this.scrollTo(0, -40, 500);
            });
            bscroll.on("pullingUp", async function() {
                let url = req[_this.type].api + '&' + moreReq[_this.type] + _this.number
                _this.pullUpMessage = "加载中···";
                _this.loading = true;
                let newResult = await ajax({
                    method: "get",
                    url: url
                });
                let newList = newResult.data.data.cards;
                _this.cards = [..._this.cards, ...newList];
                this.finishPullUp();
                this.refresh();
                _this.number++;
                _this.loading = false;
                _this.pullUpMessage = "上拉加载更多···";
            });
        }
    }
};
</script>

<style lang='stylus'>
@import '~assets/libs/border.styl'
body 
    width 100%
    height 100%
    position relative
    .van-image-preview
        position absolute
        top 0
        left 0
        width 100% !important
        height 100% !important
        background #000    
        .van-swipe
            width 100% !important
            height 100% !important
            .van-swipe__track
                display flex
                height 100%
                .van-swipe-item
                    .van-image
                        width 100%
                        height 100%
                        display flex
                        justify-content: center;
                        img 
                            width 100%
    .van-image-preview__index
        position absolute
        top 0
        left 50%
        color #fff
.wb-item
    background #fff
    .card-wrap
        height 100%
        .card-title
            padding-top .1rem 
            padding-left .12rem
            padding-bottom .08rem
            white-space nowrap
            text-overflow ellipsis
            img 
                width .14rem
                height .14rem
            a
                color #507DAF
        .m-box
            width 100%
            height 0.55rem
            display flex
            padding 0.15rem 0.12rem 0 0.12rem
            .m-avatar-box
                width .32rem
                height .32rem
                display flex
                justify-content center
                .m-img-box
                    display block
                    position relative
                    img
                        width 100%
                        height 100%
                        vertical-align top
                        border-radius 50%
                    i
                        position absolute
                        right -0.01rem
                        bottom -0.04rem
            .m-box-dir
                flex 1
                margin 0.03rem 0 0 0.08rem
                overflow hidden
                .m-text-box
                    .m-text-cut
                        width 100%
                        overflow hidden
                        white-space nowrap
                        text-overflow ellipsis
                        color #333
                        font-size 0.14rem
                        font-weight normal
                        i
                            vertical-align -0.02rem
                        span
                            color #939393
                            font-size 0.12rem
            .m-add-box
                text-align center
                display inline-block
                width 0.75rem
                height 0.25rem
                line-height 0.25rem
                $border(1px, #87909a)
                h4
                    display inline-block
                    font-size 0.12rem
                    color #87909a
                    font-weight normal
                    vertical-align top
    .weibo-main
        padding 0 0.12rem
        .weibo-og
            padding 0.12rem 0 0 0.04rem
            .weibo-text
                font-size 0.16rem
                padding-bottom 0.1rem
                img
                    width 0.16rem !important
                    height 0.16rem !important
                a
                    color #3c6e9e
            .weibo-media-wraps
                ul
                    li
                        box-sizing border-box
                        width 33.33%
                        padding 0 0.05rem 0.05rem 0
                        display inline-block
                        vertical-align top
                        .m-img-box
                            padding-bottom 100%
                            position relative
                            img
                                position absolute
                                width 100%
                                height 100%
                                object-fit cover
            .card-video
                .mwb-video
                    position relative
                    width 100%
                    height 0
                    padding-bottom 56.25%
                    .m-img-box
                        position absolute
                        top 0
                        left 0
                        width 100%
                        height 100%
                        img
                            width 100%
                            height 100%
                            vertical-align top
                            object-fit cover
                    .mwbv-play-button
                        position absolute
                        width 0.54rem
                        height 0.54rem
                        top 50%
                        left 50%
                        margin-left -0.27rem
                        margin-top -0.27rem
                        z-index 5
                    .mwbv-info-bar
                        padding-top 0.15rem
                        .m-box
                            .m-box-col
                                flex 1
    .f-footer-ctrl
        padding 0 0.12rem
        height 0.5rem
        line-height 0.5rem
        color rgba(40, 47, 60, 0.8)
        $border(0 0 1px 0)
        .weibo-report
            float left
        .weibo-comments, .weibo-like
            margin-left 0.27rem
            float left
        h4
            display inline-block
            font-size 0.13rem
            font-weight 300
            margin-left 0.04rem
        aside
            float right
            font-size 0.16rem
.index-scroll
    width 100%
    height 100%
    overflow hidden
    .index-scroll-content
        width 100%
        min-height 200%
</style>