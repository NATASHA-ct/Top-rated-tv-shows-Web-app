import getComments from "./get-comments.js";

const getNumberComments = async (id) => {
  let numberOfComments = await getComments(id);
  numberOfComments = numberOfComments.length;
  return numberOfComments;
};

export default getNumberComments;
