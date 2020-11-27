import React, {Component} from 'react'
import DisplayList from './DisplayList';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: "all",
            intensity: "any"
        };
      }


    onSelectFilterDuration = event => {
        this.setState({
            duration: event
        })
    }

    matchesFilterDuration = item => {
        if(this.state.duration === "all") {
            return true
        } else if (this.state.duration === 'short' && item.duration <= 20) {
            return true
        } else if (this.state.duration === 'medium' && item.duration > 20 && item.duration <= 60) {
            return true
        } else if (this.state.duration === 'long' && item.duration > 60){
            return true
        } else {
            return false
        }
    }

    onSelectFilterIntensity = event => {
        this.setState({
            intensity: event
        })
    }

    matchesFilterIntensity = item => {
        if(this.state.intensity === "any")  {
            return true
        } else if (this.state.intensity === item.intensity) {
            return true
        } else {
            return false
        }
    }

    matchesFilters = item => {
        return this.matchesFilterDuration(item) && this.matchesFilterIntensity(item)
    }

    getTitle = (filterName, filterVal) => {
        return filterName+" ("+filterVal+")"
    }
    render() {
        const products = this.props.list;
        console.log("products:")
        console.log(products)
        return (
            <div>
                <ButtonToolbar className="toolbar">
                <DropdownButton className="dropdown-button" id="dropdown-basic-button" title={this.getTitle("Duration",this.state.duration)}>
                    <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterDuration}>All</Dropdown.Item>
                    <Dropdown.Item eventKey="short" onSelect={this.onSelectFilterDuration}>Short</Dropdown.Item>
                    <Dropdown.Item eventKey="medium" onSelect={this.onSelectFilterDuration}>Medium</Dropdown.Item>
                    <Dropdown.Item eventKey="long" onSelect={this.onSelectFilterDuration}>Long</Dropdown.Item>
                </DropdownButton>
                <DropdownButton className="dropdown-button" id="dropdown-basic-button" title={this.getTitle("Intensity",this.state.intensity)}>
                    <Dropdown.Item eventKey="any" onSelect={this.onSelectFilterIntensity}>Any</Dropdown.Item>
                    <Dropdown.Item eventKey="low" onSelect={this.onSelectFilterIntensity}>Low</Dropdown.Item>
                    <Dropdown.Item eventKey="moderate" onSelect={this.onSelectFilterIntensity}>Moderate</Dropdown.Item>
                    <Dropdown.Item eventKey="high" onSelect={this.onSelectFilterIntensity}>High</Dropdown.Item>
                </DropdownButton>
                </ButtonToolbar>
                <DisplayList list={this.props.list.filter(this.matchesFilters)} />
            </div>
        )
    }
}

export default FilteredList;