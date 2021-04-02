(function () {

    // this will initialize an angular application with the name SurveyQuestions
    var app = angular.module("SurveyQuestions", ["ngRoute"]);

    app.config(($routeProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: 'features/home/home.html',
                controller: 'homeController'
            })
            .when('/register', {
                templateUrl: 'features/users/register/RegisterController.html',
                controller: 'RegisterController'
            })
            .when('/userlist', {
                templateUrl: 'features/users/list/userListController.html',
                controller: 'userListController'
            })
            .when('/createsurvey', {
                templateUrl: 'features/survey/createSurvey/CreateSurvey.html',
                controller: 'CreateSurveyController'
            })
            .when('/takesurvey/:surveyId', {
                templateUrl: 'features/survey/takeSurvey/takesurvey.html',
                controller: 'TakeSurveyController'
            })
            .when('/surveylist', {
                templateUrl: 'features/survey/surveyList/surveyList.html',
                controller: 'surveyListController'
            })
            .when('/surveyboard', {
                templateUrl: 'features/survey/surveyBoard/surveyBoardController.html',
                controller: 'surveyBoardController'
            })
            .when('/addquestion/:id', {
                templateUrl: 'features/survey/addQuestion/addQuestion.html',
                controller: 'addQuestionController'
            })
            .when('/faqlist', {
                templateUrl: 'features/faq/list/faqList.html',
                controller: 'faqListController'
            })
            .when('/faq/:id', {
                templateUrl: 'features/faq/create/faq.html',
                controller: 'faqCreateController'
            })
            .when('/faq', {
                templateUrl: 'features/faq/create/faq.html',
                controller: 'faqCreateController'
            })
            .when('/faqdisplay', {
                templateUrl: 'features/faq/display/faqDisplay.html',
                controller: 'faqDisplayController'
            })
            .when('/support', {
                templateUrl: 'features/support/display/supportDisplayController.html',
                controller: 'supportDisplayController'
            })            
            .when('/supportlist', {
                templateUrl: 'features/support/manageSupport/manageSupportController.html',
                controller: 'manageSupportController'
            })            
            .when('/supportinfo', {
                templateUrl: 'features/support/supportInfo/supportInfoController.html',
                controller: 'supportInfoController'
            })            
            .when('/supportinfo/:id', {
                templateUrl: 'features/support/supportInfo/supportInfoController.html',
                controller: 'supportInfoController'
            })            


            .otherwise({ redirectTo: '/' })
    });

}());
