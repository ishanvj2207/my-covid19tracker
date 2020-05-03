import React, { Component } from "react";

import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import coronaImage from "./images/corona-top.png";

export class App extends Component {
  state = {
    data: {},
    country: "",
  };

  // built-in async componentDidMount
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    // console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <footer className={styles.footer}>&copy; Created By Ishan Vj</footer>
      </div>
    );
  }
}

export default App;
