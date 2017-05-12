import Vue from "vue";
export default Vue.component('pictureList', {
	props: ['masterArray'], //the data for the prop is acquired though the DOM
	template: `
        <div class="row">
            <div class="col l3 m6 s12 placement-class" v-for="items in masterArray">
                <div class="card">
                    <a class="card-text" target="_blank" href="#">
                    <div class="card-image card-image-img" :style="{backgroundImage: socialMediaImage(items.code, items.type, items.post_image)}">
                        <span class="card-title-bottom  card-belt">
                            <p class="card-belt-font display-inline ">{{items.code}}</p>                                    
                            <img class="card-picture-belt-position" :src="socialMediaLogo(items.type)"  style="width:29px;height:29px;">
                        </span>
                    </div>
                    </a>
                    <div class="card-content right-align card-content-additions">
                        <p class="card-text">
                            <span class="emphasis">{{items.post_likes}}</span> people 
                            <span class="tooltip card-post-tooltip-position"><i class="material-icons really-tiny tooltip">info_outline</i>
                            <span class="tooltiptext">Social engagement score</span></span>
                        </p>
                    </div>
                </div>                        
            </div>
        </div>
          `,
    methods: {
        socialMediaLogo: function(sm){ //dynamic url rendering doesn't work correctly
            var images ='img/' + sm + '.png'
            return images
        },
        socialMediaImage: function(code, type, url){
            var images = `url(http://api.piratetimes.net/img/uploads/${code}/${type}/${url})`
            return images

        }
    }

	})
