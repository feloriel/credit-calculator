import React, { Component } from 'react';

class CreditCalculator extends Component {
  render() {
    const { 
      interest, 
      loan, 
      downPayment, 
      period, 
      chosenPeriod, 
      monthlyPrice, 
      handleChange, 
      handleSubmit 
    } = this.props;
    
    return(
      <main className="calculator-container">
        <form className="calculator-form" onSubmit={handleSubmit}>
          <div className="calculator-form__row">
            <label htmlFor="loan">Loan sum (€)</label>
            <input 
              type="number"
              min="1"
              placeholder="Loan sum..."
              required
              id="loan"
              name="loan"
              value={loan}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="calculator-form__row">
            <label htmlFor="downPayment">Down payment (%)</label>
            <input 
              type="number"
              min="1"
              max="99"
              placeholder="Down payment..."
              required
              id="downPayment"
              name="downPayment"
              value={downPayment}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="calculator-form__row">
            <label htmlFor="chosenPeriod">Period</label>
            <select name="chosenPeriod" value={chosenPeriod} onChange={handleChange}>
              {period.map((option, index) => 
                <option key={index} value={option.key}>{option.value}</option>
              )}
            </select>
          </div>
          <div className="calculator-form__row">
            <label htmlFor="interest">Interest (%)</label>
            <input 
              type="text"
              placeholder="Interest..."
              id="interest"
              name="interest"
              value={interest}
              readOnly
            />
          </div>
          <div className="calculator-form__row">
            <input type="submit" value="Calculate monthly payment" />
          </div>
        </form>
        <p>Monthly payment: {monthlyPrice}</p>
      </main>
    );
  }
}

export default CreditCalculator;