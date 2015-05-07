var app = angular.module("Domain", ["ngResource"])

.controller('domainCtrl', function($scope, $http){
  $http.defaults.headers.common['Authorization'] = 'Token ' + document.cookie;

  var domain = $http.get('http://localhost:3001/apps').
  success(function(data, status, headers, config) {
    $scope.domains = data;
  }).
  error(function(data, status, headers, config) {
    console.log('Error');
  });

  // $http.get('http://localhost:3001/apps/#{domain.id}').
  // success(function(data, status, headers, config) {
  //   $scope.events = data;
  // }).
  // error(function(data, status, headers, config) {
  //   console.log('Error');
  // });

  // $http({
  //   method: 'GET',
  //   url: "http://localhost:3001/apps",
  //   headers: {
  //     Authorization: "Token token=dacb9f7b92c77a922f9c878ac63abc4c"
  //   }
  // }).then(function(data) {
  //   $scope.domains = data;
  // },
  // function(err) {
  //   console.error('Err', err);
  // })

})
