import { useState } from "react"

import './ZeldaHeart.css'

interface ZeldaHeartsInputs {
  input: string,
  output: string
}

const ZeldaHeart = ({input, output}: ZeldaHeartsInputs) => {

  const [heart, setHeart] = useState(false);

  const heartHandler = () => {
    setHeart(!heart)
  }
  
  return (
    <>
      <div 
        onClick={heartHandler}
        className={heart ? "red" : "black"}
      >
        { 
          heart 
            ? input 
            : output
        }
      </div>
    </>
  )
}

export default ZeldaHeart