import Vue from "vue";
import _ from 'lodash';
import throttle from 'lodash.throttle';
import {getData} from "./mixins/getData";
import pictureList from "./components/pictureComponent";
import {infiniteScroll} from "./mixins/infiniteScroll";


    var vue1 = new Vue ({
        el: "#root",
        data: {
            infiniteScrollCurrentOffset:0,
            infiniteScrollOffset: 100,
            infiniteScrollPage: 0,
            infiniteScrollPerPage: 20, //how many items are loaded per page
            masterArray: [], //holds all the entires that are visible
            tempArray: [] //holds all the entries of a single GET.
        },
        methods: {
            scrolling: function(){
                window.addEventListener('scroll', () => {this.infiniteScroll(this.infiniteScrollPerPage)});
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