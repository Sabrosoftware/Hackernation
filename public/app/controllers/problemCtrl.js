// ===
// Problem controller
// ===

angular.module('problemCtrl', ['problemService'])
.controller('problemController', function(Problem) {
  var vm = this;

  Problem.all().success(function(data) {
    vm.problems = data;
  });
});
