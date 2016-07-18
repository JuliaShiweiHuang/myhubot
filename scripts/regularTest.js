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


var addressHolder = "";


var streetNumber = [34, 215, 18, 1, 289];
var streetName = ["A Street", "Congress Street", "St. Stephen Street", "Willet Street", "East Main Street", "Westfield Dr"];
var cityName = ["Itica", "Boston", "Dorchester", "Quincy", "Wollaston", "Kingston", "San Francisco", "Los Angeles", "New York", "Cambridge"];
var stateName = ["NY", "NH", "VT", "CA"];
var zipCode = [02210, 02131, 17938, 20086];

	var randomStreetNum = streetNumber[Math.floor(Math.random() * streetNumber.length)];
	var randomStreetName = streetName[Math.floor(Math.random() * streetName.length)];
	var randomCityName = cityName[Math.floor(Math.random() * cityName.length)];
	var randomStateName = stateName[Math.floor(Math.random() * stateName.length)];
	var randomZipCode = zipCode[Math.floor(Math.random() * zipCode.length)];
	addressHolder = addressHolder + randomStreetNum + " " + randomStreetName + ", " + randomCityName + " " + randomStateName + ", " + randomZipCode;
console.log(addressHolder);
