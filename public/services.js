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
        answer: $sce.trustAsHtml('Yes we will! We are currently working to provide buses for participants coming from high demand areas such as Boston, MA, Worcester, MA, Providence, RI, and Troy, NY. If you are traveling to UMass and are not from one of the above locations, we will also be offering travel reimbursements on a case-by-case basis for those interested in flying in, taking the train or a bus, or driving by car. Please carefully review and submit <a href="http://goo.gl/BuFMFN">this form</a> if you are interested in pursuing travel reimbursements.')
      },
      {
        question: 'What kind of hardware will be available for us?',
        answer: $sce.trustAsHtml('Check out <a href="/resources">this page</a> for a full list of hardware!')
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
            time: '10 AM - 11 AM',
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
            time: '2 PM - 3 PM',
            action: 'Indico Tech Talk'
          },
          {
            time: '2 PM - 3 PM',
            action: 'Intel Tech Talk'
          },
          {
            time: '3 PM - 4 PM',
            action: 'TripAdvisor Tech Talk'
          },
          {
            time: '3 PM - 5 PM',
            action: 'Autodesk Tech Talk'
          },
          {
            time: '4 PM - 5 PM',
            action: 'Christof Paar Tech Talk'
          },
          {
            time: '4 PM',
            action:  'Snack'
          },
          {
            time: '5 PM - 6 PM',
            action: 'SmarterTravel Tech Talk'
          },
          {
            time: '5 PM - 6 PM',
            action: 'MITRE Tech Talk'
          },
          {
            time: '6 PM - 7 PM',
            action: 'IBM Tech Talk 1'
          },
          {
            time: '7 PM',
            action:  'Dinner'
          },
          {
            time: '8 PM - 9 PM',
            action: 'BOSE Tech Talk'
          },
          {
            time: '8 PM - 9 PM',
            action: 'GaggleAMP Tech Talk'
          },
          {
            time: '9 PM - 10 PM',
            action: 'IBM Tech Talk 2'
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
            time: '12 PM - 1 PM',
            action: 'Long River Ventures Tech Talk'
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
  this.getXLargeLogos = function() {
    return [
      {
        link: 'https://www.ibm.com/',
        image_url: 'assets/img/logos/ibm.png',
        name: 'IBM'
      }
    ];
  };

  this.getLargeLogos = function(){
    return [
      {
        link: 'https://www.bose.com/',
        image_url: 'assets/img/logos/bose.png',
        name: 'Bose'
      },
      {
        link: 'https://www.mitre.org/',
        image_url: 'assets/img/logos/mitre.png',
        name: 'MITRE'
      },
      {
        link: 'http://www.mashery.com/',
        image_url: 'assets/img/logos/mashery.png',
        name: 'Mashery'
      },
      {
        link: 'http://smartertravel.com/',
        image_url: 'assets/img/logos/smartertravel.png',
        name: 'SmarterTravel'
      },
      {
        link: 'http://www.tripadvisor.com/',
        image_url: 'assets/img/logos/tripadvisor.png',
        name: 'TripAdvisor'
      }
    ];
  };

  this.getMediumLogos = function(){
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
        link: 'https://www.amd.com/',
        image_url: 'assets/img/logos/amd.png',
        name: 'AMD'
      },
      {
        link: 'https://www.indico.io/',
        image_url: 'assets/img/logos/indico.png',
        name: 'Indico'
      },
      {
        link: 'https://www.verizon.com/',
        image_url: 'assets/img/logos/verizon.png',
        name: 'Verizon'
      },
      {
        link: 'http://www.nvidia.com/page/home.html',
        image_url: 'assets/img/logos/nvidia.png',
        name: 'NVIDIA'
      },
      {
        link: 'https://www.lutron.com/',
        image_url: 'assets/img/logos/lutron.png',
        name: 'Lutron'
      },
      {
        link: 'http://www.autodesk.com/',
        image_url: 'assets/img/logos/autodesk.png',
        name: 'Autodesk'
      },
      {
        link: 'http://www.ll.mit.edu/',
        image_url: 'assets/img/logos/mitll.png',
        name: 'MIT Lincoln Laboratory'
      }
    ];
  };

  this.getSmallLogos = function(){
    return [
      {
        link: 'https://tessel.io/',
        image_url: 'assets/img/logos/tessel.png',
        name: 'Tessel'
      },
      {
        link: 'https://www.smartuplegal.com/',
        image_url: 'assets/img/logos/smartup.png',
        name: 'SmartUp Legal'
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
      },
      {
        link: 'http://aws.amazon.com/',
        image_url: 'assets/img/logos/aws.png',
        name: 'Amazon Web Services'
      },
      {
        link: 'http://namecheap.com/',
        image_url: 'assets/img/logos/namecheap.png',
        name: 'Namecheap'
      },
      {
        link: 'http://microsoft.com/',
        image_url: 'assets/img/logos/microsoft.png',
        name: 'Microsoft'
      },
      {
        link: 'http://hackerrank.com/',
        image_url: 'assets/img/logos/hackerrank.png',
        name: 'HackerRank'
      },
      {
        link: 'http://cyberark.com/',
        image_url: 'assets/img/logos/cyberark.png',
        name: 'CyberArk'
      },
      {
        link: 'http://longriverventures.com/',
        image_url: 'assets/img/logos/longriver.png',
        name: 'Long River Ventures'
      },
      {
        link: 'http://mathworks.com/',
        image_url: 'assets/img/logos/mathworks.png',
        name: 'MathWorks'
      },
      {
        link: 'http://gaggleamp.com/',
        image_url: 'assets/img/logos/gaggleamp.png',
        name: 'GaggleAMP'
      },
      {
        link: 'http://unity3d.com/',
        image_url: 'assets/img/logos/unity.png',
        name: 'Unity'
      },
      {
        link: 'http://www.shapeways.com/',
        image_url: 'assets/img/logos/shapeways.png',
        name: 'Shapeways'
      },
      {
        link: 'http://www.techspringhealth.org/',
        image_url: 'assets/img/logos/techspring.png',
        name: 'TechSpring'
      }
    ];
  };

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
        link: 'http://www.umassdining.com/',
        image_url: 'assets/img/logos/umassdining.png',
        name: 'UMasss Dining'
      },
      {
        link: 'http://ieee.org/',
        image_url: 'assets/img/logos/ieee.png',
        name: 'IEEE'
      },
      {
        link: 'http://umassamherstm5.org/',
        image_url: 'assets/img/logos/m5.png',
        name: 'UMasss Amherst M5'
      },
      {
        link: 'http://www.arm.com/support/university/index.php',
        image_url: 'assets/img/logos/arm.png',
        name: 'ARM University Program'
      }
    ];
  };
});

services.service('ResourcesService', function(){
  this.getResources = function(){
    return [
      {
        category: 'MicroProcessors',
        items: [
          'Adruino Uno',
          'Beagleboard Rev C',
          'Raspberry Pi 2',
          'LightBlue Bean',
          'NUCLEO-F401RE'
        ]
      },
      {
        category: 'Electronic Components',
        items: [
          '9V Power Batteries',
          'Male Header Pins',
          'SD Cards',
          'Inverter',
          'AND Gate',
          'OR Gate',
          '555 Timer',
          'NPN BJT',
          'PNP BJT',
          'OP-AMP',
          'Diode',
          'FET Array',
          'Wires',
          'Breadboards',
          'Jumper Cables',
          'Resistors'
        ]
      },
      {
        category: 'Sensors',
        items: [
          'Optical Detector / Phototransistor',
          'Piezo Element',
          'Tilt Sensor',
          'Infrared Emitters and Detectors',
          'Piezo Vibration Sensor - Large',
          'Light to Frequency Converter',
          'Softpot Rotary Potentiometer',
          'Flex Sensor 4.5"',
          '4-Way Tilt Sensor',
          'Photo Interrupter',
          'RGB and Gesture Sensor',
          'Load Sensor - 50kg',
          'Triple Axis Magnetometer',
          'Pulse Sensor',
          'Ultrasonic Range Finder - LV-MaxSonar-EZ1',
          'Hall Effect Sensor',
          'SparkFun Ambient Light Sensor Breakout',
          'Ultrasonic Distance Sensor',
          'Temp Sensor Breakout TMP102',
          'Force-Sensing Resistor (circle)',
          'Gyro, Accel, Compass (IMU)'
        ]
      },
      {
        category: 'Cameras',
        items: [
          'Raspberry Pi Cam'
        ]
      },
      {
        category: 'Speakers',
        items: [
          'Piezo Speaker - PC Mount 12mm 2.048kHz',
          '8-ohm Speakers'
        ]
      },
      {
        category: 'Motors',
        items: [
          'Mini DC Motor',
          'Servo Motor',
          'Vibration Motor'
        ]
      },
      {
        category: 'Displays/LEDs',
        items: [
          'Basic 16x2 Character LCD - White on Black 5V',
          'LED Matrix IC',
          'LED RGB Strip - Addressable, Sealed (1m)',
          'SparkFun Micro OLED Breakout',
          'Lots of misc LEDs'
        ]
      },
      {
        category: 'Others',
        items: [
          'Miniature Solar Cell',
          'Solenoid - 5v (small)',
          'SparkFun Logic Level Converter - Bi-Directional',
          'Microphone',
          'ARM mBed',
          'LM380 Audio Amp IC',
          'XBee Wireless Kit',
          'Leap Motion',
          'Oculus Rift',
          'Myo',
          'Pebble',
          'Tessel',
          'Sparkcore'
        ]
      }
    ];
  };
});

services.service('PrizesService', function(){

  this.getPrizes = function(){
    return [
      {
        "category": "Finalist (8 Prizes)",
        "reward": "Each member of the 8 finalist teams will receive one NVIDIA SHEILD, courtesy of NVIDIA"
      },
      {
        "category": "Champion (3 Prizes)",
        "reward": "Each member of the 3 champion teams will receive a Myo and Pebble Steel, courtesy of the HackUMass Team"
      },
      {
        "category": "IBM Bluemix Innovation Award",
        "reward": "$12K in IBM Cloud Credits. Also be fast tracked into the MassChallenge startup incubator!"
      },
      {
        "category": "Best Use of TripAdvisor API",
        "reward": "TripAdvisor will award up to 4 Dell Chromebook to the team that best uses TripAdvisor API"
      },
      {
        "category": "Best UMass Dining Hack",
        "reward": "UMass Dining will award their top prize to the best hack related to instant customer feedback and interaction, dining analytics, and/or location based promotions. Design, App UI/UX, and dashboard layout are all things that will be part of the hack, as people will aim to build complete apps around the features. There will be $200 Visa gift card per team member."
      },
      {
        "category": "Health Prize Category",
        "reward": "Prizes will be awarded in 3 health related categories. Details can be found at http://www.techspringhealth.org/hackumass"
      },
      {
        "category": "Best Use of Machine Learning",
        "reward": "Indico will award Machine generated portraits and 1 million free API calls to the team that makes the best Machine Learning Hack"
      },
      {
        "category": "Best use of Google API",
        "reward": "Google will award Chromecasts and swag to the team with the best hack using Google API, Hardware or Tool (including cardboard)"
      },
      {
        "category": "Best use of Edison",
        "reward": "Intel will reward 2 Anki Drive & 2 Parrot Mini Drones to the team that has the best utilization of Intel Edison"
      },
      {
        "category": "Best use of Fusion 360",
        "reward": "Autodesk will award a duffle bag full of swag to the team that has the best utilization of Autodesk Fusion 360"
      },
      {
        "category": "Communication Innovation",
        "reward": "Each team member will receive a glass trophy and a $50 gift card, courtesy of Verizon Wireless."
      }
    ]
  };
});
