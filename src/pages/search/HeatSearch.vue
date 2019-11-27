<template>
    <div style="height:100%;position:relative">
        <div class="scroll">
            <div>
                <SearchInput :value='titleData.cardlist_title'></SearchInput>
                <HeatSearchTitle 
                    v-if="titleData.cardlist_head_cards.length === 2" 
                    :title='titleData.cardlist_head_cards[0].head_data'
                ></HeatSearchTitle>
                <SearchNav
                    :titleNav='titleData.cardlist_head_cards.length === 2 ? titleData.cardlist_head_cards[1] : titleData.cardlist_head_cards[0]'
                ></SearchNav>
                <SearchList :list='list' @video='handleVideoShowTrue'></SearchList>
            </div>
        </div>
        <Video v-if="videoShow" @videoShow='handleVideoShowFalse' :videoSRC='videoSRC'></Video>
    </div>
</template>

<script>
import SearchInput from 'components/search/SearchInput'
import SearchList from 'components/search/SearchList'
import SearchNav from 'components/search/SearchNav'
import HeatSearchTitle from 'components/search/HeatSearchTitle'
import BScroll from 'better-scroll'
import Video from 'components/Video'
export default {
    components : {
        SearchInput,
        SearchList,
        SearchNav,
        HeatSearchTitle,
        Video
    },
    data() {
        return {
            titleData: this.$store.state.search.heatSearchData.cardlistInfo,
            list: this.$store.state.search.heatSearchData.cards,
            videoShow : false,
            videoSRC : null
        };
    },
    mounted() {
        let bscroll = new BScroll('.scroll' , {
            bounce : false,
            mouseWheel : true,
            click : true,
            preventDefault :false
        })
    },
    watch: {
        $route(){
            this.$destroy()
        }
    },
    methods: {
        handleVideoShowTrue(videoSRC){
            this.videoSRC = videoSRC
            this.videoShow = true
            console.log(this.videoSRC)
        },
        handleVideoShowFalse(videoShow){
            this.videoShow = videoShow
        }
    },

};
</script>

<style lang='stylus' scoped>
.scroll
    width 100%
    height 100%
</style>