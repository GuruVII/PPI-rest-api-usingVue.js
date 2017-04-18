import Vue from "vue";
import {getData} from "./mixins/getData";
import pictureList from "./components/pictureComponent";


	var vue1 = new Vue ({
		el: "#root",
		data: {
			masterArray: []
		},
		mixins: [getData],
		mounted() {
			this.getData();
		},
		components: {
			pictureList
		}
	})

