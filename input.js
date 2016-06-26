module.exports = {
	onKeyDown: function(key){
		// W
	    if (key.keyCode === 87) {
	        console.log("pressed W");
	        exports.goose = "sssssss";
	    }
	    //S
	    if (key.keyCode === 83) {
	        console.log("pressed S");
	    }
	    //A
	    if (key.keyCode === 65) {
	        console.log("pressed A");
	    }
	    //D
	    if (key.keyCode === 68) {
	        console.log("pressed D");
	    }
	},

};

