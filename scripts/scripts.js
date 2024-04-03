// Get the current date
var currentDate = new Date();

// Calculate the previous day
var previousDate = new Date(currentDate);
previousDate.setDate(currentDate.getDate() - 1);

// Calculate the next day
var nextDate = new Date(currentDate);
nextDate.setDate(currentDate.getDate() + 1);

// Format dates as strings
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var previousDateString = previousDate.toLocaleDateString('en-US', options);
var currentDateString = currentDate.toLocaleDateString('en-US', options);
var nextDateString = nextDate.toLocaleDateString('en-US', options);

// Display dates in HTML
document.getElementById('previousDay').innerHTML = previousDateString;
document.getElementById('nextDay').innerHTML = nextDateString;