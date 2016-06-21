function electionDay() {
	var xmas = new Date("November 16, 2017 00:00:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
                clearTimeout(timer);
		document.getElementById("militaryContract").innerHTML = "Election day has passed";
		// Run any code needed for countdown completion here
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
        minutes %= 60;
        seconds %= 60;
	document.getElementById("electionDay").innerHTML = "There are "+days+" days, "+hours+" hours, "+minutes+" minutes, and "+seconds+" seconds.";
	var timer = setTimeout('electionDay()',1000);
}
function militaryContract() {
	var xmas = new Date("January 1, 2018 00:00:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
                clearTimeout(timer);
		document.getElementById("militaryContract").innerHTML = "Military Contract has ended";
		// Run any code needed for countdown completion here
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
        minutes %= 60;
        seconds %= 60;
	document.getElementById("militaryContract").innerHTML = "There are "+days+" days, "+hours+" hours, "+minutes+" minutes, and "+seconds+" seconds.";
	var timer = setTimeout('militaryContract()',1000);
}
function parliament2016Close() {
	var xmas = new Date("December 19, 2016 18:30:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
                clearTimeout(timer);
		document.getElementById("parliament2015Close").innerHTML = "Parliament 2016 is closed.";
		// Run any code needed for countdown completion here
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
        minutes %= 60;
        seconds %= 60;
	document.getElementById("parliament2015Close").innerHTML = "There are "+days+" days, "+hours+" hours, "+minutes+" minutes, and "+seconds+" seconds.";
	var timer = setTimeout('parliament2016Close()',1000);
}
function parliament2017Open() {
	var xmas = new Date("February 3, 2017 09:00:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
                clearTimeout(timer);
		document.getElementById("parliament2016Open").innerHTML = "Parliament 2017 is open.";
		// Run any code needed for countdown completion here
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
        minutes %= 60;
        seconds %= 60;
	document.getElementById("parliament2016Open").innerHTML = "There are "+days+" days, "+hours+" hours, "+minutes+" minutes, and "+seconds+" seconds.";
	var timer = setTimeout('parliament2017Open()',1000);
}
function parliament2017Close() {
	var xmas = new Date("December 17, 2016 18:30:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
                clearTimeout(timer);
		document.getElementById("parliament2016Close").innerHTML = "Parliament 2017 is closed.";
		// Run any code needed for countdown completion here
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
        minutes %= 60;
        seconds %= 60;
	document.getElementById("parliament2016Close").innerHTML = "There are "+days+" days, "+hours+" hours, "+minutes+" minutes, and "+seconds+" seconds.";
	var timer = setTimeout('parliament2017Close()',1000);
}