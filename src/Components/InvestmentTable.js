import React from "react";
import styles from './InvestmentTable.module.css'

const InvestmentTable = (props) => {
    const itemsAll = props.dataTable.map((item) => {
        return (
                <tr key={Math.random(1000)}>
                    <td>{item.year}</td>
                    <td>{item.savingsEndOfYear}</td>
                    <td>{item.yearlyInterest}</td>
                    <td>{item.savingsEndOfYear - item.currentSavings - item.yearlyContribution * item.year}</td>
                    <td>{item.currentSavings + item.yearlyContribution * item.year}</td>
                </tr>)
    })
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {itemsAll}
            </tbody>
      </table>
    )
}

export default InvestmentTable;