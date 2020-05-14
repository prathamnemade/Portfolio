import React from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"

let CodeWrapper = styled.div`
  .html-cursive {
    font-family: Sacramento;
    font-style: italic;
    font-size: 1.3em;
    color: var(--prathamesh-green);
    font-weight: 200;
    letter-spacing: 3px;
    margin: 0;
    &.light-bold {
      color: var(--prathamesh-purple);
      font-family: Montserrant;
      font-weight: 300;
      font-style: normal;
      letter-spacing: 0px;
    }
  }

  .title-header {
    font-family: Montserrant;
    font-weight: 900;
    font-size: 3.5em;
    color: var(--prathamesh-red);
    letter-spacing: -1px;
    margin: 0;
  }
  .h3-tag {
    font-family: Montserrant;
    font-weight: 600;
    font-size: 5em;
    color: var(--prathamesh-yellow);
    margin: 0;
    span {
      color: var(--prathamesh-black);
      font-weight: 900;
    }
  }
  .h3-designation {
    font-family: Montserrant;
    font-weight: 600;
    font-size: 2.5em;
    color: var(--prathamesh-purple);
    margin: 0;
    span {
      color: var(--prathamesh-black);
      font-weight: 500;
    }
  }

  .intend-1 {
    margin-left: 20px;
  }
  .intend-2 {
    margin-left: 40px;
  }
  .intend-3 {
    margin-left: 60px;
  }
`

const HomePage = () => {
  return (
    <>
      <Typing>
        <CodeWrapper>
          <Typing.Speed ms={4} />
          <p className="html-cursive">&#60;html&#62;</p>

          <Typing.Delay ms={1000} />
          <Typing.Backspace count={7} />
          <p className="html-cursive light-bold">&#60;!DOCTYPE html&#62;</p>

          <p className="html-cursive">&#60;html&#62;</p>

          <p className="html-cursive intend-1">&#60;head&#62;</p>

          <p className="html-cursive intend-2">&#60;title&#62;</p>

          <p className="title-header intend-3">Portfolio</p>

          <p className="html-cursive intend-2">&#60;/title&#62;</p>

          <p className="html-cursive intend-1">&#60;/head&#62;</p>

          <p className="html-cursive intend-1">&#60;body&#62;</p>

          <p className="html-cursive intend-2">&#60;h3&#62;</p>
          <Typing.Speed ms={1} />
          <p className="h3-tag intend-3">
            {" "}
            Hi, <span>I am Prathamesh</span>
          </p>

          <p className="h3-designation intend-3">Front End Developer</p>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={19} />
          <p className="h3-designation intend-3">
            Full Stack Web Developer <span>|</span> Freelancer
          </p>
          <Typing.Speed ms={4} />
          <p className="html-cursive intend-2">&#60;/h3&#62;</p>

          <p className="html-cursive intend-1">&#60;/body&#62;</p>

          <p className="html-cursive">&#60;/html&#62;</p>
        </CodeWrapper>
      </Typing>
    </>
  )
}
export default HomePage
