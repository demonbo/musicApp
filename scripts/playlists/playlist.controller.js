angular.module("musicApp")
    .controller("ListCtrl", ["$scope", "$location", "myListFactory", "$element",
      function ($scope, $location, myListFactory, $element) {
        $scope.listFactory = myListFactory;
        $scope.showModal = false;
        /* custom */

        $scope.dataList = myListFactory.getList();

        $scope.disDeleteBtn = {value: true};
        $scope.chkAll = {value: false};
        /* */

        $scope.getSelectedListId = function (item) {
          $scope.selectedListId = item.id;
          $element.find('#modalDel').modal('show');
          // $('#modalDel').modal('show');
          $scope.showModal = true;
        };

        $scope.showModalMulti = function () {
          var c = 0;
          for (var i = 0; i < $scope.dataList.length; i++) {
            if ($scope.dataList[i].selected === true) {
              c++;
            }
          }
          if (c >= 2) {
            angular.element('#listView').find('#modalMultiDel').modal('show');
          } else {
            angular.element('#listView').find('#modalDel').modal('show');
          }
        };

        $scope.delList = function () {
          if (typeof $scope.selectedListId !== 'undefined') {
            $scope.listFactory.removeList($scope.selectedListId);
            $scope.selectedListId = undefined;
          } else {
            $scope.delMulti();
          }
          $scope.disDeleteBtn.value = true;
          $scope.dataList = $scope.listFactory.getList();
          $scope.cancelAction();
        };

        $scope.cancelAction = function () {
          $scope.showModal = false;
        };

        $scope.delMulti = function () {
          for (var i = 0; i < $scope.dataList.length; i++) {
            if ($scope.dataList[i].selected === true) {
              $scope.listFactory.removeList($scope.dataList[i].id);
            }
          }
        };

        $scope.checkList = function (data) {
          var bool = $scope.selectItem(data);
          $scope.disDeleteBtn.value = !bool;
          return bool;
        };

        // $scope.checkAll = function (status, data) {
        //   $scope.disDeleteBtn.value = $scope.checkAllItem(status, data);
        // };

        $scope.checkAll = function (status, data) {
          $scope.disDeleteBtn.value = !status;
          angular.forEach(data, function (item) {
            item.selected = status;
          });
        };


        /* check box */

        //indeterminate check box
        $scope.indeterminateCheckBox = function (data) {
          var checkBoxInd = $element.find('#checkboxAll')[0];
          if (typeof checkBoxInd !== 'undefined') {
            var hasCheck = $scope.checkList(data);
            var hasInd = $scope.indeterminateCheck(data);
            if (hasInd && hasCheck) {
              $scope.chkAll.value = true;
              checkBoxInd.indeterminate = false;
            } else if (!hasInd && hasCheck) {
              $scope.chkAll.value = false;
              checkBoxInd.indeterminate = true;
            } else {
              $scope.chkAll.value = false;
              checkBoxInd.indeterminate = false;
            }
          } else {
            $scope.checkList(data);
          }
        };
        //check one item
        $scope.checkItem = function (item, data, event, isRowClick) {

          if (isRowClick) {
            item.selected = !item.selected;
          }
          $scope.indeterminateCheckBox(data);
          event.stopPropagation();
        };

        /*del one item function*/
        $scope.delItem = function () {
          $scope.delList();
          var checkBoxInd = $element.find('#checkboxAll')[0];
          if (typeof checkBoxInd !== 'undefined') {
            $scope.chkAll.value = false;
            checkBoxInd.indeterminate = false;
          }
        };


        // $scope.getId = function (item) {
        //   $scope.getSelectedSongId = item.id;
        //   $element.find('#modalDel').modal('show');
        // };


      }
    ]);