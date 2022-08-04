import './style.css';
import logo from './assets/logo.png';
import displayHome from './modules/display-home.js';
import countShowItems from './modules/count-show-items.js';

document.getElementById('logo').src = logo;

const theOffice = 'tt0386676';
const breakingBad = 'tt0944947';
const gibi = 'tt13675832';
const avatar = 'tt0417299';
const friends = 'tt0108778';
const rickMorty = 'tt2861424';
const showsArray = [theOffice, breakingBad, gibi, avatar, friends, rickMorty];

showsArray.forEach(displayHome);

countShowItems();