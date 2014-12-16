'use strict';

app.controller('LandingCtrl', ['$scope',
  function($scope) {
    $scope.date = 'April 11th-12th, 2015';
  }
]);

app.controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.title = 'What is HackUMass?';

    $scope.paragraphs = [
      'HackUMass is an annual, student-run hackathon hosted at the University of Massachusetts, Amherst. It is going to be the largest hackathon of the Pioneer Valley, attracting over 500 of the most ambitious, talented, and creative hackers from all over the country to gather and build innovative software and hardware products. We aim to create a supportive, collaborative, and inclusive environment for all hackers no matter their background, gender, race, or sexuality. HackUMass is an amazing opportunity for students to grow as developers, innovators, and team players in order to bring dreams to reality.',
      'HackUMass 2014 was founded by a small team of students with a big vision: hosting the Pioneer Valley\'s first intercollegiate embedded systems hackathon. We attracted students from UMass, Mt. Holyoke, Brown, and MIT, with registration for all 100 spots filling up in less than 2 hours, leaving us with an extensive waitlist. After hacking, teams presented their projects to fellow participants, sponsors, professors, and the local community. All attendees agreed that our excellent event structure, food and snack choices, supportive environment, and the enthusiastic mentors sent over by our sponsors created an unforgettable hackathon experience.'
    ];
  }
]);

app.controller('FaqCtrl', ['$scope',
  function($scope) {
    $scope.title = 'FAQ';

    $scope.panels = [
      {
        question: 'Where is it?',
        answer: 'HackUMass 2015 will take place at the Mullins Center, the biggest and most popular indoors venue on campus, with ample space and parking.'
      },
      {
        question: 'Who\'s coming?',
        answer: 'We expect over 500 hackers from across the US to attend our Hackathon, with most attendees arriving from Boston, Worcester, New York City, Providence, Connecticut, and Albany.'
      }
    ];
  }
]);

app.controller('ScheduleCtrl', ['$scope',
  function($scope) {
    $scope.title = 'Schedule';
  }
]);

app.controller('SponsorsCtrl', ['$scope', '$sce',
  function($scope, $sce) {
    $scope.title = 'Sponsors';

    $scope.email = $sce.trustAsHtml('Interested in sponsoring HackUMass? Email us at <a href="mailto:sponsors@hackumass.com">sponsors&commat;hackumass.com</a>');
  }
]);