'use strict';

var directives = angular.module('directives', []);

directives.directive('countdown', function(){
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {

      function normalizeTime(time){
        return time < 10 ? '0' + time : time;
      }

      function countdown() {
        var eventDate = new moment('2015-04-11'),
            now = new moment();

        var units = [];

        units.push(eventDate.diff(now, 'days'));
        eventDate.subtract(units[0], 'days');

        units.push(normalizeTime(eventDate.diff(now, 'hours')));
        eventDate.subtract(units[1], 'hours');

        units.push(normalizeTime(eventDate.diff(now, 'minutes')));

        var counters = element.find('h1');

        for(var i = 0; i < counters.length; i++){
          counters[i].innerText = units[i];
        }
      }

      countdown();
      setInterval(countdown, 500);
    }
  };
});
