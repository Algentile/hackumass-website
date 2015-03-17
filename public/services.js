'use strict';

var services = angular.module('services', []);

services.service('LandingService', function(){

});

services.service('AboutService', function(){
  this.getParagraphs = function(){
    return [
      'HackUMass is the largest hackathon in the Pioneer Valley, attracting over 500 hackers from all over the country to one arena. In 36 hours, participants will bring innovative ideas to life through both software and hardware projects.'
    ];
  };
});

services.service('FaqService', function(){
  this.getPanels = function(){
    return [
      {
        question: 'Where is it?',
        answer: 'HackUMass 2015 will take place at the Integrative Learning Center, the newest venue on campus, with robust WiFi and ample space.'
      },
      {
        question: 'Who\'s coming?',
        answer: 'We expect over 500 hackers from across the US to attend our Hackathon, with most attendees arriving from Boston, Worcester, New York City, Providence, Connecticut, and Albany.'
      },
      {
        question: 'Who can attend?',
        answer: 'All students are welcome. If you\'re under 18, we will need you to bring a signed parental consent form.'
      },
      {
        question: 'Do I need experience?',
        answer: 'We will have an entire area in the arena dedicated to beginners with plenty of mentors and resources, so don’t worry about not knowing enough beforehand. Come to learn and experience your first hackathon - we guarantee you\'ll want to return.'
      },
      {
        question: 'What can I make?',
        answer: 'Anything you want! HackUMass is both a software and hardware hackathon where you can make your ideas a reality.'
      },
      {
        question: 'Should I be in a team?',
        answer: 'We encourage everybody to work in a team of up to 4 people. You can work alone, but it will be less fun. There will be plenty of opportunities to form your team online and at the event.'
      },
      {
        question: 'What should I bring?',
        answer: 'A valid photo ID that includes your name and date of birth, laptop, phone, chargers, a sleeping bag, and enthusiasm. We\'ll provide the rest. :)'
      },
      {
        question: 'Does it cost anything?',
        answer: 'Attending HackUMass is 100% free for all registrants.'
      },
      {
        question: 'How do I get there?',
        answer: 'There are many ways to get to Amherst! Buses regularly come to Amherst from Boston, NYC, Albany, Newark, Providence, and other locations. You can also fly in to Bradley International Airport or Logan and take a bus from there.'
      },
      {
        question: 'Will you be providing travel reimbursements?',
        answer: 'We\'re going to try our hardest! We’ll be posting more details soon.'
      }
    ];
  };
});

services.service('ScheduleService', function(){
  this.getSchedule = function(){
    return [
      {
        day: 'Saturday',
        events: [
          {
            time: '8 AM',
            action:  'Check in, breakfast, and team building'
          },
          {
            time: '10 AM',
            action: 'Opening ceremony'
          },
          {
            time: '11 AM',
            action: 'Finish forming teams + hacking begins!'
          },
          {
            time: '1 PM',
            action: 'Lunch'
          },
          {
            time: '4 PM',
            action:  'Snack'
          },
          {
            time: '7 PM',
            action:  'Dinner'
          },
          {
            time: '12 AM',
            action:  'Midnight Snack'
          }
        ]
      },
      {
        day: 'Sunday',
        events: [
          {
            time: '4 AM',
            action:  'Snack'
          },
          {
            time: '8 AM',
            action:  'Breakfast'
          },
          {
            time: '1 PM',
            action:  'Hack submissions + lunch'
          },
          {
            time: '4 PM',
            action:  'Demos'
          },
          {
            time: '6 PM',
            action:  'Dinner'
          },
          {
            time: '7 PM',
            action: 'Awards + closing ceremony'
          }
        ]
      }
    ];
  };
});

services.service('SponsorsService', function(){
  this.getXLargeLogos = function(){
    return [
      {
        link: 'http://www.mashery.com/',
        image_url: 'assets/img/logos/mashery.png',
        name: 'Mashery'
      }
    ]
  }

	this.getLargeLogos = function(){
		return [
      {
  			link: 'http://cimpress.com/',
  			image_url: 'assets/img/logos/cimpress.png',
  			name: 'Cimpress'
      },
  		{
  			link: 'https://www.google.com/',
  			image_url: 'assets/img/logos/google.png',
  			name: 'Google'
  		},
  		{
  			link: 'https://www.smartuplegal.com/',
  			image_url: 'assets/img/logos/smartup.png',
  			name: 'SmartUp Legal'
  		},
      {
        link: 'https://www.amd.com/',
        image_url: 'assets/img/logos/amd.png',
        name: 'AMD'
      }
		]
	}
	this.getMediumLogos = function(){
		return [
      {
        link: 'https://tessel.io/',
        image_url: 'assets/img/logos/tessel.png',
        name: 'Tessel'
      },
      {
        link: 'https://www.stickermule.com/',
        image_url: 'assets/img/logos/stickermule.png',
        name: 'StickerMule'
      },
      {
        link: 'https://www.cisco.com/',
        image_url: 'assets/img/logos/cisco.png',
        name: 'Cisco'
      },
      {
        link: 'https://robinpowered.com/',
        image_url: 'assets/img/logos/robin.png',
        name: 'Robin'
      },
      {
        link: 'https://www.attend.com/',
        image_url: 'assets/img/logos/attend.png',
        name: 'Attend.com'
      },
  		{
  			link: 'https://www.facebook.com/',
  			image_url: 'assets/img/logos/facebook.png',
  			name: 'Facebook'
  		},
      {
        link: 'https://www.kloudless.com/',
        image_url: 'assets/img/logos/kloudless.png',
        name: 'Kloudless'
      },
      {
        link: 'https://www.thalmic.com/',
        image_url: 'assets/img/logos/thalmic.png',
        name: 'Thalmic Labs'
      },
      {
        link: 'https://squareup.com/',
        image_url: 'assets/img/logos/square.png',
        name: 'Square'
      },
      {
        link: 'https://www.twilio.com/',
        image_url: 'assets/img/logos/twilio.png',
        name: 'Twilio'
      }
		]
	}
	this.getPartnerLogos = function(){
		return [
  		{
  			link: 'https://mlh.io/',
  			image_url: 'assets/img/logos/mlh.png',
  			name: 'Major League Hacking'
  		},
  		{
  			link: 'https://www.isenberg.umass.edu/centers/berthiaume-center-for-entrepreneurship',
  			image_url: 'assets/img/logos/c4e.png',
  			name: 'Berthiaume Center for Entrepreneurship'
  		},
      {
        link: 'https://http://www.umassdining.com/',
        image_url: 'assets/img/logos/umassdining.png',
        name: 'UMasss Dining'
      },
      {
        link: 'http://ieee.org/',
        image_url: 'assets/img/logos/ieee.png',
        name: 'IEEE'
      },
      {
        link: 'https://www.cs.umass.edu/',
        image_url: 'assets/img/logos/umasscs.png',
        name: 'UMass School of Computer Science'
      },
      {
        link: 'http://umassamherstm5.org/',
        image_url: 'assets/img/logos/m5.png',
        name: 'UMasss Amherst M5'
      }
		]
	}
});
