(function () {
  'use strict';

  angular.module('myFirstModule', [])
  .controller('MyFirstController', MyFirstController);

  MyFirstController.$inject = ['$scope'];
  function MyFirstController($scope) {
    $scope.checkMenu = function () {

      if (angular.isObject($scope.lunchmenu)) {
        $scope.message = "Please enter data first..";
        return;
      }

      var arrayOfStrings = $scope.lunchmenu.split(",").length;
      //console.log(arrayOfStrings);

      if(arrayOfStrings > 3){
        $scope.message = "Too much!!!";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  };
})();
