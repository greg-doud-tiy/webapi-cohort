angular
	.module("Cohort")
	.controller("StudentCtrl", StudentCtrl);

StudentCtrl.$inject = ['StudentSvc'];

function StudentCtrl(StudentSvc) {
	var self = this;
	self.about = StudentSvc.about;

	self.getStudents = function() {
		var promise = StudentSvc.testFunc();

		promise.then(function() {
			StudentSvc.log();
		},function() {
			console.log('rejected');
		});
		// StudentSvc.refreshStudents();
		// self.Students = StudentSvc.Students;
		// console.log('controller students:', self.Students);
	};

	self.getStudents();
};