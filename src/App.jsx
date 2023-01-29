import CurrencyRow from "./CurrencyRow"
import { useEffect, useState } from "react"

const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=tn8NRjFmfL8gBStnU1lj4XAdHHtYSHJw2L1vL8Ow'

function App() {
  const [currencyOptions, setCurrencyOption] = useState([])

  useEffect(()=> {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data, data.data.USD, ...Object.keys(data.data))
        setCurrencyOption(['USD', ...Object.keys(data.data)])
      })
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow 
        currencyOptions={currencyOptions}
      />
      <div className="equals">=</div>
      <CurrencyRow 
        currencyOptions={currencyOptions}
      />
    </>
  )
}

export default App
