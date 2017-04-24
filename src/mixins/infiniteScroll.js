import _ from 'lodash';
import throttle from 'lodash.throttle';

const infiniteScroll = {
	methods : { //_.throttle is from lodash and it throttles the eventlisteners from firing on every scroll event
		infiniteScroll: _.throttle(function(perPage){
			//determines how far away you are from the top of the screen. It is written this way becuase none work in every browser.
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; 
			console.log(`windows height: ${window.innerHeight}`);
			console.log(`Body top: ${scrollTop}`);
			console.log(`offset height: ${document.body.offsetHeight}`);
			//if the screen is 200px from the edge or if the page jsut started (thus offset is 0), do the code
			if ((window.innerHeight + scrollTop) > (document.body.offsetHeight - 200) || (this.infiniteScrollCurrentOffset == 0)){
				let i = 0;
				let entry;	
				do {
					i++
					entry = this.infiniteScrollPage * this.infiniteScrollPerPage + i
					this.masterArray.push(this.tempArray[entry])
				}
				while (i < this.infiniteScrollPerPage)
				

				if (((this.infiniteScrollPage * this.infiniteScrollPerPage) % this.infiniteScrollOffset) == 0 ){
					// increase the currentoffset and reset the page and temporaryArray
					this.infiniteScrollCurrentOffset += this.infiniteScrollOffset;
					this.infiniteScrollPage = 0;
					this.tempArray = [];
					this.getData(this.offset);
				}
				else {
					this.infiniteScrollPage++
				}
				
			}
		}, 250)

	}
}
export {infiniteScroll};