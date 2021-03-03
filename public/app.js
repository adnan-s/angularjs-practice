(function () {

    // this will initialize an angular application with the name SurveyQuestions
    var app = angular.module("SurveyQuestions", ["ngRoute"]);

    app.config(($routeProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })
            .when('/createsurvey', {
                templateUrl: 'createsurvey/CreateSurvey.html',
                controller: 'CreateSurveyController'
            })
            .when('/takesurvey', {
                templateUrl: 'takesurvey/takesurvey.html',
                controller: 'TakeSurveyController'
            })
            .when('/surveylist', {
                templateUrl: 'surveyList/surveyList.html',
                controller: 'surveyListController'
            })
            .when('/about', {
                templateUrl: 'about/about.html',
                controller: 'AboutUs'
            })
            .otherwise({ redirectTo: '/' })
    });

}());
