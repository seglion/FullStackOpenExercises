import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
 <tr><td>{text}</td> <td>{value}</td></tr> 

)

const Statistics = (props) => {

if (props.bad+props.neutral+props.good===0){
  return(
  <div>
    <br/>
    No feedback given
    </div>)
}


return (
  <>  
  <h1>statistics</h1>
  <table>
  <StatisticLine text='good' value={props.good} />
  <StatisticLine text='neutral' value={props.neutral} />
  <StatisticLine text='bad' value={props.bad} />
  <StatisticLine text='all' value={props.bad+props.neutral+props.good} />
  <StatisticLine text='average' value={((props.good*1)+(props.bad*-1))/(props.bad+props.neutral+props.good)} />
  <StatisticLine text='positive' value={(props.good/(props.bad+props.neutral+props.good)*100) }/></table>    
  
 
</>
)
}





const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }

  
  return(

    
    
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics bad={bad}  neutral={neutral} good={good}/>
    </div>
  )
}

export default App