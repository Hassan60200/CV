var onglets = angular.module('ongletsApp',['ngRoute']);
//au demarrage de mon appli
onglets.config(['$routeProvider', function($routeProvider, $routeParams) {

    $routeProvider
    .when('/propos', {
        controller:'proposCtrl',
        templateUrl: 'partials/propos.html'
    })
    .when('/expériences', {
        controller:'expérienceCtrl',
        templateUrl: 'partials/expériences.html'
    })
    .when('/diplomes', {
        controller:'diplomesCtrl',
        templateUrl: 'partials/diplomes.html'
    })
    .when('/compétences', {
        controller:'compétencesCtrl',
        templateUrl: 'partials/compétences.html'
    })
    .when('/projets', {
        controller:'projetsCtrl',
        templateUrl: 'partials/projets.html'
    })
    .when('/passion', {
        controller:'passionCtrl',
        templateUrl: 'partials/passion.html'

    })
    .when('/contact', {
        controller:'contactCtrl',
        templateUrl: 'partials/contact.html'
    })
    .otherwise({
        retirectTo: '/propos'
    });
    }
]);

onglets.controller('proposCtrl', function($scope, $rootScope) {
});
onglets.controller('compétencesCtrl', function($scope, $rootScope) {
});
onglets.controller('diplomesCtrl', function($scope, $rootScope) {
});
onglets.controller('expérienceCtrl', function($scope, $rootScope) {
});
onglets.controller('projetsCtrl', function($scope, $rootScope) {
});
onglets.controller('passionCtrl', function($scope, $rootScope) {
});
onglets.controller('contactCtrl', function($scope, $rootScope) {
});
