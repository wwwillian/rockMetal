import React, { Component } from 'react';
import api from '../../services/api';

import more from '../../assets/more.svg';

import './Home.css';

class Home extends Component {
  state = {
    home: [],
  };
  async componentDidMount(){
  const response = await api.get('posts');
  
  this.setState({ home: response.data })
}
handleLike = id => {
  api.post(`/post/${id}/like`);
}
  render() {
    return (
      <section id="post-list">
        { this.state.home.map( post => (
            <article key={ post._id }>
              <header>
                <div className="user-info">
                  <strong>{ post.band }</strong>
                  <span>{ post.date }</span>
                  <span>{ post.address }</span>
                  <span className="place">{ post.place }</span>
                </div>
                <img src={ more } alt="Mais" />
              </header>
              <img src={ `http://localhost:3333/files/${ post.image }` } alt="" />
              <footer>
                <div className="actions">
                  <button type="button" onClick={() => this.handleLike(post._id)}>
                    Confirmar presença!
                  </button>
                </div>
                <strong>{ post.likes } confimaram presença no evento!</strong> 
                <p>
                  { post.description }
                  <span>{ post.hashtags }</span>
                </p>
              </footer>
            </article>
        )) }
      </section>
    );
  }
}

export default Home;
