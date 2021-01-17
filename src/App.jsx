import './App.css';
import FilteredList from './FilteredList';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDayContainer from './MyDayContainer';
import ReactTypingEffect from 'react-typing-effect';
import Button from 'react-bootstrap/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

import RedoIcon from '@material-ui/icons/Redo';

import BakeIcon from "./icons/bake.svg"
import MeditateIcon from "./icons/meditate.svg"
import PlantIcon from "./icons/plant.svg"
import PuzzleIcon from "./icons/puzzle.svg"
import RunIcon from "./icons/run.svg"
import TextIcon from "./icons/text.svg"
import TvIcon from "./icons/tv.svg"
import VideoChatIcon from "./icons/video-chat.svg"
import ArtIcon from "./icons/art.svg"
import CookIcon from "./icons/cook.svg"
import LanguageIcon from "./icons/language.svg"
import MovieIcon from "./icons/movie.svg"
import NapIcon from "./icons/nap.svg"
import TeaIcon from "./icons/tea.svg"
import HiitIcon from "./icons/hiit.svg"
import HikeIcon from "./icons/hike.svg"
import WalkIcon from "./icons/walk.svg"


const activityList = [
  {title:'Watch TV', description:"Relax and start a new show or re-watch an old favorite.", duration: 30, intensity:'low', icon_name:'tv'}, 
  {title:'Bake something', description:"Find a recipe online or in a cookbook and get to work!", duration:90, intensity:'moderate', icon_name:'bake'}, 
  {title:'Text someone you miss', description:"Take a few minutes to tell someone you miss them. They probably miss you too!", duration:5, intensity:'low', icon_name:'text'},
  {title:'Video chat an old friend', description:"Quarantine is a great opportunity to catch up with old friends.", duration:20, intensity:'low', icon_name:'video-chat'},
  {title:'Go for a run', description:"No matter how far or fast, try getting out of the house (or onto the treadmill) and get your body moving. Good music or podcasts might make it more enjoyable!", duration:30, intensity:'high', icon_name:'run'},
  {title:'Meditate', description:"Take a moment to bring you attention inward and focus on your body and your breath. You can find guided meditations online or on free apps like Headspace.", duration:30, intensity:'low', icon_name:'meditate'},
  {title:'Grow a plant', description:"Whether an indoor houseplant or an outdoor garden, caring for plants and watching them grow can be great for mental health, and can be tasty or pretty too!", duration:90, intensity:'moderate', icon_name:'plant'},
  {title:'Do a puzzle', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration:60, intensity:'low', icon_name:'puzzle'},
  {title:'Watch a movie', description:"Those long movies you've always wanted to watch but still haven't? Now's their time.", duration:120, intensity:'low', icon_name:'movie'},
  {title:'Take a nap', description:"Sometimes the best activity is sleep. Turn off the lights, close the curtains, and get some shut-eye. You deserve it.", duration:30, intensity:'low', icon_name:'nap'},
  {title:'Make a cup of tea', description:"Tea makes everything better :)", duration:5, intensity:'low', icon_name:'tea'},
  {title:'Draw or paint', description:"Break out your artistic side! Your creation may make for great wall art or a great gift.", duration:45, intensity:'moderate', icon_name:'art'},
  {title:'Study a new language', description:"Download an app like Duolingo and get going on a new language or practice an old one.", duration:60, intensity:'moderate', icon_name:'language'},
  {title:'Cook a new recipe', description:"There are hundreds of amazing recipes out there waiting to be tried. Pick the one that looks the tastiest, gather the ingredients, and get started!", duration:90, intensity:'moderate', icon_name:'cook'},
  {title:'Do a HIIT workout', description:"Want a high intensity workout in a short amount of time? Search HIIT workouts to find free guided ones online.", duration:10, intensity:'high', icon_name:'hiit'},
  {title:'Go for a hike', description:"Get out of the house and enjoy some views! Free apps like AllTrails allow you to find nearby hikes of the length and difficulty that you're looking for.", duration:120, intensity:'high', icon_name:'hike'},
  {title:'Go for a walk', description:"Go outside, breathe fresh air, and get your muscles moving.", duration:20, intensity:'moderate', icon_name:'walk'},

];

const images = {
  'bake':BakeIcon,
  'meditate':MeditateIcon,
  'plant':PlantIcon,
  'puzzle':PuzzleIcon,
  'run':RunIcon,
  'text':TextIcon,
  'tv':TvIcon,
  'video-chat':VideoChatIcon,
  'art':ArtIcon,
  'cook':CookIcon,
  'language':LanguageIcon,
  'movie':MovieIcon,
  'nap':NapIcon,
  'tea':TeaIcon,
  'hiit':HiitIcon,
  'hike': HikeIcon,
  'walk': WalkIcon
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cardDrawn: null,
      cartItems: [], // List of items that are in "My Day"
      cartTotalMins: 0, // Total sum of minutes in "My Day"
      cartOpen: false, // Whether "My Day" is open
      animationEnded:false,
      alert: null
    }
  }
  

  drawCard = newItem => {
    let randNum = Math.floor(Math.random()*activityList.length)
    this.setState(
      {
        cardDrawn:activityList[randNum]
      }
    )

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

    this.setState({
      cartItems:[...this.state.cartItems, itemCopy],
      cartTotalMins: this.state.cartTotalMins + itemCopy.duration,
      alert: <Alert className="alert-bar" onClose={() => this.setState({alert:null})} dismissible>"{newItem.title}" added. See {' '}<Alert.Link href='#my-day-id' onClick={()=>this.setState({
        cartOpen: true
      })}>My Day</Alert.Link>.</Alert>
    })

    
  }

  removeCard = (event, removeItem) => {
    console.log("remove", removeItem)
    event.stopPropagation();

    this.setState({
      cartItems:this.state.cartItems.filter(item => {return item.key !== removeItem.key}),
      cartTotalMins: this.state.cartTotalMins - removeItem.duration
    })
  }
  
  toggleCart = (event) => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  // Creates a card for each activity
  createItem = item => {  
    return (
        <div className="centered-div">
            <Card 
                className="fullCard mb-4"
                id="suggested-card"
            >
                <Card.Img className="card-image" variant="top" src={images[item.icon_name]}/>

                <Card.Body>
                <Card.Title>{item.title} </Card.Title>
                <Card.Text className="card-description">
                    {item.description}

                </Card.Text>
                <Card.Text>
                <Badge className="card-badge" variant="light">~ {item.duration} mins</Badge>
                    <Badge className="card-badge" variant="light">{item.intensity} intensity</Badge>
                    </Card.Text>
                <Button className="blue-button" onClick={() => this.addCard(item)}>Do it</Button>
                </Card.Body>
                {/* <Card.Footer>
                    {'Footer content'}
                </Card.Footer> */}
            </Card>
        </div>
        );
};

  render() {
    let cartOpen = this.state.cartOpen ? 'open' : 'closed';
    let buttonText = "Yes";
    let suggestedCard;
    let ideaText;
    let buttonId;

    if (this.state.cardDrawn == null) {
      suggestedCard = <div></div>;
      if (this.state.animationEnded){
        buttonId="yes-button"
      } else {
        buttonId="hidden-button"
      }
  
    } else {
      ideaText="Here's an idea:"
      suggestedCard = this.createItem(this.state.cardDrawn)
      buttonText ="Redraw"
      buttonId="redraw-button"
    }


    return (
      <div className='body-div'>
        <div className="landing-div">
          <h3 onAnimationEnd={()=>this.setState({animationEnded:true})}>Are you bored?</h3>
          <h5 className="mt-4">{ideaText}</h5>

          {suggestedCard}

          <div>
          <Button id={buttonId} onClick={this.drawCard}>{buttonText}</Button>

          </div>
          
          <div id="browse-all">
          <p className="mb-0">Browse All</p>
          <ExpandMoreIcon/>

          </div>
          
        </div>



      <div id="browse-id" className='browse-div' >
        <div >
          <h2>Quarantine Cards</h2>
          <div className="instructions">
          <p><i>Find activity ideas to help you get through quarantine! Use the dropdowns to narrow your search, and if you find an activity you want to do click "do it" to add it to your "my day" aggregator on the right.</i></p>

          </div>

          <div className="cards-div">
            <FilteredList list={activityList} addCard={this.addCard} images={images}/>
          </div>
        </div>
        <div id="my-day-id">
          <MyDayContainer list={this.state.cartItems} isCart={true} removeCard={this.removeCard} totalMins={this.state.cartTotalMins} cartOpen={this.state.cartOpen} toggleCart={this.toggleCart}/>
        </div>
      </div>
      {this.state.alert}
    </div>
    );
  }
}
