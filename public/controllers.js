'use strict';

var controllers = angular.module('controllers', ['services']);

controllers.controller('LandingCtrl', ['$scope', 'LandingService',
  function($scope, LandingService) {
    $scope.date = LandingService.getDate();
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

controllers.controller('PartnersCtrl', ['$scope', 'PartnersService',
  function($scope, PartnersService) {
    $scope.partnersTitle = 'Partners';
  	$scope.partners = PartnersService.getPartners();
  }
]);

controllers.controller('SponsorsCtrl', ['$scope', '$sce', 'SponsorsService',
  function($scope, $sce, SponsorsService) {
    $scope.sponsorsTitle = 'Sponsors';
    $scope.sponsorsEmail = $sce.trustAsHtml('Interested in sponsoring HackUMass? Email us at <a href="mailto:sponsors@hackumass.com">sponsors&commat;hackumass.com</a>');
    $scope.sponsorsMega = SponsorsService.getSponsorsMega();
    $scope.sponsorsGiga = SponsorsService.getSponsorsGiga();
    $scope.sponsorsTera = SponsorsService.getSponsorsTera();
    $scope.sponsorsZetta = SponsorsService.getSponsorsZetta();
  }
]);
