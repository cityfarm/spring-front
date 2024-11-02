import React, {useState} from 'react'
import PropTypes from 'prop-types'

function ColorBox(props) {
    const [color, setColor] = useState('white');

  return (
    <div>
        <p>ColorBox = {color}</p>

        <button onClick={()=>setColor('black')}>to Black</button>
        <button onClick={()=>setColor('grey')}>to Grey</button>

    </div>
  )
}

ColorBox.propTypes = {}

export default ColorBox
