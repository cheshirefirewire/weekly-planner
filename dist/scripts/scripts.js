'use strict';

var printedCal = '<section class="day"><div class="hour">7</div><div class="hour">7:15</div><div class="hour">7:30</div><div class="hour">7:45</div><div class="hour">8</div><div class="hour orange">8:15<span class="title"> GR Yoga</span></div><div class="hour">8:30</div><div class="hour">8:45</div><div class="hour orange">9<span class="title"> GR Yoga</span></div><div class="hour">9:15</div><div class="hour orange">9:30<span class="title"> GR Yoga</span></div><div class="hour orange">9:45<span class="title"> GR Yoga</span></div><div class="hour">10</div><div class="hour orange">10:15<span class="title"> GR Yoga</span></div><div class="hour">10:30</div><div class="hour orange">10:45<span class="title"> GR Yoga</span></div><div class="hour">11</div><div class="hour">11:15</div><div class="hour">11:30</div><div class="hour">11:45</div><div class="hour">12</div><div class="hour">12:15</div><div class="hour">12:30</div><div class="hour">12:45</div><div class="hour">13</div><div class="hour">13:15</div><div class="hour">13:30</div><div class="hour">13:45</div><div class="hour">14</div><div class="hour">14:15</div><div class="hour">14:30</div><div class="hour">14:45</div><div class="hour">15</div><div class="hour">15:15</div><div class="hour">15:30</div><div class="hour">15:45</div><div class="hour">16</div><div class="hour">16:15</div><div class="hour">16:30</div><div class="hour">16:45</div><div class="hour">17</div><div class="hour">17:15</div><div class="hour">17:30</div><div class="hour">17:45</div><div class="hour">18</div><div class="hour">18:15</div><div class="hour">18:30</div><div class="hour">18:45</div><div class="hour">19</div><div class="hour">19:15</div><div class="hour">19:30</div><div class="hour">19:45</div><div class="hour">20</div><div class="hour">20:15</div><div class="hour">20:30</div><div class="hour">20:45</div><div class="hour">21</div><div class="hour">21:15</div><div class="hour">21:30</div><div class="hour">21:45</div><div class="hour">22</div><div class="hour">22:15</div><div class="hour">22:30</div><div class="hour">22:45</div><div class="hour">23</div><div class="hour">23:15</div><div class="hour">23:30</div><div class="hour">23:45</div><div class="hour">24</div></section><section class="day"><div class="hour">7</div><div class="hour">7:15</div><div class="hour">7:30</div><div class="hour">7:45</div><div class="hour">8</div><div class="hour">8:15</div><div class="hour">8:30</div><div class="hour">8:45</div><div class="hour">9</div><div class="hour">9:15</div><div class="hour">9:30</div><div class="hour">9:45</div><div class="hour">10</div><div class="hour">10:15</div><div class="hour">10:30</div><div class="hour">10:45</div><div class="hour">11</div><div class="hour">11:15</div><div class="hour">11:30</div><div class="hour">11:45</div><div class="hour">12</div><div class="hour">12:15</div><div class="hour">12:30</div><div class="hour">12:45</div><div class="hour">13</div><div class="hour">13:15</div><div class="hour">13:30</div><div class="hour">13:45</div><div class="hour">14</div><div class="hour">14:15</div><div class="hour">14:30</div><div class="hour">14:45</div><div class="hour">15</div><div class="hour">15:15</div><div class="hour">15:30</div><div class="hour">15:45</div><div class="hour">16</div><div class="hour">16:15</div><div class="hour">16:30</div><div class="hour">16:45</div><div class="hour">17</div><div class="hour">17:15</div><div class="hour">17:30</div><div class="hour">17:45</div><div class="hour">18</div><div class="hour">18:15</div><div class="hour">18:30</div><div class="hour">18:45</div><div class="hour">19</div><div class="hour">19:15</div><div class="hour">19:30</div><div class="hour">19:45</div><div class="hour">20</div><div class="hour">20:15</div><div class="hour">20:30</div><div class="hour">20:45</div><div class="hour">21</div><div class="hour">21:15</div><div class="hour">21:30</div><div class="hour">21:45</div><div class="hour">22</div><div class="hour">22:15</div><div class="hour">22:30</div><div class="hour">22:45</div><div class="hour">23</div><div class="hour">23:15</div><div class="hour">23:30</div><div class="hour">23:45</div><div class="hour">24</div></section><section class="day"><div class="hour">7</div><div class="hour">7:15</div><div class="hour">7:30</div><div class="hour">7:45</div><div class="hour">8</div><div class="hour">8:15</div><div class="hour">8:30</div><div class="hour">8:45</div><div class="hour">9</div><div class="hour">9:15</div><div class="hour">9:30</div><div class="hour">9:45</div><div class="hour">10</div><div class="hour">10:15</div><div class="hour">10:30</div><div class="hour">10:45</div><div class="hour">11</div><div class="hour">11:15</div><div class="hour">11:30</div><div class="hour">11:45</div><div class="hour">12</div><div class="hour">12:15</div><div class="hour">12:30</div><div class="hour">12:45</div><div class="hour">13</div><div class="hour">13:15</div><div class="hour">13:30</div><div class="hour">13:45</div><div class="hour">14</div><div class="hour">14:15</div><div class="hour">14:30</div><div class="hour">14:45</div><div class="hour">15</div><div class="hour">15:15</div><div class="hour">15:30</div><div class="hour">15:45</div><div class="hour">16</div><div class="hour">16:15</div><div class="hour">16:30</div><div class="hour">16:45</div><div class="hour">17</div><div class="hour">17:15</div><div class="hour">17:30</div><div class="hour">17:45</div><div class="hour">18</div><div class="hour">18:15</div><div class="hour">18:30</div><div class="hour">18:45</div><div class="hour">19</div><div class="hour">19:15</div><div class="hour">19:30</div><div class="hour">19:45</div><div class="hour">20</div><div class="hour">20:15</div><div class="hour">20:30</div><div class="hour">20:45</div><div class="hour">21</div><div class="hour">21:15</div><div class="hour">21:30</div><div class="hour">21:45</div><div class="hour">22</div><div class="hour">22:15</div><div class="hour">22:30</div><div class="hour">22:45</div><div class="hour">23</div><div class="hour">23:15</div><div class="hour">23:30</div><div class="hour">23:45</div><div class="hour">24</div></section><section class="day"><div class="hour">7</div><div class="hour">7:15</div><div class="hour">7:30</div><div class="hour">7:45</div><div class="hour">8</div><div class="hour">8:15</div><div class="hour">8:30</div><div class="hour">8:45</div><div class="hour">9</div><div class="hour">9:15</div><div class="hour">9:30</div><div class="hour">9:45</div><div class="hour">10</div><div class="hour">10:15</div><div class="hour">10:30</div><div class="hour">10:45</div><div class="hour">11</div><div class="hour">11:15</div><div class="hour">11:30</div><div class="hour">11:45</div><div class="hour">12</div><div class="hour">12:15</div><div class="hour">12:30</div><div class="hour">12:45</div><div class="hour">13</div><div class="hour">13:15</div><div class="hour">13:30</div><div class="hour">13:45</div><div class="hour">14</div><div class="hour">14:15</div><div class="hour">14:30</div><div class="hour">14:45</div><div class="hour">15</div><div class="hour">15:15</div><div class="hour">15:30</div><div class="hour">15:45</div><div class="hour">16</div><div class="hour">16:15</div><div class="hour">16:30</div><div class="hour">16:45</div><div class="hour">17</div><div class="hour">17:15</div><div class="hour">17:30</div><div class="hour">17:45</div><div class="hour">18</div><div class="hour">18:15</div><div class="hour">18:30</div><div class="hour">18:45</div><div class="hour">19</div><div class="hour">19:15</div><div class="hour">19:30</div><div class="hour">19:45</div><div class="hour">20</div><div class="hour">20:15</div><div class="hour">20:30</div><div class="hour">20:45</div><div class="hour">21</div><div class="hour">21:15</div><div class="hour">21:30</div><div class="hour">21:45</div><div class="hour">22</div><div class="hour">22:15</div><div class="hour">22:30</div><div class="hour">22:45</div><div class="hour">23</div><div class="hour">23:15</div><div class="hour">23:30</div><div class="hour">23:45</div><div class="hour">24</div></section><section class="day"><div class="hour">7</div><div class="hour">7:15</div><div class="hour">7:30</div><div class="hour">7:45</div><div class="hour">8</div><div class="hour">8:15</div><div class="hour">8:30</div><div class="hour">8:45</div><div class="hour">9</div><div class="hour">9:15</div><div class="hour">9:30</div><div class="hour">9:45</div><div class="hour">10</div><div class="hour">10:15</div><div class="hour">10:30</div><div class="hour">10:45</div><div class="hour">11</div><div class="hour">11:15</div><div class="hour">11:30</div><div class="hour">11:45</div><div class="hour">12</div><div class="hour">12:15</div><div class="hour">12:30</div><div class="hour">12:45</div><div class="hour">13</div><div class="hour">13:15</div><div class="hour">13:30</div><div class="hour">13:45</div><div class="hour">14</div><div class="hour">14:15</div><div class="hour">14:30</div><div class="hour">14:45</div><div class="hour">15</div><div class="hour">15:15</div><div class="hour">15:30</div><div class="hour">15:45</div><div class="hour">16</div><div class="hour">16:15</div><div class="hour">16:30</div><div class="hour">16:45</div><div class="hour">17</div><div class="hour">17:15</div><div class="hour">17:30</div><div class="hour">17:45</div><div class="hour">18</div><div class="hour">18:15</div><div class="hour">18:30</div><div class="hour">18:45</div><div class="hour">19</div><div class="hour">19:15</div><div class="hour">19:30</div><div class="hour">19:45</div><div class="hour">20</div><div class="hour">20:15</div><div class="hour">20:30</div><div class="hour">20:45</div><div class="hour">21</div><div class="hour">21:15</div><div class="hour">21:30</div><div class="hour">21:45</div><div class="hour">22</div><div class="hour">22:15</div><div class="hour">22:30</div><div class="hour">22:45</div><div class="hour">23</div><div class="hour">23:15</div><div class="hour">23:30</div><div class="hour">23:45</div><div class="hour">24</div></section><section class="day"><div class="hour">7</div><div class="hour">7:15</div><div class="hour">7:30</div><div class="hour">7:45</div><div class="hour">8</div><div class="hour">8:15</div><div class="hour">8:30</div><div class="hour">8:45</div><div class="hour">9</div><div class="hour">9:15</div><div class="hour">9:30</div><div class="hour">9:45</div><div class="hour">10</div><div class="hour">10:15</div><div class="hour">10:30</div><div class="hour">10:45</div><div class="hour">11</div><div class="hour">11:15</div><div class="hour">11:30</div><div class="hour">11:45</div><div class="hour">12</div><div class="hour">12:15</div><div class="hour">12:30</div><div class="hour">12:45</div><div class="hour">13</div><div class="hour">13:15</div><div class="hour">13:30</div><div class="hour">13:45</div><div class="hour">14</div><div class="hour">14:15</div><div class="hour">14:30</div><div class="hour">14:45</div><div class="hour">15</div><div class="hour">15:15</div><div class="hour">15:30</div><div class="hour">15:45</div><div class="hour">16</div><div class="hour">16:15</div><div class="hour">16:30</div><div class="hour">16:45</div><div class="hour">17</div><div class="hour">17:15</div><div class="hour">17:30</div><div class="hour">17:45</div><div class="hour">18</div><div class="hour">18:15</div><div class="hour">18:30</div><div class="hour">18:45</div><div class="hour">19</div><div class="hour">19:15</div><div class="hour">19:30</div><div class="hour">19:45</div><div class="hour">20</div><div class="hour">20:15</div><div class="hour">20:30</div><div class="hour">20:45</div><div class="hour">21</div><div class="hour">21:15</div><div class="hour">21:30</div><div class="hour">21:45</div><div class="hour">22</div><div class="hour">22:15</div><div class="hour">22:30</div><div class="hour">22:45</div><div class="hour">23</div><div class="hour">23:15</div><div class="hour">23:30</div><div class="hour">23:45</div><div class="hour">24</div></section><section class="day"><div class="hour">7</div><div class="hour">7:15</div><div class="hour">7:30</div><div class="hour">7:45</div><div class="hour">8</div><div class="hour">8:15</div><div class="hour">8:30</div><div class="hour">8:45</div><div class="hour">9</div><div class="hour">9:15</div><div class="hour">9:30</div><div class="hour">9:45</div><div class="hour">10</div><div class="hour">10:15</div><div class="hour">10:30</div><div class="hour">10:45</div><div class="hour">11</div><div class="hour">11:15</div><div class="hour">11:30</div><div class="hour">11:45</div><div class="hour">12</div><div class="hour">12:15</div><div class="hour">12:30</div><div class="hour">12:45</div><div class="hour">13</div><div class="hour">13:15</div><div class="hour">13:30</div><div class="hour">13:45</div><div class="hour">14</div><div class="hour">14:15</div><div class="hour">14:30</div><div class="hour">14:45</div><div class="hour">15</div><div class="hour">15:15</div><div class="hour">15:30</div><div class="hour">15:45</div><div class="hour">16</div><div class="hour">16:15</div><div class="hour">16:30</div><div class="hour">16:45</div><div class="hour">17</div><div class="hour">17:15</div><div class="hour">17:30</div><div class="hour">17:45</div><div class="hour">18</div><div class="hour">18:15</div><div class="hour">18:30</div><div class="hour">18:45</div><div class="hour">19</div><div class="hour">19:15</div><div class="hour">19:30</div><div class="hour">19:45</div><div class="hour">20</div><div class="hour">20:15</div><div class="hour">20:30</div><div class="hour">20:45</div><div class="hour">21</div><div class="hour">21:15</div><div class="hour">21:30</div><div class="hour">21:45</div><div class="hour">22</div><div class="hour">22:15</div><div class="hour">22:30</div><div class="hour">22:45</div><div class="hour">23</div><div class="hour">23:15</div><div class="hour">23:30</div><div class="hour">23:45</div><div class="hour">24</div></section>';

var calendarWeekly = document.getElementById('calendar-weekly');

var renderCalendar = function renderCalendar() {
  var hourSplitter = function hourSplitter(j) {
    /* if(j.toString.slice(1, -1)) */
    var decimal = j - Math.floor(j);
    if (decimal) {
      if (decimal == 0.25) {
        return Math.floor(j) + ':15';
      } else if (decimal == 0.5) {
        return Math.floor(j) + ':30';
      } else if (decimal == 0.75) {
        return Math.floor(j) + ':45';
      }
    } else {
      return j;
    }
  };
  for (var i = 0; i < 7; i++) {
    var day = document.createElement('section');
    for (var j = 7; j <= 24; j += .25) {
      var hour = document.createElement('div');
      hour.innerHTML = hourSplitter(j);
      hour.classList.add('hour');
      day.appendChild(hour);
    }
    day.classList.add('day');
    calendarWeekly.appendChild(day);
  }
};
// renderCalendar(); // replace with pre-rendered html when using existing schedules
calendarWeekly.innerHTML = printedCal;

var currentPlan = {
  className: 'blue',
  title: 'Work'
};
calendarWeekly.addEventListener('click', function (event) {
  var currentTarget = event.target;
  if (currentTarget.classList.contains(currentPlan.className)) {
    var title = currentTarget.querySelector('.title');
    currentTarget.removeChild(title);
    currentTarget.classList.remove(currentPlan.className);
  } else {
    var _title = document.createElement('span');
    _title.innerHTML = ' ' + currentPlan.title;
    _title.classList.add('title');
    currentTarget.appendChild(_title);
    currentTarget.classList.add(currentPlan.className);
  }
});
var print = document.getElementById('print');
print.addEventListener('click', function () {
  console.log('' + calendarWeekly.innerHTML);
});

var aor = {
  1: {
    className: 'blue',
    title: 'Work'
  },
  2: {
    className: 'orange',
    title: 'GR Yoga'
  },
  3: {
    className: 'green',
    title: 'Tonal'
  },
  4: {
    className: 'yellow',
    title: 'GSTI'
  },
  5: {
    className: 'red',
    title: 'MA'
  }
};
var calLeft = document.getElementById('fixed-pallette');

var _loop = function _loop(property) {
  var block = document.createElement('div');
  block.id = property;
  block.innerHTML = aor[property].title;
  block.classList.add('block', aor[property].className);
  calLeft.appendChild(block);

  block.addEventListener('click', function (event) {
    currentPlan = aor[property];
  });
};

for (var property in aor) {
  _loop(property);
}

//add click functionality to change background of the element and double click functionality to add labels
//add a palette to the left with labels for different areas of responsibility, and whenever I click on that, it should add an with a color and a label to my mouse and when I dbl click on something, the currently selected object information should be placed on whatever div I click on.
//create a function to remove styling
//create a function to save the current state of the page so that I can keep coming back to the same schedule, modifying it as needed, etc.