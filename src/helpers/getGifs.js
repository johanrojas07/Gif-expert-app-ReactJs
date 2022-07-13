export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Xfs6Sr3rBu4zT9HcQu54UQVDRgmNt8Vz&q=${category}&limit=10`;
    const resp = await fetch(url);

    const {data} = await resp.json();

    const gift = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gift);
    return gift;
}