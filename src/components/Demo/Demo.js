import React, { createRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { StyledDemo } from './Demos.styled'

export default function Demo(props) {
  const ref = createRef()
  const [xy, setXy] = useState({ coordinates: { x: 0, y: 0 } })

  const handleMouseMove = e => {
    function scaleTo(a) {
      if (a > ref.current.offsetWidth / 2) {
        return a / 10 / 5
      } else {
        return 0 - a / 10 / 5
      }
    }

    const rect = ref.current.getBoundingClientRect()
    const X = scaleTo(e.clientX - rect.left) // x position within the element.
    const Y = scaleTo(e.clientY - rect.top)
    setXy({ coordinates: { x: X, y: Y } })
  }

  const trans = (x, y) =>
    `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) scale(1)`

  const [springProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 210, friction: 20 },
  }))

  return (
    <StyledDemo
      className="container"
      style={{ position: 'relative' }}
      onMouseMove={() => set({ xy: [xy.coordinates.x, xy.coordinates.y] })}
      onMouseLeave={() => set({ xy: [0, 0] })}
    >
      <animated.div
        className="animatedDiv"
        ref={ref}
        style={{
          transform: springProps.xy.interpolate(trans),
        }}
        onMouseMove={handleMouseMove}
      >
        <div style={{ margin: 'auto' }}>{props.children}</div>
      </animated.div>
    </StyledDemo>
  )
}
