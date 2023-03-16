import React, { useEffect, useState } from 'react'
const RandomMeme = () => {
    const [meme, setMeme] = useState({})
    const [cambiarMeme, setCambiarMeme] = useState(false)
    const apiKey = '148312bf65f24bf3a42b3adaddc3fcea'
    const url = 'https://api.humorapi.com/memes/random?keywords-in-image=true&api-key=' + apiKey

    useEffect( () => {
        fetch(url)
        .then( (response) => response.json())
        .then( (data) => setMeme(data))
    },[cambiarMeme])

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <h1>Disfruta el Meme</h1>
        <img src={meme.url} alt="" width={300}/>
        <button onClick={() => setCambiarMeme(!cambiarMeme)}>Cambiar</button>
    </div>
  )
}

export default RandomMeme