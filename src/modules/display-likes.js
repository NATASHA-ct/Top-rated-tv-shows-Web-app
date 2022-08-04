const appURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/M3YWGWQqUrOVctHXGrPW/likes/';

const updateCounter = (element) => {
  const counterArr = document.querySelectorAll('.counter');
  for (let i = 0; i < counterArr.length; i += 1) {
    if (counterArr[i].id === element.item_id) {
      counterArr[i].innerHTML = `${element.likes} likes`;
    }
  }
};

const displayLikes = async () => {
  fetch(appURL)
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .then((data) => {
      data.map(updateCounter);
    });
};

export default displayLikes;