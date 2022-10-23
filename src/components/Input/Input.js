import Todo from "../Todo/Todo"
import "./style.css"

export default function Input({onSubmit, input, onChange, todos, onDelete}) {
console.log(`from Input`, todos)
	return (
        
        <form onSubmit={onSubmit}>
        <ul>
        {todos.map((todo, index) => (
          <Todo
            // todos={todo.todo}
            index={index}
            onClick={() => onDelete(index)}
            todo={todo.todo}
          />
        ))}
      </ul>
      <div className="input-container">
        <input className="input" value={input} onChange={onChange} />
        <button className="input-button" type="submit">Submit</button>
      </div>
      </form>
	)
}


