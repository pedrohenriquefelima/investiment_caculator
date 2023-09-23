import React, { useState } from "react";
import styles from './Form.module.css';

const Form = (props) => {
  const [data, setData] = useState({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: ''
  });

  const handleUserInput = (event) => {
    if(event.target.id === 'current-savings'){
      setData((prevObsj) => {
        return {...prevObsj, currentSavings: +event.target.value};
      });
    } else if(event.target.id === 'yearly-contribution') {
      setData((prevObsj) => {
        return {...prevObsj, yearlyContribution: +event.target.value};
      });
    } else if(event.target.id === 'expected-return') {
      setData((prevObsj) => {
        return {...prevObsj, expectedReturn: +event.target.value / 100};
      });
    } else {
      setData((prevObsj) => {
        return {...prevObsj, duration: +event.target.value};
      });
    }
  }

  const resetHandler = () => {
    setData({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: ''
    });
    props.onAddYearly('reset');
  }

  const formHandler = (event) => {
    event.preventDefault();
    props.onAddYearly(data);
  };

    return (
      <form className={styles.form} onSubmit={formHandler}>
          <div className={styles["input-group"]}>
            <p>
              <label htmlFor="current-savings">Current Savings ($)</label>
              <input type="number" id="current-savings" onChange={handleUserInput}/>
            </p>
            <p>
              <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
              <input type="number" id="yearly-contribution" onChange={handleUserInput}/>
            </p>
          </div>
          <div className={styles["input-group"]}>
            <p>
              <label htmlFor="expected-return">
                Expected Interest (%, per year)
              </label>
              <input type="number" id="expected-return" onChange={handleUserInput}/>
            </p>
            <p>
              <label htmlFor="duration">Investment Duration (years)</label>
              <input type="number" id="duration" onChange={handleUserInput}/>
            </p>
          </div>
          <p className={styles.actions}>
            <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
              Reset
            </button>
            <button type="submit" className={styles.button} >
              Calculate
            </button>
          </p>
      </form>
    )
};

export default Form;