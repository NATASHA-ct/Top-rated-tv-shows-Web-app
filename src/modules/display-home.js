import getShow from './get-show.js';
import addLike from './add-like.js';
import displayLikes from './display-likes.js';

const displayItems = document.getElementById('displayItems');
const baseURL = 'https://api.tvmaze.com/lookup/shows?imdb=';

const displayHome = (item) => {
  const showItem = document.createElement('div');
  showItem.classList.add('showItem');
  displayItems.appendChild(showItem);

  const showImg = document.createElement('img');
  showItem.appendChild(showImg);

  const showInfo = document.createElement('div');
  showInfo.classList.add('showInfo');
  showItem.appendChild(showInfo);

  const showName = document.createElement('p');
  showInfo.appendChild(showName);

  const showLikes = document.createElement('div');
  showLikes.classList.add('showLikes');
  showInfo.appendChild(showLikes);

  const likesIcon = document.createElement('button');
  likesIcon.classList.add('btnLike');
  likesIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
  showLikes.appendChild(likesIcon);

  const likesCouter = document.createElement('p');
  likesCouter.classList.add('counter');
  likesCouter.id = item;
  showLikes.appendChild(likesCouter);
  displayLikes();

  const btnComments = document.createElement('button');
  btnComments.innerHTML = 'Comments';
  showItem.appendChild(btnComments);

  const btnReserve = document.createElement('button');
  btnReserve.innerHTML = 'Reservations';
  showItem.appendChild(btnReserve);

  const uniqueURL = `${baseURL}${item}`;
  getShow(uniqueURL, showImg, showName);

  likesIcon.addEventListener('click', async () => {
    await addLike(item);
    await displayLikes();
  });
};

export default displayHome;