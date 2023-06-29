import './App.css'
import Counter from './common/Counter/Counter'
// import Bienvenido from './common/Bienvenido/Bienvenido'

function App() {

  return (
    <>
      {/* <Bienvenido name="Dani" lastname="Tarazona" /> */}
      
      <Counter />
      <div>
        -----------------------------------------
      </div>
      <div>
        <Counter />
      </div>
      
    </>
  )
}

export default App
