import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import './stylesheets/styles.scss';

class App extends Component {
  //create state here
  constructor(props) {
    super(props);

    this.state = {
      //what property to put in state
      name: [],
      imgURL: []
    }
    //functions
    //flip plant card
      //this.flip = () => {
        //selectClassPlant.toggleClass('flipped')
      }
  
  //compnentDidMount to update state by fetch data from server
    //fetch plants from server 
    //update state using setState
    //catch error
  componentDidMount() {
    fetch('/')
      .then(data => data.json())
      .then(data => {
        return this.setState({name: data.name, imgURL: data.imgURL});
      })
      .catch(err => {console.log(`Error occured in componentDidMount getting plants, ERROR: ${err}`)});
  }
    

  render() {
    return (
      <div className="router">
        <main>
          <Switch>
            {/* <Route path="/" component={() => <plantsContainer id={plantsContainer} />}/> */}
            <Route path='/' component={plantsContainer}}/>
          </Switch>
        </main>
      </div>
    )
  }
};


class plantsContainer extends React.Component {
  //creat const plants []
  
  //render 
    //creat const plants []
    //using for loop to iterate through state
      //push plant to plants id={i}
    //return
      //h1 Outdoor Plants
      //div {plants} div
}

class Plant extends React.Component {
  render() {
    return (
      //div class=plant onClick=this.flip use e.target.id? to access plant id
        //div class=frount
          //img src=imgURL alt=name
        //div class=back
         //li name
         //li color
         //li fragrance
         //button edit
         //button diary
    );
  }
}

export default App;