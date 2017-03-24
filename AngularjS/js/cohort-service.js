angular
	.module("Cohort")
	.service("StudentSvc", StudentSvc);

StudentSvc.$inject = ['$http', '$q'];

function StudentSvc($http, $q) {
	var self = this;

	self.about = "Student Cohort Service";

	self.Students = [];
	// 	{ Id: 1, Name: 'Austin' },
	// 	{ Id: 2, Name: 'Bobby' },
	// 	{ Id: 3, Name: 'Kristin' },
	// 	{ Id: 4, Name: 'Michael A.' },
	// 	{ Id: 5, Name: 'Michael W.' },
	// 	{ Id: 6, Name: 'Nathan' },
	// 	{ Id: 7, Name: 'Nick' }
	// ];

	self.testFunc = function() {
		return $q(function(resolve, reject) {
			console.log('called testFunc()');
			resolve();
		});
	};
	self.log = function() {
		console.log('called log()');
	};
	self.refreshStudents = function() {
		$http.get('http://localhost:64722/api/Students')
			.then(function(students) {
				self.Students = students.data;
				console.log(self.Students);
			}, function() {
				console.log('Request failed!');
			});
	};

	// self.refreshStudents();

};