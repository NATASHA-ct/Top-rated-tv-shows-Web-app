const getShow = (uniqueURL, showImg, showName) => {
  fetch(uniqueURL)
    .then(async (response) => {
      const data = await response.json();
      return data;
    })
    .then((data) => {
      showImg.src = data.image.medium;
      showName.innerHTML = data.name;
    });
};

export default getShow;