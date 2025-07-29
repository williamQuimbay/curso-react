
const getImagen = async () => {

    try {
        const apikey = 'iAzbarBafSRW6tjlPsnbe9EPM851ejZs'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
        const { data } = await resp.json()
        const { url } = data.images.original;
        console.log(url);
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img)
    } catch (error) {
        //menejo del erro
    }
}
getImagen();