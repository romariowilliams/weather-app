import React from 'react';
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";

const API_KEY ="354fc5f8ed7e323d84ac3677d76ea348";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
   e.preventDefault();
   const city = e.target.elements.city.value;
    const api_call  = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

   if (city){
      	 if(data.name){ // checks if there is data (specifically the city name) fetched from the API
		console.log(data)
		this.setState({
	
       	 	temperature: data.main.temp,
       	 	city: data.name,
		country: data.sys.country,
        	humidity: data.main.humidity,
        	description: data.weather[0].description,
        	error: ""
	
      		});
	}
	else {
      		this.setState({
        	temperature: undefined,
        	city: undefined,
		country: undefined,
        	humidity: undefined,
        	description: undefined,
        	error: "Sorry, we can't find that city. Try again."
     	 });
     	}

    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
	country:undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter values."
      });
    }
  }

  render(){
    return(
      <div>
      <Titles />
      <Forms getWeather={this.getWeather} />
      <Weather
       temperature={this.state.temperature}
       city={this.state.city}
	country={this.state.country}
       humidity={this.state.humidity}
       description={this.state.description}
       error={this.state.error}
       />
      </div>
    );
  }
};

export default App;
