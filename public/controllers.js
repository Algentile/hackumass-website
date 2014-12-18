'use strict';

var controllers = angular.module('controllers', ['services']);

controllers.controller('LandingCtrl', ['$scope', 'LandingService',
  function($scope, LandingService) {
    $scope.date = 'April 11-12 2015';
  }
]);

controllers.controller('AboutCtrl', ['$scope', 'AboutService',
  function($scope, AboutService) {
    $scope.title = 'What is HackUMass?';

    $scope.paragraphs = AboutService.getParagraphs();
  }
]);

controllers.controller('FaqCtrl', ['$scope', 'FaqService',
  function($scope, FaqService) {
    $scope.title = 'FAQ';

    $scope.panels = FaqService.getPanels();
  }
]);

controllers.controller('ScheduleCtrl', ['$scope', 'ScheduleService',
  function($scope, ScheduleService) {
    $scope.title = 'Schedule';

    $scope.schedule = ScheduleService.getSchedule();
  }
]);

controllers.controller('SponsorsCtrl', ['$scope', '$sce', 'SponsorsService',
  function($scope, $sce, SponsorsService) {
    $scope.title = 'Sponsors';

    $scope.email = $sce.trustAsHtml('Interested in sponsoring HackUMass? Email us at <a href="mailto:sponsors@hackumass.com">sponsors&commat;hackumass.com</a>');
  }
]);
