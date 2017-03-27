angular
	.module("Cohort")
	.service("StudentSvc", ['$http', '$q', function ($http, $q) {
	var self = this;

	self.about = "Student Cohort Service";

	self.Students = [];
	self.SelectedStudent = {};

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

	self.getStudentDetail = function(id) {
		return $q(function(resolve, reject) {
			$http.get('http://localhost:64722/api/Students/'+id)
				.then(function(student) {
					self.SelectedStudent = student.data;
					console.log("After AJAX call: ", self.SelectedStudent);
					resolve();
				}, function() {
					console.log('Request failed!');
					reject();
				});
		});
	};

	// self.refreshStudents();

}]);