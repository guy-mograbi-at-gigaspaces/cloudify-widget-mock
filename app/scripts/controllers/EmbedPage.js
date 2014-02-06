'use strict';

angular.module('cloudifyWidgetMockApp')
  .controller('EmbedPageCtrl', function ($scope) {

//        $scope.embeddedUrl = "http://mockwidget.localhost.com/#/?target=http://www.google.com";
        $scope.embeddedUrl = "http://mockwidget.gsdev.info/#/?target=http://mockibm.gsdev.info";

        $scope.messages = [];

        function receiveMessage( event ){
            $scope.$apply(function(){
                  console.log(["embedding page got a message",event]);
                  $scope.messages.push(event);
                frames[0].postMessage("got your message", "http://mockwidget.gsdev.info");
            })
        }

        window.addEventListener("message", receiveMessage, false);


  });
