angular.module('starter.controllers',[])

.controller('AppCtrl', function($scope, $ionicScrollDelegate, socket){
  $scope.messages=[];

  socket.emit('login');
  
  socket.on('message',function(data){
    $scope.messages.push(data);
    $ionicScrollDelegate.scrollBottom();
  });

  $scope.enterRoom = function(index){
    socket.emit('enterRoom',index);
  };
  $scope.quitRoom = function(){
    socket.emit('quitRoom');
  };
  $scope.publishComment = function(){
    socket.emit('talk', $scope.conversation);
  };
});