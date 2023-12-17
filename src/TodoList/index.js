import './TodoList.css'

function TodoList({ children }) {
  return (
    <div className="list-container">
      <ul>{children}</ul>
    </div>
  )
}

export { TodoList }
