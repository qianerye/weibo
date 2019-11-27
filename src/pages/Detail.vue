<template>
    <div class="detail-content">
        <div class="lite-topbar lite-page-top">
            <div class="nav-left" @click="goBack">
                <i class="m-font m-font-arrow-left"></i>
            </div>
            <div class="nav-main">
                <h4>微博正文</h4>
            </div>
            <div class="nav-right">
                <i class="m-font m-font-dot-more"></i>
            </div>
        </div>
        <div class="detail-scroll">
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
                                <i v-if="card.mblog.user.mbrank > 0" class="m-icon m-icon-goldv"></i>
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
                                    <span
                                        class="from"
                                        v-if="card.mblog.source"
                                    >来自 {{card.mblog.source}}</span>
                                </h4>
                            </div>
                        </div>
                    </header>
                </div>
                <article class="weibo-main">
                    <div class="weibo-og">
                        <div v-html="card.mblog.text" class="weibo-text"></div>
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
                                        <img
                                            :src="pic.url"
                                            @click.stop="getImgs(card.mblog.pics , index)"
                                            class="f-bg-img"
                                        />
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
                                        <img
                                            :src="pic.url"
                                            @click="getImgs(card.mblog.pics , index)"
                                            class="f-bg-img"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-video type-video" v-if="card.mblog.obj_ext">
                            <div class="mwb-video mwbv-play mwbv-info">
                                <div class="m-img-box" v-if="card.mblog.page_info">
                                    <img :src="card.mblog.page_info.page_pic.url" />
                                </div>
                                <button class="mwbv-play-button">
                                    <span class="mwbv-icon"></span>
                                </button>
                                <div class="mwbv-info-bar">
                                    <div class="m-box">
                                        <div class="m-box-col">{{card.mblog.obj_ext}}</div>
                                        <div class="time">0:15</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="lite-page-tab">
                <div class="tab-item">
                    <i>
                        转发
                        <em></em>
                    </i>
                    <i
                        v-if="card.mblog.reposts_count > 10000"
                    >{{parseInt(card.mblog.reposts_count / 1000) / 10}}万</i>
                    <i v-else>{{card.mblog.reposts_count}}</i>
                </div>
                <div class="tab-item cur">
                    <i>
                        评论
                        <em></em>
                    </i>
                    <i
                        v-if="card.mblog.comments_count > 10000"
                    >{{parseInt(card.mblog.comments_count / 1000) / 10}}万</i>
                    <i v-else>{{card.mblog.comments_count}}</i>
                </div>
                <div class="tab-item">
                    <i>
                        赞
                        <em></em>
                    </i>
                    <i
                        v-if="card.mblog.attitudes_count > 10000"
                    >{{parseInt(card.mblog.attitudes_count / 1000) / 10}}万</i>
                    <i v-else>{{card.mblog.attitudes_count}}</i>
                </div>
            </div>
            <div class="commentList" v-if="commentList.length > 0">
                <div class="comment-detail" v-for="(comment,index) in commentList" :key="index">
                    <div class="head-portrait">
                        <div class="img-box">
                            <img :src="comment.user.profile_image_url" alt />
                        </div>
                    </div>
                    <div class="comment-content">
                        <div class="user-name">
                            <h4>{{comment.user.screen_name}}</h4>
                        </div>
                        <div class="comment-text">
                            <p v-html="comment.text"></p>
                            <span class="comment-con-img" v-if="comment.pic">
                                <img
                                    :src="comment.pic.url" @click="getImgs(comment.pic.large.url)"
                                />
                            </span>
                        </div>
                        <div class="reply" v-if="comment.total_number > 0">
                            <div v-if="comment.comments">
                                <p v-for="(comment2,index) in comment.comments" :key="index">
                                    <a>{{comment2.user.screen_name}}</a>
                                    :
                                    <span
                                        v-html="comment2.text"
                                    ></span>
                                    <a
                                        v-if="comment.total_number > 2 && comment.total_number < 10000"
                                    >共{{comment.total_number}}条回复></a>
                                </p>
                            </div>
                            <div v-if="comment.more_info_users && !comment.comments">
                                <div v-if="comment.total_number >= 10000">
                                    <a
                                        href="javascript:void(0)"
                                    >{{comment.more_info_users[0].screen_name}}</a>等人
                                    <a>共{{parseInt(comment.total_number / 1000) / 10}}万条回复></a>
                                </div>
                                <div v-else>
                                    <a
                                        href="javascript:void(0)"
                                    >{{comment.more_info_users[0].screen_name}}</a>等人
                                    <a>共{{comment.total_number}}条回复></a>
                                </div>
                            </div>
                        </div>
                        <div class="comment-info">
                            <div class="comment-time">{{comment.created_at}}</div>
                            <div class="comment-interaction">
                                <div class="comment-fabulous">
                                    <i
                                        data-v-3e391902
                                        class="lite-iconf lite-iconf-like"
                                        style="font-size:.14rem"
                                    ></i>
                                    <span
                                        v-if="comment.like_count > 10000"
                                    >{{parseInt(comment.like_count / 1000) / 10}}万</span>
                                    <span v-else>{{comment.like_count}}</span>
                                </div>
                                <div class="comment-comment">
                                    <i
                                        data-v-3e391902
                                        class="lite-iconf lite-iconf-comments"
                                        style="font-size:.14rem"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lite-page-editor">
            <div class="m-box">
                <div class="box-left m-box-col m-box-center-a">
                    <span class="m-box-center-a main-text m-text-cut focus">发表评论</span>
                </div>
                <div class="box-right m-box-center-a">
                    <i class="lite-iconf lite-iconf-report"></i>
                    <i class="lite-iconf lite-iconf-like lite-iconf-like"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import { ajax } from "utils/ajax";
import store from "store";

import { ImagePreview } from "vant";
Vue.use(ImagePreview);

export default {
    data() {
        return {
            card: "",
            type: "popular",
            id: null,
            commentList: []
        };
    },
    async created() {
        this.card = store.get("h5_feed_card");
        this.id = this.$route.params.id;
        this.type = this.$route.params.type;
        if (this.card.mblog.isLongText) {
            let result = await ajax({
                url: `/statuses/extend?id=${this.id}`,
                method: "get"
            });
            this.card.mblog.text = result.data.data.longTextContent;
        }
    },
    async mounted() {
        let result = await ajax({
            url: `/comments/hotflow?id=${this.id}&mid=${this.id}&max_id_type=0`,
            method: "get"
        });
        if (result.data.data) {
            this.commentList = result.data.data.data;
        }
    },
    methods: {
        getImgs(images, index) {
            if(index >= 0){
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
            }else{
                ImagePreview({
                    images: [images],
                    showIndex: true,
                    loop: false,
                    maxZoom: 5
                });
            }
        },
        goBack() {
            this.$router.back();
        }
    },
    beforeRouteLeave(to, from, next) {
        this.$destroy();
        next();
    },
    beforeRouteEnter(to, from, next) {
        to.params.type = from.params.type;
        next();
    }
};
</script>

<style lang='stylus'>
.detail-content
    padding-top 0.44rem
    width 100%
    height 100%
    .detail-scroll
        height 100%
        width 100%
        overflow-y scroll
.commentList
    background #fff
    padding-bottom 0.5rem
    .comment-detail
        display flex
        padding 0.12rem 0 0 0.12rem
        a
            color #507DAF
        .head-portrait
            margin-right 0.08rem
            .img-box
                width 0.32rem
                height 0.32rem
                border-radius 50%
                overflow hidden
                img
                    width 100%
                    height 100%
        .comment-content
            flex 1
            padding 0 0.12rem 0.12rem 0
            border-bottom 1px solid #ddd
            .user-name
                margin-bottom 0.06rem
                h4
                    font-size 0.14rem
                    font-weight normal
            .comment-text
                margin-bottom 0.06rem
                font-size 0.16rem
                p
                    img
                        display inline-block
                        height 0.16rem !important
                        width 0.16rem !important
                .comment-con-img
                    display block 
                    max-width 100px
                    img
                        width 100%

            .reply
                background #f7f7f7
                font-size 0.14rem
                padding 0.08rem 0.1rem
                img
                    display inline-block
                    height 0.14rem !important
                    width 0.14rem !important
            .comment-info
                margin-top 0.08rem
                font-size 0.12rem
                display flex
                color #999
                .comment-time
                    flex 1
                .comment-interaction
                    display flex
                    text-align right
                    .comment-fabulous
                        padding-right 0.1rem
</style>