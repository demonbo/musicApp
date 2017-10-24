angular.module('musicApp').factory('listSongFactory', [function () {
  var factory = {};
  var listSongFactory = [
    {'list': 1, 'song': 1},
    {'list': 1, 'song': 3},
    {'list': 1, 'song': 5},
    {'list': 1, 'song': 7},
    {'list': 2, 'song': 2},
    {'list': 2, 'song': 4},
    {'list': 2, 'song': 6},
    {'list': 2, 'song': 8},
    {'list': 13, 'song': 1},
    {'list': 13, 'song': 2},
    {'list': 13, 'song': 5},
    {'list': 13, 'song': 6}
  ];

  factory.getListSong = function (idList) {
    var factoryreturn = [];
    for (var i = 0; i < listSongFactory.length; i++) {
      if (+listSongFactory[i].list === +idList) {
        factoryreturn.push({'list': idList, 'song': listSongFactory[i].song});
      }
    }
    return factoryreturn;
  };

  factory.assignListSong = function (idList, idSong) {
    var exist = false;
    for (var i = 0; i < listSongFactory.length; i++) {
      if (listSongFactory[i].list === idList && listSongFactory[i].song === idSong) {
        exist = true;
        break;
      }
    }
    if (exist === false) {
      listSongFactory.push({'list': idList, 'song': idSong});
    }
  };

  factory.removeListSong = function (idList, idSong) {
    var exist = false;
    for (var i = 0; i < listSongFactory.length; i++) {
      if (listSongFactory[i].list === idList && listSongFactory[i].song === idSong) {
        exist = true;
        break;
      }
    }
    if (exist === true) {
      listSongFactory.splice(i, 1);
    }
  };

  factory.deleteList = function (idList) {
    for (var i = 0; i < listSongFactory.length;) {
      if (listSongFactory[i].list === idList) {
        listSongFactory.splice(i, 1);
      } else {
        i++;
      }
    }
  };

  return factory;
}
]);