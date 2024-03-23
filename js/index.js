const lightBulb = document.querySelector("#icon");
const lightBulb2 = document.querySelector("#icon2");
const lightBulb3 = document.querySelector("#icon3");
const lightBulb4 = document.querySelector("#icon");


let iconStatus = false;
let iconStatus2 = false;
let iconStatus3 = false;
let iconStatus4 = false;


let piano = new Audio('../muziek/afro/melody1.mp3')
let drum = new Audio('../muziek/afro/drum1.mp3')
let drum2 = new Audio('../muziek/afro/drum2.mp3')
let lead = new Audio('../muziek/afro/lead1.mp3')




function startmusic() {

    lightBulb.classList.remove('hide')
    lightBulb2.classList.remove('hide')
    lightBulb3.classList.remove('hide')

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

const button = document.querySelector('.startbitch')
button.addEventListener('click', startmusic)






function switchicon() {
    if (iconStatus == true) {
        lightBulb.src = "content/noli_basis.png";
        iconStatus = false;

        drum.volume = 0

    } else if (iconStatus == false) {
        lightBulb.src = "content/noli_rood.gif";
        iconStatus = true;
        drum.volume = 1


    }
}

const drumknop = document.querySelector('#button2');
drumknop.addEventListener('click', switchicon);



function switchicon2() {
    if (iconStatus2 == true) {
        lightBulb2.src = "content/noli_basis.png";
        iconStatus2 = false;
        piano.volume = 0

    } else if (iconStatus2 == false) {
        lightBulb2.src = "content/noli_geel.gif";
        iconStatus2 = true;
        piano.volume = 1

    }

    
}

const painoknop = document.querySelector('#button1');
painoknop.addEventListener('click', switchicon2);






function switchicon3() {
    if (iconStatus3 == true) {
        lightBulb3.src = "content/noli_basis.png";
        iconStatus = false;
        lead.volume = 0

    } else if (iconStatus3 == false) {
        lightBulb3.src = "content/noli_blauw.gif";
        iconStatus3 = true;
        lead.volume = 1

    }
}

const leadknop = document.querySelector('#button3');
leadknop.addEventListener('click', switchicon3);




function switchicon4() {
    if (iconStatus4 == true) {
        lightBulb4.src = "content/noli_basis.png";
        iconStatus4 = false;
        drum2.volume = 0

    } else if (iconStatus4 == false) {
        lightBulb4.src = "content/noli_rood.gif";
        iconStatus4 = true;
        drum2.volume = 1

    }
}

const drum2knop = document.querySelector('#button4');
drum2knop.addEventListener('click', switchicon4);




