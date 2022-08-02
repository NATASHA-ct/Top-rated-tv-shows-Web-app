const displayItems = document.getElementById('displayItems');
const baseURL = 'https://api.tvmaze.com/lookup/shows?imdb=';

const displayHome = (item) => {
  const uniqueURL = `${baseURL}${item}`;
  console.log(uniqueURL);
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
  showLikes.appendChild(likesIcon);

  const likesCouter = document.createElement('p');
  showLikes.appendChild(likesCouter);
};

export default displayHome;