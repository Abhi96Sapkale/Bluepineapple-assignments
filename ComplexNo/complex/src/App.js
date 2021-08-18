import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [realFirst, setRealFirst] = useState()
  const [imagFirst, setImagFirst] = useState()
  const [realSecond, setRealSecond] = useState()
  const [imagSecond, setImagSecond] = useState()
  const [real, setReal] = useState()
  const [imag, setImag] = useState()
  const addition = () => {
    const r = parseInt(realFirst) + parseInt(realSecond)
    const i = parseInt(imagFirst) + parseInt(imagSecond)
    setReal(r)
    setImag(i)
  }
  const subtraction = () => {
    const r = parseInt(realFirst) - parseInt(realSecond)
    const i = parseInt(imagFirst) - parseInt(imagSecond)
    setReal(r)
    setImag(i)
  }
  const multiplication = () => {
    const r1=parseInt(realFirst);
    const r2=parseInt(realSecond);
    const i1=parseInt(imagFirst);
    const i2=parseInt(imagSecond);

    setReal(r1 * r2 - i1 * i2)
    setImag(r1 * r2 - i1 * i2)
  }
  return (
    <div className="App">
      <p>Enter Real Number</p>
      <input
        type="number"
        value={realFirst}
        onChange={(e) => setRealFirst(e.target.value)}
      />
      <p>Enter imaginary Number</p>
      <input
        type="number"
        value={imagFirst}
        onChange={(e) => setImagFirst(e.target.value)}
      />
      <p>Enter Real Number</p>
      <input
        type="number"
        value={realSecond}
        onChange={(e) => setRealSecond(e.target.value)}
      />
      <p>Enter imaginary Number</p>
      <input
        type="number"
        value={imagSecond}
        onChange={(e) => setImagSecond(e.target.value)}
      />
      <br />
      <button onClick={addition}>Add</button>
      <button onClick={subtraction}>Sub</button>
      <button onClick={multiplication}>Mul</button>
      {/* <button onClick={division}>Add</button> */}
      <p>
        Result: {real}+ i{imag}
      </p>
    </div>
  )
}

export default App
