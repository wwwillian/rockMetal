import React, { Component } from 'react';
import api from '../../services/api';

import more from '../../assets/more.svg';
import comment from '../../assets/comment.svg';
import like from '../../assets/like.svg';
import send from '../../assets/send.svg';

import './Home.css';

class Home extends Component {
  state = {
    home: [],
  };
 async componentDidMount(){
    const response = await api.get('posts');
  
    this.setState({ home: response.data })
  }

  render() {
    return (
      <section id="post-list">
        { this.state.home.map( post => (
            <article key={ post._id }>
              <header>
                <div className="user-info">
                  <span>{ post.band }</span>
                  <span className="place">{ post.place }</span>
                </div>
                <img src={ more } alt="Mais" />
              </header>
              <img src={ `http://localhost:3333/files/${ post.image }` } alt="" />
              <footer>
                <div className="actions">
                  <img src={ like } alt="" />
                  <img src={ comment } alt="" />
                  <img src={ send } alt="" />
                </div>
                <strong>{ post.likes } curtidas</strong> 
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
