angular.module('starter.controllers',[])

.controller('AppCtrl', function($state, $scope, $rootScope, socket){
  console.log('...');
  socket.emit('login');
  console.log('???');
});