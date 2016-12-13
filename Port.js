function social1i(){
	document.getElementById('social1').src="images/social1/fb.png";
}
function social2i(){
	document.getElementById('social2').src="images/social1/gmail.png";
}
function social3i(){
	document.getElementById('social3').src="images/social1/twitter.png";
}
function social4i(){
	document.getElementById('social4').src="images/social1/yt.png";
}
function social5i(){
	document.getElementById('social5').src="images/social1/insta.png";
}

function social1out(){
	document.getElementById('social1').src="images/social1/fb0.png";
}
function social2out(){
	document.getElementById('social2').src="images/social1/gmail0.png";
}
function social3out(){
	document.getElementById('social3').src="images/social1/twitter0.png";
}
function social4out(){
	document.getElementById('social4').src="images/social1/yt0.png";
}
function social5out(){
	document.getElementById('social5').src="images/social1/insta0.png";
}


function social1ib(){
	document.getElementById('social1-b').src="images/social2/fb.png";
}
function social2ib(){
	document.getElementById('social2-b').src="images/social2/gmail.png";
}
function social3ib(){
	document.getElementById('social3-b').src="images/social2/wa.png";
}
function social4ib(){
	document.getElementById('social4-b').src="images/social2/yt.png";
}
function social5ib(){
	document.getElementById('social5-b').src="images/social2/insta.png";
}

function social1outb(){
	document.getElementById('social1-b').src="images/social2/fb0.png";
}
function social2outb(){
	document.getElementById('social2-b').src="images/social2/gmail0.png";
}
function social3outb(){
	document.getElementById('social3-b').src="images/social2/wa0.png";
}
function social4outb(){
	document.getElementById('social4-b').src="images/social2/yt0.png";
}
function social5outb(){
	document.getElementById('social5-b').src="images/social2/insta0.png";
}

var flag=0;
function myFunction(b) {
    b.classList.toggle("change");
    if(flag==0){
    	document.getElementById("sidenavid").style.opacity=0.8;
    	flag=1;
	}
	else if(flag==1){
		document.getElementById("sidenavid").style.opacity=0;
		flag=0;
	}
	else{}
}

function loader(){
	document.getElementById("wholeid").style.display="none";
	document.getElementById("opacid").style.display="block";
}
