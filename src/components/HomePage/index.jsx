import React from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"
import "./homepage.scss"
import CrossIcon from "../../assets/icons/cross"
import LeftCircleBoldIcon from "../../assets/icons/left-circle-bold"
import RightCircleBlankIcon from "../../assets/icons/right-circle-blank"

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
  .cross-icon {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    text-align: center;
  }
  .left-right-icon {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    width: fit-content;
    justify-content: space-between;
    text-align: center;
    .left-arrow {
      padding-right: 10px;
    }
    left-arrow {
      padding-left: 10px;
    }
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
        <div className="cross-icon">
          <CrossIcon />
        </div>
        <div className="left-right-icon">
          <span className="left-arrow">
            <LeftCircleBoldIcon />
          </span>
          <span className="right-arrow">
            <RightCircleBlankIcon />
          </span>
        </div>
        <div className="yellow-background"></div>
        {/* <span className="menu-window">
          Menu Window
        </span> */}
        <div className="white-background"></div>
      </ColorWrapper>
    </>
  )
}
export default HomePage
