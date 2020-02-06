window.onload = function () {


//animation
var options = {

interactivityEnabled: true,
backgroundColor: null,
	title: {
		text: ""
	},
	axisY:{
	        gridThickness: 0,
					tickLength: 0,
    			lineThickness: 0,
					labelFormatter: function(){
		 return " ";
	 }
	      },

		axisX:{
						gridThickness: 0,
						tickLength: 0,
						lineThickness: 0,
						labelFormatter: function(){
      return " ";
    }
							},

	animationEnabled: true,
	exportEnabled: false,
	legend: {

	verticalAlign: "bottom",  // "top" , "bottom"
  horizontalAlign: "right"  // "center" , "right"

     },

	data: [ {
    markerType: "triangle",
		type: "spline", //change it to line, area, column, pie, etc
		lineThickness: 5,

		dataPoints: [
			{ x: -0.006542825, y: 0.024334097 },
			{ x: 0.096858816, y: 0.029563465 },
			{ x: 0.178646545, y: 0.046180646 },
			{ x: 0.271851405, y: 0.052901754 },
			{ x: 0.356117508, y: 0.060378942 },
			{ x: 0.450087298, y: 0.057018573 },
			{ x: 0.540449285, y: 0.048665457 },
			{ x: 0.658532591, y: 0.048374159 }
		]
	}
	]
};
$("#chartContainer").CanvasJSChart(options);

}



//ROTATION
function rotateElem() {
var angle = document.getElementsByName("angle")[0].value;
if (angle == 90){
		     document.getElementById("chartContainer").style.transform = 'rotate(90deg)'}
		else if (angle == 180) {
				document.getElementById("chartContainer").style.transform = 'rotate(180deg)'}
		else if (angle == 270){
				document.getElementById("chartContainer").style.transform = 'rotate(270deg)'}
		else if (angle){
					document.getElementById("chartContainer").style.transform = 'rotate(angle)'}

				}

//TRANSLATION

            function leftArrowPressed() {
                var element = document.getElementById("chartContainer");
                element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

            function rightArrowPressed() {
                var element = document.getElementById("chartContainer");
                element.style.left = parseInt(element.style.left) + 5 + 'px';
            }

            function upArrowPressed() {
                var element = document.getElementById("chartContainer");
                element.style.top = parseInt(element.style.top) - 5 + 'px';
            }

            function downArrowPressed() {
                var element = document.getElementById("chartContainer");
                element.style.top = parseInt(element.style.top) + 5 + 'px';
            }

            function moveSelection(event) {
                switch (event.keyCode) {
                    case 37:
                        leftArrowPressed();
                    break;

                    case 39:
                        rightArrowPressed();
                    break;

                    case 38:
                        upArrowPressed();
                    break;

                    case 40:
                        downArrowPressed();
                    break;
                }
            };
