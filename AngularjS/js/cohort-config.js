
angular
	.module("Cohort")
	.config(CohortCfg);

CohortCfg.$inject = ['$routeProvider']; 

function CohortCfg($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.view.html'
		})
		.when('/about', {
			templateUrl: 'views/about.view.html'
		})
		.otherwise({
			redirectTo: '/'
		});

};
