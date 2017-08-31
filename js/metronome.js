var clickEl = document.getElementById('click'),
	metronomeEl = document.getElementsByClassName('metronome')[0],
	indicatorEl = metronomeEl.getElementsByClassName('metronome__indicator')[0],
	blinkEl = metronomeEl.getElementsByClassName('metronome__blink')[0],
	bpmEl = document.getElementById('bpm'),
 onEl = document.getElementById('on'),
 bpm = getBPM(),
 duration = getDuration(),
	side = 0,
	on = getOn();

init();

function tick() {
	metronomeEl.classList.remove('is-playing-left');
	metronomeEl.classList.remove('is-playing-right');
	metronomeEl.offsetWidth = metronomeEl.offsetWidth;
	blinkEl.style.animationDuration = duration + 'ms';
	indicatorEl.style.animationDuration = duration + 'ms';

	if (side == 0) {
		metronomeEl.classList.add('is-playing-right');
		side = 1;
	} else {
		metronomeEl.classList.add('is-playing-left');
		side = 0;
	}

	clickEl.currentTime = 0;
	clickEl.play();

	//console.log('click');
}

function init() {
	doTick();
	angular.element(document).on('keyup', function(e){
		if ( e.which == 37 ) {
			bpmEl.value = getBPM() - 1;
		} else if ( e.which == 39 ) {
			bpmEl.value = getBPM() + 1;
		}
	});
	angular.element(onEl).on('click', function(e){
		doTick();
	});
}

function doTick() {
	updateValues();
	if (on) {
		tick();
		setTimeout(doTick, duration);
	}
}

function getBPM() {
	var input = bpmEl.value;
	return parseInt(input);
}

function getOn() {
	return onEl.checked;
}

function getDuration() {
	return 1 / ( bpm / 60 / 1000 );
}

function updateValues() {
	var newBPM = getBPM();
	bpm = ( newBPM > 20 ? newBPM : 20 );
	duration = getDuration();
	on = getOn();
}
