import Vue from "vue";
export default Vue.component('picture-list', {
		template: `
		<div class="row">
			<div class="col l3 m6 s12 placement-class" v-for="items in masterArray">
				<div class="col s12 m7">
		          <div class="card">
		            <div class="card-image">
		              <img src="images/sample-1.jpg">
		              <span class="card-title">Card Title</span>
		            </div>
		            <div class="card-content">
		              <span>{{items.post_likes}}</span> people 
		            </div>
		            <div class="card-action">
		              <a href="#">This is a link</a>
		            </div>
		          </div>
	          </div>
          </div>
        </div>
          `
	})
