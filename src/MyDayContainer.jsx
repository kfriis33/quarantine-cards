import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { jsPDF } from "jspdf";



class MyDayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_mins: 0

        }
    }

    // Maps each added activity to a card to be displayed in the "My Day" container
    createItem = item => { 
        return (
            <div>
            <Card 
                className="mb-2 px-0 cart-card"
            >
                <Card.Body>

                <IconButton  className="close-button" aria-label="delete" onClick={(event) => {this.props.removeCard(event, item)}}>
                    <CloseIcon fontSize='inherit'/>
                </IconButton>

                <Card.Title>{item.title} </Card.Title>
                <Card.Text>
                    {/* <p>{item.description}</p> */}
                    <Badge className="card-badge" variant="light">~ {item.duration} mins</Badge>
                    <Badge className="card-badge" variant="light">{item.intensity} intensity</Badge>
                </Card.Text>
                {/* <Button id="remove-button" onClick={() => {this.props.removeCard(item);}}>Remove</Button> */}
                </Card.Body>
            </Card>
            </div>            
        )
    }

    // Sums the total minutes of activities in "My Day"
    sumMinutes = () => {
        let total = 0
        for (const item of this.props.list) {
            total = total + item.duration
        }
        this.setState({total_mins: total})
    }


      makeBullet = (item) => {
          console.log(item)
        //   var checkBox = new jsPDF.API.AcroFormCheckBox();

        //   checkBox.fontSize = 20;
        //   checkBox.fieldName = "CheckBox1";
        //   // checkBox.caption ="hello world"
        //   checkBox.Rect = [50, 120, 10, 10];
        //   checkBox.value = 'No'
  
        //   console.log("checkbox:", checkBox)
        // //   doc.addField(checkBox);

          return '\u2022  ' + item.title + ' (~' +item.duration + ' min)'
      }

      downloadCart = (event) => {
        event.stopPropagation();

        const doc = new jsPDF();

        if (this.props.list.length === 0) {
            doc.text(["Hello!", "Looks like you haven't added anything to My Day.", "Return to the main page and add some activities!"], 30, 30)
        } else {
            doc.text(["Hello!", "Congrats on planning out some things to do today.", "This is what you're going to:"], 30, 30)

            doc.text(this.props.list.map(this.makeBullet), 40, 55);
        }

        doc.save("MyDay.pdf");

      }

    // function Content() {s
        
    // }
    render() {
        // let mainClasses = 'col-sm-9'
        // // this.state.cartOpen ? 'col-sm-9' : 'col-sm-12';
        let cartClasses = this.props.cartOpen ? 'my-day open' : ' my-day closed';
        let content;
        let buttonIcon;
        let cardDeck;
        if (this.props.list.length == 0) {
            cardDeck = (<p className="mx-3 mt-3 text-center"><i>You have no activities selected! Select activities by clicking the "Do it" button on an activity card.</i></p>)
        } else {
            cardDeck = (
                <CardDeck>
                    {this.props.list.map(this.createItem)}
                </CardDeck>
            )
        }
        if (this.props.cartOpen) {
            content = (
                <div className="my-day-body">
                    <div>
                        <h3>My Day</h3>
                        <h5>{Math.floor(this.props.totalMins /60)} hr {this.props.totalMins % 60} min</h5>
                        <div className="my-day-items">
                        {cardDeck}
                        </div>
                    </div>
                    
                    
                <Button className="blue-button mt-3" onClick={this.downloadCart}>Save Day PDF</Button>
                    

                    
                </div>
            )
            buttonIcon= <ArrowDropDownIcon fontSize='large'/>
        } else {
            content=(<div></div>)
            buttonIcon= <ArrowDropUpIcon fontSize='large'/>
        }

        return (
            <div className={cartClasses} onClick={this.props.toggleCart}>
            <Button id="cart-button" onClick={this.props.toggleCart}>{buttonIcon}My Day <strong>({this.props.list.length})</strong></Button>
            {content}
                
            </div>

            
        )
    }
}

export default MyDayContainer;