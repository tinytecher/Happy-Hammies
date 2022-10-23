
// npx create-react-app .
// npm i react-router-dom

import "./App.css"
import { useState } from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"
import Home from "../Home/Home.js"
import Hamsters from "../Hamsters/Hamsters.js"
import HamsterDetails from "../HamsterDetails/HamsterDetails"
import About from "../About/About.js"
import Input from "../Input/Input.js"

const todoList = [
	{ id: 1, todo: "get some seeds" },
	{ id: 2, todo: "Wash sand bath" },
	{ id: 3, todo: "Order bedding" },
]

function App() {
	const [todos, setTodos] = useState(todoList)
	const [input, setInput] = useState({  id: '', item: ''})
	// console.log(`this is todos state`, todos)
	// console.log(`this is on input`, input)

	function onSubmit(e) {
		e.preventDefault()
		setTodos([...todos, input])
		setInput({ Todo: "" })
		console.log(`from onSubmit`, todos)
	}

	function onDelete(index) {
		let newArray = [...todos]
		newArray.splice(index, 1)
		setTodos(newArray)
	}

	return (
		<Router className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route
					path='/hamsters'
					element={<Hamsters />}
				></Route>
				<Route path='/about' element={<About />}></Route>
				<Route
					path='/hamsters/:id'
					element={<HamsterDetails />}
				></Route>
				<Route
					path='/todo'
					element={
						<Input
							todos={todos}
							onSubmit={onSubmit}
							onChange={(e) =>
								setInput({ ...input, todo: e.target.value })
							}
							input={input.todo}
							onDelete={onDelete}
						/>
					}
				></Route>
				{/* <Route path='/todo' element={<TodoContainer todos={todos} addTask={addTask} onChange={onChange}/> }></Route> */}
			</Routes>
		</Router>
	)
}

export default App
