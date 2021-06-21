var mod = angular.module('SurveyQuestions');
mod.factory("supportFactory", ["$http",
    function supportFactory($http) {
        const apiUrl = 'http://api.surveyportal.com:81'

        function _insert(support) {
            return $http({
                method: 'POST',
                url: `${apiUrl}/support`,
                data: support
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _getAll() {
            return $http.get(`${apiUrl}/support`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    return err;
                });
        }

        return {
            Insert: _insert,
            getAll: _getAll
        }

    }
]);

