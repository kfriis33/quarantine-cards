import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'
import BakeIcon from "./icons/bake.svg"

class DisplayList extends Component {

    createItem = item => {    
        return (
            <div>
            <Card 
                bg='info'
                // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2"
            >
            <Card.Img className="card-image" variant="top" src={BakeIcon}/>

            <Card.Body>
              <Card.Title>{item.title} </Card.Title>
              <Card.Text>
                <p>{item.description}</p>
                <Badge className="card-badge" variant="light">~ {item.duration} mins</Badge>
                <Badge className="card-badge" variant="light">{item.intensity} intensity</Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        );
    };

    render() {
        return (
            <div>
                <CardDeck>
                    {this.props.list.map(this.createItem)};
                </CardDeck>
            </div>
        )
    }
}

export default DisplayList;