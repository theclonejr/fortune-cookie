import getRandomFromArr from "../services/getRandomFromArr.js"
import quotes from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const ButtonPhrase = ({ setPhraseRandom, setBgApp }) => {

    const handleChangePhrase = () => {
        const phrases = getRandomFromArr(quotes)
        setPhraseRandom(phrases)
        setBgApp(getRandomFromArr(bgArr))
    }


  return (
    <>
       <button 
        className="app__btn"
        onClick={handleChangePhrase}>Prueba tu suerte</button> 
    </>
  )
}

export default ButtonPhrase