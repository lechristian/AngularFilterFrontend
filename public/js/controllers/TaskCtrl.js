angularFilter.controller('TaskController', function($scope, $http, $location) {
  $scope.loading = true;
  $scope.task = {};

  function get() {
    var apibase = 'http://angular-filter-backend.herokuapp.com/api/tasks/';
    var id = $location.path().split('/').pop();
    $http.jsonp(apibase + id + '?callback=JSON_CALLBACK').success(function(response) {
      $scope.task = response;
      $scope.loading = false;
    });
  };

  get();

  $scope.back = function() {
    $location.path('/');
  }
});