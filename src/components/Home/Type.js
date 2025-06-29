import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Full Stack Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  )
}

export default Type
