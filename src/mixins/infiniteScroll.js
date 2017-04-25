import _ from 'lodash';
import throttle from 'lodash.throttle';

const infiniteScroll = {
	methods : { //_.throttle is from lodash and it throttles the eventlisteners from firing on every scroll event
		infiniteScroll: _.throttle(function(){
			//determines how far away you are from the top of the screen. It is written this way becuase none work in every browser.
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; 
			//if the screen is 200px from the edge or if the page jsut started (thus offset is 0), do the code
			if ((window.innerHeight + scrollTop) > (document.body.offsetHeight - 200)){
				let i = 0;
				let entry;
				//this loops pushes data from the tempArray to the masterArray, while accounting for how far we've gone though the tempArray
				do {	
					entry = this.infiniteScrollPage * this.infiniteScrollPerPage + i
					i++
					//console.log(entry)
					this.masterArray.push(this.tempArray[entry])
				}
				while (i < this.infiniteScrollPerPage)

				//checks if the entire tempArray has be traversed, if so gets new data for the temp array
				if ((((this.infiniteScrollPage + 1) * this.infiniteScrollPerPage) % this.infiniteScrollOffset) == 0 ){
					// increase the currentoffset and reset the page and temporaryArray
					this.infiniteScrollCurrentOffset += this.infiniteScrollOffset;
					this.infiniteScrollPage = 0;
					this.tempArray = [];
					this.getData(this.infiniteScrollCurrentOffset);
				}
				else {
					console.log("page has been turned")
					this.infiniteScrollPage++
				}
				
			}
		}, 250)

	}
}
export {infiniteScroll};