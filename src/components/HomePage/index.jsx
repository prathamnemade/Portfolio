import React from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"

let CodeWrapper = styled.div`
color: #ffffff;
`
const HomePage = () => {
  return (
    <>
      <CodeWrapper>
        <Typing>
          <div>
            &#60;html&#62;
          <br />
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={7} />
            &#60;!DOCTYPE html&#62;
            <br />
            &#60;html&#62;
            <br />
            &#60;head&#62;
            <br />
            &#60;title&#62;    Prathamesh's Portfolio
            <br />
            &#60;/title&#62;
            <br />
            &#60;/head&#62;
            <br />
            &#60;body&#62;
            <br />
            &#60;h3&#62;
            <br />
            Hi, I am Prathamesh
            <br />
            Front End Developer
            <Typing.Backspace count={19} />
            Full Stack Web Developer | Freelancer
            <br />
            &#60;/h3&#62;
            <br />
            &#60;/body&#62;
            <br />
            &#60;/html&#62;
        </div>
        </Typing>
      </CodeWrapper>
    </>
  )
}
export default HomePage
