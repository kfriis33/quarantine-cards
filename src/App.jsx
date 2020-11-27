import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';
import { render } from '@testing-library/react';
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import BakeIcon from "./icons/bake.svg"


const productList = [
  {title:'Watch TV', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration: 30, intensity:'low', icon:{BakeIcon}}, 
  {title: 'Bake something', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration:90, intensity:'moderate'}, 

  {title:'Text someone you miss', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration:5, intensity:'low'},
  {title:'Video Chat an Old Friend', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration:20, intensity:'low'},

  {title:'Go for a run', description:"Finally break open that puzzle that’s been laying around your house, or go to your local toy store and buy one!", duration:30, intensity:'high'}
];


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='App-body'>
        <div>
          <h1>Quarantine Cards</h1>
          <h4>Activity ideas to help you get through quarantine</h4>
        </div>
        <div>
          <FilteredList list={productList}/>
        </div>
      </div>
    );
  }
}
