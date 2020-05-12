import React from "react"
import styled from "styled-components"

let FooterBar = styled.footer`
  position: absolute;
  bottom: 0;
  height: 30px;
  background: #03071e;
  opacity: 0.2;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrant;
  font-weight: 500;
`
const FooterComponent = () => {
  let date = new Date()
  let currentYearCopyWrite = date.getFullYear()
  return (
    <FooterBar>
      <small>
        &copy; Copyright {currentYearCopyWrite}, Prathamesh&apos;s Portfolio
      </small>
    </FooterBar>
  )
}

export default FooterComponent
