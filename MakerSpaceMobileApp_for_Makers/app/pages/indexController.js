define(['require'], function(require) {

    /**
     * Controller for index_Login_Registration_App generated by Appery.io
     * @module index_Login_Registration_App
     */

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            $scope.visionStatus = {};
            $scope.header.title = "MakerSpace";

        };

        /**
         * user controller variables
         */
    }

    return ['$scope', 'Apperyio', controller];

});