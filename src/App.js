import React, { Component } from 'react';
import Header from './components/Header';
import CreditCalculator from './components/CreditCalculator';

class App extends Component {
  state = {
    interest: 1.5,
    loan: '',
    downPayment: '',
    period: [
      {key: 12, value: '1 year'},
      {key: 24, value: '2 years'},
      {key: 36, value: '3 years'},
      {key: 48, value: '4 years'},
      {key: 60, value: '5 years'},
      {key: 72, value: '6 years'},
    ],
    chosenPeriod: 1,
    monthlyPrice: 0
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    const { loan, downPayment, interest, chosenPeriod } = this.state;
    event.preventDefault();
    this.calculateMonthlyPrice(loan, downPayment, interest, chosenPeriod);
  }

  calculateMonthlyPrice = (loan, downPayment, interest, chosenPeriod) => {
    // Calculating final price without down payment
    const price = loan - (loan * downPayment / 100);
    // Calculating months in chosen period
    const period = chosenPeriod * 12;
    // Calculating interest rate
    const interestRate = interest / 100;
    const monthlyPrice = Math.round((price * interestRate) / (1 - (Math.pow(1 / (1 + interestRate), period))));

    this.setState({
      monthlyPrice
    });
  }

  render() {
    const { interest, loan, downPayment, period, chosenPeriod, monthlyPrice } = this.state;

    return (
      <React.Fragment>
        <Header />
        <CreditCalculator 
          interest={interest}
          loan={loan}
          downPayment={downPayment}
          period={period}
          chosenPeriod={chosenPeriod}
          monthlyPrice={monthlyPrice}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

export default App;
