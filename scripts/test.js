module.exports = function(robot) {

	robot.respond(/What's your favorite food my cherry?/, function(res) {
		return res.send("I'm a robot--I suggest you going to a bar.");
	});

	robot.hear(/i did it/i, function(msg){
		msg.send("Congratulations! Good job!");
	});

	robot.hear(/Hello bot!/, function(res) {
		return res.send("Hi Hi Hi! Bye Bye Bye!");
	});

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



}

