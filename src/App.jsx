import './App.css';
import FilteredList from './FilteredList';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDayContainer from './MyDayContainer';


const activityList = [
  {title:'Watch TV', description:"Relax and start a new show or re-watch an old favorite.", duration: 30, intensity:'low', icon_name:'tv'}, 
  {title: 'Bake something', description:"Find a delicious recipe online or in a cookbook, gather the ingredients, and get to work!", duration:90, intensity:'moderate', icon_name:'bake'}, 
  {title:'Text someone you miss', description:"Take a few minutes to tell someone you miss them. They probably miss you too!", duration:5, intensity:'low', icon_name:'text'},
  {title:'Video chat an old friend', description:"Use a free video chat app to see someone you haven't in a while! Quarantine is a great opportunity to catch up with old friends.", duration:20, intensity:'low', icon_name:'video-chat'},
  {title:'Go for a run', description:"No matter how far or fast, try getting out of the house (or onto the treadmill) and get your body moving. Hype up songs or podcasts might make it more enjoyable!", duration:30, intensity:'high', icon_name:'run'},
  {title:'Meditate', description:"Take a moment to bring you attention inward and focus on your body and your breath. If you want more guidance, you can find guided meditations online or on free apps like Headspace.", duration:30, intensity:'low', icon_name:'meditate'},
  {title:'Grow a plant', description:"Whether an indoor houseplant or an outdoor garden, caring for plants and watching them grow can be great for mental health, and can be tasty or pretty too!", duration:90, intensity:'moderate', icon_name:'plant'},
  {title:'Do a puzzle', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration:60, intensity:'low', icon_name:'puzzle'},
  {title:'Watch a movie', description:"Those long movies you always said you wanted to watch but still haven't? Now's their time.", duration:120, intensity:'low', icon_name:'movie'},
  {title:'Take a nap', description:"Sometimes the best activity is sleep. Turn off the lights, close the curtains, and get some shut-eye. You deserve it.", duration:30, intensity:'low', icon_name:'nap'},
  {title:'Make a cup of tea', description:"Tea makes everything better :)", duration:5, intensity:'low', icon_name:'tea'},
  {title:'Draw or paint', description:"Break out your artistic side! Your creation may make for great wall art to spice up your room, or a gift for someone you miss.", duration:60, intensity:'moderate', icon_name:'art'},
  {title:'Learn a new language', description:"Download an app like Duolingo and get going on that language you always wanted to learn or have been saying you want to practice.", duration:60, intensity:'moderate', icon_name:'language'},
  {title:'Cook a new recipe', description:"There are hundreds of amazing recipes out there waiting to be tried. Pick the one that looks the tastiest, gather the ingredients, and get started!", duration:90, intensity:'moderate', icon_name:'cook'},
  {title:'Do a HIIT workout', description:"Want a high intensity workout in a short amount of time? HIIT is for you! Search HIIT workouts to find free guided ones online.", duration:10, intensity:'high', icon_name:'hiit'},
  {title:'Go for a hike', description:"Get out of the house and enjoy some views! Free apps like AllTrails allow you to find nearby hikes of the length and difficulty that you're looking for.", duration:120, intensity:'high', icon_name:'hike'},

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
    // console.log("before", newItem)
    const itemCopy = {
      title: newItem.title,
      description: newItem.description,
      duration: newItem.duration,
      intensity: newItem.intensity,
      key: Date.now()
    };
    console.log("added", itemCopy)
    this.setState({
      cartItems:[...this.state.cartItems, itemCopy],
      cartTotalMins: this.state.cartTotalMins + itemCopy.duration
    })
    console.log("cart", this.state.cartItems)
  }

  removeCard = removeItem => {
    console.log("remove", removeItem)
    this.setState({
      cartItems:this.state.cartItems.filter(item => {return item.key !== removeItem.key}),
      cartTotalMins: this.state.cartTotalMins - removeItem.duration
    })
  }

  render() {
    return (
      <div className='App-body row no-gutters main-container' >
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
