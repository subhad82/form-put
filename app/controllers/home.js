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

 
}]);