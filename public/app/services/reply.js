// ===
// Service for replies
// ===

angular.module('replyService', [])
.factory('Reply', function($http) {
  var replyFactory = {};

  // get every reply to a particular problem
  replyFactory.get = function(id) {
    return $http.get('/api/problems/' + id + '/replies');
  };

  // post a reply to a particular problem
  replyFactory.post = function(id, data) {
    return $http.post('/api/problems/' + id + '/replies');
  };

  return replyFactory;
});
