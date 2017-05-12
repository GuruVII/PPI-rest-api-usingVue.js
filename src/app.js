import Vue from "vue";
import Jquery from "jquery"
import Materialize from "materialize-css"
import _ from 'lodash';
import throttle from 'lodash.throttle';
import {getData} from "./mixins/getData";
import pictureList from "./components/pictureComponent";
import filterComponent from "./components/filterComponent";
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
            filtering: function(filter){
                this.masterArray = [];
                this.tempArray = [];
                this.infiniteScrollCurrentOffse = 0;
                this.infiniteScrollPage = 0;
                this.getData(this.infiniteScrollCurrentOffset, this.filters.type, this.filters.code, this.filters.orderBy)
            }
            
            
            

        },
        mixins: [getData, infiniteScroll],
        mounted() {
            this.getData(this.infiniteScrollCurrentOffset, this.filters.type, this.filters.code, this.filters.orderBy);
            this.scrolling();
        },
        components: {
            pictureList,
            filterComponent
        }
    })