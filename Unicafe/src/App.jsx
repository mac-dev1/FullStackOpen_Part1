import { useState } from 'react'

const Button = ({handler,text}) =>{  
  return(
    <button onClick={handler}>{text}</button>
  )
}

const SingleDisp = ({value,text}) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const Display = ({values}) => {  
  return (
    <>
      <SingleDisp value={values[0]} text="good" />
      <SingleDisp value={values[1]} text="neutral"/>
      <SingleDisp value={values[2]} text="bad"/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={() => setGood(good+1)} text="good" />      
      <Button handler={()=>setNeutral(neutral+1)} text="neutral" />
      <Button handler={()=>setBad(bad+1)} text="bad"  />
      <h1>statistics</h1>
      <Display values={[good,neutral,bad]} />
    </div>
  )
}

export default App