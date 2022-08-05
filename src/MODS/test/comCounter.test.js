//MOCKING THE TEST

const getComments = async () =>
  Promise.resolve([
    {
      username: "Harry",
      comment: "Best show ever",
      creation_date: "2022-08-05",
    },
    {
      username: "larry",
      comment: "Worst show ever",
      creation_date: "2022-08-05",
    },
  ]);

//checking length of viewercomments is equal to number of comments given like above we have one.
const getNumberComments = async () => {
  let viewerCommentsNum = await getComments();
  viewerCommentsNum = viewerCommentsNum.length;
  return viewerCommentsNum;
};

//if the number of viewer comments is as expected then it passes
jest.mock("../get-comments.js");

test("The number of comments of the item 0 is 1", () => {
  getNumberComments().then((comments) => {
    expect(comments).toBe(2);
  });
});
