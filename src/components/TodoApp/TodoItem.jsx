function TodoItem({ title, deleteFn }) {
    return (
        <li>
            {title}{" "}
            <button onClick={deleteFn}>x</button>
        </li>
    )
}

export default TodoItem