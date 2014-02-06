'use strict';

angular.module('cloudifyWidgetMockApp')
  .controller('MainCtrl', function ($scope, $location) {
        var targetDomain = $location.search()["target"];

        console.log([targetDomain]);

        $scope.messages = [];

    $scope.start = function(){
        console.log("sending message to " + targetDomain);
        window.top.postMessage("hello world", targetDomain);

    };


        function receiveMessage( event ){
            $scope.$apply(function(){
                console.log(["widget got a message",event]);
                $scope.messages.push(event);
            })
        }

        window.addEventListener("message", receiveMessage, false);
  });
