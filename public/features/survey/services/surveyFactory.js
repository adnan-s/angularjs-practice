(function(){

    var mod = angular.module('SurveyQuestions');
    mod.factory("surveyFactory", ["$http", myFn]);

    function myFn($http) {

        function _AddQuestion(question) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3000/addquestion',
                data: question
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _surveyList() {
            return $http.get('http://localhost:3000/surveylist/')
            .then((res) => {
                return (res.data);
            }, (res) => {
                return(undefined);
            })
        }


        return {
            AddQuestion: _AddQuestion,
            getAllSurvey: _surveyList
        }

    }


}())