import React, { useState } from "react"
import styled from "styled-components"
import CrossIcon from "../../assets/icons/cross"
import LeftCircleBoldIcon from "../../assets/icons/left-circle-bold"
import RightCircleBlankIcon from "../../assets/icons/right-circle-blank"
import CrossFilledIcon from "../../assets/icons/cross-filled"
import "./menu-box.scss"

let MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
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
let MenuBoxWrapper = styled.div`
  width: ${(props) => (props.openMenu ? "50%" : "0")};
  background-color: #ffffff;
  height: 70%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: 0;
  transition: width 1s, visibility 2s;
  .cross-icon {
    visibility: ${(props) => (props.openMenu ? "visible" : "hidden")};
    position: fixed;
    right: 20px;
    top: 20px;
    position: absolute;
    right: calc(-100% + 60px);
    top: 20px;
  }

  .menu{
    visibility: ${(props) => (props.openMenu ? "visible" : "hidden")};
    font-family: Montserrant;
    font-weight: 200;
    font-size: 2em;
    width: 100%;
    height: 100%;
    ul{
        list-style: none;
        width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    li{
        line-height: 60px;
        letter-spacing: -3px;
    }
    }
  }
`
const MenuBox = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const toggleMenu = () => {
        setMenuToggle(!menuToggle)
    }
    return (
        <MenuWrapper>
            {!menuToggle ? (
                <div className="cross-icon custom-big-cursor" onClick={() => toggleMenu()}>
                    <CrossIcon />
                </div>
            ) : (
                    <div className="left-right-icon">
                        <span className="left-arrow">
                            <LeftCircleBoldIcon />
                        </span>
                        <span className="right-arrow">
                            <RightCircleBlankIcon />
                        </span>
                    </div>
                )}
            <MenuBoxWrapper className={menuToggle ? "main-menu-box" : "menu-box-off"} openMenu={menuToggle}>
                <div className="cross-icon custom-big-cursor" onClick={() => toggleMenu()}>
                    <CrossFilledIcon />
                </div>
                <div className="menu">
                    <ul>
                        <li>HOME <span></span></li>
                        <li>ABOUT<span></span></li>
                        <li>SKILLS<span></span></li>
                        <li>PROJECTS<span></span></li>
                        <li>CONTACT<span></span></li>
                    </ul>
                </div>
            </MenuBoxWrapper>
        </MenuWrapper>
    )
}
export default MenuBox
