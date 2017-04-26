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
            masterArray: [], //holds all the entires that are visible.
            tempArray: [], //holds all the entries of a single GET.
            filters: {type: "", code: "", orderBy: ""}
        },
        methods: {
            scrolling: function(){
                window.addEventListener('scroll', () => {this.infiniteScroll(this.infiniteScrollPerPage)});
            },
            filtering: function(type, code, orderBy){
                this.filters.type = type;
                this.filters.code = code;
                this.filters.orderBy = orderBy;
            }
            

        },
        mixins: [getData, infiniteScroll],
        mounted() {
            this.getData(this.infiniteScrollCurrent, this.filters.type, this.filters.code, this.filters.orderBy);
            this.scrolling();
        },
        components: {
            pictureList
        }
    })