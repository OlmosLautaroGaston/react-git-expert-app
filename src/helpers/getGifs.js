const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=zdwLS3jIL0M6C8j8HYqry4I8bbks5nC8&q=${encodeURI(
    category
  )}&limit=10&offset=0&rating=g&lang=en`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
export default getGifs;
