import React from 'react';
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";

const API_KEY ="354fc5f8ed7e323d84ac3677d76ea348";

class App extends React.Component {
  getWeather = async () => {
    const api_call  = await fetch(`api.openweathermap.org/data/2.5/weather?q=&appid=${API_KEY}`);
    const data = await api_call.json();
    
  }

  render(){
    return(
      <div>
      <Titles />
      <Forms />
      <Weather />
      </div>
    );
  }
};

export default App;
