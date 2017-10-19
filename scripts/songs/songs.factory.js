angular.module("musicApp").factory("mySongFactory", [function() {
  var factory = {};

  var mySongs = [
    {'id': 1, 'name': "Skyfall", 'artist': "Adele"},
    {'id': 2, 'name': "Let it go", 'artist': "Idina Menzel"},
    {'id': 3, 'name': "Mot coi di ve", 'artist': "Khanh Ly"},
    {'id': 4, 'name': "Mad World", 'artist': "Adam Lambert"},
    {'id': 5, 'name': 'Rolling in the deep', 'artist': "Adele"},
    {'id': 6, 'name': "Radioactive", 'artist': "Imagine Dragon"},
    {'id': 7, 'name': 'Let it go 2', 'artist': 'Idina Menzel'},
    {'id': 8, 'name': 'Let it go 3', 'artist': 'Idina Menzel'}
    // {'id': 9, 'name': 'Let it go 5', 'artist': 'Idina Menzel'},
    // {'id': 10, 'name': 'Let it go 6', 'artist': 'Idina Menzel'},
    // {'id': 11, 'name': 'Let it go 7', 'artist': 'Idina Menzel'},
    // {'id': 12, 'name': 'Let it go 9', 'artist': 'Idina Menzel'},
    // {'id': 13, 'name': 'Let it go 1', 'artist': 'Idina Menzel'}
  ];

  // var selectedSongId = '';

  factory.getSong = function () {
    return angular.copy(mySongs);
  };

  factory.addSong = function (name, artist) {
    var index = mySongs.length;
    if (index > 0) {
      mySongs.push({'id': +mySongs[index - 1].id + 1 + '', 'name': name, 'artist': artist});
    } else {
      mySongs.push({'id': '1', 'name': name, 'artist': artist});
    }
  };

  factory.removeSong = function (id) {
    for (var i = 0; i < mySongs.length;) {
      if (mySongs[i].id === id) {
        mySongs.splice(i, 1);
        break;
      } else {
        i++;
      }
    }
  };

  factory.editSong = function (id, name, artist) {
    for (var i = 0; i < mySongs.length; i++) {
      if (mySongs[i].id === id) {
        if (typeof name !== 'undefined' && name !== '') {
          mySongs[i].name = name;
        }
        if (typeof artist !== 'undefined' && artist !== '') {
          mySongs[i].artist = artist;
        }
      }
    }
    return true;
  };
    return factory;
}]);

