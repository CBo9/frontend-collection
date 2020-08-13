var activeColor = 'blue';
function setActiveColor(color){
	document.getElementById(activeColor+'-color').classList.remove('active');
	document.getElementById(color+'-color').classList.add('active');

	activeColor = color;
	let colors =[];
	colors['blue'] = '21,172,216';
	colors['red']= '249,18,18';
	colors['green']='61,223,55';
	colors['yellow']= '221,234,19';

	let btnCss = '.btn-lazers:hover,.btn-lazers.active{color:rgb(' + colors[color] + ');} .btn-lazers::before{background-image: linear-gradient(to left,rgb(' + colors[color] + '), rgba('+ colors[color] +',0.2));} .btn-lazers::after{background-image: linear-gradient(to left, rgb(' + colors[color] + '), rgba('+ colors[color] +',0.2)); }';
	document.getElementById('lazersColors').innerHTML = btnCss;
}

function setSpeed(){
	let duration = Math.abs(document.getElementById('inputSpeed').value);
	let btnCss = '.btn-lazers:hover::before, .btn-lazers.active::before{animation-duration:  ' + duration + 'ms; } .btn-lazers:hover::after, .btn-lazers.active::after{animation-duration:  ' + duration + 'ms ; }';
	document.getElementById('lazersSpeed').innerHTML = btnCss;
	let display = document.getElementById('currentSpeed');
	let displayText = display.innerHTML;
	let newDisplay = displayText.replace(/\d+/, duration);
	display.innerHTML = newDisplay;
}

function animationSwitch(){
	let mainButton = document.getElementById('mainButton');
	let switchButton = document.getElementById('mainBtnSwitch');
	if(switchButton.checked){
		mainButton.classList.add('active');
	}else{
		mainButton.classList.remove('active');
	}
}

window.onload = () => {
	animationSwitch();
	setSpeed();
};