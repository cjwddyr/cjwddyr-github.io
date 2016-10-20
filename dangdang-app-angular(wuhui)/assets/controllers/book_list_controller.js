app.controller('bookListController', ['$scope', '$routeParams', 'commonService', function($scope, $routeParams, c_s){
    c_s.getData($routeParams.id, function(res){
        $scope.data = res.data;
    });
}])