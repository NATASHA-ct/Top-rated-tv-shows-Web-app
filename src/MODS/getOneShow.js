// import getShow from "../modules/get-show";


const uniqueURL = "https://api.tvmaze.com/lookup/shows?imdb=${id}";

const getOneShow = async (id) => {
  const response = await fetch(uniqueURL);
  const jsonresponse = await response.json()
  
  
  return {
    image: jsonresponse.image,
    name: jsonresponse.name,
    summary: jsonresponse.summary,
    language: jsonresponse.language,
    genres: jsonresponse.genres,
    rating: jsonresponse.rating.average,
  };

};

export default getOneShow;
