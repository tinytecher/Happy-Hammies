import "./style.css"

export default function Todo({index, todo, onClick}) {
console.log(`from Todo`, todo)
///map over array!!!!!!

	return (
    <div className="todos-container" key={index}>
    <li className="todo-li" >
    <p>{todo}</p>
    <button className="todo-button" onClick={onClick}>X</button>
  </li>
    </div>
	)
}

