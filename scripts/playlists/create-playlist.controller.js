angular.module('musicApp').controller('CreateListCtrl', ['$scope', '$location', '$element', 'myListFactory', 'mySongFactory','listSongFactory',
  function ($scope, $location, $element, myListFactory, mySongFactory, listSongFactory) {

    $scope.listFactory = myListFactory;
    $scope.listSongFactory = listSongFactory;


    $scope.createList = function (list, desc) {
      if (typeof list !== 'undefined' && list !== '') {
        var id = $scope.listFactory.addList(list, desc);
        console.log(id);
        //apply song to list
        for (var i = 0; i < $scope.dataSong.length; i++) {
          if ($scope.dataSong[i].selected === true) {
            $scope.listSongFactory.assignListSong(id, $scope.dataSong[i].id);
          } else {
            $scope.listSongFactory.removeListSong(id, $scope.dataSong[i].id);
          }
        }
        /*$scope.msgOut = 'Playlist has been created !';
        $scope.checkValid = false;
        $scope.createSuccess = true;*/
        $scope.newList = '';
        $scope.newDesc = '';
        $scope.goSomeWhere('/playlists');
      } else {
        $scope.msgOut = 'Playlist name can not be empty!';
        $scope.checkValid = true;
        $scope.createSuccess = false;
      }
    };

    // $scope.applySongToList = function () {
    //   for (var i = 0; i < $scope.dataSong.length; i++) {
    //     if ($scope.dataSong[i].selected === true) {
    //       $scope.listSongFactory.assignListSong(id, $scope.dataSong[i].id);
    //     } else {
    //       $scope.listSongFactory.removeListSong(id, $scope.dataSong[i].id);
    //     }
    //   }
    //   // $scope.dataChosenSong();
    //   $scope.goSomeWhere("/playlists");
    // };

    $scope.checkInput = function (list) {
      if (typeof list !== 'undefined' && list !== '') {
        $scope.msgOut = null;
        $scope.checkValid = false;
        $scope.createSuccess = false;
        $scope.canCreate = true;
      } else {
        $scope.msgOut = 'Playlist name can not be empty!';
        $scope.checkValid = true;
        $scope.createSuccess = false;
        $scope.canCreate = false;
      }
    };




    /*SONG*/
    $scope.songFactory = mySongFactory;
    $scope.dataSong = mySongFactory.getSong();
    $scope.chkAll = {value: false};

    $scope.checkAll = function (status, data) {
      angular.forEach(data, function (item) {
        item.selected = status;
      });
    };

    //check one item
    $scope.checkItem = function (item, data, event, isRowClick) {

      if (isRowClick) {
        item.selected = !item.selected;
      }
      $scope.indeterminateCheckBox(data);
      event.stopPropagation();
    };

    $scope.checkSong = function (data) {
      var bool = $scope.selectItem(data);
      return bool;
    };

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

    /*end song*/

}]);