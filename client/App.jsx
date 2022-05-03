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
    }
    //functions
    //flip plant card
      //this.flip = () => {
        //selectClassPlant.toggleClass('flipped')
      }
    //add new plant
  }
  
  //compnentDidMountupdate
    //fetch plants from server 
    //update state using setState
    //catch error

  //render 
    //return plants container
      // <div className="router">
      //   <main>
      //     <Switch>
      //       <Route exact path="/"
      //         component={
      //           () => <plants container {...pageProps} />
      //         }
      //       />
      //       <Route exact path="/customize/:id"
      //         component={
      //           () => <CustomCharacter {...pageProps} />
      //         }
      //       />
      //     </Switch>
      //   </main>
      // </div>
};


class plantsContainer extends React.Component {
  //creat const plants []
  
  //render 
    //creat const plants []
    //using for loop to iterate through state
      //push plant to plants id={i}
    //return
      //h1 Roses
      //div plants div
}

class Plant extends React.Component {
  render() {
    return (
      //div class=plant id=plant onClick=this.flip use e.target.id? to access plant id
        //div class=frount
          //img src=imgURL alt=name
        //div class=back
         //li name
         //li color
         //fragrance
         //button edit
         //button diary
    )
  }
}

render(<App />, document.querySelector('#app'));