const nolie = document.querySelector("#icon");
const nolie2 = document.querySelector("#icon2");
const nolie3 = document.querySelector("#icon3");
const nolie4 = document.querySelector("#icon");



// Variabele gemaakt om de status van het icoon bij te houden

let iconStatus = false;
let iconStatus2 = false;
let iconStatus3 = false;
let iconStatus4 = false;


// Maak een Audio object voor de muziek vsn de knoppen./
// bron kwart julian na een probleem het zelf uitgevonden met chatgpt 

let piano = new Audio('muziek/afro/melody1.mp3')
let drum = new Audio('muziek/afro/drum1.mp3')
let drum2 = new Audio('muziek/afro/drum2.mp3')
let lead = new Audio('muziek/afro/lead1.mp3')



// bron julian /
// Start de muziek en laat de afbeeldingen zien wanneer op de button kilkt

function startmusic() {
    
    // Verwijder de klasse 'hide' van alle iconen.


    nolie.classList.remove('hide')
    nolie2.classList.remove('hide')
    nolie3.classList.remove('hide')

    button.classList.add('hide')

    piano.loop = true;
    piano.volume = 0
    drum.loop = true;
    drum.volume = 0
    drum2.loop = true
    drum2.volume = 0
    lead.loop = true;
    lead.volume = 0

    drum.play()
    lead.play()
    piano.play()
    drum2.play()

}

const button = document.querySelector('.startgame')
button.addEventListener('click', startmusic)




// alle de nolie afbeelding poppetjes bron thomas  /
// techniek half julian half de lightbulb opdracht/
// Functie om het eerste icoon te schakelen voor de game 

function switchicon() {
    if (iconStatus == true) {
        nolie.src = "content/noli_basis.png";
        iconStatus = false;

        drum.volume = 0

    } else if (iconStatus == false) {
        nolie.src = "content/noli_rood.gif";
        iconStatus = true;
        drum.volume = 1
        drum2.volume = 0 // Zet het volume van de tweede drum op 0 wanneer je op de eerst drum heb geklikt

    }
}

// Roept de funcite aan en selecteer het element 

const drumknop = document.querySelector('#button2');
drumknop.addEventListener('click', switchicon);



function switchicon2() {
    if (iconStatus2 == true) {
        nolie2.src = "content/noli_basis.png";
        iconStatus2 = false;
        piano.volume = 0

    } else if (iconStatus2 == false) {
        nolie2.src = "content/noli_geel.gif";
        iconStatus2 = true;
        piano.volume = 1

    }
}

const painoknop = document.querySelector('#button1');
painoknop.addEventListener('click', switchicon2);


function switchicon3() {
    if (iconStatus3 == true) {
        nolie3.src = "content/noli_basis.png";
        iconStatus3 = false;
        lead.volume = 0

    } else if (iconStatus3 == false) {
        nolie3.src = "content/noli_blauw.gif";
        iconStatus3 = true;
        lead.volume = 1

    }
}

const leadknop = document.querySelector('#button3');
leadknop.addEventListener('click', switchicon3);




function switchicon4() {
    if (iconStatus4 == true) {
        nolie4.src = "content/noli_basis.png";
        iconStatus4 = false;
        drum2.volume = 0

    } else if (iconStatus4 == false) {
        nolie4.src = "content/noli_rood.gif";
        iconStatus4 = true;
        drum2.volume = 1
        drum.volume = 0

    }
}

const drum2knop = document.querySelector('#button4');
drum2knop.addEventListener('click', switchicon4);




