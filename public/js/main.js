var JDGa = null;     /* AJAX object */
var JDGt = false;    /* Timer object */

var DF = "MM/DD/YYYY HH:mm";

function jdgDisplay(dates) {
	dates = dates || [null, null, null];
	
	for(var d=0;d<3;d++) {
		var $timer = $('.timer'+(d+1)).removeClass("inactive");
		
		if (dates[d] && (date = moment(dates[d].toString(), DF, true)).isValid()) {
			var disp = {
				".month": format(date.format("MMM")),
				".day":   format(date.format("DD")),
				".year":  format(date.format("YYYY")),
				".hour":  format(date.format("hh")),
				".min":   format(date.format("mm"))
			}
			_.each(disp, function(v,k) { $timer.find(k).html(v); });
			$timer.find('.ampm').attr("class", "ampm"+(date.format("a")=="pm"?" pm":""));
		}
		else {
			$timer.addClass('inactive').find('span').html('');
		}
	}
}

function jdgRandomStart() {
	JDGt = setInterval(function() {
		var max = (new Date("2050-12-12 23:59")).getTime();
		jdgDisplay([
			moment(Math.random() * max).format(DF),
			moment(Math.random() * max).format(DF),
			moment(Math.random() * max).format(DF)
		]);
	}, 25);
}
function jdgRandomStop() {
	clearInterval(JDGt);
	JDGt = false;
}

function jdgClear() {
	if (JDGt || JDGa) return;
	
	jdgRandomStop();
	jdgDisplay();
}

function jdgChallenge(i) {
	if (!(i >= 1 && i <= 6)) return;
	if (JDGt || JDGa) return;
	
	jdgRandomStart();
	
	JDGa = $.ajax({
		url: "/defi" + i,
		dataType: "json",
		success: function(result) {
			JDGa = null;
			jdgRandomStop();
			jdgDisplay(result);
		},
		error: function() {
			JDGa = null;
			jdgRandomStop();
			jdgDisplay();
		},
		timeout: function() {
			JDGa = null;
			jdgRandomStop();
			jdgDisplay();
		}
	});
}

/***************************
 *    UTILITY FUNCTIONS    *
 ***************************/
function format(n) {
	return (n+'').toLowerCase().replace(/1/g,"&nbsp;1").replace(/i/g,"&nbsp;i");
}