(function () {

    // this will initialize an angular application with the name SurveyQuestions
    var app = angular.module("SurveyQuestions", ["ngRoute"]);

    app.config(($routeProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: 'features/home/home.html',
                controller: 'homeController'
            })
            .when('/createsurvey', {
                templateUrl: 'features/survey/createSurvey/CreateSurvey.html',
                controller: 'CreateSurveyController'
            })
            .when('/takesurvey', {
                templateUrl: 'features/survey/takeSurvey/takesurvey.html',
                controller: 'TakeSurveyController'
            })
            .when('/surveylist', {
                templateUrl: 'features/survey/surveyList/surveyList.html',
                controller: 'surveyListController'
            })
            .when('/addquestion/:id', {
                templateUrl: 'features/survey/addQuestion/addQuestion.html',
                controller: 'addQuestionController'
            })
            .when('/about', {
                templateUrl: 'features/about/about.html',
                controller: 'AboutUs'
            })
            .otherwise({ redirectTo: '/' })
    });

}());
