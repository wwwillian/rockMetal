import React, { Component } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';


import more from '../../assets/more.svg';

import './Home.css';

class Home extends Component {
  state = {
    home: [],
  };
  async componentDidMount(){
    this.registerToSocket();
  
    const response = await api.get('posts');
  
    this.setState({ home: response.data })
  } 
  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    socket.on('post', newPost =>{
      this.setState({ home: [newPost, ...this.state.home] })
  })

  socket.on('like', likedPost => {
    this.setState({
      home: this.state.home.map(post =>
        post._id === likedPost._id ? likedPost : post
      )
    })
  })
}
handleLike = id => {
  api.post(`/posts/${id}/like`);
}
  render() {
    return (
      <section id="post-list">
        { this.state.home.map( post => (
            <article key={ post._id }>
              <header>
                <div className="user-info">
                  <strong>{ post.band }</strong>
                  <span>{ post.date } { post.hours }</span>
                  <span>{ post.address }</span>
                  <span className="place">{ post.place }</span>
                </div>
                <img src={ more } alt="Mais" />
              </header>
              <img src={ `http://localhost:3333/files/${ post.image }` } alt="" />
              <footer>
                <div className="actions">
                  <button type="button" onClick={ () => this.handleLike(post._id) }>
                    Confirmar presença!
                  </button>
                </div>
                <p>{ post.likes } pessoas confimaram presença no evento!</p> 
                <strong>
                  { post.description }
                </strong>
              </footer>
            </article>
        )) }
      </section>
    );
  }
}

export default Home;
