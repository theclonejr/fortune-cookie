import { useState } from 'react'
import './App.css'
import quotes from './utils/phrases.json'
import getRandomFromArr from './services/getRandomFromArr.js'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'
import bgArr from './utils/bgArr.json'

function App() {

  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr))
  
  const [phraseRandom, setPhraseRandom] = useState( getRandomFromArr(quotes))
  console.log(quotes);

  const objStyle = {
    backgroundImage: `url(../fondo${bgApp}.jpg)`
  }

  return (
    <>
      <div style={objStyle} className='app'>
        <h1 className='app__title'>Galleta de la fortuna</h1>
        <article className='app__card'>
          <Phrase
            phraseRandom={phraseRandom}
          />
          <ButtonPhrase
            setBgApp={setBgApp}
            setPhraseRandom={setPhraseRandom}
          />
        </article>
        <div className='app__footer'>
          <footer>
            <p className='footer__p'>Developed by Wences Reyes</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
