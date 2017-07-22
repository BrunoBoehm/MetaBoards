import React, { Component } from 'react';
import './App.css';


const boards_data = [
  {
    "title" : "Tiny House",
    "intro" : "That's a really cool house!",
    "main" : "The main content of the board with long text",
    "img" : "http://media.salon.com/2014/06/Screen-Shot-2014-06-26-at-5.29.35-PM.png"
  },
  {
    "title" : "Van Life",
    "intro" : "Does #VanLife suck?",
    "main" : "The main content of the board with long text again",
    "img" : "https://images.follownews.com/1629/1629219/vagabond-mitch-cox-talks-instagram-van-life-and-the-quest-for-an-endless-summer_1.jpg"
  }  
] 

const Board = ({ title, intro, main, img }) =>
  <section id={title.toLowerCase().replace(/ /g, "-")}>
    <img src={img} />
    <h2>{title}</h2>
    <h3>{intro}</h3>
    <p>{main}</p>
  </section>

const ListBoards = ({ category, boards }) => 
  <article>
    <h2>{category}</h2>
    <div className="boards">
      {
        boards.map((board, i) =>
          <Board key={i} {...board} />
        )
      }
    </div>
  </article>

const Menu = ({title}) =>
  <header>
    <h1>{title}</h1>
  </header>    

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu title="Cool Stuff" />
        <ListBoards category="On The Road"  boards={boards_data}/> 
      </div>
    );
  }
}

export default App;
