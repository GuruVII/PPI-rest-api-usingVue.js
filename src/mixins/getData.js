
import axios from "axios";
const getData = {
	methods: {
		getData: function(offset){
			axios.get('http://api.piratetimes.net/api/v1/social/?_format=json', {
				params: {
					sub_type: 'I',
					offset: offset
				}
				})
				.then(response => {
					this.tempArray.push(...response.data)
					console.log(this.masterArray);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}
}

export {getData};
