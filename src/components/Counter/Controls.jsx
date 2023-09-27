function Controls({updateNumber}) {
    return (
        <div className='controls'>
            <button onClick={() => updateNumber((counter) => counter + 1)}>+</button>
            <button onClick={() => updateNumber((counter) => counter - 1)}>-</button>
        </div>
    )
}

export default Controls