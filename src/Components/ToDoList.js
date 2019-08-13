/* Calls React Library to be used */
import React from "react";

/* Creates a Class component */
class ToDoList extends React.Component{

	componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

	/* Converts information to a web readable format */
	render(){
		/* Data to be executed */
		return(

			/* Creates a div box */
			<div id="toDoListMain">

				<div id="header">

					{/* Creates a form and executes on the click of the submit button*/}
					<form onSubmit={this.props.addItem}>

						{/* Creates a textbox for a user to input data and calls properties values and methods to the element*/}
						<input 
							placeholder="Please enter item"
							ref = {this.props.inputElement}
							value = {this.props.currentItem.text}
							onChange = {this.props.handleInput}
						/>

						{/* Creates a button to submit data */}
						<button type="submit"> Add Item </button>

					</form>
				</div>
			</div>

		)
	}

}



/* Allows other pages to import and access data on this page */
export default ToDoList;