import React from "react"
import styled from "styled-components"
import FooterComponent from "../Footer"
import LoadingComponent from "../Loading/LoadingComponent"
import HomePage from "../HomePage"
import MenuBox from "../MenuBox"

let PageWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height 100vh;
  cursor: none;
`
const LandingPageComponent = () => (
  <>
    <PageWrapper>
      {/* <p className="custom-big-cursor">Khan</p> */}
      <HomePage />
      <MenuBox />
      <FooterComponent />
      {/* <LoadingComponent /> */}
    </PageWrapper>
  </>
)
export default LandingPageComponent
