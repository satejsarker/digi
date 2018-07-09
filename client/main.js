import angular from 'angular';

import angularMeteor from 'angular-meteor';

import todosList from '../imports/components/todosList';



angular.module('simple-todos', [

  angularMeteor,

  todosList.name

]).controller('test',function($scope,$http){
  $scope.satej='satej sarker';
  $http({
    "methord":'get',
    "url": 'http://77.68.80.27:4010/marketplaceapi/landingrestaurantlist?&lat=51.7354&long=-0.315091&pageindex=1&pagesize=30'

  }).then((res)=>{
    
      var allData = res.data.data;
    console.log(res.data.data)
      $scope.allData = allData.takingorders;
      console.log($scope.allData.listdata)
  })
})
