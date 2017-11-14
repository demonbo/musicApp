angular.
  module("musicApp").
  config(["$locationProvider", "$routeProvider",
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider
          .when("/songs", {
            templateUrl: "scripts/songs/songs.template.html"
          })
          // .when("/create-song", {
          //   templateUrl: "scripts/songs/create-song.template.html"
          // })
          // .when("/edit-song/:id", {
          //   templateUrl: "scripts/songs/edit-song.template.html"
          // })
          .when("/playlists", {
            templateUrl: "scripts/playlists/playlists.template.html"
          })
          // .when("/create-playlist", {
          //   templateUrl: "scripts/playlists/create-playlist.template.html"
          // })
          // .when("/edit-playlist/:id", {
          //   templateUrl: "scripts/playlists/edit-playlist.template.html"
          // })
          .otherwise("/songs");
    }
  ]);