angular
	.module("Cohort")
	.controller("StudentCtrl", ['$routeParams', 'StudentSvc', function($routeParams, StudentSvc) {

	var self = this;
	self.about = StudentSvc.about;
	self.SelectedStudent = {};

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