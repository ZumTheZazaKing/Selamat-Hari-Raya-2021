//Grabbing the DOM Elements
const loadingScreen = document.querySelector('#loading');
const startButton = document.querySelector('#start');
const reminder = document.querySelector('.reminder');
const greetingText = document.querySelector('.text.message.one');
const greetingDesc = document.querySelector('.text.message.two')
const greetingCredit  = document.querySelector('.text.message.credit');
const dialog = document.querySelector('.dialog');
const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const triangle = document.querySelector('.triangle');
const fireworks = document.querySelector('.pyro');
const covidModal = document.querySelector('.covidModal');
const rayaSong = document.querySelector('#rayaSong');
const lofiSong = document.querySelector('#lofiSong');
const staticSound = document.querySelector('#staticSound');
const evilLaugh = document.querySelector('#evilLaugh');

//The Dialog
let lines = [
    "Where the roads are busy...", 
    "And people are meeting...",
    "But this time is different",
    "There are no cars...",
    "No people meeting...",
    "During these joyous times...",
    "But worry not",
    "You can at least...",
    "Still spend time with those...",
    "Who are already with you",
    "But if you have no one...",
    "You still have HIM...",
    "To spend your time with",
    "And that my friend...",
    "Is special enough",
    "So dont't look down, look up",
    "Be glad...",
    "That you got to see it...",
    "To the very end..."
];
let lineCount = 0;


//The functions to get rid of loading screen
setTimeout(() => {
    loadingScreen.style.opacity = 0;
},2000);
setTimeout(() => {
    loadingScreen.classList.add('hide');
},2200);



//The Function that starts it all
startButton.addEventListener('click', () => {

    startButton.classList.add('hide');

    reminder.classList.add('hide');

    setTimeout(() => {
        square.classList.add('up');
        square.style.transform = 'translateY(0)';
        lofiSong.play();
    },1000);

    setTimeout(() => {
        square.classList.remove('up');
        square.classList.add('spin');
    },2000);

    setTimeout(() => {
        dialog.classList.add('move');
        setInterval(() => {
            dialog.innerHTML = lines[lineCount];
            lineCount++;
        }, 7000);
    },3000);


    setInterval(() => {

        if(lineCount == lines.length){

            lofiSong.pause();
            rayaSong.play();

            square.classList.remove('spin');
            circle.classList.add('come');
            triangle.classList.add('come');

            fireworks.classList.remove('hide');

            setTimeout(() => {
                dialog.classList.add('hide');
            },7000);

            setTimeout(() => {
                greetingText.classList.remove('hide');
                greetingDesc.classList.remove('hide');
                greetingCredit.classList.remove('hide');

            },11000);

            setTimeout(() => {
                greetingText.style.opacity = 1;
            },12000);


            setTimeout(() => {
                greetingDesc.style.opacity = 1;
            },14000);

            setTimeout(() => {
                greetingCredit.style.opacity = 1;
            },16000);


            setTimeout(() => {
                rayaSong.pause();
                staticSound.play();
            },20000);

            setTimeout(() => {
                staticSound.pause();
                evilLaugh.play();
                covidModal.classList.remove('hide');
            },21000);

            setTimeout(() => {
                evilLaugh.pause();
                rayaSong.play();
                covidModal.classList.add('hide');
            },27000);

        }

    },100);

});

//Credit for the songs
console.log("Songs used:\n\n1. Underverse OST - Hollowed[Geno's Theme]\n2. Selamat Hari Raya (Lofi Remix)");
console.log("Made by ZumTheZazaKing\nHosted by Github Pages");