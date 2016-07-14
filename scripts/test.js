module.export = function(robot) {


	robot.respond(/What's your favorite food my cherry?/, function(res) {
	return res.send("I'm a robot--I suggest you going to a bar.");
	});

}