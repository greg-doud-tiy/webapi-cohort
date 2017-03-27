angular
	.module("Cohort")
	.controller("StudentCtrl", StudentCtrl);

StudentCtrl.$inject = ['StudentSvc'];

function StudentCtrl(StudentSvc) {
	var self = this;
	self.about = StudentSvc.about;

	self.getStudents = function() {
		var promise = StudentSvc.refreshStudents();
		promise.then(function() {
			self.Students = StudentSvc.Students;
		},function() {
			console.log('rejected');
		});
	};

	self.getStudents();
};