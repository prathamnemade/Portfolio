import React from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"

const HomePage = () => {
  return (
    <>
      <Typing>
        <div>
          &#60;html&#62;
          <br />
          <Typing.Delay ms={1000} />
          then this will be typed.
        </div>
      </Typing>
    </>
  )
}
export default HomePage
