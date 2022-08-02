import getShow from './get-show.js';

const displayItems = document.getElementById('displayItems');
const baseURL = 'https://api.tvmaze.com/lookup/shows?imdb=';

const displayHome = (item) => {
  const showItem = document.createElement('div');
  displayItems.appendChild(showItem);

  const showImg = document.createElement('img');
  showItem.appendChild(showImg);

  const showInfo = document.createElement('div');
  showItem.appendChild(showInfo);

  const showName = document.createElement('p');
  showInfo.appendChild(showName);

  const showLikes = document.createElement('div');
  showInfo.appendChild(showLikes);

  const likesIcon = document.createElement('button');
  likesIcon.innerHTML = '<i class="fa-regular fa-heart"></i>';
  showLikes.appendChild(likesIcon);

  const likesCouter = document.createElement('p');
  likesCouter.innerHTML = '5 likes';
  showLikes.appendChild(likesCouter);

  const btnComments = document.createElement('button');
  btnComments.innerHTML = 'Comments';
  showItem.appendChild(btnComments);

  const btnReserve = document.createElement('button');
  btnReserve.innerHTML = 'Reservations';
  showItem.appendChild(btnReserve);

  const uniqueURL = `${baseURL}${item}`;
  getShow(uniqueURL, showImg, showName);
};

export default displayHome;