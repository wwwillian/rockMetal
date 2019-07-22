import React, { Component } from "react";
import api from '../../services/api';

import './Calendar.css';

class Conteudo extends Component {
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
                <div className="user-info">
                  <div className="">
                    <strong>{ post.band }</strong>
                  </div>
                  <div className="">
                    <span>{ post.date }</span>
                  </div>
                  <div className="">
                    <span>{ post.address }</span>
                  </div>
                  <div className="">
                    <span className="place">{ post.place }</span>
                  </div>
                </div>
                <div>
                  { post.description }
                </div>                 
            </article>
        )) }
      </section>
    );
  }
}

export default Conteudo;