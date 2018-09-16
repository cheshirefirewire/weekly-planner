const calendarWeekly = document.getElementById('calendar-weekly');

let renderCalendar = () => {
  let hourSplitter = (j) => {
    /* if(j.toString.slice(1, -1)) */
    let decimal = j - Math.floor(j);
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
  for (let i = 0; i < 7; i++) {
    let day = document.createElement('section');
    for (let j = 7; j <= 24; j += .25) {
      let hour = document.createElement('div');
      hour.innerHTML = hourSplitter(j);
      hour.classList.add('hour');
      day.appendChild(hour);
    }
    day.classList.add('day');
    calendarWeekly.appendChild(day);
  }
};
renderCalendar(); // replace with pre-rendered html when using existing schedules

let currentPlan = {
  className: 'blue',
  title: 'Work'
};
calendarWeekly.addEventListener('click', (event) => {
  let currentTarget = event.target;
  if (currentTarget.classList.contains(currentPlan.className)) {
    let title = currentTarget.querySelector('.title');
    currentTarget.removeChild(title);
    currentTarget.classList.remove(currentPlan.className);
  } else {
    let title = document.createElement('span');
    title.innerHTML = ` ${currentPlan.title}`;
    title.classList.add('title');
    currentTarget.appendChild(title);
    currentTarget.classList.add(currentPlan.className);
  }
});

const aor = {
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
const calLeft = document.getElementById('fixed-pallette');
for (let property in aor) {
  let block = document.createElement('div');
  block.id = property;
  block.innerHTML = aor[property].title;
  block.classList.add('block', aor[property].className);
  calLeft.appendChild(block);

  block.addEventListener('click', (event) => {
    currentPlan = aor[property];
  });

}


//add click functionality to change background of the element and double click functionality to add labels
//add a palette to the left with labels for different areas of responsibility, and whenever I click on that, it should add an with a color and a label to my mouse and when I dbl click on something, the currently selected object information should be placed on whatever div I click on.
//create a function to remove styling
//create a function to save the current state of the page so that I can keep coming back to the same schedule, modifying it as needed, etc.
