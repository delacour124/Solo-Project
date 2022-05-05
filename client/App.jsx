import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
// import './stylesheets/styles.scss';


class App extends Component {
  //create state here
  constructor(props) {
    super(props);
    
    this.state = {
      //what property to put in state
      name: [],
      imgURL: [],
      dataFetched: false
    }
  }
    //functions
    //flip plant card
      //this.flip = () => {
        //selectClassPlant.toggleClass('flipped')
      // }
  
  // compnentDidMount to update state by fetch data from server
  //   fetch plants from server 
  //   update state using setState
  //   catch error
  componentDidMount() {
    // useEffect() {
    fetch('/api')
      .then(data => data.json())
      .then(data => {
        console.log('this is fetched data', data);
        // for (let i = 0; i < data.length; i++) {
        //   const fetchedName = [];
        //   const fetchedImgURL = [];
        //   fetchedName.push(data[i].name);
        //   fetchedImgURL.push(data[i].imgURL);
        // }
        this.setState({
          name: data.name,
          imgURL: data.imgURL,
          dataFetched: true
        })
        console.log('this is state', this.state);
      })
      .catch(err => {console.log(`Error occured in componentDidMount getting plants, ERROR: ${err}`)});
  }

  // //try async await fetch
  // async componentDidMount() {
  //       const rawData = await fetch('/api');
  //       const data = await rawData.json();
  //       console.log('fetched!');
  //       for (let i = 0; i < data.length; i++) {
  //         this.setState(prevState => {
  //           prevState.name.push(data[i].name);
  //           prevState.imgURL.push(data[i].imgURL);
  //           // prevState.dataFetched = true;
  //         });
  //       }
  //       console.log('this is state', this.state);
  // };
  

  render() {
    return (
      // <div className="router">
      //   <p>Hello</p>
      //   <main>
      //     <Switch> 
      //       <Route path="/" component={() => <plantsContainer id={plantsContainer} />}/> 
      //       <Route id='plangtsContainer' path='/' component={PlantsContainer}/> 
      //     </Switch>
      //   </main>
      // </div>
      <div id='plantsContainer'>
        <PlantsContainer state={this.state}/>
      </div>
    )
  }
};


class PlantsContainer extends Component {
  //render 
  render() {
    //check if data fetched
    if (!this.props.state.dataFetched) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );
    
    //creat const plants []
    const plants = [];
    // using for loop to iterate through state
    console.log('this is name', this.props.state.name);
    console.log('length', this.props.state.name.length);
    for (let i = 0; i < this.props.state.name.length; i++) {
      //push plant to plants id={i}
      console.log('imgURL', this.props.state.imgURL[i]);
      plants.push(<Plant key={i} class='plantCard' name={this.props.state.name[i]} imgURL={this.props.state.imgURL[i]}/>);
    }

    // return (
      // <div id='plantCard'>
      //   <h2>Outdoor Plants</h2>
      //   <Plant name={this.state.name[0]}/>
      // </div>
    return (
      <div id='plantCard'>
        <h2>Outdoor Plants</h2>
        {plants}
      </div>
    )
  }
}

class Plant extends Component {
  render() {
    // return (
      //div class=plant onClick=this.flip use e.target.id? to access plant id
        //div class=frount
          //img src=imgURL alt=name
        //div class=back
         //li name
         //li color
         //li fragrance
         //button edit
         //button diary
    // );
    //helper function to generate img src
    const getImgSrc = name => {
      return require(`../docs/${name}.jpeg`).default;
    }
    console.log('this.props.src', this.props.src);
    return (
      <div>
        <p>{this.props.name}</p>
        <img src={getImgSrc(this.props.name)}/>
        {/* <img src={require(this.props.imgURL).default}/> */}
        {/* <img src={require('../docs/kent.jpeg').default}/> */}
        
      </div>
    )
  }
}

export default App;