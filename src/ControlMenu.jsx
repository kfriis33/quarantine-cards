import React, {Component} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class ControlMenu extends Component {
    constructor(props) {
        super(props);
    }
    
    // Helper function for displaying the dropdown titles
    getTitle = (filterName, filterVal) => {
        return filterName+" ("+filterVal+")"
    }

    // Resets all the filters and sorters to their default settings
    reset = () => {
        this.props.filterDuration("all")
        this.props.filterIntensity("any")
        this.props.changeSort("default")
    }

    render() {
        return (
            <div>
                <ButtonToolbar className="toolbar">
                <p className="toolbar-text-no-padding">Filter by:</p>
                <DropdownButton className="dropdown-button" id="dropdown-button" title={this.getTitle("Duration",this.props.duration)}>
                    <Dropdown.Item eventKey="all" onSelect={this.props.filterDuration}>All</Dropdown.Item>
                    <Dropdown.Item eventKey="short" onSelect={this.props.filterDuration}>Short</Dropdown.Item>
                    <Dropdown.Item eventKey="medium" onSelect={this.props.filterDuration}>Medium</Dropdown.Item>
                    <Dropdown.Item eventKey="long" onSelect={this.props.filterDuration}>Long</Dropdown.Item>
                </DropdownButton>
                <DropdownButton className="dropdown-button" id="dropdown-button" title={this.getTitle("Intensity",this.props.intensity)}>
                    <Dropdown.Item eventKey="any" onSelect={this.props.filterIntensity}>Any</Dropdown.Item>
                    <Dropdown.Item eventKey="low" onSelect={this.props.filterIntensity}>Low</Dropdown.Item>
                    <Dropdown.Item eventKey="moderate" onSelect={this.props.filterIntensity}>Moderate</Dropdown.Item>
                    <Dropdown.Item eventKey="high" onSelect={this.props.filterIntensity}>High</Dropdown.Item>
                </DropdownButton>
                <p className="toolbar-text">Sort by:</p>
                <DropdownButton className="dropdown-button" id="sort-dropdown-button" title={this.props.sorter}>
                    <Dropdown.Item eventKey="default" onSelect={this.props.changeSort}>Default</Dropdown.Item>
                    <Dropdown.Item eventKey="Duration (low to high)" onSelect={this.props.changeSort}>Duration (low to high)</Dropdown.Item>
                    <Dropdown.Item eventKey="Duration (high to low)" onSelect={this.props.changeSort}>Duration (high to low)</Dropdown.Item>
                </DropdownButton>
                <a className="toolbar-text reset-link" onClick={this.reset}>reset all</a>
                </ButtonToolbar>
            </div>
        )
    }
}

export default ControlMenu;