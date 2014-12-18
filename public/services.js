'use strict';

var services = angular.module('services', []);

services.service('LandingService', function(){

});

services.service('AboutService', function(){
  this.getParagraphs = function(){
    return [
      'HackUMass is an annual, student-run hackathon hosted at the University of Massachusetts, Amherst. It is going to be the largest hackathon of the Pioneer Valley, attracting over 500 of the most ambitious, talented, and creative hackers from all over the country to gather and build innovative software and hardware products. We aim to create a supportive, collaborative, and inclusive environment for all hackers no matter their background, gender, race, or sexuality. HackUMass is an amazing opportunity for students to grow as developers, innovators, and team players in order to bring dreams to reality.',
      'HackUMass 2014 was founded by a small team of students with a big vision: hosting the Pioneer Valley\'s first intercollegiate embedded systems hackathon. We attracted students from UMass, Mt. Holyoke, Brown, and MIT, with registration for all 100 spots filling up in less than 2 hours, leaving us with an extensive waitlist. After hacking, teams presented their projects to fellow participants, sponsors, professors, and the local community. All attendees agreed that our excellent event structure, food and snack choices, supportive environment, and the enthusiastic mentors sent over by our sponsors created an unforgettable hackathon experience.'
    ];
  };
});

services.service('FaqService', function(){
  this.getPanels = function(){
    return [
      {
        question: 'Where is it?',
        answer: 'HackUMass 2015 will take place at the Mullins Center, the biggest and most popular indoors venue on campus, with ample space and parking.'
      },
      {
        question: 'Who\'s coming?',
        answer: 'We expect over 500 hackers from across the US to attend our Hackathon, with most attendees arriving from Boston, Worcester, New York City, Providence, Connecticut, and Albany.'
      },
      {
        question: 'Who can attend?',
        answer: 'All undergraduate or graduate students are welcome. If you\'re under 18, we will need you to bring a signed parental consent form.'
      },
      {
        question: 'Do I need experience?',
        answer: 'We will have an entire area and in the arena dedicated to beginners with plenty of mentors and resources, so don’t worry about not knowing enough beforehand. Come to learn and experience your first hackathon - we guarantee you\'ll want to return.'
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
        answer: 'Your valid student ID, laptop, phone, chargers, a sleeping bag, and enthusiasm. We\'ll provide the rest :)'
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

});
