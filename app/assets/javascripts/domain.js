var analytics = angular.module("analytics", ["ngResource"])

.controller('domainCtrl', function($scope, $http){
  $http.defaults.headers.common['Authorization'] = 'Token ' + document.cookie;

  var domain = $http.get('http://localhost:3001/apps/#{domain.id}').
  success(function(data, status, headers, config) {
    $scope.events = data;
  }).
  error(function(data, status, headers, config) {
    console.log('Error');
  });
})
