// import newComment from "./addCom.js";

// const loadComment= () => {
//   const listofcomments = document.querySelector(".people-comments");
//   listofcomments.innerHTML = "";
//   const baseURL = "https://api.tvmaze.com/lookup/shows?imdb=";

//   // getting data from API when refreshing

//   const getComment = async () => {
//     const request = await fetch(
//           baseURL
//     );

//     const showDetails = await request.json();
//     return showDetails.result;
//   };

//   // gets new comments from API after a new commenter adds comment

//   getComment().then(
//     (value) => {
//       value.forEach((usernane , comment) => {
//         newComment(comment.username, comment.comment, id);
//       });
//     },

//     (error) => {
//       throw error;
//     }
//   );
// };

// export default loadComment;
