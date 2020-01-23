import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import WeatherCard from "./WeatherCard/WeatherCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationRequest: ""
    };
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation = location => {
    this.setState({ locationRequest: location });
    getWeather(location)
      .then(response => {
        if (location) {
          this.setState({
            weatherData: response,
            city: response.name,
            country: response.sys.country,
            description: response.weather[0].description,
            temperature: response.main.temp,
            humidity: response.main.humidity,
            icon: response.weather[0].icon,
            error: ""
          });
        } else {
          this.setState({
            error: "Please enter city name..."
          });
        }
      })
      .catch(error => {
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        );
        this.setState({
          error: "Incorrect city name..."
        });
      });
  };

  render() {
    return (
      <div className="container">
        <SearchBar searchLocation={this.getLocation} />
        <WeatherCard
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
    );
  }
}

async function getWeather(city) {
  const apiKey = "667fbe93f70a3eb1c64eeb621de1f0b6";
  const api_call = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  ).catch(error => console.error("Error:", error));
  return await api_call.json();
}

export default App;
