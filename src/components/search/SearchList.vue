<template>
    <div>
        <div v-for="(card,index) in list" :key="index">
            <div class="wb-item" v-if="card.card_type == 9">
                <div class="card-title" v-if="index < 4">
                    <div class="m-ctrl-box">
                        <div class="m-diy-btn m-box-col m-box-center m-box-center-a">
                            <h4>热门</h4>
                        </div>
                    </div>
                </div>
                <div class="card-wrap">
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
                                    <span class="from" v-if="card.mblog.source">来自 {{card.mblog.source}}</span>
                                </h4>
                            </div>
                        </div>
                    </header>
                </div>
                <article class="weibo-main">
                    <div class="weibo-og">
                        <div v-html="card.mblog.text" class="weibo-text"  @click="detailClick(card.mblog.id , card)"></div>
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
                                <button class="mwbv-play-button" @click="handleVideoShowClick(card.mblog.page_info.page_pic.url , card.mblog.page_info.media_info.mp4_hd_url)">
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
                <footer class="m-ctrl-box m-box-center-a">
                    <div class="m-diy-btn m-box-col m-box-center m-box-center-a">
                        <i class="m-font m-font-forward"></i>
                        <h4>809</h4>
                    </div>
                    <span class="m-line-gradient"></span>
                    <div class="m-diy-btn m-box-col m-box-center m-box-center-a"  @click="detailClick(card.mblog.id , card)">
                        <i class="m-font m-font-comment"></i>
                        <h4>3943</h4>
                    </div>
                    <span class="m-line-gradient"></span>
                    <div class="m-diy-btn m-box-col m-box-center m-box-center-a">
                        <i class="m-icon m-icon-like"></i>
                        <h4>1.4万</h4>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import store from 'store'
import { ImagePreview } from 'vant';

Vue.use(ImagePreview);

export default {
    props: ["list"],
    mounted() {

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
    },

};
</script>

<style lang='stylus' scoped>
@import '~assets/libs/border.styl'

.wb-item
    margin-bottom 0.06rem
    .card-title
        margin-bottom 0.15rem
        padding 0 0.12rem
        height 0.35rem
        line-height 0.35rem
        font-size 0.14rem
        position relative
        border-top-width 0
        border-right-width 0
        border-bottom-width 1px
        border-left-width 0
        border-color #e6e6e6
        border-style solid
        h4
            font-size 0.13rem
            font-weight normal
            color #939393
footer
    display flex
    align-items center
    height 0.35rem
    line-height 0.35rem
    $border(1px 0 0 0)
    .m-diy-btn
        flex 1
        color #939393
        height 100%
        justify-content center
        display flex
        .m-icon-like
            position relative
            margin-top 0.1rem
        h4
            margin-left 0.04rem
            font-weight normal
    .m-line-gradient
        -webkit-mask -webkit-linear-gradient(top, transparent, #000 30%, #000 70%, transparent 100%)
        width 0.01rem
        background-color #e6e6e6
        height 0.24rem
</style>