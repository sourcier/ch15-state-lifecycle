import TodoItem from "./TodoItem"

function TodoList({ todos, deleteFn, addFn }) {
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        deleteFn={() => deleteFn(index)}
                        title={todo.title} />
                })}
            </ul>
            <button onClick={addFn}>+ Todo</button>
        </>
    )
}

export default TodoList