document.querySelector('button').addEventListener('click', getThePic)

function getThePic(){
    const theInputValue = document.querySelector('input').value

    const url = `https://api.nasa.gov/planetary/apod?api_key=dGqe5aXaQLbemlnKG1P8Gdtg8tcCw7DlNy9e9VJq&date=${theInputValue}`

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
        }
        document.querySelector('p').innerText = data.explanation

    })
    .catch(err =>{
        console.log(`err ${err}`)
    })
}