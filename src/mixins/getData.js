
import axios from "axios";
const getData = {
	methods: {
		getData: function(){
			axios.get('http://api.piratetimes.net/api/v1/social/?_format=json', {
				params: {
					sub_type: 'I',
					offset: 0
				}
				})
				.then(response => {
					this.masterArray.push(...response.data)
					console.log(this.masterArray);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}
}

export {getData};
