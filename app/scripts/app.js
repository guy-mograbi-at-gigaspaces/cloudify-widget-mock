'use strict';

angular.module('cloudifyWidgetMockApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/embed',{
            templateUrl:'views/embeddingPage.html',
            controller:'EmbedPageCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
