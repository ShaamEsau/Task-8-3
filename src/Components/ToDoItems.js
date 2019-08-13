/* Imports the React Library to be used */
import React from "react";

/* Creates a React Class Component */
class ToDoItems extends React.Component{

	/* Creates a function */
	createItems = item => {
		/* Calls and executes data */
		return (
			/* Creates list items using the values entered in the textbox that has a function the executes on the click of the text */
			<li key = {item.key} onClick = {() => this.props.deleteItem(item.key)}> {item.text} </li>

		)
	}


	/* Converts data to a readable web page format */
	render(){
		/* Creates variables to hold properties  */
		const todoEntries = this.props.entries
		const listItems = todoEntries.map(this.createItems)

		return(
			/* Creates an unordered list that holds the information entered by user */
			<ul id = "theList">{listItems}</ul>

		)
	}
}

/* Allows other pages to import and access data on this page */
export default ToDoItems