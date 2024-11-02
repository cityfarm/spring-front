import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="div">
            <div className="p">Count = {count}</div>
            <button onClick={() => setCount(x => x + 1)}> Increase</button>
        </div>
    )
}

Counter.propTypes = {}

export default Counter
