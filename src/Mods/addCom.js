// module for adding a new COMMENT


const newComment = (date , username, comment) => {
  const listofcomments = document.querySelector(".people-comments"); //change to list of movies

  const comment = document.createElement("li");
  comment.innerHTML = `
                    <div class="commentDetails">
                     <p class="dateAdded">
                     ${date}:
                     </p>
                     <p class="username">
                     ${user}:
                     </p>
                     <p class="userComment">${comment}</p>
                    </div>
                   `;
  listofcomments.appendChild(comment);
};

export default newComment;
