angularFilter.controller('HomeController', function($scope, $http, $filter) {
  $scope.loading = true;
  $scope.data = {};

  function get() {
    var apibase = 'http://angular-filter-backend.herokuapp.com/api/';
    var dataTypes = ['types', 'classes', 'tasks'];

    dataTypes.forEach(function(type) {
      var curUrl = apibase + type + '?callback=JSON_CALLBACK';
      $http.jsonp(curUrl).success(function(response) {
        $scope.data[type] = response;
        if (type === 'tasks') {
          $scope.loading = false;
        }
      });
    });
  };

  get();

  $scope.repeat = function(object) {
    return object;
  };

  $scope.taskfilter = function() {
    $scope.typeID = $scope.filteredTypes[0]._id;
    $scope.typeID = $scope.typeID.split(',');
    $scope.typefilter = $scope.typeID[0];
  };

  $scope.clearfilter = function() {
    $scope.whichtask = '';
    $scope.typefilter = '';
  };

  $scope.$watchCollection('filteredTasks', function() {
    if ($scope.filteredTasks) {
      var filterArray = [];
      for (var i = 0; i < $scope.filteredTasks.length; i += 1) {
        filterArray.push($scope.filteredTasks[i].classID);
      }
      $scope.myFilter = function(item) {
        if (filterArray.indexOf(item.classID) > -1) {
          return item;
        }
      };
    }
  });
});