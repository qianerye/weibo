<template>
    <div style="height:100%;position:relative">
        <div class="scroll">
            <div>
                <SearchInput
                    :keyWords='handleGetKeyWords'
                    :value="titleData.cardlist_title"
                ></SearchInput>
                <SearchNav
                    v-if="titleData.cardlist_head_cards.length > 0"
                    :titleNav="titleData.cardlist_head_cards[0]"
                ></SearchNav>
                <AccurateSearchTitle v-if="list" :list="list"></AccurateSearchTitle>
                <SearchList v-if="list" :list="list" @video="handleVideoShowTrue"></SearchList>
            </div>
        </div>
        <Video v-if="videoShow" @videoShow="handleVideoShowFalse" :videoSRC="videoSRC"></Video>
    </div>
</template>

<script>
import SearchInput from "components/search/SearchInput";
import SearchNav from "components/search/SearchNav";
import SearchList from "components/search/SearchList";
import AccurateSearchTitle from "components/search/AccurateSearchTitle";
import BScroll from "better-scroll";
import Video from "components/Video";
import Vue from "vue";
export default {
    data() {
        return {
            videoShow: false,
            videoSRC: null,
            keyWords : ''
        };
    },
    computed: {
        titleData() {
            return this.$store.state.search.accurateSearchData.cardlistInfo || {}
        },
        list() {
            return this.$store.state.search.accurateSearchData.cards || [];
        },
    },
    components: {
        SearchInput,
        SearchNav,
        SearchList,
        AccurateSearchTitle
    },
    mounted() {
        let bscroll = new BScroll(".scroll", {
            bounce: false,
            mouseWheel: true,
            click: true,
            preventDefault: false
        });
    },
    watch: {
        $route() {
            this.$destroy();
        }
    },
    methods: {
        handleGetKeyWords(keyWords){
            this.keyWords = keyWords
        },
        handleVideoShowTrue(videoSRC) {
            this.videoSRC = videoSRC;
            this.videoShow = true;
        },
        handleVideoShowFalse(videoShow) {
            this.videoShow = videoShow;
        },
    }
};
</script>

<style lang='stylus' scoped>
.scroll
    width 100%
    height 100%
</style>