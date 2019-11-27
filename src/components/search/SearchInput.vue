<template>
    <div class="ntop-nav">
        <div class="nt-left" @click="handleGoBack">
            <i class="m-font m-font-arrow-left"></i>
        </div>
        <div class="nt-sbox">
            <form onsubmit="return false;" class="nt-search">
                <i class="m-font m-font-search"></i>
                <input @keydown.enter="handleSearch(keyWords)" v-model="keyWords" type="text" />
                <span class="m-font icon-cross" @click="handleClearClick"></span>
            </form>
        </div>
        <div id="write">
            <div class="lite-iconf lite-iconf-releas"></div>
        </div>
    </div>
</template>

<script>
import { ajax } from "utils/ajax";

export default {
    props : ['value'],
    data() {
        return {
            keyWords : this.value ||''
        }
    },
    mounted() {

    },
    methods: {
        handleClearClick(){
            this.keyWords = ''
        },
        async handleSearch(keyWords){
            this.$emit('keyWords' , keyWords)
            let result = await ajax({
                url: `/api/container/getIndex?containerid=100103type%3D1%26q%3D${keyWords}&page_type=searchall`,
                method: "get"
            });
            this.$store.dispatch('search/addAccurateSearchData' , {
                accurateSearchData : result.data.data
            })
        },
        handleGoBack(){
            if(this.$route.query.extparam){
                this.$router.replace({
                    query : {
                        containerid : 231583
                    }
                })
            }else{
                this.$router.push({
                    path : '/'
                })
            }
        }
    },
};
</script>

<style lang='stylus' scoped>
@import '~assets/libs/border.styl'

.ntop-nav
    background #fff
    display flex
    align-items center
    height 0.44rem
    padding 0 0.1rem
    $border(0 0 1px 0)
    .nt-left
        padding-right 0.19rem
        cursor pointer
        i
            font-size 0.16rem
    .nt-sbox
        height 28px
        border-radius 4px
        background-color #e3e4e6
        line-height 30px
        flex 1
        .nt-search
            position relative
            width 100%
            flex-basis auto
            flex-grow 1
            flex-shrink 1
            display -webkit-box
            display -ms-flexbox
            display flex
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
            span
                font-size 0.2rem
    #write
        margin-left 0.12rem
</style>