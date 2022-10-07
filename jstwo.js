window.onload = function() {
	var oOut = document.getElementById("out");
	var oInner = document.getElementById("inner");
	var aImgs = oInner.getElementsByTagName("img");
	var oright= document.getElementById("right");
	var oleft= document.getElementById("left");
	var timer1 = null;
	var timer2 = null;
		
	function run(){
		timer1 = setInterval(moveleft,5);


	function moveleft() {
			if(oOut.scrollLeft >= aImgs[0].offsetWidth * 5) {
			    oOut.scrollLeft = 0;
			}
			oOut.scrollLeft=oOut.scrollLeft+5;

			if(oOut.scrollLeft % aImgs[0].offsetWidth == 0){
				clearInterval(timer1);
				timer2 = setTimeout(function(){
					timer1 = setInterval(moveleft, 5);
				},3000);
			}
	}
	}
	run();
	var k = 0;
				oright.onclick = function() {
					clearInterval(timer1);
					k = oOut.scrollLeft / aImgs[0].offsetWidth;
					if(k <= 3) {
						oOut.scrollLeft += aImgs[0].width;
					} else {
						oOut.scrollLeft = 0;
					}
				}
				
				oleft.onclick = function() {
					clearInterval(timer1);
					k = oOut.scrollLeft / aImgs[0].offsetWidth;
					if(k >= 1) {
						oOut.scrollLeft -= aImgs[0].width;
					} else {
						oOut.scrollLeft = aImgs[0].width*4;
					}

				}
}