import React from 'react';

import { Header, Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'

// component app will return div element
class App extends React.Component {

  // remember that the constructor will be called by react automatically
  // HOLDS COMPONENT PROPERTIES
  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch data
    const fetchedData = await fetchData(country);
    // set the state
    this.setState({ data: fetchedData, country: country });
  }

  render() {

    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;