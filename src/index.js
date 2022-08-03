import './style.css';
import logo from "./assets/logo.png";
import dora from "./assets/dora.jpg";
import displayHome from './modules/display-home.js';

//adding logo to the header 

const logoContainer = document.querySelector(".logo");
const imgLogo = document.createElement("img");
imgLogo.src = logo;
imgLogo.id = "logo";
imgLogo.alt = "logo picture";
logoContainer.appendChild(imgLogo);


const theOffice = 'tt0386676';
const breakingBad = 'tt0944947';
const gibi = 'tt13675832';
const avatar = 'tt0417299';
const friends = 'tt0108778';
const rickMorty = 'tt2861424';
const showsArray = [theOffice, breakingBad, gibi, avatar, friends, rickMorty];

showsArray.forEach(displayHome);


//..........................comments pop up.....
    
 //.....adding event listener to comment button on each show on homepage...

//COMMENTS POP UP//
const opencomments = document.querySelectorAll(".showbtnComment"); //CHANGE TO HOME COMMENT BTN
const popupContainer = document.getElementById("#popup")

opencomments.forEach((btn) => {
  btn.addEventListener("click", () => {
    const commentsPopup = document.querySelector(".commentspopup");

    commentsPopup.innerHTML = `
        <div class="show-top">
            <img id="dora" src="" alt="logo picture">       
         </div>
        
        <h2 class="show-name">SHOWNAME</h2>
        
        <ul class="show-stats">
              <li class="stats">STATS:1</li>
              <li class="stats">STATS:1</li>
              <li class="stats">STATS:1</li>
              <li class="stats">STATS:1</li>
        </ul>
         
        <h2 class="hcomments">Comments(6)</h2>

        <ul class="people-comments">
               <li>date name comment</li>
               <li>date name comment</li>
               <li>date name comment</li>
        </ul>

        <section class="addComments">
            <h2 class="hAdd">Add a comment</h2>
            <form action="#" method="GET">
                <input class="text" type="text" name="playerName" id="user" placeholder="Your name" aria-required>
                <input class="text" type="text" name="playerName" id="score" placeholder="Your insights" aria-required>
                <input class="com-btn" type="submit" id="submit" value="Comment">
            </form>
            
        </section>
    
      `;

    document.querySelector(".show-image").src = dora;

    popupContainer.appendChild(commentsPopup);

    // close icon
    const close = document.querySelector("#close2");

    close.addEventListener("click", () => {
      commentsPopup.innerHTML = "";
    });
  });
});