angular.module('musicApp')
    .controller('EditSongCtrl', ['$scope', '$routeParams', '$location', 'mySongFactory',
      function ($scope, $routeparams, $location, mySongFactory) {

        $scope.songFactory = mySongFactory;
        $scope.dataSong = $scope.songFactory.getSong();

        var songId = +$routeparams.id;

        var oldName = 'song not found';
        var oldArtist = 'artist not found';
        var exist = false;

        for (var i = 0; i < $scope.dataSong.length; i++) {
          if ($scope.dataSong[i].id === songId) {
            exist = true;
            oldName = $scope.dataSong[i].name;
            oldArtist = $scope.dataSong[i].artist;
            break;
          }
        }

        $scope.nameEdited = oldName;
        $scope.artistEdited = oldArtist;

        if (exist === false) {
          $scope.disApplyBtn = true;
        }

        $scope.changeSong = function (name, artist) {
          if (exist === true) {
            if (typeof name !== 'undefined' && name !== '') {
              var result = $scope.songFactory.editSong(songId, name, artist);
              if (result === true) {
                $scope.checkValid = false;
                $scope.nameEdited = name;
                if (typeof artist !== 'undefined' && artist !== '') {
                  $scope.artistEdited = artist;
                }
                $scope.goSomeWhere('/songs');
                // $location.path("#!/songs")
              }
            } else {
              $scope.msgOut = 'Song name can not be empty!';
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
            $scope.msgOut = 'Song name can not be empty!';
            $scope.checkValid = true;
            $scope.createSuccess = false;
          }
        };

    }]);