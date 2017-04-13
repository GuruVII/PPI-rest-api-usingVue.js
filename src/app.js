import Vue from "vue";
import {getData} from "./mixins/getData";
import myDefaults from "./components/pictureComponent";



	var vue1 = new Vue ({
		el: "#root",
		data: {
			masterArray: []
		},
		mixins: [getData],
		mounted() {
			this.getData();
		}
	})

