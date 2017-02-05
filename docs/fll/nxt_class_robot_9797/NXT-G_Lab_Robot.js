    var iStep = 1
	var iStepMax = 26
	var sStep = "1"

	var sDoStepCaption = "Show Step " + iStep
	var sStepPrefix="<br /> Step   No. Color      Part no.     Part name<br />-------------------------------------------------------------------------------<br />"

	var sTitle01="Castor  Step 1"
	var  sStep01="    1     1 Dark-Gray  42003.dat    Technic Axle Joiner Perpendicular with 2 Holes<br />" +
                 "    1     1 Light-Blue 3749.DAT     Technic Axle Pin<br />" +
                 "    1     1 Dark-Gray  32140.DAT    Technic Liftarm  2 x  4 L Shape<br />" +
                 "    1     2 Black      6558.DAT     Technic Pin Long with Friction<br />"
	var sTitle02="Castor  Step 2"
	var  sStep02="    2     2 Light-Gray 4519.DAT     Technic Axle  3<br />" +
                 "    2     2 Black      32184.DAT    Technic Axle Joiner Perpendicular  3L<br />" +
                 "    2     1 Dark-Gray  32140.DAT    Technic Liftarm  2 x  4 L Shape<br />"
	var sTitle03="Castor  Step 3"
	var  sStep03="    3     1 Light-Gray 4519.DAT     Technic Axle  3<br />" +
                 "    3     2 Light-Gray 4185.DAT     Technic Wedge Belt Wheel<br />"
	var sTitle04="Completed Castor Sub Assembly"
    var  sStep04=""
	var sTitle05="Light Sensor  Step 1"
	var  sStep05="    1     1 Black      3706.DAT     Technic Axle  6<br />" +
                 "    1     2 Light-Gray 6536.DAT     Technic Axle Joiner Perpendicular<br />" +
                 "    1     1 Dark-Gray  32291.DAT    Technic Axle Joiner Perpendicular Double<br />" +
                 "    1     2 Black      3673.DAT     Technic Pin<br />" +
                 "    1     2 Black      6558.DAT     Technic Pin Long with Friction<br />"
    var sTitle06="Light Sensor  Step 2"
    var  sStep06="    2     1 Black      55969.dat    Electric Mindstorms NXT Light Sensor (Complete)<br />"
    var sTitle07="Completed Light Sensor Sub Assembly"
    var  sStep07=""
    var sTitle08="Touch Sensor  Step 1"
    var  sStep08="    1     2 Light-Gray 32073.DAT    Technic Axle  5<br />" +
                 "    1     1 Light-Gray 48989.dat    Technic Axle Joiner Perpendicular  1 x  3 x  3 with 4 Pins<br />" +
                 "    1     2 Black      32184.DAT    Technic Axle Joiner Perpendicular  3L<br />" +
                 "    1     2 Light-Gray 3713.DAT     Technic Bush<br />"
    var sTitle09="Touch Sensor  Step 2"
    var  sStep09="    2     1 Light-Gray 32073.DAT    Technic Axle  5<br />" +
                 "    2     2 Light-Gray 6536.DAT     Technic Axle Joiner Perpendicular<br />" +
                 "    2     1 Light-Gray 3713.DAT     Technic Bush<br />"
    var sTitle10="Touch Sensor  Step 3"
    var  sStep10="    3     1 Black      53793.dat    Electric Mindstorms NXT Touch Sensor (Complete)<br />" +
                 "    3     1 Dark-Gray  32523.DAT    Technic Liftarm  1 x  3 Straight<br />" +
                 "    3     3 Black      4459.DAT     Technic Pin with Friction<br />"
    var sTitle11="Completed Touch Sensor Sub Assembly"
    var  sStep11=""
    var sTitle12="Lab Robot  Step 1"
    var  sStep12="    1     2 Black      53787.dat    Electric Mindstorms NXT Motor (Complete)<br />" +
                 "    1     1 White      32278.DAT    Technic Liftarm  1 x 15 Straight<br />" +
                 "    1     4 Black      4459.DAT     Technic Pin with Friction<br />"
    var sTitle13="Lab Robot  Step 2"
    var  sStep13="    2     2 Black      32184.DAT    Technic Axle Joiner Perpendicular  3L<br />" +
                 "    2     2 Black      6558.DAT     Technic Pin Long with Friction<br />" +
                 "    2     2 Black      4459.DAT     Technic Pin with Friction<br />"
    var sTitle14="Lab Robot  Step 3"
    var  sStep14="    3     2 Dark-Gray  42003.dat    Technic Axle Joiner Perpendicular with 2 Holes<br />" +
                 "    3     6 Light-Blue 3749.DAT     Technic Axle Pin<br />"
    var sTitle15="Lab Robot  Step 4"
    var  sStep15="    4     2 White      41239.dat    Technic Beam 13<br />" +
                 "    4     4 Black      4459.DAT     Technic Pin with Friction<br />"
    var sTitle16="Lab Robot  Step 5"
    var  sStep16="    5     4 Light-Gray 6536.DAT     Technic Axle Joiner Perpendicular<br />" +
                 "    5     4 Light-Blue 3749.DAT     Technic Axle Pin<br />"
    var sTitle17="Lab Robot  Step 6"
    var  sStep17="    6     2 White      32525.dat    Technic Beam 11<br />" +
                 "    6     1 White      41239.dat    Technic Beam 13<br />" +
                 "    6     4 Black      32054.DAT    Technic Pin Long with Stop Bush<br />" +
                 "    6     2 Black      4459.DAT     Technic Pin with Friction<br />"
    var sTitle18="Lab Robot  Step 7"
    var  sStep18="    7     2 White      120.DAT      Technic Liftarm  1 x  9 Straight<br />" +
                 "    7     4 Black      32054.DAT    Technic Pin Long with Stop Bush<br />"
    var sTitle19="Lab Robot  Step 8"
    var  sStep19="    8     1 Black      Castor.ldr   Castor<br />"
    var sTitle20="Lab Robot  Step 9"
    var  sStep20="    9     1 Black      Touch_Sensor_AddOn2.ldr Touch_Sensor_AddOn2.ldr<br />"
    var sTitle21="Lab Robot  Step 10  rotate view"
    var  sStep21=""
    var sTitle22="Lab Robot  Step 11"
    var  sStep22="   11     1 Black      Light_Sensor_AddOn.ldr Name: Light_Sensor_AddOn.ldr<br />"
    var sTitle23="Lab Robot  Step 12"
    var  sStep23="   12     1 Black      3706.DAT     Technic Axle  6<br />" +
                 "   12     1 Light-Gray 3713.DAT     Technic Bush<br />" +
                 "   12     1 Black      55976.dat    Tyre 56 x 26<br />" +
                 "   12     1 Light-Gray 56145.dat    Wheel 43.2 x 22 without Pinholes, with External Ribs<br />"
    var sTitle24="Lab Robot  Step 13"
    var  sStep24="   13     1 Black      3706.DAT     Technic Axle  6<br />" +
                 "   13     1 Light-Gray 3713.DAT     Technic Bush<br />" +
                 "   13     1 Black      55976.dat    Tyre 56 x 26<br />" +
                 "   13     1 Light-Gray 56145.dat    Wheel 43.2 x 22 without Pinholes, with External Ribs<br />"
    var sTitle25="Lab Robot  Step 14"
    var  sStep25="   14     1 Black      53788.dat    Electric Mindstorms NXT (Complete)<br />"
    var sTitle26="Completed Lab Robot"
    var  sStep26=""

    var sStepSuffix="</pre><hr />"

    function twoDigits(i) {
    	var s = "00"+i
    	return s.substring(s.length - 2)
    }

    function getStepImage(iImageStep) {
        var s = "<pre><a name=\"Step" + twoDigits(iImageStep) + "\" />"
        s += eval("sTitle" + twoDigits(iImageStep)) + "<br />"
        s += stepLinks()
        s += "<img src=\"NXT_Class_Robot_9797_" + twoDigits(iImageStep) + ".JPG\" alt=\"Step " + iImageStep + " \" />"
        return s
    }

    function getStepImageAndText(iImageStep) {
    	var s = getStepImage(iImageStep)
    	s += sStepPrefix
    	s += eval("sStep" + twoDigits(iImageStep))
    	s += sStepSuffix
        return s
    }

	function getWindowParamsRobot() {
		return "scrollbars=yes, resizable=yes, status=no, menubar=no, toolbar=no, location=no, top=100, left=100, width=800, height=800";
	}

	function doRobotStep(i) {
		window.open("NXT_Class_Robot_9797_" + twoDigits(i) + ".html", "Step" + twoDigits(i), getWindowParamsRobot());
	}

	function doStepPrevious() {
		if (iStep <= 1) {
			iStep = iStepMax
		} else {
		    iStep = iStep - 1
		}
		setStepStrings()
		doRobotStep(iStep)
		return
	}

	function doStepNext() {
		if (iStep >= iStepMax) {
			iStep = 1
		} else {
		    iStep = iStep + 1
		}
		setStepStrings()
		doRobotStep(iStep)
		return
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
