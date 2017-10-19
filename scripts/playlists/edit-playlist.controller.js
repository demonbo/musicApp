angular.module('musicApp')
    .controller('EditListCtrl', ['$scope', '$routeParams', '$location', 'myListFactory',
      function ($scope, $routeparams, $location, myListFactory) {

        $scope.listFactory = myListFactory;
        $scope.dataList = $scope.listFactory.getList();

        var listId = +$routeparams.id;

        var oldName = 'playlist not found';
        var oldDesc = 'description not found';
        var exist = false;

        for (var j = 0; j < $scope.dataList.length; j++) {
          if ($scope.dataList[j].id === listId) {
            exist = true;
            oldName = $scope.dataList[j].name;
            oldDesc = $scope.dataList[j].desc;
            break;
          }
        }

        $scope.nameLiEdited = oldName;
        $scope.descEdited = oldDesc;

        // if (exist === false) {
        //   $scope.disApplyBtn = true;
        // }

        $scope.changeList = function (name, desc) {
          if (exist === true) {
            if (typeof name !== 'undefined' && name !== '') {
              var result = $scope.listFactory.editList(listId, name, desc);

              if (result === true) {
                $scope.checkValid = false;
                $scope.nameLiEdited = name;

                if (typeof desc !== 'undefined' && desc !== '') {
                  $scope.descEdited = desc;
                }
                $scope.goSomeWhere('/playlists');
              }
            } else {
              $scope.msgOut = 'plistWarning';
              $scope.checkValid = true;
            }
          }
        };

        $scope.checkInput = function (name) {
          $scope.canEdit = false;

          if (typeof name !== 'undefined' && name !== '') {
            $scope.msgOut = null;
            $scope.checkValid = false;
            $scope.createSuccess = false;

            if (oldName !== name) {
              $scope.canEdit = true;
            }
          } else {
            $scope.msgOut = 'plistWarning';
            $scope.checkValid = true;
            $scope.createSuccess = false;
          }
        };
    }]);