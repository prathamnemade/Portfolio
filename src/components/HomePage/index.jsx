import React from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"
import "./homepage.scss"

let ColorWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .middle-text-box {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    .hello-text {
      font-family: Montserrant;
      font-weight: 900;
      font-size: 5em;
      color: var(--prathamesh-red);
      margin: 0;
    }
    .world-text {
      font-family: Montserrant;
      font-weight: 900;
      font-size: 5em;
      color: var(--prathamesh-black);
      margin: 0;
    }
  }
  .my-description {
    position: absolute;
    bottom: 0;
    left: 20%;
    bottom: 5%;
    font-family: Montserrant;
    font-size: 1em;
    color: var(--prathamesh-midnight-green);
    .my-name {
      font-weight: 400;
    }
    .my-mistake,
    .my-aim {
      font-weight: 900;
    }
  }
  .yellow-background {
    flex: 1;
    background-color: var(--prathamesh-yellow);
  }
  .white-background {
    flex: 1;
    background-color: var(--prathamesh-white);
  }
`
const HomePage = () => {
  return (
    <>
      <ColorWrapper>
        <div className="middle-text-box">
          <Typing>
            <Typing.Speed ms={100} />
            <p className="hello-text">HELLO</p>
            <p className="world-text">WORLD !!</p>
          </Typing>
        </div>
        <div className="my-description">
          <Typing>
            <Typing.Delay ms={2000} />
            <Typing.Speed ms={10} />
            <p className="my-name">I'm Prathamesh,</p>
            <p className="my-mistake">FRONT END WEB DEVELOPER</p>
            <Typing.Backspace count={23} />
            <p className="my-aim">FULL STACK WEB DEVELOPER | FREELANCER</p>
          </Typing>
        </div>
        <div className="yellow-background"></div>
        <div className="white-background"></div>
      </ColorWrapper>
    </>
  )
}
export default HomePage
