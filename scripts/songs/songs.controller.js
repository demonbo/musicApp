angular.module("musicApp")
    .controller("SongCtrl", ["$scope", "$location", "mySongFactory", "$element",
      function ($scope, $location, mySongFactory, $element) {
        $scope.songFactory = mySongFactory;
        // $scope.showModal = false;
        /* custom */

        $scope.dataSong = mySongFactory.getSong();

        $scope.disDeleteBtn = {value: true};
        $scope.chkAll = {value: false};
        /* */

        $scope.getSelectedSongId = function (item) {
          $scope.selectedSongId = item.id;
          $element.find('#modalDel').modal('show');
          // $('#modalDel').modal('show');
          // $scope.showModal = true;
        };

        $scope.showModalMulti = function () {
          var c = 0;
          for (var i = 0; i < $scope.dataSong.length; i++) {
            if ($scope.dataSong[i].selected === true) {
              c++;
            }
          }
          if (c >= 2) {
            angular.element('#songView').find('#modalMultiDel').modal('show');
          } else {
            angular.element('#songView').find('#modalDel').modal('show');
          }
        };

        $scope.delSong = function () {
          if (typeof $scope.selectedSongId !== 'undefined') {
            $scope.songFactory.removeSong($scope.selectedSongId);
            $scope.selectedSongId = undefined;
          } else {
            $scope.delMulti();
          }
          $scope.disDeleteBtn.value = true;
          $scope.dataSong = $scope.songFactory.getSong();
          $scope.cancelAction();
        };

        $scope.cancelAction = function () {
          $scope.showModal = false;
        };

        $scope.delMulti = function () {
          for (var i = 0; i < $scope.dataSong.length; i++) {
            if ($scope.dataSong[i].selected === true) {
              $scope.songFactory.removeSong($scope.dataSong[i].id);
            }
          }
        };

        $scope.checkSong = function (data) {
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
            var hasCheck = $scope.checkSong(data);
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
            $scope.checkSong(data);
          }
        };
        //check one item
        $scope.checkItem = function (item, data, $event, isRowClick) {

          if (isRowClick) {
            item.selected = !item.selected;
          }
          $scope.indeterminateCheckBox(data);
          $event.stopPropagation();
        };

        /*del one item function*/
        $scope.delItem = function () {
          $scope.delSong();
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