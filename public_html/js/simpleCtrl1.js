angular.module('simple', [])
        .controller('SimpleCtrl', ['$location', function($location) {
                var self = this;
                self.navigate1 = function() {
                    $location.path('/some/where');
                };
                self.navigate2 = function() {
                    $location.path('/some/where/else');
                };
            }]);