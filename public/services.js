'use strict';

var services = angular.module('services', []);

services.service('LandingService', function(){
	this.getDate = function () {
		return 'October 23-25, 2015';
	};
});

services.service('AboutService', function(){
  this.getParagraphs = function(){
    return [
      'HackUMass is the largest hackathon in the Pioneer Valley, attracting over 500 hackers from all over the country to one arena. In 36 hours, participants will bring innovative ideas to life through both software and hardware projects.'
    ];
  };
});

services.service('FaqService', function($sce){
  this.getPanels = function(){
    return [
      {
        question: 'Where is it?',
        answer: $sce.trustAsHtml('HackUMass 2015 will take place at the <a href="http://goo.gl/YGbnx2">Integrative Learning Center</a>, the newest venue on campus, with robust WiFi and ample space.')
      },
      {
        question: 'Who\'s coming?',
        answer: $sce.trustAsHtml('We expect over 500 hackers from across the US to attend our Hackathon, with most attendees arriving from Boston, Worcester, New York City, Providence, Connecticut, and Albany.')
      },
      {
        question: 'Who can attend?',
        answer: $sce.trustAsHtml('All students are welcome. If you\'re under 18, we will need you to bring a signed parental consent form.')
      },
      {
        question: 'Do I need experience?',
        answer: $sce.trustAsHtml('We will have an entire area in the arena dedicated to beginners with plenty of mentors and resources, so don’t worry about not knowing enough beforehand. Come to learn and experience your first hackathon - we guarantee you\'ll want to return.')
      },
      {
        question: 'What can I make?',
        answer: $sce.trustAsHtml('Anything you want! HackUMass is both a software and hardware hackathon where you can make your ideas a reality.')
      },
      {
        question: 'Should I be in a team?',
        answer: $sce.trustAsHtml('We encourage everybody to work in a team of up to 4 people. You can work alone, but it will be less fun. There will be plenty of opportunities to form your team online and at the event.')
      },
      {
        question: 'What should I bring?',
        answer: $sce.trustAsHtml('A valid photo ID that includes your name and date of birth, laptop, phone, chargers, a sleeping bag, and enthusiasm. We\'ll provide the rest. :)')
      },
      {
        question: 'Does it cost anything?',
        answer: $sce.trustAsHtml('Attending HackUMass is 100% free for all registrants.')
      },
      {
        question: 'How do I get there?',
        answer: $sce.trustAsHtml('There are many ways to get to Amherst! Buses regularly come to Amherst from Boston, NYC, Albany, Newark, Providence, and other locations. You can also fly in to Bradley International Airport or Logan and take a bus from there.')
      },
      {
        question: 'Will you be providing travel reimbursements?',
        answer: $sce.trustAsHtml('We sure hope so! We\'ll have a solid answer once we\'re closer to the event.')
      },
      {
        question: 'What kind of hardware will be available for us?',
        answer: $sce.trustAsHtml('List coming soon.')
      }
    ];
  };
});

services.service('SponsorsService', function(){
  this.getPartnerLogos = function(){
    return [
      {
        link: 'https://mlh.io/',
	image_url: 'http://static.mlh.io/brand-assets/logo/mlh-logo.png',
        name: 'Major League Hacking'
      },
    ];
  };
});
