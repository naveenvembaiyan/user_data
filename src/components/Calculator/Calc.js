import React, { useState } from 'react'
import "./Calc.css"

const Calc = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const sub = () =>{
    setResult(parseInt(a)-parseInt(b));
  }
  function mul() {
    setResult(parseInt(a)*parseInt(b));
    
  }

  return (
    <>
      
      <input type="text" value={a} onChange={(e)=> setA(e.target.value)} />
      <input type="text" value={b} onChange={(e)=> setB(e.target.value)}/>
       <button onClick={()=>setResult (parseInt(a)+ parseInt(b) )  }>add</button>
       <button onClick={sub}  >sub </button>
       <button onClick={mul} >mul </button>
       <button onClick={()=>setResult(parseInt(a)/parseInt(b)) } >div</button>

       <h1>{result}</h1>
       
    </>
  )
}

export default Calc