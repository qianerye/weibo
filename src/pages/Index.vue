<template>
    <div class="index-wrap">
        <Top @hightLight="handleHightLight" @hotWord="handleHotWord" :type="type"></Top>
        <main>
            <div v-if="list.length > 0" style="width:100%;height:100%">
                <div v-if="type === 'samecity'" style="width:100%;height:100%">
                    <SameCityList 
                        :cards="list" 
                        :type="type"
                        @video="getVideoSrc"
                        @loginShow="handleLoginShow"
                    ></SameCityList>
                </div>
                <div v-else style="width:100%;height:100%">
                    <WeiboList
                        :cards="list"
                        :type="type"
                        @video="getVideoSrc"
                        @loginShow="handleLoginShow"
                    ></WeiboList>
                </div>
            </div>
            <Skeleton v-else></Skeleton>
        </main>
        <transition name="fade">
            <LoginBtn v-show="!loginShow"></LoginBtn>
        </transition>
        <Video v-if="videoShow" @videoShow="handleVideoShow" :videoSRC="videoSRC"></Video>
    </div>
</template>

<script>
import Vue from "vue";
import store from "store";
import sessionstorage from 'sessionstorage'
import Video from "components/Video";
import Skeleton from "components/Skeleton";
import WeiboList from "components/WeiboList";
import SameCityList from "components/SameCityList";
import Top from "components/Top";
import LoginBtn from "components/LoginBtn";
import { ajax } from "utils/ajax";
import { ImagePreview } from "vant";
Vue.use(ImagePreview);
export default {
    data() {
        return {
            type: "popular",
            history: null,
            loginShow: false,
            videoShow: false,
            hotWord: "",
            videoSRC: {},
            list: []
        };
    },
    components: {
        Skeleton,
        WeiboList,
        Top,
        LoginBtn,
        SameCityList,
        Video
    },
    async beforeMount() {
        this.history = store.get("h5_cur_group");
        if (this.history) {
            this.type = this.history.type;
        }
        let url = "api/container/getIndex?containerid=102803&openApp=0";
        if (!this.history) {
            store.set("h5_cur_group", {
                type: "popular",
                name: "热门",
                gid: "102803",
                api: "api/container/getIndex?containerid=102803&openApp=0"
            });
        } else {
            url = this.history.api;
            this.type = this.history.type;
        }
        let result = await ajax({
            method: "get",
            url: url
        });
        this.list = this.type === 'samecity' ? result.data.data.statuses : result.data.data.cards
        let myAllData = JSON.parse(sessionstorage.getItem('myAllData')) || []
        this.list = [...myAllData , ...this.list]
    },
    methods: {
        handleHotWord(hotWord) {
            this.hotWord = hotWord;
        },
        handleLoginShow(loginShow) {
            this.loginShow = loginShow === 1 ? true : false;
        },
        async handleHightLight(hightLight) {
            this.type = hightLight;
            this.list = [];
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
            let url = req[hightLight].api;
            let result = await ajax({
                method: "get",
                url: url
            });

            store.set("h5_cur_group", req[hightLight]);
            if (hightLight === "samecity") {
                this.list = result.data.data.statuses;
            } else {
                this.list = result.data.data.cards;
            }
        },
        getVideoSrc(videoSRC) {
            this.videoShow = true;
            this.videoSRC = videoSRC;
        },
        handleVideoShow(videoShow) {
            this.videoShow = videoShow;
        }
    },
    computed: {
        myWriteData(){
            return this.$store.state.write.myWriteData
        }
    },
    watch: {
        myWriteData(){
            this.list = [...this.myWriteData , ...this.list]
        }
    },
    beforeRouteLeave(to, from, next) {
        from.query.type = this.type;
        from.query.hotWord = this.hotWord;
        next();
    }
};
</script>

<style lang="stylus" scoped>
.index-wrap
    width 100%
    height 100%
    display flex
    flex-direction column
    position relative
    main
        flex 1
        overflow hidden
.m-tips-bottom
    margin-top 0.03rem
</style>
<style lang="css">
@media screen and (min-width: 414px) and (max-width: 750px) {
    .header-top {
        height: 0.44rem;
    }
}
@media screen and (min-width: 751px) {
}
</style>
