import React, {useState} from 'react'
import "./CustomCursor.css"

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.clientX)
    setCursorY(e.clientY)
  })

  return (
    <div className='cursor'
      style={{
        left: `${cursorX}px`,
        top: `${cursorY}px`
      }}
      >
    </div>
  )
}


export default CustomCursor