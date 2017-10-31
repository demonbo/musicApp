angular.module('musicApp')
    .controller('EditListCtrl', ['$scope', '$routeParams', '$location', '$element','myListFactory', 'mySongFactory', 'listSongFactory',
      function ($scope, $routeparams, $location, $element, myListFactory, mySongFactory, listSongFactory) {

        $scope.listFactory = myListFactory;
        $scope.dataList = $scope.listFactory.getList();
        // $scope.canRevert = false;
        // $scope.disApplyBtn = true; //disabled button when true

        var listId = +$routeparams.id;

        $scope.dataChosenSong = function () {
          $scope.listSongFactory = listSongFactory;
          $scope.dataListSong = listSongFactory.getListSong(listId);

          $scope.songFactory = mySongFactory;
          $scope.dataSong = $scope.songFactory.getSong();
          for (var i = 0; i < $scope.dataListSong.length; i++) {
            for (var j = 0; j < $scope.dataSong.length; j++) {
              if ($scope.dataSong[j].id === $scope.dataListSong[i].song) {
                $scope.dataSong[j].selected = true;
                $element.find('#checkboxAll')[0].indeterminate = true; /*test*/
                break;
              }
            }
          }
        };

        $scope.dataChosenSong();

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




        $scope.applySongToList = function () {
          for (var i = 0; i < $scope.dataSong.length; i++) {
            if ($scope.dataSong[i].selected === true) {
              $scope.listSongFactory.assignListSong(listId, $scope.dataSong[i].id);
            } else {
              $scope.listSongFactory.removeListSong(listId, $scope.dataSong[i].id);
            }
          }
          $scope.dataChosenSong();
          $scope.goSomeWhere("/playlists");
        };

        $scope.revertList = function () {
          $scope.dataChosenSong();
          checkRevert();
          $scope.canEdit = false; /*use for checkall*/
        };

        //  checkRevert
        function checkRevert(){
          var selectedCount = 0;
          var found;

          $scope.canRevert = false;
          // $scope.disApplyBtn = true; /**/

          for (var i = 0; i < $scope.dataSong.length; i++) {
            if ($scope.dataSong[i].selected) {
              found = false;
              selectedCount++;
              for (var j = 0; j < $scope.dataListSong.length; j++) {
                if ($scope.dataSong[i].id === $scope.dataListSong[j].song) {
                  found = true;
                }
              }
              if (!found) {
                break;
              }
            }
          }
          if (!found || selectedCount != j) {
            $scope.canRevert = true;
            // $scope.disApplyBtn = false; /**/
          }
        }

        // //  isDisable
        // $scope.isDisabled = function isDisabled () {
        //   var isDisabled = false;
        //
        // }


        $scope.nameLiEdited = oldName;
        $scope.descEdited = oldDesc;

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
              $scope.msgOut = 'Playlist name can not be empty!';
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
            $scope.msgOut = 'Playlist name can not be empty!';
            $scope.checkValid = true;
            $scope.createSuccess = false;
          }

          // return $scope.canEdit;
        };

        /*SONG*/
        // $scope.songFactory = mySongFactory;
        // $scope.dataSong = mySongFactory.getSong();
        $scope.chkAll = {value: false};
        // $element.find('#checkboxAll')[0].indeterminate = true;



        $scope.checkAll = function (status, data) {
          angular.forEach(data, function (item) {
            item.selected = status;
          });
          $scope.canEdit = true; /**/
          $scope.canRevert = true; /**/
        };

        // check one item
        $scope.checkItem = function (item, data, $event, isRowClick) {

          if (isRowClick) {
            item.selected = !item.selected;
          }
          $scope.indeterminateCheckBox(data);
          $event.stopPropagation();
        };


        //check song
        $scope.checkSong = function (data) {
          var bool = $scope.selectItem(data);
          checkRevert();
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