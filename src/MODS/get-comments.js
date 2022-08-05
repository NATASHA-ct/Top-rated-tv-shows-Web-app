const getComments = async (id) => {
  const resolve = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/M3YWGWQqUrOVctHXGrPW/comments?item_id=${id}`
  );
  const comments = await resolve.json();
  return comments;
};

export default getComments;
