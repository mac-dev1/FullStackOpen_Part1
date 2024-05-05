import { useState } from 'react'

const Button = ({handler,text}) =>{  
  return(
    <button onClick={handler}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = (props) =>{  
  if(props.values.every(item => item === 0)){
    return (
      <p>No feedback given</p>
    )    
  }
  const sum = props.values.reduce((acc,curr)=>acc+curr)
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.values[0]} />
        <StatisticLine text="neutral" value={props.values[1]}/>
        <StatisticLine text="bad" value={props.values[2]}/>   
        <StatisticLine text="sum" value={sum} />
        <StatisticLine text="average" value={(props.values[0]-props.values[2])/sum}/>
        <StatisticLine text="positive" value={props.values[0]*100/sum + "%"}/>    
      </tbody>
    </table>
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
      <Statistics values={[good,neutral,bad]} />
    </div>
  )
}

export default App