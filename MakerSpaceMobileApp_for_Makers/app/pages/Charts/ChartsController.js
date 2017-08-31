define(['require', 'app'], function(require, APP) {

    /**
     * Controller for Charts generated by Appery.io
     * @module Charts
     */

    APP.controller('Charts', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            var start = "5mi-ago";
            var order = "asc";
            var limit = 20;
            var Machine_this = "unternehmer-3dprinters-temp-plate1";
            var Machine_other = "unternehmer-3dprinters-temp-plate2";

            $scope.queryMachine_this.start = start;
            $scope.queryMachine_this.tag_name = Machine_this;
            $scope.queryMachine_this.order = order;
            $scope.queryMachine_this.limit = limit;

            $scope.queryMachine_other.start = start;
            $scope.queryMachine_other.tag_name = Machine_other;
            $scope.queryMachine_other.order = order;
            $scope.queryMachine_other.limit = limit;

            var requestData = {};
            requestData = (function mapping5156($scope) {
                var requestData = {};
                requestData.params = {};
                var queryMachine_this_scope = $scope.queryMachine_this;
                requestData.params.start_time = queryMachine_this_scope.start;
                requestData.params.tag_name = queryMachine_this_scope.tag_name;
                requestData.params.tag_limit = queryMachine_this_scope.limit;
                requestData.params.tag_order = queryMachine_this_scope.order;

                return requestData; /*|button_mapping|onbeforesend|3D8E1E75-012C-FC05-8B46-D02772CBBE35||5156|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("Predix_REST_API_service")(requestData).then( /*|service_bookmark|bookmark|3D8E1E75-012C-FC05-8B46-D02772CBBE35||9892|*/

            function(success) { // success callback
                (function mapping1154(success, $scope) {
                    var time_series_this_scope = $scope.time_series_this;
                    for (var i = 0, l = success.data.values.length; i < l; i++) {
                        _.set(time_series_this_scope, 'values[' + i + ']', success.data.values[i]);
                        _.set(time_series_this_scope, 'stamps[' + i + ']', success.data.stamps[i]);
                    }

                    $scope.time_series_this = time_series_this_scope; /*|button_mapping|onsuccess|3D8E1E75-012C-FC05-8B46-D02772CBBE35||1154|*/
                })(success, $scope);

            }, function(error) { // callback to handle request error
            }, function(notify) { // notify callback, can fire few times
            });

            var requestData2 = {};
            requestData2 = (function mapping6588($scope) {
                var requestData2 = {};
                requestData2.params = {};
                var queryMachine_other_scope = $scope.queryMachine_other;
                requestData2.params.tag_name = queryMachine_other_scope.tag_name;
                requestData2.params.tag_limit = queryMachine_other_scope.limit;
                requestData2.params.tag_order = queryMachine_other_scope.order;
                requestData2.params.start_time = queryMachine_other_scope.start;

                return requestData2; /*|button_mapping|onbeforesend|9606CD42-4495-679D-BCBD-F27CE145B8BA||6588|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("Predix_REST_API_service")(requestData2).then( /*|service_bookmark|bookmark|9606CD42-4495-679D-BCBD-F27CE145B8BA||5737|*/

            function(success) { // success callback
                (function mapping7263(success, $scope) {
                    var time_series_other_scope = $scope.time_series_other;
                    for (var i = 0, l = success.data.values.length; i < l; i++) {
                        _.set(time_series_other_scope, 'values[' + i + ']', success.data.values[i]);
                        _.set(time_series_other_scope, 'stamps[' + i + ']', success.data.stamps[i]);
                    }

                    $scope.time_series_other = time_series_other_scope; /*|button_mapping|onsuccess|9606CD42-4495-679D-BCBD-F27CE145B8BA||7263|*/
                })(success, $scope);

            }, function(error) { // callback to handle request error
            }, function(notify) { // notify callback, can fire few times
            });

            $scope.chartData = {
                labels: $scope.time_series_this.stamps,
                series: ['This machine', 'Other machine'],
                data: [
                $scope.time_series_this.values, $scope.time_series_other.values, ]
            };

            $scope.type = 'Line';

        };

        /**
         * @function switchChartType
         * @param newType
         */
        $scope.switchChartType = function(newType) {
            $scope.type = newType;
        };

        /**
         * user controller variables
         */
        $scope.time_series_this = Apperyio.EntityAPI('dataTimeSeires');
        $scope.queryMachine_this = Apperyio.EntityAPI('queryTimeSeries');
        $scope.queryMachine_other = Apperyio.EntityAPI('queryTimeSeries');
        $scope.time_series_other = Apperyio.EntityAPI('dataTimeSeires');
        $scope.output = Apperyio.EntityAPI('String');
        $scope.test = Apperyio.EntityAPI('numberList');
        $scope.time_stamps = Apperyio.EntityAPI('stringList');
    }

});