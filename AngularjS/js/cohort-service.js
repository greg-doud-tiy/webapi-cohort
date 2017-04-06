angular
	.module("Cohort")
	.service("StudentSvc", ['$http', '$q', function ($http, $q) {
	var self = this;

	self.about = "Student Cohort Service";

	self.Students = [];
	self.SelectedStudent = {};

	var useAzure = false;
	var localUrl = 'http://localhost:64722/';
	var azureUrl = 'http://cohort20170329092818.azurewebsites.net/';
	var url = (useAzure) ? azureUrl : localUrl;

	self.deleteStudent = function(id) {
		return $q(function(resolve, reject) {
			$http.delete(url + 'api/Students/' + id)
				.then(function(result) {
					console.log(result);
					resolve(result);
				},function() {
					console.log('Delete request failed!');
				});
		});
	};

	self.refreshStudents = function() {
		return $q(function(resolve, reject) {
			$http.get(url + 'api/Students') 
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
			$http.get(url + 'api/Students/' + id)
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