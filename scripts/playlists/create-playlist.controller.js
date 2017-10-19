angular.module('musicApp').controller('CreateListCtrl', ['$scope', '$location', 'myListFactory',
  function ($scope, $location, myListFactory) {

  $scope.listFactory = myListFactory;

  $scope.createList = function (list, desc) {
    if (typeof list !== 'undefined' && list !== '') {
      $scope.listFactory.addList(list, desc);

      /*$scope.msgOut = 'Playlist has been created !';
      $scope.checkValid = false;
      $scope.createSuccess = true;*/
      $scope.newList = '';
      $scope.newDesc = '';
      $scope.goSomeWhere('/playlists');
    } else {
      $scope.msgOut = 'plistWarning';
      $scope.checkValid = true;
      $scope.createSuccess = false;
    }
  };

  $scope.checkInput = function (list) {
    if (typeof list !== 'undefined' && list !== '') {
      $scope.msgOut = null;
      $scope.checkValid = false;
      $scope.createSuccess = false;
      $scope.canCreate = true;
    } else {
      $scope.msgOut = 'plistWarning';
      $scope.checkValid = true;
      $scope.createSuccess = false;
      $scope.canCreate = false;
    }
  };
}]);