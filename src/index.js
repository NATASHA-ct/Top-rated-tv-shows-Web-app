import './style.css';
import logo from './assets/logo.png';
import displayHome from './modules/display-home.js';
import showPopup from './MODS/showpopup.js';

// adding logo to the header

const logoContainer = document.querySelector('.logo');
const imgLogo = document.createElement('img');
imgLogo.src = logo;
imgLogo.id = 'logo';
imgLogo.alt = 'logo picture';
logoContainer.appendChild(imgLogo);

// array of shows
const theOffice = 'tt0386676';
const breakingBad = 'tt0944947';
const gibi = 'tt13675832';
const avatar = 'tt0417299';
const friends = 'tt0108778';
const rickMorty = 'tt2861424';
const showsArray = [theOffice, breakingBad, gibi, avatar, friends, rickMorty];

showsArray.forEach(displayHome);

// EVENT LISTENER HOME COMMENT BTN TO SHOW POPUP

const openComments = document.querySelectorAll('.showbtnComment'); //-------------------new: cindy
console.log(openComments); //-----------------------------------------------------------new: cindy

openComments.forEach((btn) => { //------------------------------------------------------new: cindy
  btn.addEventListener('click', (e) => { //---------------------------------------------new: cindy
    const item = e.target.id;//---------------------------------------------------------new: cindy
    console.log('id inside eventlistener');//-------------------------------------------new: cindy
    console.log(item);//----------------------------------------------------------------new: cindy
    showPopup(item); //-----------------------------------------------------------------new: cindy
  }) //---------------------------------------------------------------------------------new: cindy
}) //-----------------------------------------------------------------------------------new: cindy

// showsArray.forEach((item) => {
//   opencomments.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       showPopup(item);
//     });
//   });
// });