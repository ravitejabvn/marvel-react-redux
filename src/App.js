import React, { Component } from 'react';
import './App.css';
import Characters from './characters';
import { Link } from 'react-router-dom';
import envKeys from './.envKeys.js';
import marvelImg from './images/marvel-logo.jpg';
import characterImg from './images/characters.jpg';
import comicsImg from './images/comics.jpg';
import creatorsImg from './images/creators.jpg';
import eventsImg from './images/events.jpg';
import seriesImg from './images/series.jpg';
import storiesImg from './images/stories.jpg';

class App extends Component {
  constructor(){
    super();
    this.menu = [
      {link:'/characters',name:'Characters',image:characterImg},
      {link:'/comics',name:'Comics',image:comicsImg},
      {link:'/creators',name:'Creators',image:creatorsImg},
      {link:'/events',name:'Events',image:eventsImg},
      {link:'/series',name:'Series',image:seriesImg},
      {link:'/stories',name:'Stories',image:storiesImg}
    ]
  }
  render() {
    return (
      <div className="App">
        <img src={marvelImg} className="main-logo" />
        <ul className="menu-list">
          { this.menu.map((list)=>{
            return (
              <li>
                <img src={list.image} className="list-image"/>
                <div className="menu-name"></div>
                <Link to={list.link}>{list.name}</Link>
              </li>
              )
            })
          }
      </ul>
      </div>
    );
  }
}

export default App;
