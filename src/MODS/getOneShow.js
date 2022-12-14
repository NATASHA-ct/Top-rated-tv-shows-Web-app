const getOneShow = async (id) => {
  const baseURL = 'https://api.tvmaze.com/lookup/shows?imdb=';
  const uniqueURL = `${baseURL}${id}`;

  const response = await fetch(uniqueURL);
  const jsonresponse = await response.json();

  return {
    image: jsonresponse.image.original,
    name: jsonresponse.name,
    type: jsonresponse.type,
    language: jsonresponse.language,
    genres: jsonresponse.genres,
    rating: jsonresponse.rating.average,
  };
};

export default getOneShow;
