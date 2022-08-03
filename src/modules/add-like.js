const appURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/M3YWGWQqUrOVctHXGrPW/likes/';

const addLike = (item) => {
  fetch(appURL, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": item
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}

export default addLike;