var iStep = 1
var iStepMax = 12
var sStep = "1"

var sDoStepCaption = "Show Step " + iStep
var sStepPrefix="<br /> Step Numb. Color      Part         Description<br />"+
				"-------------------------------------------------------------------------------<br />"
var sTitle01="Step 1"
var sStep01="    1     2 Light-Gray 3023.DAT     Plate  1 x  2<br />" +
			"    1     2 Light-Gray 32028.DAT    Plate  1 x  2 with Door Rail<br />" +
			"    1     1 Light-Gray 3034.DAT     Plate  2 x  8<br />" +
			"    1     1 Black      3700.DAT     Technic Brick  1 x  2 with Hole<br />" +
			"    1     1 Yellow     3700.DAT     Technic Brick  1 x  2 with Hole"

var sTitle02="Step 2"
var  sStep02="    2     1 Light-Gray 32028.DAT    Plate  1 x  2 with Door Rail<br />" +
             "    2     1 Black      3700.DAT     Technic Brick  1 x  2 with Hole<br />" +
             "    2     1 Yellow     3700.DAT     Technic Brick  1 x  2 with Hole<br />"


var sTitle03="Step 3"
var  sStep03="    3     1 Black      3003.DAT     Brick  2 x  2<br />" +
             "    3     2 Light-Gray 3023.DAT     Plate  1 x  2<br />" +
             "    3     2 Light-Gray 32028.DAT    Plate  1 x  2 with Door Rail<br />" +
             "    3     1 Black      3707.DAT     Technic Axle  8<br />" +
             "    3     1 Light-Gray 3713.DAT     Technic Bush<br />" +
             "    3     1 Light-Gray 3649.DAT     Technic Gear 40 Tooth<br />"


var sTitle04="Step 4"
var  sStep04="    4     1 Black      5306.DAT     Electric Brick  2 x  2 x  2/3 with Wire End<br />" +
             "    4     1 Dark-Cyan  71427.DAT    _Electric Technic Mini-Motor  9v<br />"


var sTitle05="Step 5"
var  sStep05="    5     1 Black      5306.DAT     Electric Brick  2 x  2 x  2/3 with Wire End<br />" +
             "    5     1 Light-Gray 32028.DAT    Plate  1 x  2 with Door Rail<br />" +
             "    5     2 Black      3700.DAT     Technic Brick  1 x  2 with Hole<br />" +
             "    5     1 unused     71427.DAT    _Electric Technic Mini-Motor  9v<br />"


var sTitle06="Step 6"
var  sStep06="    6     4 Light-Gray 3023.DAT     Plate  1 x  2<br />" +
             "    6     1 Light-Gray 3022.DAT     Plate  2 x  2<br />" +
             "    6     2 Light-Blue 3022.DAT     Plate  2 x  2<br />" +
             "    6     2 Light-Gray 3795.DAT     Plate  2 x  6<br />"


var sTitle07="Step 7"
var  sStep07="    7     1 Black      3707.DAT     Technic Axle  8<br />" +
             "    7     1 Light-Gray 3749.DAT     Technic Axle Pin<br />" +
             "    7     3 Light-Gray 3713.DAT     Technic Bush<br />" +
             "    7     2 Light-Gray 3647.DAT     Technic Gear  8 Tooth<br />" +
             "    7     1 Light-Gray 3649.DAT     Technic Gear 40 Tooth<br />"


var sTitle08="Step 8"
var  sStep08="    8     1 Light-Gray 3956.DAT     Bracket  2 x  2 -  2 x  2<br />" +
             "    8     2 Black      3001.DAT     Brick  2 x  4<br />" +
             "    8     1 Light-Gray 3022.DAT     Plate  2 x  2<br />" +
             "    8     2 Yellow     3020.DAT     Plate  2 x  4<br />" +
             "    8     1 Light-Green 2419.DAT     Plate  3 x  6 without Corners<br />" +
             "    8     2 Black      6594.DAT     Tyre 49.6 x 28 VR<br />" +
             "    8     2 White      6595.DAT     Wheel 49.6 x 28 VR<br />" +
             "    8     1 Black      75192.DAT    _Electric Rotation Sensor (Complete Assembly Shortcut)<br />"

var sTitle09="Step 9"
var  sStep09="    9     1 Black      3001.DAT     Brick  2 x  4<br />" +
             "    9     1 Blue       2982C01.DAT  Electric Light Sensor (Complete Assembly Shortcut)<br />" +
             "    9     1 Black      3706.DAT     Technic Axle  6<br />" +
             "    9     2 Light-Gray 3713.DAT     Technic Bush<br />" +
             "    9     1 Light-Gray 3647.DAT     Technic Gear  8 Tooth<br />" +
             "    9     1 Light-Gray 3649.DAT     Technic Gear 40 Tooth<br />"


var sTitle10="Step 10"
var  sStep10="   10     4 Black      5306.DAT     Electric Brick  2 x  2 x  2/3 with Wire End<br />" +
             "   10     1 Black      884.DAT      Electric Mindstorms RCX (Complete Assembly Shortcut)<br />"

var sTitle11="Step 11"
var  sStep11="Turn to view from another angle.<br />"

var sTitle12="Step 12"
var  sStep12="   12     1 Black      2654.DAT     Boat  2 x  2 Stud<br />" +
             "   12     2 Black      4032.DAT     Plate  2 x  2 Round<br />"

var sStepSuffix="</pre><hr />"

function twoDigits(i) {
	var s = "00"+i
	return s.substring(s.length - 2)
}

function getStepImage(iImageStep) {
	var s = "<pre><a name=\"Step" + twoDigits(iImageStep) + "\" />"
	s += eval("sTitle" + twoDigits(iImageStep)) + "<br />"
	s += stepLinks()
	s += "<img src=\"Lab_Bot" + twoDigits(iImageStep) + ".gif\" alt=\"Step " + iImageStep + " \" />"
	return s
}

function getStepImageAndText(iImageStep) {
	var s = getStepImage(iImageStep)
	s += sStepPrefix
	s += eval("sStep" + twoDigits(iImageStep))
	s += sStepSuffix
	return s
}

function setStepStrings() {
	sStep = "" + iStep
	sDoStepCaption = "Show Step " + iStep
}

function doStepCaption() {
	return sDoStepCaption
}

function stepLinks() {
	var s = "<p>Step "
	var sI = ""
	var sI2 = ""

	for (i=1; i<=iStepMax; i++) {
		if (isOptional(i)) {
			sI = "<i>"
			sI2 = "</i>"
		} else {
			sI = "<b>"
			sI2 = "</b>"
		}
		s += " " + sI + "<a href=\"#Step" + twoDigits(i) + "\" >" + twoDigits(i) + "</a>" + sI2
	}
	return s + " </p>"
}

function isOptional(iStep) {
	return false
}
