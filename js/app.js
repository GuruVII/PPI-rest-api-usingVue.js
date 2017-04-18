webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('pictureList', {
	props: ['masterArray'],
	template: '\n\t\t<div class="row">\n\t\t\t<div class="col l3 m6 s12 placement-class" v-for="items in masterArray">\n\t\t\t\t<div class="col s12 m7">\n\t\t          <div class="card">\n\t\t            <div class="card-image">\n\t\t              <img src="images/sample-1.jpg">\n\t\t              <span class="card-title">{{items.code}}</span>\n\t\t            </div>\n\t\t            <div class="card-content">\n\t\t              <span>{{items.post_likes}}</span> people \n\t\t            </div>\n\t\t            <div class="card-action">\n\t\t              <a href="#">This is a link</a>\n\t\t            </div>\n\t\t          </div>\n\t          </div>\n          </div>\n        </div>\n          '
});

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getData = undefined;

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getData = {
	methods: {
		getData: function getData() {
			var _this = this;

			_axios2.default.get('http://api.piratetimes.net/api/v1/social/?_format=json', {
				params: {
					sub_type: 'I',
					offset: 0
				}
			}).then(function (response) {
				var _masterArray;

				(_masterArray = _this.masterArray).push.apply(_masterArray, _toConsumableArray(response.data));
				console.log(_this.masterArray);
			}).catch(function (error) {
				console.log(error);
			});
		}
	}
};

exports.getData = getData;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _getData = __webpack_require__(11);

var _pictureComponent = __webpack_require__(10);

var _pictureComponent2 = _interopRequireDefault(_pictureComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vue1 = new _vue2.default({
	el: "#root",
	data: {
		masterArray: []
	},
	mixins: [_getData.getData],
	mounted: function mounted() {
		this.getData();
	},

	components: {
		pictureList: _pictureComponent2.default
	}
});

/***/ })

},[29]);