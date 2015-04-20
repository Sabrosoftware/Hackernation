// ===
// Service for problems
// ===

angular.module('problemService', [])
.factory('Problem', function($http) {
  var problemFactory = {};

  // get a particular problem
  problemFactory.get = function(id) {
    return $http.get('/api/problems/' + id);
  };

  // get every problem
  problemFactory.all = function() {
    return $http.get('/api/problems/');
  };

  // post a new problem
  problemFactory.create = function(data) {
    return $http.post('/api/problems/');
  };

  // Change something in a problem
  problemFactory.update = function(id, data) {
    return $http.put('/api/problems/' + id, data);
  };

  // Remove a problem
  problemFactory.remove = function(id) {
    return $http.delete('/api/problems/' + id);
  };

  return problemFactory;
});
