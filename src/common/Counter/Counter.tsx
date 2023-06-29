import { useState } from "react";

const Counter = () => {

  // const num = 500;
  // num = num + 1

  const [num, setNum] = useState(0); 
  
  const incrementHandler = () => {
    setNum(num + 1)
  }
  const decrementHandler = () => {
    setNum(num - 1)
  }

  const reset = () => {
    setNum(0)
  }

  return (
    <>
        <button onClick={incrementHandler}> + </button>
        <div> { num } </div>
        <button onClick={() => decrementHandler()}> - </button>
        <button onClick={() => reset}> reset </button>
    </>
  )
}

export default Counter;