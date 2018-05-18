myApp.controller('HomeCtrl',['$scope','helper','$http','$state','$timeout', '$q', '$log',function($scope, helper,$http,$state,$timeout, $q, $log){
    helper.showAlert();
    
 //console.log('a');	
  helper.putdata().then(response => {
//	console.log(response.data.feed.entry);
    $scope.putData = response.data;
console.log($scope.rSongs);
      
  },error => {
    $scope.putData = response.statusText;
  });

     this.myDate = new Date();

  this.minDate = new Date(
    this.myDate.getFullYear()-100,
    this.myDate.getMonth() ,
    this.myDate.getDate()
  );

  this.maxDate = new Date(
    this.myDate.getFullYear(),
    this.myDate.getMonth(),
    this.myDate.getDate()
  );
    
    $scope.submit= function(user){
        
        console.log('its happening')
    }
    
//    
// $scope.phoneNumbr = /[789][0-9]{9}/; 
//            $scope.email1 = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/; 
//            $scope.aadhar1 = /[0-9]{12}/; 
//            $scope.uname1=/[A-Z][a-zA-Z]{6}[0-9]{5}/;
//            $scope.pan1=/[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/;
  
}]);


