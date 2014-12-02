angular.module('starter.controllers',[])

.controller('AppCtrl', function($state, $scope, $rootScope, socket){
  $scope.messages=[];

  socket.emit('login');
  
  socket.on('message',function(data){
    console.log(data);
    console.log('...');
    $scope.messages.push(data);
  });

  $scope.enterRoom = function(index){
    socket.emit('enterRoom',index);
    $scope.index= index;
  };
  $scope.quitRoom = function(){
    socket.emit('quitRoom',$scope.index);
  };
  $scope.publishComment = function(){
    socket.emit('talk', $scope.text);
  };
});