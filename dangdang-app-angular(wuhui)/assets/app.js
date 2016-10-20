var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvice){
    $routeProvice
        .when('/', {
            templateUrl: '../tpl/index.html',
            controller: ''
        })
        .when('/blog', {
            templateUrl: '../tpl/blog.html',
            controller: ''
        })
        .when('/book', {
            templateUrl: '../tpl/book.html',
            controller: 'bookController'
        })
        .when('/about_me', {
            templateUrl: '..tpl/about_me.html',
            controller: ''
        })
        .when('/book_list/:id',{
            templateUrl:'./assets/tpl/book_list.html',
            controller:'bookListController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])