<template>
    <div class="video">
        <div class="goback" @click="handleBackClick">
           <i class="yo-ico">&#xf077;</i>
        </div>
        <div class='video-player'>
            <vue-plyr>
                <video
                    :poster="videoSRC.img"
                    :src="videoSRC.video"
                >
                    <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default />
                </video>
            </vue-plyr>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import VuePlyr from "vue-plyr";

Vue.use(VuePlyr, {
    plyr: {
        fullscreen: { enabled: true }
    },
    emit: ["ended"]
});
export default {
    props : ['videoSRC'],
    methods: {
        handleBackClick(){
            this.$emit('videoShow' , false)
        }
    },
};
</script>

<style lang='stylus' scoped>
.video
    height 100%
    width 100%
    position absolute
    top 0
    left 0
    background #000
    .goback
        width .38rem
        height .38rem
        padding .01rem .06rem
        position relative 
        top .15rem
        left .05rem
        z-index 21
        text-align center
        line-height .38rem
        i
            font-size .24rem
            color #fff
    .video-player
        height 100%
        width 100%
        position absolute
        top 0
        left 0
        background #000
        z-index 20
        display flex
        align-items center
    .video-player>div
        vertical-align middle
        width 100%

    .plyr__video-wrapper
        width 100%!important
        height 100% !important
        video 
            width 100%!important
            height 100%!important
.plyr
    position inherit!important
</style>