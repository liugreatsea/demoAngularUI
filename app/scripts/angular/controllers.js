// Define the `WelcomeCtrl` controller on the `app` module
app.controller('WelcomeCtrl', function WelcomeCtrl($scope, $http) {

    $scope.name = 'Derek';
    $scope.dbQuery = function () {

        var queryJson = {
            "selector": {
                "numberField": {"$gt": 2}
            },
            "fields": ["_id", "_rev", "descriptionField", "nameField","temperatureField","numberField"],
            "sort": [{"numberField": "asc"}],
            "limit": 10,
            "skip": 0
        };

        $http({
            method: 'post',
            url: '/api/test',
            data:queryJson
        }).then(function successCallback(response) {
            console.log(response);
            $scope.results = response.data.docs;
            // this callback will be called asynchronously
            // when the response is available
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }
});
