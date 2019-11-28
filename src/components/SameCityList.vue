<template>
    <div class="index-scroll">
        <div class="index-scroll-content">
            <div class="m-tips m-tips-tp">
                <img v-if="loading" src="~assets/images/ajax-loader.gif" />
                <i v-else class="m-font" :class="pullDown"></i>
                <span class="main-link">{{pullDownMessage}}</span>
            </div>
            <div class="card m-panel card16 m-col-3">
                <div class="card-wrap">
                    <div class="card-main">
                        <div class="m-item-box card19-mode">
                            <div class="m-diy-btn m-box-col m-box-center0 m-box-center-a"
                                @click="handleChangePlace"
                            >
                                <img
                                    src="https://h5.sinaimg.cn/upload/100/1078/2019/07/19/lbs_change_location.png"
                                    class
                                />
                                <div class="m-box-dir text-box">
                                    <h4 class="m-text-cut">切换位置</h4>
                                </div>
                            </div>
                        </div>
                        <div class="m-item-box card19-mode">
                            <div class="m-diy-btn m-box-col m-box-center0 m-box-center-a">
                                <img
                                    src="https://h5.sinaimg.cn/upload/100/1078/2019/07/19/lbs_send_weibo.png"
                                    class
                                />
                                <div class="m-box-dir text-box">
                                    <h4 class="m-text-cut">发同城微博</h4>
                                </div>
                            </div>
                        </div>
                        <div class="m-item-box card19-mode">
                            <div class="m-diy-btn m-box-col m-box-center0 m-box-center-a">
                                <img
                                    src="https://h5.sinaimg.cn/upload/100/1078/2019/08/30/cityhot_icon.png"
                                    class
                                />
                                <div class="m-box-dir text-box">
                                    <h4 class="m-text-cut">同城热门</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wb-item-wrap card9" v-for="(card,index) in cards" :key="index">
                <div class="wb-item">
                    <div class="card-wrap">
                        <div class="card-title f-card-title" v-if="type === 'novelty'">
                            <div class="m-ctrl-box">
                                <div class="m-diy-btn m-box-col m-box-center m-box-center-a">
                                    <img
                                        src="https://h5.sinaimg.cn/upload/1080/674/2017/12/25/timeline_title_novelty3x_default.png"
                                    />
                                    <a>{{card.title.text}}</a>
                                </div>
                            </div>
                        </div>
                        <header class="weibo-top m-box">
                            <div class="m-avatar-box m-box-center">
                                <a href="javascript:void(0)" class="m-img-box">
                                    <img :src="card.user.profile_image_url" />
                                    <i v-if="card.user.mbrank > 0" class="m-icon m-icon-goldv"></i>
                                </a>
                            </div>
                            <div class="m-box-dir m-box-col m-box-center">
                                <div class="m-text-box">
                                    <a href="javascript:void(0)">
                                        <h3 class="m-text-cut">
                                            {{card.user.screen_name}}
                                            <i
                                                v-if="card.user.mbrank > 0"
                                                class="m-icon"
                                                :class="'m-icon-vipl' + card.user.mbrank"
                                            ></i>
                                        </h3>
                                    </a>
                                    <h4 class="m-text-cut">
                                        <span class="time">{{new Date(card.created_at).getTime() | changeTime}} </span>
                                        <span class="from" v-if="card.source"> 来自 {{card.source}}</span>
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
                            <div
                                v-html="card.text"
                                @click="detailClick(card.id , card)"
                                class="weibo-text"
                            ></div>
                            <div
                                class="weibo-media-wraps weibo-media f-media media-b"
                                v-if="card.pic_num > 0"
                            >
                                <ul class="m-auto-list" v-if="card.pics.length === 4">
                                    <li
                                        class="m-auto-box3"
                                        v-for="(pic,index) in card.pics"
                                        :key="pic.pid"
                                        style="width:34%"
                                    >
                                        <div class="m-img-box m-imghold-4-3">
                                            <img
                                                :src="pic.url"
                                                @click.stop="getImgs(card.pics , index)"
                                                class="f-bg-img"
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <ul class="m-auto-list" v-else>
                                    <li
                                        class="m-auto-box3"
                                        v-for="(pic,index) in card.pics"
                                        :key="pic.pid"
                                    >
                                        <div class="m-img-box m-imghold-4-3">
                                            <img
                                                :src="pic.url"
                                                @click="getImgs(card.pics , index)"
                                                class="f-bg-img"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-video type-video" v-if="card.obj_ext">
                                <div class="mwb-video mwbv-play mwbv-info">
                                    <div class="m-img-box" v-if="card.page_info">
                                        <img :src="card.page_info.page_pic.url" />
                                    </div>
                                    <button
                                        class="mwbv-play-button"
                                        @click="handleVideoShowClick(card.page_info.page_pic.url , card.page_info.media_info.mp4_hd_url)"
                                    >
                                        <span class="mwbv-icon"></span>
                                    </button>
                                    <div class="mwbv-info-bar">
                                        <div class="m-box">
                                            <div class="m-box-col">{{card.obj_ext}}</div>
                                            <div
                                                class="time"
                                            >{{parseInt(card.page_info.media_info.duration / 60)}} : {{card.page_info.media_info.duration % 60}}</div>
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
                                v-if="card.reposts_count > 10000"
                            >{{parseInt(card.reposts_count / 1000) / 10}}万</h4>
                            <h4 v-else>{{card.reposts_count}}</h4>
                        </div>
                        <div
                            @click="detailClick(card.id , card)"
                            class="m-diy-btn m-box-center-a weibo-comments"
                        >
                            <i class="lite-iconf lite-iconf-comments"></i>
                            <h4
                                v-if="card.comments_count > 10000"
                            >{{parseInt(card.comments_count / 1000) / 10}}万</h4>
                            <h4 v-else>{{card.comments_count}}</h4>
                        </div>
                        <div class="m-diy-btn m-box-center-a weibo-like">
                            <i class="lite-iconf lite-iconf-like"></i>
                            <h4
                                v-if="card.attitudes_count > 10000"
                            >{{parseInt(card.attitudes_count / 1000) / 10}}万</h4>
                            <h4 v-else>{{card.attitudes_count}}</h4>
                        </div>
                        <aside>
                            <i class="m-font m-font-dot-more"></i>
                        </aside>
                    </footer>
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
import timeago from 'timeago.js';
import BScoll from "better-scroll";
import { ajax } from "utils/ajax";
import store from "store";

import { ImagePreview } from "vant";
Vue.use(ImagePreview);

export default {
    props: ["list", "type"],
    data() {
        return {
            cards : this.list,
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
        this.$nextTick(() => {
            this.inscroll(this);
        });
    },

    methods: {
        handleChangePlace(){
            location.href='https://place.weibo.com/map/?maploc=116.250204,40.121736,12z&uid=90008342219077638&luicode=10000891'
        },
        handleVideoShowClick(img, video) {
            this.$emit("video", { img, video });
        },
        detailClick(id, card) {
            console.log(id , card)
            store.set("h5_feed_card", card);
            this.$router.push({
                path: `/detail/${id}`
            });
        },
        getImgs(images, index) {
            let imgs = [];
            images.forEach(item => {
                imgs.push(item.large.url);
            });
            ImagePreview({
                images: imgs,
                startPosition: index,
                showIndex: true,
                loop: false,
                maxZoom: 5
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
                popular: "sinceid=",
                novelty: "page=",
                samecity: "page=",
                funny: "sinceid=",
                emotion: "sinceid=",
                star: "sinceid=",
                sociology: "sinceid=",
                digital: "sinceid=",
                sports: "sinceid=",
                car: "sinceid=",
                movie: "sinceid=",
                game: "sinceid="
            };
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
                click: true,
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
                if (!_this.scrollLoginBlock) {
                    setTimeout(() => {
                        _this.$emit("loginShow", bscroll.movingDirectionY);
                        _this.scrollLoginBlock = false;
                    }, 500);
                    _this.scrollLoginBlock = true;
                }
            });
            bscroll.on("scrollEnd", function() {
                if (this.y > -40 && this.y <= 0) {
                    this.scrollTo(0, -40, 500);
                }
            });
            bscroll.on("pullingDown", async function() {
                let url = req[_this.type].api;
                _this.pullDownMessage = "加载中···";
                _this.loading = true;
                let res = await ajax({
                    method: "get",
                    url: url
                });
                _this.cards = res.data.data.statuses;
                let reg = /href=["|'](.*?)["|']/g;
                _this.cards.forEach((value, index) => {
                    value.text = value.text.replace(reg, "");
                });
                this.finishPullDown();
                this.refresh();
                _this.loading = false;
                this.scrollTo(0, -40, 500);
            });
            bscroll.on("pullingUp", async function() {
                let url =
                    req[_this.type].api +
                    "&" +
                    moreReq[_this.type] +
                    _this.number;
                _this.pullUpMessage = "加载中···";
                _this.loading = true;
                let newResult = await ajax({
                    method: "get",
                    url: url
                });
                let newList = newResult.data.data.statuses;
                _this.cards = [..._this.cards, ...newList];
                let reg = /href=["|'](.*?)["|']/g;
                _this.cards.forEach((value, index) => {
                    value.text = value.text.replace(reg, "");
                });
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

.card16
    background #fff
    margin-bottom 0.1rem
    .card-wrap
        padding 0 0.12rem
        .card-main
            position relative
            .m-item-box:nth-child(1):before
                content ''
                position absolute
                top 0.16rem
                bottom 0.16rem
                right 0
                width 1px
                background-color #e6e6e6
            .m-item-box:nth-child(2):before
                content ''
                position absolute
                top 0.16rem
                bottom 0.16rem
                right 0
                width 1px
                background-color #e6e6e6
            .m-item-box:nth-child(3):before
                content ''
                position absolute
                top 0.16rem
                bottom 0.16rem
                right 0
                width 0px
                background-color #e6e6e6
            .m-item-box
                position relative
                display inline-block
                width 33.3%
                padding 0.1rem 0 0.14rem 0
                .m-diy-btn
                    display flex
                    align-items center
                    flex-direction column
                    position relative
                    height 100%
                    img
                        width 0.36rem
                        height 0.36rem
                    h4
                        margin-top 0.07rem
                        font-size 0.12rem
                        font-weight 400
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
                        justify-content center
                        img
                            width 100%
    .van-image-preview__index
        position absolute
        top 0
        left 50%
        color #fff
.card9
    .wb-item
        background #fff
        .card-wrap
            height 100%
            .card-title
                padding-top 0.1rem
                padding-left 0.12rem
                padding-bottom 0.08rem
                white-space nowrap
                text-overflow ellipsis
                img
                    width 0.14rem
                    height 0.14rem
                a
                    color #507DAF
            .m-box
                width 100%
                height 0.55rem
                display flex
                padding 0.15rem 0.12rem 0 0.12rem
                .m-avatar-box
                    width 0.32rem
                    height 0.32rem
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
                    overflow hidden
                    margin 0.03rem 0 0 0.08rem
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
                    margin-bottom 0.1rem
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