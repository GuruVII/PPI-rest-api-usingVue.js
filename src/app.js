import Vue from "vue";
import {getData} from "./mixins/getData";
import pictureList from "./components/pictureComponent";
import {infiniteScroll} from "./mixins/infiniteScroll";


    var vue1 = new Vue ({
        el: "#root",
        data: {
            offset:0,
            masterArray: []
        },
        methods: {
            scrolling: function(){
                window.addEventListener("scroll", () => {
                this.infiniteScroll();
                });
            }
        },
        mixins: [getData, infiniteScroll],
        mounted() {
            this.getData(this.offset);
            
            this.scrolling();
        },
        components: {
            pictureList
        }
    })

