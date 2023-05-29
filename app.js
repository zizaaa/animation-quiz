const  headLine_1 = document.querySelector('.headline-1');
const female = document.querySelector('.female-img');
const headline_2 = document.querySelector('.headline-2');
const subHeadLine = document.querySelector('.subHeadline');
const learMore_btn = document.querySelector('.learMore-btn');
const logo = document.querySelector('.logo-container');
const replay = document.querySelector('.replay-btn');

const percentage = document.querySelector(':root');

const play=()=>{
    document.getElementById('playBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';

    headLine_1.style = 'animation: slideRight 1s forwards;';
    female.style = 'animation: femaleImg 1s ease-in-out forwards;';
    percentage.style.setProperty('--loaderPercent','5%');

    setTimeout(()=>{
        female.style = 'animation: femaleImg-remove 1s ease-in-out forwards;';
        percentage.style.setProperty('--loaderPercent','10%');
    },2000);
    setTimeout(()=>{
        headline_2.style = 'animation: slideRight .5s ease-in-out forwards; display:block;';
        percentage.style.setProperty('--loaderPercent','30%');
    },2500);
    setTimeout(()=>{
        headLine_1.style = 'animation: slideRight-remove .5s forwards;';
        subHeadLine.style = 'animation: subHeadShow 1s forwards; display:block;';
        percentage.style.setProperty('--loaderPercent','40%');
    },3000);
    setTimeout(()=>{
        learMore_btn.style = 'animation: learnMore 1s forwards; display:block;';
        percentage.style.setProperty('--loaderPercent','60%');
    },4000);
    setTimeout(()=>{
        logo.style = 'animation: logo-show .5s forwards; display:block;';
        percentage.style.setProperty('--loaderPercent','80%');
    },5000);
    setTimeout(()=>{
        replay.style = 'animation: replay 1s forwards; display:block;';
        percentage.style.setProperty('--loaderPercent','100%');
    },5500);

};


const repeat=()=>{
    headline_2.style = 'display:none;';
    subHeadLine.style = 'display:none;';
    learMore_btn.style = 'display:none;';
    logo.style = 'display:none;';
    replay.style = 'display:none;';

    play();
}

// const stop=()=>{
//     document.getElementById('playBtn').innerHTML = '<i class="fa-solid fa-play" onclick="play()"></i>';
// }
