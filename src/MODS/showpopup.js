import getOneShow from './getOneShow.js';

const showPopup = async (id) => {
  const showId = id;
  const {
    image,
    name,
    type,
    language,
    genres,
    rating,
  } = await getOneShow(showId);
  
  // get body element from html
  const body = document.querySelector('body');

  // create a div for the comments pop up, gave an id and class
  const commentsPopup = document.createElement('div');
  //commentsPopup.id = 'popup';--------------------------------------------------------new: cindy
  commentsPopup.className = 'commentspopup';
  body.appendChild(commentsPopup); //--------------------------------------------------new: cindy

  // adding the objects of popup dynamically
  // close icon
  const popcloseIcon = document.createElement('button');
  popcloseIcon.classList.add('btnpopClose');
  popcloseIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'; //---------------------new: cindy
  commentsPopup.appendChild(popcloseIcon);

  // image container
  const showtop = document.createElement('div');
  showtop.className = 'show-top';
  commentsPopup.appendChild(showtop);

  const showimage = document.createElement('img');
  showimage.className = 'showimage';
  showimage.src = image;
  showtop.appendChild(showimage);

  // name of the show
  const showname = document.createElement('h2');
  showname.className = 'show-name';
  showname.innerText = name;
  commentsPopup.appendChild(showname);

  // show stats and information
  const showstats = document.createElement('ul');
  showstats.className = 'show-stats';

  const showtype = document.createElement('li');
  showtype.className = 'stats';
  showtype.innerText = `Type: ${type}`;
  showstats.appendChild(showtype);

  const showlanguage = document.createElement('li');
  showlanguage.className = 'stats';
  showlanguage.innerText = `Language: ${language}`;
  showstats.appendChild(showlanguage);

  const showgenres = document.createElement('li');
  showgenres.className = 'stats';
  showgenres.innerText = `Genres: ${genres}`;
  showstats.appendChild(showgenres);

  const showrating = document.createElement('li');
  showrating.className = 'stats';
  showrating.innerText = `Star-rating: ${rating}`;
  showstats.appendChild(showrating);

  commentsPopup.appendChild(showstats);

  // people comments .......

  //    //comments heading
  //     const commenthd = document.createElement("h2");
  //     commenthd.className = "hcomments";
  //     commenthd.innerText = "Viewer's comments";
  //     commentsPopup.appendChild(commenthd);

  //  // given comments
  //     const viewers = document.createElement("ul");
  //     viewers.className = "people-comments";

  // //temporary viewer list
  //     const viewerA= document.createElement("li");
  //     viewerA.className = "stats";
  //     viewers.appendChild(viewerA);

  //     const viewerB= document.createElement("li");
  //     viewerB.className = "viewer";
  //     viewers.appendChild(viewerB);

  //     commentsPopup.appendChild(viewers);

  // //FORM ADD VIEWER AND COMMENT
  //     //main container
  //         const formsec = document.createElement("section");
  //         formsec.className = "addComments";
  //         commentsPopup.appendChild(formsec);

  //     //heading of the section
  //         const hAdd = document.createElement("h2");
  //         hAdd.className = "hAdd";
  //         hAdd.innerText = "Add a comment";
  //         formsec.appendChild(hAdd);

  //     //FORM .......................
  //         const formmain = document.createElement("form");
  //         formmain.action = "#" ;
  //         formmain.method = "GET" ;
  //         formsec.appendChild(formmain);

  // //inside form inputs
  // const user = document.createElement("input");
  // user.className = "text";
  // user.type = "text" ;
  // user.id = "username";
  // user.required = true;
  // user.placeholder = "Enter your name";
  // formmain.appendChild(user);

  // const usercomm = document.createElement("input");
  // usercomm.className = "text";
  // usercomm.type = "text" ;
  // usercomm.id = "comment";
  // usercomm.required = true;
  // usercomm.placeholder = "Your insights";
  // formmain.appendChild(usercomm);

  // const commBtn = document.createElement("input");
  // commBtn.className = "com-btn";
  // commBtn.type = "submit" ;
  // commBtn.id = "submit";
  // commBtn.value = "Comment";
  //  formmain.appendChild(usercomm);

  body.appendChild(commentsPopup);
};

export default showPopup;