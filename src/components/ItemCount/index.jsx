function ItemCount({ estoque, count, setCount}) {
    const style={
        display: 'flex',
        alignItems: 'center',
        margin: '30px'
        
    }
    const styleCount={
        margin: '60px',
        padding: '0px -30px '
    }
    function handleIncrement() {
        if(count < estoque) setCount(count + 1)
    }

    function handleDecrement() {
        if(count > 0) setCount(count - 1);
    }

    return(
        <main>
            <button style={style} onClick={handleDecrement} className="btn-Estoque">-</button>
            <p style={styleCount} className="countConta">{count}</p>
            <button style={style} onClick={handleIncrement} className="btn-Estoque">+</button>
        </main>
    )
}

export default ItemCount;