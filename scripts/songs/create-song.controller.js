angular.module('musicApp')
    .controller('CreateSongCtrl', ['$scope', '$location', 'mySongFactory',
      function ($scope, $location, mySongFactory) {

        $scope.songFactory = mySongFactory;

        $scope.createSong = function (song, artist) {
          if (typeof song !== 'undefined' && song !== '') {
            $scope.songFactory.addSong(song, artist);

            $scope.newSong = '';
            $scope.newArtist = '';
            $scope.goSomeWhere('/songs');
            // $location.path("#!/songs")
          } else {
            $scope.msgOut = 'songWarning';
            $scope.checkValid = true;
            $scope.createSuccess = false;
          }
        };

        $scope.checkInput = function (song) {
          if (typeof song !== 'undefined' && song !== '') {
            $scope.msgOut = null;
            $scope.checkValid = false;
            $scope.createSuccess = false;
            $scope.canCreate = true;
          } else {
            $scope.msgOut = 'songWarning';
            $scope.checkValid = true;
            $scope.createSuccess = false;
            $scope.canCreate = false;
          }
        };

    }]);