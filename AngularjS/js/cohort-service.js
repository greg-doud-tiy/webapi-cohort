angular
	.module("Cohort")
	.service("StudentSvc", StudentSvc);

StudentSvc.$inject = ['$http', '$q'];

function StudentSvc($http, $q) {
	var self = this;

	self.about = "Student Cohort Service";

	self.Students = [];

	self.refreshStudents = function() {
		return $q(function(resolve, reject) {
			$http.get('http://localhost:64722/api/Students')
				.then(function(students) {
					self.Students = students.data;
					console.log(self.Students);
					resolve();
				}, function() {
					console.log('Request failed!');
					reject();
				});
		});
	};

	// self.refreshStudents();

};