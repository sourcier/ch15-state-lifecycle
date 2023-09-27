import { useState, useEffect, useCallback } from 'react'
import TodoList from './TodoList'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/todos'

function TodoApp() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const deleteFn = useCallback((index) => {
        const newTodos = [
            ...todos.slice(0, index),
            ...todos.slice(index + 1),
        ]
        setTodos(newTodos)
    }, [todos, setTodos])

    const addFn = useCallback(() => {
        const newTodos = [
            ...todos,
            { title: "Was added!" }
        ]
        setTodos(newTodos)
    }, [todos, setTodos])

    const fetchTodos = async (endpoint) => {
        setLoading(true)
        try {
            const res = await fetch(endpoint);

            if (!res.ok) throw new Error('Unable to fetch todos')

            const newTodos = await res.json()
            setTodos(newTodos)
        } catch (e) {
            console.log(e)
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const abortController = new AbortController()
        fetchTodos('')
        // return () => {
        //     abortController.abort()
        // }
    }, [])

    useEffect(() => {
        const abortController = new AbortController()
        fetchTodos(ENDPOINT)
        // return () => {
        //     abortController.abort()
        // }
    }, [error])

    if (loading) return <p>Loading...</p>

    if (error) return (
        <>
            <p>Error: {error.message}</p>
            <button onClick={() => setError(null)}>Reload</button>
        </>
    )

    // if (!todos.length) return <p>There are no todos</p>

    return (
        <>
            <h1>TodoApp</h1>
            <TodoList todos={todos} deleteFn={deleteFn} addFn={addFn} />
        </>
    )
}

export default TodoApp