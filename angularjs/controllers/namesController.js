var app = angular.module('myApp', []);

app.run(function($rootScope){
	$rootScope.mycolor = "blue";
})
app.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    $scope.students = ['rajesh','chippa','ramesh'];
    $scope.mycolor = "red";
}); 