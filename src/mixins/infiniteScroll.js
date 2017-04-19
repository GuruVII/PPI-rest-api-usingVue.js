const infiniteScroll = {
	methods : {
		infiniteScroll: function(){
			//determines how far away you are from the top of the screen. It is written this way becuase none work in every browser.
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0; 
			console.log(`windows height: ${window.innerHeight}`);
			console.log(`Body top: ${scrollTop}`);
			console.log(`offset height: ${document.body.offsetHeight}`);
			if ((window.innerHeight + scrollTop) > (document.body.offsetHeight - 200)){
				this.offset += 100;
				this.getData(this.offset)
			}
		}

	}
}
export {infiniteScroll};