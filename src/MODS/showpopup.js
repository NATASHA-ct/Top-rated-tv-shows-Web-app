import getOneShow from "./getOneShow.js";

const showPopup = async (id) => {
    const showId = id;
    const {
            image,
            name,
            summary,
            language,
            genres,
            rating,
    } = await getOneShow(showId);

//get body element from html
 const body = document.querySelector("body");

 //create a div for the comments pop up, gave an id and class
 const commentsPopup = document.createElement("div");
 commentsPopup.id = "popup";
 commentsPopup.className = "commentspopup";

 //adding the objects of popup dynamically 
    //image container
        const showtop = document.createElement("div");
        showtop.className = "show-top";
        commentsPopup.appendChild(showtop);

        const showimage = document.createElement("img");
        showimage.className = "showimage";
        showimage.src = image;
        showtop.appendChild(showimage);

// name of the show
        const showname = document.createElement("h2");
        showname.className = "show-name";
        showname.innerText = name;
        commentsPopup.appendChild(showname); 

//show stats and information  
        const showstats = document.createElement("ul");
        showstats.className = "show-stats";
         
       
        const showsummary= document.createElement("li");
        showsummary.className = "stats";
        showsummary.innerText = summary;
        showstats.appendChild(showsummary);        

        const showlanguage = document.createElement("li");
        showlanguage.className = "stats";
        showlanguage.innerText = language;
        showstats.appendChild(showlanuage);  

        const showgenres = document.createElement("li");
        showgenres.className = "stats";
        showgenres.innerText = genres;
        showstats.appendChild(showgenres);  

        const showrating = document.createElement("li");
        showrating.className = "stats";
        showrating.innerText = rating;
        showstats.appendChild(showrating);  
        
         commentsPopup.appendChild(showstats);

//people comments .......

       //comments heading
        const commenthd = document.createElement("h2");
        commenthd.className = "hcomments";
        commenthd.innerText = "Viewer's comments";
        commentsPopup.appendChild(commenthd); 

     // given comments
        const viewers = document.createElement("ul");
        viewers.className = "people-comments";

    //temporary viewer list
        const viewerA= document.createElement("li");
        viewerA.className = "stats";
        viewers.appendChild(viewerA);        

        const viewerB= document.createElement("li");
        viewerB.className = "viewer";
        viewers.appendChild(viewerB); 
        
        commentsPopup.appendChild(viewers);

//FORM ADD VIEWER AND COMMENT
    //main container
        const formsec = document.createElement("section");
        formsec.className = "addComments";
        formsec.innerText = "Viewer's comments";
        commentsPopup.appendChild(formsec); 
    
    //heading of the section
        const hAdd = document.createElement("h2");
        hAdd.className = "hAdd";
        hAdd.innerText = "Add a comment";
        formsec.appendChild(hAdd); 

    //FORM .......................
        const formmain = document.createElement("form");
        formmain.action = "#" ;
        formmain.method = "GET" ;
        formsec.appendChild(formmain); 

        //inside form inputs
        const user = document.createElement("input");
        user.className = "text";
        user.type = "text" ;
        user.id = "username";
        user.placeholder = "Enter your name";
        user.aria-required ;
        formmain.appendChild(user); 

        const usercomm = document.createElement("input");
        usercomm.className = "text";
        usercomm.type = "text" ;
        usercomm.id = "comment";
        usercomm.placeholder = "Your insights";
        usercomm.aria-required ;
        formmain.appendChild(usercomm); 

        const commBtn = document.createElement("input");
        commBtn.className = "com-btn";
        commBtn.type = "submit" ;
        commBtn.id = "submit";
        commBtn.value = "Comment";
        commBtn.aria-required ;
        formmain.appendChild(usercomm); 

    body.appendChild(commentsPopup);
};

export default showPopup;