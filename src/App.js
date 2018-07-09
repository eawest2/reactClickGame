import React, { Component } from "react";
import ClickCard from "./components/clickCard";
import Wrapper from "./components/Wrapper";
import CenterLine from "./components/CenterLine";
import Title from "./components/Title";
import Header from "./components/Header";
import scientists from "./scientists.json";
import "./App.css";



let clicked = 0;
let chosenArray = [];
let defaultArray = [];
let displayArray = [];

scientists.map(item => defaultArray.push(item))

defaultArray.map(item => displayArray.push(item));

shuffleArray(displayArray);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    displayArray
  };

  //Main logic function
  removeCard = id => {
    // scroll through scientists to see which scientist has been clicked on  
    const workArray = this.state.displayArray.map(scientist => {
      //Work with the scientist data from the clicked scientist
      if (scientist.id === id) {
        //check to see if that scientist has been picked already
        if (chosenArray.indexOf(scientist.id) === -1){
          //if not, add him to the picked list
        chosenArray.push(scientist.id)
        console.log(chosenArray)
        }
        else {
          //if he has been picked already, display losing text and reset array
        clicked = -1;
        chosenArray = [];
        alert('You lost! Try again!')
        document.getElementsByClassName('scoreCurrent').innerHTML = '0';
        }
      }
      else {
        console.log(`This ID number not clicked: ${scientist.id}`);
      };

    })
    //increment clicked
    clicked++
    console.log(clicked);
    document.getElementsByClassName('scoreCurrent').innerHTML = clicked;
    //shuffle scientists
    shuffleArray(displayArray)
    //Rerender main page
    this.setState({ displayArray });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Header/>
        <Wrapper>

          <Title>Click on the scientists below, but don't click any twice!</Title>

          <CenterLine>
            {this.state.displayArray.map(scientist => (
              <ClickCard
                removeCard={this.removeCard}
                id={scientist.id}
                key={scientist.id}
                name={scientist.name}
                image={scientist.image}
              />
            ))}
          </CenterLine>
        </Wrapper>
      </div>
    );
  }
}

export default App;
