// function 1: tell date
console.log("Tell me what's the date today?");
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

console.log(month + "/" + day + "/" + year);

// function 2: tell time
console.log("Time time, magic bot!");
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();

if (minutes < 10) {
	minutes = "0" + minutes;
}

console.log("It's " + hours + ":" + minutes);