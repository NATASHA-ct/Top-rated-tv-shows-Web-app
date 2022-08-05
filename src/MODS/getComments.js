const appId = 'M3YWGWQqUrOVctHXGrPW';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const endPoint = '/comments';
const getComments = async (id) => {
  const response = await fetch(`${commentUrl + appId + endPoint}?item_id=${id}`);

  return response.json();
};

// Add comment
const addShowComment = async (viewerInfo) => {
  const response = await fetch(`${commentUrl + appId + endPoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(viewerInfo),
  });
  // console.log(viewerInfo);
  const commentData = await response.text();
  return commentData;
};

export { getComments, addShowComment };
