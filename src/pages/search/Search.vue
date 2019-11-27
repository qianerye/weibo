<template>
    <div style="height:100%;position:relative">
        <keep-alive>
            <component :is="componentId"></component>
        </keep-alive>
    </div>
</template>

<script>
import SearchIndex from "./SearchIndex";
import HeatSearch from "./HeatSearch";
import AccurateSearch from "./AccurateSearch";
import { ajax } from "utils/ajax";

export default {
    data() {
        return {
            componentId: "SearchIndex"
        };
    },
    async created () {
        let containerid =
            typeof this.$route.query.containerid === "string"
                ? this.$route.query.containerid.substring(0, 6)
                : this.$route.query.containerid;
        if (this.$route.params.jump_type === "change-herf") {
            let reg = /[\w\W]+\?/;
            let query = this.$route.fullPath.replace(reg, "");
            if (containerid == 100103 && this.$route.query.isnewpage) {
                let result = await ajax({
                    url: "/api/container/getIndex?" + query,
                    method: "get"
                });
                this.$store.dispatch("search/addHeatSearchData", {
                    heatSearchData: result.data.data
                });
                this.componentId = "HeatSearch";
            } else if (containerid == 100103) {
                let result = await ajax({
                    url: "/api/container/getIndex?" + query,
                    method: "get"
                });
                this.$store.dispatch("search/addAccurateSearchData", {
                    accurateSearchData: result.data.data
                });
                this.componentId = "AccurateSearch";
            }
        } else {
            this.routeChange(containerid);
        }
    },
    watch: {
        $route() {
            let containerid =
                typeof this.$route.query.containerid === "string"
                    ? this.$route.query.containerid.substring(0, 6)
                    : this.$route.query.containerid;
            this.routeChange(containerid);
            this.$forceUpdate()
        }
    },
    methods: {
        routeChange(containerid) {
            if (containerid == 231583) {
                this.componentId = "SearchIndex";
            } else if (containerid == 100103 && this.$route.query.isnewpage) {
                this.componentId = "HeatSearch";
            } else if(containerid == 100103){
                this.componentId = "AccurateSearch";
            }
        }
    },
    components: {
        SearchIndex,
        HeatSearch,
        AccurateSearch
    },

    beforeRouteEnter(to, from, next) {
        if (!from.name) {
            to.params.jump_type = "change-herf";
        }
        to.query.hotWord = from.query.hotWord ? from.query.hotWord : "";
        next();
    }
};
</script>

<style lang='stylus' scoped></style>