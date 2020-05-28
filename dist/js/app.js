// HTML Include 
function includeHTML() {
    var z, i, element, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        element = z[i];
        /*search for elements with a certain attribute:*/
        file = element.getAttribute("uk-html-include");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { element.innerHTML = this.responseText; }
                    if (this.status == 404) { element.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    element.removeAttribute("uk-html-include");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};

// Song Playing
function playAudio() {
    document.getElementById('audioPlayer').play();
    document.getElementById("playButton").classList.add("uk-hidden");
    document.getElementById("pauseButton").classList.remove("uk-hidden");
    document.getElementById("songCover").classList.add("spin");
    document.getElementById("songCover").classList.remove("spin-paused");
}
// Song Paused
function pauseAudio() {
    document.getElementById('audioPlayer').pause();
    document.getElementById("pauseButton").classList.add("uk-hidden");
    document.getElementById("playButton").classList.remove("uk-hidden");
    document.getElementById("songCover").classList.add("spin-paused");
}
// App Menu
function openAppMenu() {
    document.getElementById("appMenu").classList.remove("uk-hidden");
}

function closeAppMenu() {
    document.getElementById("appMenu").classList.add("uk-hidden");
}

