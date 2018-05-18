myApp.factory("helper",function($http, $q){
    var service = {};
    
    service.showAlert = function(){
        console.log("This is the helper class");
    }

    service.putdata = function(){

        var deferred = $q.defer();

        $http({
            method: "PUT",
            url: "http://www.mocky.io/v2/5acf5f573100006d004ea922"
        }).then(function mySuccess(response) {
            deferred.resolve(response);
        }, function myError(response) {
            deferred.reject(response);
        });

        return deferred.promise;

        
    }
    
    return service;
});
