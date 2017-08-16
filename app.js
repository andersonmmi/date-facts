
const path = require('path');
const moment = require('moment');
const chalk = require('chalk');

let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
let dayOfYear = moment().format('DDDD');
let secondsOfTheDay = moment().format('ss');
let daylightSavingsTime = moment().isDST();
let leapYear = if(moment().isLeapYear(){
  "is"
};


console.log("It is " + currentTime + ".");
console.log("It is the " + dayOfYear + " day of the year.");
console.log("It is currently " + secondsOfTheDay + " seconds into the day.");
console.log("It is currently " + daylightSavingsTime + " daylight savings time.");
console.log("It " + leapYear + " a leap year.");
