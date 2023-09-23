import { useState } from 'react';
import Form from './Components/Form/Form';
import InvestmentTable from './Components/InvestmentTable';
import styles from './App.module.css';
import Header from './Components/Header/Header';

function App() {

  const [yearlyData, setYearlyData] = useState([]);

  const addYearlyDataHandler = (event) => {
    console.log(event);
    if(event === 'reset'){
      setYearlyData([]);
      return;
    }
    for (let i = 0; i < event.duration; i++) {
      const yearlyInterest = event.currentSavings * event.expectedReturn;
      event.currentSavings += yearlyInterest + event.yearlyContribution;
      setYearlyData((prevData)=> {
        return [...prevData, {
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: event.currentSavings,
            yearlyContribution: event.yearlyContribution,
            currentSavings: event.currentSavings
          }]
      });
    }
  }

  return (
    <div>
      <Header/>
      <Form onAddYearly={addYearlyDataHandler}/>
      {yearlyData.length === 0 && <div className={styles['call-back-text']}> No Data to Display</div>}
      {yearlyData.length > 0 && <InvestmentTable dataTable={yearlyData}/>}
    </div>
  );
}

export default App;
