import React, { Component } from 'react';
import './App.css';
import { Card, Icon, Image, Grid, Header } from 'semantic-ui-react'


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
  }, 
  {
    "title" : "Surf Life",
    "intro" : "We love surfing Hawaii",
    "main" : "The main content of the board with long text again",
    "img" : "https://cdn.shopify.com/s/files/1/0759/5877/files/Laura_Enever_grande.png?10934993563231938985"
  },
  {
    "title" : "Rock'n'Roll",
    "intro" : "War on drugs",
    "main" : "The main content of the board with long text again",
    "img" : "http://s3.amazonaws.com/medias.photodeck.com/4cf7f48a-a132-41cb-8e92-665637bb2221/HR-TheWarOnDrugs-TBDfest-4Oct2014-9280_xgaplus.jpg"
  }  
] 

const PageHeader = ({title, subtitle}) => (
  <div className="ui inverted vertical masthead center aligned segment">
    <div className="ui container">
      <div className="ui large secondary inverted pointing menu">
        <a className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <a className="active item">Home</a>
        <a className="item">Menu 1</a>
        <a className="item">Menu 2</a>
        <div className="right item">
          <a className="ui inverted button">Log in</a>
          <a className="ui inverted button">Sign Up</a>
        </div>
      </div>
    </div>

    <div className="ui text container">
      <h1 className="ui inverted header">{title}</h1>
      <h2>{subtitle}</h2>
      <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
    </div>
  </div>
)

const Board = ({ title, intro, main, img }) => (
  <Card>
    <Image src={img} />
    <Card.Content>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Meta>
        <span className='intro'>
          {intro}
        </span>
      </Card.Meta>
      <Card.Description>
        {main}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

const Boards = ({ boards }) => 
  <div className="ui vertical stripe segment">
    <div className="ui container">
      <Grid columns={3}>
        {boards.map((board, i) =>
          <Grid.Column>
            <Board key={i} {...board} />
          </Grid.Column>  
        )}  
      </Grid> 
    </div> 
  </div>

const HeaderSection = ({section_title, title, intro}) => (
  <section className="ui text container center aligned">
    <Header as="h3">{section_title}</Header>
    <Header as="h1">{title}</Header>
    <p>{intro}</p>
  </section>
) 

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader title="There's some chocolate left!" subtitle="And don't worry... It always comes with bananas" />
        <HeaderSection 
          section_title="INTRO" 
          title="Welcome to MetaBoards" 
          intro="That's the intro text that can be quite long already... and introduces the boards to come." 
        />
        <Boards boards={boards_data}/> 
        <HeaderSection 
          section_title="RESOURCES" 
          title="That's a new test section" 
          intro="Another intro text." 
        />
      </div>
    );
  }
}

export default App;

