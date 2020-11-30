import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'



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
                style={{ width: '16rem', backgroundColor:"#694D75", textAlign:'center'}}
                className="mb-2"
                text="white"
            >
                <Card.Body>
                <Card.Title>{item.title} </Card.Title>
                <Card.Text>
                    <p>{item.description}</p>
                    <Badge className="card-badge" variant="light">~ {item.duration} mins</Badge>
                    <Badge className="card-badge" variant="light">{item.intensity} intensity</Badge>
                </Card.Text>
                <Button id="remove-button" onClick={() => {this.props.removeCard(item);}}>Remove</Button>
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

    render() {
        return (
            <div className="my-day">
                <h2>My Day</h2>
                <h5>Time planned: {this.props.totalMins} mins</h5>
                <CardDeck>
                    {this.props.list.map(this.createItem)}
                </CardDeck>
            </div>
        )
    }
}

export default MyDayContainer;