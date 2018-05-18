myApp.controller('HomeCtrl', ['$scope', '$http', '$state', '$timeout', '$q', '$log', function ($scope, $http, $state, $timeout, $q, $log) {
   
    var user = {};
  

    this.myDate = new Date();

    this.minDate = new Date(
        this.myDate.getFullYear() - 28,
        this.myDate.getMonth() - 4,
        this.myDate.getDate() - 17
    );

    this.maxDate = new Date(
        this.myDate.getFullYear(),
        this.myDate.getMonth(),
        this.myDate.getDate()
    );


    $scope.submit = function () {

        console.log($scope.user);

        $http.put('http://www.mocky.io/v2/5acf5f573100006d004ea922', $scope.user).then(function (response) {
            $scope.message = response.data;
            console.log(response.data);
            alert('Form has been submit , Thank you  ');
            $scope.user = {};
        }, function (response) {
            console.log(response.data);
        })


    }

    //    
    // $scope.phoneNumbr = /[789][0-9]{9}/; 
    //            $scope.email1 = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/; 
    //            $scope.aadhar1 = /[0-9]{12}/; 
    //            $scope.uname1=/[A-Z][a-zA-Z]{6}[0-9]{5}/;
    //            $scope.pan1=/[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/;

}]);