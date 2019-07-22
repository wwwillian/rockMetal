import React, { Component } from "react";
import api from '../../services/api'

import './Form.css';

class Form extends Component {
  state = {
    image: null,
    band: '',
    date: '',
    hours: '',
    address: '',
    place: '',
    description: '',
    hashtags: ''
  }
  handleSubmit = async e =>{
    e.preventDefault();

    const data = new FormData();

    data.append('image', this.state.image);
    data.append('band', this.state.band);
    data.append('date', this.state.date);
    data.append('hours', this.state.hours);
    data.append('description', this.state.description);
    data.append('address', this.state.address);
    data.append('place', this.state.place);
    data.append('hashtags', this.state.hashtags);

    await api.post('posts', data)

    this.props.history.push('/');
  }
  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <form id="new-post" onSubmit={ this.handleSubmit }>
        <input type="file" onChange={ this.handleImageChange }/>
        <input 
          type="text" 
          name="band" 
          placeholder="Banda" 
          onChange={ this.handleChange } 
          value={ this.state.band }
        />
        <input 
          type="date" 
          name="date"
          onChange={ this.handleChange } 
          value={ this.state.date }
        />
        <input 
          type="time" 
          name="hours"
          onChange={ this.handleChange } 
          value={ this.state.hours }
        />
        <input 
          type="text" 
          name="address" 
          placeholder="Local do Show" 
          onChange={ this.handleChange } 
          value={ this.state.address }
        />
        <input 
          type="text" 
          name="place" 
          placeholder="Estado e cidade" 
          onChange={ this.handleChange } 
          value={ this.state.place }
        />
        <input 
          type="text" 
          name="description" 
          placeholder="Descrição" 
          onChange={ this.handleChange } 
          value={ this.state.description }
        />
        <button type="submit">Enviar</button>
      </form>
        );
  }
}

export default Form;