
import { useEffect, useState } from 'react';
import { Buttons } from './components/Buttons'
import { Input } from './components/Input'
import { Wrapper } from './components/Wrapper'
import './index.css'

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [percentage, setPercentage] = useState(0);
  
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalPerson] = useState(0);

  useEffect(()=>{
    if(people>0){
      setTipAmount(()=>{
        return(parseFloat(((bill*percentage)/100)/people).toFixed(2))
      })
      setTotalPerson(()=>{
        return(parseFloat((((bill*percentage)/100)/people)+(bill/people)).toFixed(2))
      })
    }

  }, [bill, people, percentage])
  

  return (
    <>
      <header><img src="../public/images/logo.svg" alt="" /></header>
      <div className="general-wrapper">
        <div className="data-wrapper">

          <h1>Bill</h1>
          <Input id={'input-bill'} btnFor={'input-bill'} btnClass={'input-bill'} value={bill} setValue={(e)=>setBill(e.target.value)}/>

          <h2>Select Tip %</h2>
          <Buttons percentage={percentage} setPercentage={setPercentage}/>

          <h2>Number of People</h2>
          <Input id={'input-people'} btnFor={'input-people'} btnClass={'input-people'} value={people} setValue={(e)=>setPeople(e.target.value)}/>

        </div>

        <Wrapper tipAmount={tipAmount} totalAmount={totalAmount}/>

      </div>
    </>
  )
}

export default App



  // useEffect(()=>{
//  console.log(bill)
// }, [bill])