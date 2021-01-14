import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class MyDayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_mins: 0,
            cartOpen: false // Whether the cart is open

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
    toggleCart = (event) => {
        this.setState({
          cartOpen: !this.state.cartOpen
        })
        console.log(this.state)
      }

    // function Content() {
        
    // }
    render() {
        // let mainClasses = 'col-sm-9'
        // // this.state.cartOpen ? 'col-sm-9' : 'col-sm-12';
        let cartClasses = this.state.cartOpen ? 'my-day open' : ' my-day closed';
        let content;
        let buttonIcon;
        if (this.state.cartOpen) {
            content = (
                <div className="my-day-body">
                    <h3>My Day</h3>
                    <h5>{Math.floor(this.props.totalMins /60)} hr {this.props.totalMins % 60} min</h5>
                    <CardDeck>
                        {this.props.list.map(this.createItem)}
                    </CardDeck>
                </div>
            )
            buttonIcon= <ArrowDropDownIcon fontSize='large'/>
        } else {
            content=(<div></div>)
            buttonIcon= <ArrowDropUpIcon fontSize='large'/>
        }

        return (
            <div className={cartClasses} onClick={this.toggleCart}>
            <Button id="cart-button" onClick={this.toggleCart}>{buttonIcon}My Day <strong>({this.props.list.length})</strong></Button>
            {content}
                
            </div>

            
        )
    }
}

export default MyDayContainer;