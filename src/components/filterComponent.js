import Vue from "vue";
export default Vue.component('filterComponent', {
	props: ['masterArray'], //the data for the prop is acquired though the DOM
	template: `
        <div class="row">
            <div class="col s12">
                <a class="waves-effect waves-light btn filter-button z-depth-0">Reset filters</a> 
                <!-- Platform selection dropdown -->
                <a class="waves-effect waves-light dropdown-button btn filter-button z-depth-0 sort-white platform-button asc" data-activates="platform-selection" data-beloworigin="true">TEST</a>
                    <ul id="platform-selection" class="dropdown-content arrow-color z-depth-0 filter-menu dropdown-platform">
                        <li class="filter-menu-items dropdown-menu-social-filter"><input id="all-platforms" class="with-gap platform-button" name="platform" type="radio" value="all" ng-model="radioBtn" ng-click="filterPlatform(radioBtn)">
                            <label for="all-platforms" class="platform-dropdown-font  radioButtonLabel">All</label>
                        </li>
                        <li class="filter-menu-items dropdown-menu-social-filter"><input class="with-gap" name="platform" type="radio" id="FB-platform" value="fb" ng-model='radioBtn' ng-click="filterPlatform(radioBtn)">
                            <label for="FB-platform" class="platform-dropdown-font  radioButtonLabel">Facebook</label>
                        </li>
                        <li class="filter-menu-items dropdown-menu-social-filter"><input class="with-gap" name="platform" type="radio" id="TW-platform" value="tw" ng-model='radioBtn' ng-click="filterPlatform(radioBtn)">
                            <label for="TW-platform" class="platform-dropdown-font  radioButtonLabel">Twitter</label></li>
                       <!-- <li class="filter-menu-items dropdown-menu-social-filter"><input class="with-gap" name="platform" type="radio" id="G+-platform" value="G+ "ng-model="radioBtn" ng-click="filterPlatform(radioBtn)">
                            <label for="G+-platform" class="dropdown-font-text radioButtonLabel">Google+</label></li> -->
                    </ul>
                    <!-- Party selection dropdown -->
                    <a class="waves-effect waves-light dropdown-button btn filter-button z-depth-0 sort-white asc" data-activates="party-selection" data-beloworigin="true" id="party-selection-button"> Party <span class="hide-bellow-1250">selection</span></a>
                    <ul id="party-selection" class="dropdown-content arrow-color z-depth-0 filter-menu dropdown-menu-parties">
                        <!--both dropdown-text-input-li and dropdown-text-input are using !important" -->
                        <li class="dropdown-text-input-li">
                            <input placeholder="SEARCH" class="dropdown-text-input" name="party" type="text"  id="party-selection-search" autofocus>
                        </li>             
                        <li class="filter-menu-items party-dropdown waves-effect valign">
                            <span class="party-dropdown-font valign"></span>
                        </li>
                    </ul>
                <a class="waves-effect waves-light btn filter-button z-depth-0  sort-white" id="asc-desc-views">Engagement</a>
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
