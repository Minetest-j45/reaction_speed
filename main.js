var btn = document.getElementById('speed');
var txt = document.getElementById('txt');

var started = false;
var green = false;
var done = false;
var turngreen

function btnGreen() {
    btn.style.backgroundColor = 'green';
    txt.innerHTML = 'Click me!';
    turngreen = new Date().getTime();
    green = true;
}

function restart() {
    started = false;
    green = false;
    done = false;
    btn.style.backgroundColor = '#cc000a';
    txt.innerHTML = 'Click me once to start.';
}

function onClick() {
    if (done) {
        restart();
    }
    else if (!started) {
        started = true;
        txt.innerHTML = 'Click me when I turn green.';
        var waittime = Math.random() * (5 - 0.1) + 0.1;
        setTimeout(btnGreen, waittime*1000);
    }
    else if (green) {
        var now = new Date().getTime();
        var diff = now - turngreen;
        txt.innerHTML = 'You clicked me ' + diff + ' milliseconds after I turned green. <br> Click me to try again.';
        done = true;
    } else {
        txt.innerHTML = 'You clicked me too soon. Click me when I turn green.';
    }
}
