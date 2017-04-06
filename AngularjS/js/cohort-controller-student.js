angular
	.module("Cohort")
	.controller("StudentCtrl", ['$http', '$routeParams', 'StudentSvc', function($http, $routeParams, StudentSvc) {

	var self = this;
	self.about = StudentSvc.about;
	self.SelectedStudent = {};

	self.addStudent = function(name) {
		$http.post('http://localhost:64722/api/Students/', { Name: name })
		.then(function(response) {
			console.log("Add Ok.", response);
		},function(response) {
			console.log("Add failed!", response);
		});
	};

	self.deleteStudent = function(id) {
		$http.delete('http://localhost:64722/api/Students/' + id)
		.then(function(response) {
			console.log("Delete Ok.", response);
		},function(response) {
			console.log("Delete failed!", response);
		});
	};

	self.getStudent = function(id) {
		self.selectedStudent = StudentSvc.getStudentDetail(id);
	};

	self.getStudents = function() {
		var promise = StudentSvc.refreshStudents();
		promise.then(function() {
			self.Students = StudentSvc.Students;
		},function() {
			console.log('rejected');
		});
	};

	self.getStudents();

	if(typeof($routeParams.studentId) != 'undefined') {
		self.selectedStudentId = $routeParams.studentId;
		var promise = StudentSvc.getStudentDetail(self.selectedStudentId);
		promise.then(function() {
			self.SelectedStudent = StudentSvc.SelectedStudent;
			console.log("Selected student from SVC", StudentSvc.SelectedStudent);
			console.log("Selected student from CTRL", self.SelectedStudent);
		},function() {
			console.log('rejected');
		});	
	};

}]);