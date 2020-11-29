import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';
import { render } from '@testing-library/react';
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import MyDayContainer from './MyDayContainer';


const activityList = [
  {key: 0, title:'Watch TV', description:"Relax and start a new show or re-watch an old favorite.", duration: 30, intensity:'low', icon_name:'tv'}, 
  {key: 1, title: 'Bake something', description:"Find a delicious recipe online or in a cookbook, gather the ingredients, and get to work!", duration:90, intensity:'moderate', icon_name:'bake'}, 
  {key: 2, title:'Text someone you miss', description:"Take a few minutes to tell someone you miss them. They probably miss you too!", duration:5, intensity:'low', icon_name:'text'},
  {key: 3, title:'Video chat an old friend', description:"Use a free video chat app to see someone you haven't in a while! Quarantine is a great opportunity to catch up with people you've fallen out of touch with.", duration:20, intensity:'low', icon_name:'video-chat'},
  {key: 4, title:'Go for a run', description:"No matter how far or fast, going for a jog might be a great way to get out of the house (or onto the treadmill) and get your body moving. Make a playlist of songs that hype you up or listen to a podcast to make it more enjoyable!", duration:30, intensity:'high', icon_name:'run'},
  {key: 5, title:'Meditate', description:"Take a moment to bring you attention inward and focus on your body and your breath. If you want more guidance, you can find guided meditations online or on free apps like Headspace.", duration:30, intensity:'low', icon_name:'meditate'},
  {key: 6, title:'Grow a plant', description:"Whether an indoor houseplant or an outdoor garden, caring for plants and watching them grow can be great for mental health, and can be tasty or pretty too!", duration:90, intensity:'moderate', icon_name:'plant'},
  {key: 7, title:'Do a puzzle', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration:60, intensity:'low', icon_name:'puzzle'},
  {key: 8, title:'Watch a movie', description:"Those long movies you always said you wanted to watch but still haven't? Now's their time.", duration:120, intensity:'low', icon_name:'movie'},
  {key: 9, title:'Take a nap', description:"Sometimes the best activity is sleep. Turn off the lights, close the curtains, and get some shut-eye. You deserve it.", duration:30, intensity:'low', icon_name:'nap'},
  {key: 10, title:'Make a cup of tea', description:"Tea makes everything better :)", duration:5, intensity:'low', icon_name:'tea'},
  {key: 11, title:'Draw or paint', description:"Break out your artistic side! Your creation may make for great wall art to spice up your room, or a gift for someone you miss.", duration:60, intensity:'moderate', icon_name:'art'},
  {key: 12,title:'Learn a new language', description:"Download an app like Duolingo and get going on that language you always wanted to learn or have been saying you want to practice.", duration:60, intensity:'moderate', icon_name:'language'},
  {key: 13,title:'Cook a new recipe', description:"There are hundreds of amazing recipes out there waiting to be tried. Pick the one that looks the tastiest, gather the ingredients, and get started!", duration:90, intensity:'moderate', icon_name:'cook'},
];


export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cartItems: [], // List of items that are in "My Day"
      cartTotalMins: 0 // Total sum of minutes in "My Day"
    }
  }
  
  // Functions to add and remove cards from the "My Day" section. These are passed into MyDayContainer as CallBack functions.
  addCard = newItem => {
    this.setState({
      cartItems:[...this.state.cartItems, newItem],
      cartTotalMins: this.state.cartTotalMins + newItem.duration
    })
  }

  removeCard = removeItem => {
    this.setState({
      cartItems:this.state.cartItems.filter(item => {return item !=removeItem}),
      cartTotalMins: this.state.cartTotalMins - removeItem.duration
    })
  }

  render() {
    return (
      <div className='App-body row no-gutters' >
        <div className='col-lg-9'>
          <div>
            <h1>Quarantine Cards</h1>
            <h4>Activity ideas to help you get through quarantine</h4>
          </div>
          <div>
            <FilteredList list={activityList} addCard={this.addCard}/>
          </div>
        </div>

        <div className='col-lg-3'>
          <MyDayContainer list={this.state.cartItems} isCart={true} removeCard={this.removeCard} totalMins={this.state.cartTotalMins}/>
        </div>
      </div>
    );
  }
}
