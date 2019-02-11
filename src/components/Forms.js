import React from 'react';

const Forms = props => (
  <form onSubmit={props.getWeather}>
  <input type="text" name="city" placeholder="City, Country"/>
  <button>Get Weather</button>
  </form>
);

export default Forms;
