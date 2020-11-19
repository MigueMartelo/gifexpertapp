export const getGifs = async category => {
  const API_Key = 'DcAvf457eArPJatP4QZuW9rPbSMtG7VV';
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${API_Key}`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
