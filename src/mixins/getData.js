
import axios from "axios";
const getData = {
	methods: {
		getData: function(offset, type, code, orderBy){
			axios.get('http://api.piratetimes.net/api/v1/social/?_format=json', {
				params: {
					type: type,
					sub_type: 'I',
					code: code,
					order_by: orderBy,
					offset: offset

				}
				})
				.then(response => {
					console.log("pushing data");
					this.tempArray.push(...response.data)
					this.infiniteScroll();
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}
}

export {getData};
