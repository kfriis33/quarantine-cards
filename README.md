# Quarantine Cards

## Overview
This web app aims to help users find things to do while in quarantine from the COVID-19 pandemic. It consists of a bank of activity "cards" tagged by their expected duration and expected physical intensity level. Users can filter and sort through these cards to find ones that appeal to them, and then add the ones they plan on doing to their "My Day" section which keeps track of all the cards the user has added and the total amount of time they sum to. 

## Code Architecture
The following files are written using React and can be found in the src/ folder:
- **App.jsx:** The root parent file that renders to the HTML. This file also defines the raw data of the activity cards, and keeps track of items that have been saved to "My Day" and defines the functions for adding and removing them. 
- **App.css:** Defines the styling used throughout the different files. 

#### Components
- **FilteredList:** Holds the logic and display code for card deck, such as the filtering and sorting functionality and the grid of the cards. Its state keeps track of the selected items in the dropdown menus and the class also defines the relevant functions and passes them into its child components: ControlMenu and DisplayList.
  - **ControlMenu:** Child component that holds the control buttons (filtering, sorting, and reset). It takes the relevant functions defined in Filtered List as callback functions, so that the when the buttons are interacted with the app can respond accordingly.
  - **DisplayList:** Child component that visualizes the activity data into a grid of cards. It uses Bootstrap's CardDeck and Card packages to do so.
- **MyDayContainer:** Holds the logic and display code for everything in "My Day" for any activity that the user has added. It uses similar logic to DisplayList, but doesn't include images and replace the "Add" button with a "Remove" button. It also keeps track of and displays the total number of minutes that are in "My Day".

## User Interactions
Below details the possible ways that the user can interact with the app and change the configuration of the components.

| Interaction | Description |
| ----------- | ----------- |
| Filter | Filter cards by their duration and/or intensity using the dropdown buttons|
| Sort | Sort cards by duration (ascending or descending) using the dropdown button |
| Reset | Reset all filters and sorting back to default to show all of the cards in random order using the reset button|
| Add/remove cards | Add and remove cards from the "My Day" section on the righthand side of the screen using the add/remove button on each card |

