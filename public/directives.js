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
        var eventDate = new moment('2015-04-11 08:00:00'),
            now = new moment();

        if(now.isAfter(eventDate)){
          element.html('<h5>0 Months, Days, 00:00:00</h5>');
        } else {
          var months = eventDate.diff(now, 'months');
          eventDate.subtract(months, 'months');
          var days = eventDate.diff(now, 'days');
          eventDate.subtract(days, 'days');
          var hours = normalizeTime(eventDate.diff(now, 'hours'));
          eventDate.subtract(hours, 'hours');
          var minutes = normalizeTime(eventDate.diff(now, 'minutes'));
          eventDate.subtract(minutes, 'minutes');
          var seconds = normalizeTime(eventDate.diff(now, 'seconds'));

          element.html('<h5>' + months + ' Months, ' + days + ' Days, ' + hours + ':' + minutes + ':' + seconds + '</h5>');
        }

      }

      countdown();
      setInterval(countdown, 500);
    }
  };
});

directives.directive('toggleSibling', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var sibling = element.next();

      element.on('click', function(){
        if(sibling.is(':hidden')) {
          sibling.slideDown('slow');
        } else {
          sibling.slideUp('slow');
        }
      });
    }
  }
})
