import React, {Component} from 'react'
import DisplayList from './DisplayList';
import ControlMenu from './ControlMenu';


class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: "all",
            intensity: "any",
            sorter: 'default'
        };
      }


    onSelectFilterDuration = event => {
        this.setState({
            duration: event
        })
    }

    onSelectFilterIntensity = event => {
        this.setState({
            intensity: event
        })
    }

    onSelectChangeSort = event => {
        this.setState({
            sorter:event
        })
    }

    matchesFilterDuration = item => {
        if(this.state.duration === "all") {
            return true
        } else if (this.state.duration === 'short' && item.duration <= 20) {
            return true
        } else if (this.state.duration === 'medium' && item.duration > 20 && item.duration < 60) {
            return true
        } else if (this.state.duration === 'long' && item.duration >= 60){
            return true
        } else {
            return false
        }
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


    getSorter = (a, b) => {
        if (this.state.sorter === 'default') {
            return null
        } else if (this.state.sorter === 'Duration (low to high)') {
            return a.duration - b.duration
        } else if (this.state.sorter === 'Duration (high to low)') {
            return b.duration - a.duration
        }
    }

  
    render() {
        const products = this.props.list;
        return (
            <div>
                <ControlMenu duration={this.state.duration} intensity={this.state.intensity} sorter={this.state.sorter} filterDuration={this.onSelectFilterDuration} filterIntensity={this.onSelectFilterIntensity} changeSort={this.onSelectChangeSort}/>
                <DisplayList list={this.props.list.filter(this.matchesFilters).sort(this.getSorter)} addCard={this.props.addCard} />

            </div>
        )
    }
}

export default FilteredList;