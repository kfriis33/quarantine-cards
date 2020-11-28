# Quarantine Cards

## Overview
This web app aims to help users find things to do while in quarantine from the COVID-19 pandemic. It consists of a bank of activity "cards" tagged by their expected duration and expected physical intensity level. Users can filter and sort through these cards to find ones that appeal to them, and then add the ones they plan on doing to their "My Day" section which keeps track of all the cards the user has added and the total amount of time they sum to. 

## Code Architecture
The following files are written using React and can be found in the src/ folder:
- App.jsx
- App.css

#### Components
- ControlMenu
- DisplayList
- FilteredList
- MyDayContainer

## User Interactions
Below details the possible ways that the user can interact with the app and change the configuration of the components.

| Interaction | Description |
| ----------- | ----------- |
| Filter | Filter cards by their duration and/or intensity |
| Sort | Sort cards by duration (ascending or descending) |
| Reset | Reset all filters and sorting back to default to show all of the cards in random order |
| Add/remove cards | Add and remove cards from the "My Day" section on the righthand side of the screen |

