'use strict';



angular.module('starter.services', [])

.factory('Global', function($state, $ionicActionSheet, $timeout) {
  var socket_url = "http://192.168.2.107:3700";
  return {
    socket_url: socket_url
  };
})

.factory('socket', function socket($rootScope,Global) {
  var socket = io.connect(Global.socket_url);
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };
})
