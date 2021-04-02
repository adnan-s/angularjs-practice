(function () {

    var mod = angular.module('SurveyQuestions');
    mod.factory("faqFactory", ['$http', faqFactory]);

    function faqFactory($http) {
        const apiUrl = 'http://api.surveyportal.com:81'

        function _insert(faq) {
            return $http({
                method: 'POST',
                url: `${apiUrl}/faq`,
                data: faq
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _update(faq) {
            return $http({
                method: 'PUT',
                url: `${apiUrl}/faq`,
                data: faq
            }).then((res) => {
                return 'Success';
            }, (error) => {
                return (error);
            });
        }

        function _getAll() {
            return $http.get(`${apiUrl}/faq`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    return err;
                });
        }

        function _delete(id) {
            return $http.delete(`${apiUrl}/faq/${id}`)
            .then((data) => {
                return data;
            }).catch((err) => {
                return err;
            })
        }

        function _getSingle(id) {
            return $http.get(`${apiUrl}/faq/${id}`)
            .then((data) => {
                return data;
            }).catch((err) => {
                return err;
            })
        }

        return {
            Insert: _insert,
            Update: _update,
            GetAll: _getAll,
            Delete: _delete,
            GetSingle: _getSingle
        }
    }
}());