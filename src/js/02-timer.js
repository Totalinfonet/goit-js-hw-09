import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    startButton.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

class CountdownTimer {
  // constructor sets the end date and initial remaining time
  constructor(endDate) {
    this.endDate = endDate;
    this.remainingTime = this.endDate - Date.now();
  }

  // start method sets interval to update remaining time every second
  start() {
    this.intervalId = setInterval(() => {
      this.remainingTime = this.endDate - Date.now();
      if (this.remainingTime <= 0) {
        this.stop();
      }
    }, 1000);
  }

  // stop method clears the interval
  stop() {
    clearInterval(this.intervalId);
  }
}

// Select the datetime picker and start button elements from the HTML
const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.getElementById('start-button');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

// Disable the start button until a date is selected
startButton.disabled = true;

let timer = null;

// Add event listener to start button to create a new timer and start it when clicked
startButton.addEventListener('click', startTimer);

// startTimer function creates a new CountdownTimer and starts it
function startTimer() {
  const endDate = new Date(datetimePicker.value);
  timer = new CountdownTimer(endDate);
  timer.start();
  setInterval(updateTimer, 1000);
}

// updateTimer function updates the remaining time in the HTML every second
function updateTimer() {
  const remainingTime = timer.remainingTime;
  if (remainingTime <= 0) {
    timer.stop();
  } else {
    const time = convertMs(remainingTime);
    daysField.textContent = addLeadingZero(time.days);
    hoursField.textContent = addLeadingZero(time.hours);
    minutesField.textContent = addLeadingZero(time.minutes);
    secondsField.textContent = addLeadingZero(time.seconds);
  }
}

// convertMs function converts milliseconds to days, hours, minutes, and seconds
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// addLeadingZero function adds a leading zero to numbers less 10

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
