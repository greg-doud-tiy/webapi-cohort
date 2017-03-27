
angular
	.module("Cohort")
	.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/student/:studentId', {
			templateUrl: 'views/student.view.html',
			controller: 'StudentCtrl',
			controllerAs: 'ctrl'
		})
		.when('/', {
			templateUrl: 'views/home.view.html'
		})
		.when('/about', {
			templateUrl: 'views/about.view.html'
		})
		.otherwise({
			redirectTo: '/'
		});

}]);
