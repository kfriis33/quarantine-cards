import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

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
    'hike': HikeIcon

}

class DisplayList extends Component {
    constructor(props) {
        super(props);
    }

    // Creates a card for each activity
    createItem = item => {  
        return (
            <div>
                <Card 
                    className="fullCard mb-4"
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
                    <Button id="add-button" onClick={() => this.props.addCard(item)}>Add</Button>
                    </Card.Body>
                    {/* <Card.Footer>
                        {'Footer content'}
                    </Card.Footer> */}
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