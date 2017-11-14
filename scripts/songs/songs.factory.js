angular.module("musicApp").factory("mySongFactory", ['$q',"$http", function($q, $http) {
  var factory = {};
  // var mySongs = [];

   // console.log(mySongs);
  // var mySongs = [
  //   {'id': 1, 'name': "Skyfall", 'artist': "Adele"},
  //   {'id': 2, 'name': "Let it go", 'artist': "Idina Menzel"},
  //   {'id': 3, 'name': "Mot coi di ve", 'artist': "Khanh Ly"},
  //   {'id': 4, 'name': "Mad World", 'artist': "Adam Lambert"},
  //   {'id': 5, 'name': 'Rolling in the deep', 'artist': "Adele"},
  //   {'id': 6, 'name': "Radioactive", 'artist': "Imagine Dragon"},
  //   {'id': 7, 'name': 'Let it go 2', 'artist': 'Idina Menzel'},
  //   {'id': 8, 'name': 'Let it go 3', 'artist': 'Idina Menzel'},
  //   {'id': 9, 'name': 'Let it go 5', 'artist': 'Idina Menzel'},
  //   {'id': 10, 'name': 'Let it go 6', 'artist': 'Idina Menzel'},
  //   // {'id': 11, 'name': 'Let it go 7', 'artist': 'I dina Menzel'},
  //   // {'id': 12, 'name': 'Let it go 9', 'artist': 'Idina Menzel'}
  //   // {'id': 13, 'name': 'Let it go 1', 'artist': 'Idina Menzel'}
  // ];

  // var selectedSongId = '';
  // function init () {
  //   $http.get("api/song").then(function(res){
  //     mySongs = res.data;
  //     console.log("mySongs", mySongs);
  //   });
  // }
  // init();


  //get songs
  factory.getSong = function () {
    return $http.get("api/song");


    // var d = $q.defer();
    // console.log('get song');
        // .then(function(response){
        //   console.log('response ', response);
        //   mySongs =  response.data;
        //
        //   d.resolve(mySongs);
        // });
    // return d.promise;

  };

  //add songs
  factory.addSong = function (name, artist) {
    $http ({
      url: "api/song",
      method: "POST",
      headers: {'content-type': 'application/json' },
      data: {
        name: name,
        artist: artist
      }
    })
        .then(function(success){
      console.log(success);
    },function(error){
      console.log(error);
    })
    // var index = mySongs.length;
    // if (index > 0) {
    //   mySongs.push({'id': +mySongs[index - 1].id + 1 /*+ ''*/, 'name': name, 'artist': artist});
    // } else {
    //   mySongs.push({'id': '1', 'name': name, 'artist': artist});
    // }
  };



  factory.removeSong = function (id) {
    $http ({
      url: "api/song",
      method: "DELETE",
      headers: {'content-type': 'application/json' },
      data: {
        id: [id]
      }
    }).then(function(success) {
      console.log(success);
    },function(error) {
      console.log(error);
    })

    // for (var i = 0; i < mySongs.length;) {
    //   if (mySongs[i].id === id) {
    //     mySongs.splice(i, 1);
    //     break;
    //   } else {
    //     i++;
    //   }
    // }
  };

  factory.editSong = function (id, name, artist) {
    $http ({
      url: "api/song",
      method: "PUT",
      headers: {'content-type': 'application/json' },
      data: {
        id: id,
        name: name,
        artist: artist
      }

    }).then(function(success){
      console.log(success)
    }, function(error){
      console.log(error);
    });
    return true;
    // for (var i = 0; i < mySongs.length; i++) {
    //   if (mySongs[i].id === id) {
    //     if (typeof name !== 'undefined' && name !== '') {
    //       mySongs[i].name = name;
    //     }
    //     if (typeof artist !== 'undefined' && artist !== '') {
    //       mySongs[i].artist = artist;
    //     }
    //   }
    // }
    // return true;
  };

    return factory;
}]);

