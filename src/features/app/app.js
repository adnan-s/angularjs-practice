angular.module('SurveyQuestions', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode({
                enabled: true
            });
            $routeProvider
                .when('/', {
                    templateUrl: '/dist/features/home/home.html',
                    controller: 'homeController'
                })
                .when('/register', {
                    templateUrl: '/dist/features/users/register/RegisterController.html',
                    controller: 'RegisterController'
                })
                .when('/userlist', {
                    templateUrl: '/dist/features/users/list/userListController.html',
                    controller: 'userListController'
                })
                .when('/createsurvey', {
                    templateUrl: '/dist/features/survey/createSurvey/CreateSurvey.html',
                    controller: 'CreateSurveyController'
                })
                .when('/takesurvey/:surveyId', {
                    templateUrl: '/dist/features/survey/takeSurvey/takesurvey.html',
                    controller: 'TakeSurveyController'
                })
                .when('/surveylist', {
                    templateUrl: '/dist/features/survey/surveyList/surveyList.html',
                    controller: 'surveyListController'
                })
                .when('/surveyboard', {
                    templateUrl: '/dist/features/survey/surveyBoard/surveyBoardController.html',
                    controller: 'surveyBoardController'
                })
                .when('/addquestion/:id', {
                    templateUrl: '/dist/features/survey/addQuestion/addQuestion.html',
                    controller: 'addQuestionController'
                })
                .when('/faqlist', {
                    templateUrl: '/dist/features/faq/list/faqList.html',
                    controller: 'faqListController'
                })
                .when('/faq/:id', {
                    templateUrl: '/dist/features/faq/create/faq.html',
                    controller: 'faqCreateController'
                })
                .when('/faq', {
                    templateUrl: '/dist/features/faq/create/faq.html',
                    controller: 'faqCreateController'
                })
                .when('/faqdisplay', {
                    templateUrl: '/dist/features/faq/display/faqDisplay.html',
                    controller: 'faqDisplayController'
                })
                .when('/support', {
                    templateUrl: '/dist/features/support/display/supportDisplayController.html',
                    controller: 'supportDisplayController'
                })
                .when('/supportlist', {
                    templateUrl: '/dist/features/support/manageSupport/manageSupportController.html',
                    controller: 'manageSupportController'
                })
                .when('/supportinfo', {
                    templateUrl: '/dist/features/support/supportInfo/supportInfoController.html',
                    controller: 'supportInfoController'
                })
                .when('/supportinfo/:id', {
                    templateUrl: '/dist/features/support/supportInfo/supportInfoController.html',
                    controller: 'supportInfoController'
                })
                .otherwise({ redirectTo: '/' });
        }]);
