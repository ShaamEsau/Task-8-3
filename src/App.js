import React from 'react';
import logo from './logo.svg';
import './App.css';
/* Calls a JavaScript file to be used on this page */
import ToDoList from "./Components/ToDoList.js";
import ToDoItems from "./Components/ToDoItems.js";

/* Creates React Class Component */
class App extends React.Component{

  inputElement = React.createRef()

  /* Initializes Information */
  constructor(){

      /* Inherits parent data */
      super()

      /* Sets the default state of data */
      this.state = {

          /* Sets an empty array */
          items : [],

          /* Sets an empty object */
          currentItem : {text : "", key : ""}
      }
  }


  /* Creates a function */
  handleInput = (userInput) => {
    
    /* Creates variables to store users entered data and state*/
    const todoItem = userInput.target.value;
    const currentItem = {text : todoItem, key : Date.now()}

    /* Updates state with information */
    this.setState({
      currentItem
    })
  }

  addItem = (item) => {

    /* Stops default action of the submit button reloading the page */
    item.preventDefault();
    const newToDo = this.state.currentItem;

    /* Checks if the state is empty and appends the list if it is not */
    if (newToDo.text !== "") {
      const items = [...this.state.items, newToDo];
      this.setState({
        items : items,
        currentItem : {text : "", key : ""}
      })

    }
  }

  deleteItem = key => {
    /* Creates a variable that removes and filters items */
    const filteredItems = this.state.items.filter(item => {
      return (

        item.key !== key

      )
    });

    this.setState({
      items : filteredItems
    })
  }

  /* Converts data to a readable format */
  render(){
    /* Calls and executes data */
    return (
      /* Creates a div box */
      <div className="App">

        {/* Converts text to heading format 1 */}
        <h1>To-Do List</h1>

        <h3>Please click on the item to remove it</h3>

        {/* Calls component to be displayed with its methods and data */}
        <ToDoList 
          addItem = {this.addItem}
          inputElement = {this.inputElement}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem}
        />
        <ToDoItems entries = {this.state.items} deleteItem = {this.deleteItem} />
      </div>
  );
}
}
export default App;
