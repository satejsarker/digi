import angular from 'angular';

import angularMeteor from 'angular-meteor';

import todosList from '../imports/components/todosList';



angular.module('simple-todos', [

  angularMeteor,

  todosList.name

])
.filter('cut', function () {
  //filtering the text for the resturent name 
  return function (value, wordwise, max, tail) {
      if (!value) return '';

      max = parseInt(max, 10);
      if (!max) return value;
      if (value.length <= max) return value;

      value = value.substr(0, max);
      if (wordwise) {
          var lastspace = value.lastIndexOf(' ');
          if (lastspace !== -1) {
            
            if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
              lastspace = lastspace - 1;
            }
            value = value.substr(0, lastspace);
          }
      }

      return value + (tail || ' …');
  };
}).controller('test',function($scope,$http){
  $scope.satej='satej sarker';
  $scope.load=true;
  $http({
    "methord":'get',
    "url": 'http://77.68.80.27:4010/marketplaceapi/landingrestaurantlist?&lat=51.7354&long=-0.315091&pageindex=1&pagesize=30'

  }).then((res)=>{
      $scope.load=false;
      var allData = res.data.data;
      $scope.totalRes=allData.totalrestaurants;
      console.log(allData.totalrestaurants)
    console.log(res.data.data)
      $scope.allData = allData.preorders;
      $scope.taking=allData.takingorders;
      console.log($scope.taking.listdata)
  })
})
