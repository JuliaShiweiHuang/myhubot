// Link for this project:
// https://javascriptbos02.slack.com/files/leon-guyupfront/F1QP9PX98/Hubot
// https://javascriptbos02.slack.com/files/leon-guyupfront/F1RGTGK8U/Slack_Bot
// https://hubot.github.com/docs/scripting/
// https://amussey.github.io/2015/08/11/testing-hubot-scripts.html


module.exports = function(robot) {
	// .hear command listens fora specific phrase anywhere in the Slack room
	robot.hear(/i did it/i, function(msg){
		msg.send("Congratulations! Good job!");
	});

	robot.hear(/Hello bot!/, function(res) {
		return res.send("Hi Hi Hi! Bye Bye Bye!");
	});

	// .respond can only be triggered when someone specifically mentions the Hubot using @, 
	// or sends a direct message.
	robot.respond(/What's your favorite food?/, function(res) {
		return res.send("I like apple");
	});

	robot.respond(/Do you have a girlfriend?/, function(res) {
		return res.send("NO NO NO. I need a match account.");
	});


	robot.respond(/what is your favorite (.*)/, function(msg) {
	var fav;
	fav = msg.match[1];
	console.log(fav);
		switch (fav) {
			case "food":
				return msg.reply("I'm a robot--I don't eat food!");
				break;
			case "band":
				return msg.reply("It's gotta be Daft Punk!");
				break;
			case "programming language":
				return msg.reply("Javascript, of course!");
				break;
			default:
				return msg.reply("I don't have a favorite " + fav + ". What's yours?");
		}
	});


	robot.respond(/What's your favorite food my cherry?/, function(res) {
		return res.send("I'm a robot--I suggest you going to a bar.");
	});


	robot.respond(/what is the date today?/, function(res) {
		var currentDate = new Date();
		var day = currentDate.getDate();
		var month = currentDate.getMonth();
		var year = currentDate.getFullYear();
		return res.send("Today is: " + month + "/" + day + "/" + year);
	});

	robot.respond(/Time, time, magic bot!/, function(res) {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		return res.send("It's " + hours + ":" + minutes);

	});

	robot.respond(/Generate a random address!/, function(res) {
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
		
		return res.send(addressHolder = addressHolder + randomStreetNum + " " + randomStreetName + ", " + randomCityName + " " + randomStateName + ", " + randomZipCode);

	});


}

