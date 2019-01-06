import React, {Component} from 'react';

import Tabs from './src';


export default class App extends Component {
  state = {
    cities: []
  };

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({cities})
  }
  addLocation = () => {

  }

  render() {
    return <Tabs 
      screenProps={{
        cities: this.state.cities,
        addCity: this.addCity
      }}
    />
  }
}