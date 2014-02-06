'use strict';

angular.module('cloudifyWidgetMockApp')
  .controller('EmbedPageCtrl', function ($scope) {

//        $scope.embeddedUrl = "http://mockwidget.localhost.com/#/?target=http://www.google.com";
        $scope.embeddedUrl = "http://mockwidget.localhost.com/#/?target=http://mockibm.localhost.com";

        $scope.messages = [];

        function receiveMessage( event ){
            $scope.$apply(function(){
                  console.log(["embedding page got a message",event]);
                  $scope.messages.push(event);
                frames[0].postMessage("got your message", "http://mockwidget.localhost.com");
            })
        }

        window.addEventListener("message", receiveMessage, false);


  });
