import './App.css'
import Counter from './common/Counter/Counter'
import ZeldaHeart from './common/ZeldaHeart/ZeldaHeart'
import RickCharactersList from './pages/RickCharactersList/RickCharactersList'
// import Bienvenido from './common/Bienvenido/Bienvenido'

function App() {

  return (
    <>
      {/* <Bienvenido name="Dani" lastname="Tarazona" /> */}
      
      {/* <Counter />
      <div>
        -----------------------------------------
      </div>
      <div>
        <Counter />
      </div> */}

      {/* <ZeldaHeart input="🤍" output="💘"/> */}
      {/* <ZeldaHeart input="❌" output="⭕️"/> */}
      {/* <ZeldaHeart input="Encendido" output="Apagado"/> */}

      <RickCharactersList />
      
    </>
  )
}

export default App
