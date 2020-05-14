import React from "react"
import styled from "styled-components"
import * as paper from "paper"
import SimplexNoise from "simplex-noise"
import { useEffect } from "react"
import { Path, Point } from "paper"

let MainPage = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;
`

let PageInner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  .cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
  }
  .cursor--small {
    width: 10px;
    height: 10px;
    left: -5px;
    top: -5px;
    border-radius: 50%;
    z-index: 11000;
    background: var(--prathamesh-cursor);
    opacity: 0.6;
  }
  .cursor--canvas {
    width: 100vw;
    height: 100vh;
    z-index: 12000;
  }
`
const CanvasComponent = () => {
  let clientX = -100
  let clientY = -100
  let lastX = 0
  let lastY = 0
  let isStuck = false
  let group, stuckX, stuckY
  const shapeBounds = {
    width: 75,
    height: 75,
  }
  const strokeColor = "#181818"
  const strokeWidth = 1
  const segments = 5
  const radius = 7
  const noiseScale = 10 // speed
  const noiseRange = 2 // range of distortion
  let isNoisy = false // state

  let bigCoordinates = []
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b
  }
  const map = (value, in_min, in_max, out_min, out_max) => {
    return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  useEffect(() => {
    const innerCursor = document.querySelector(".cursor--small")
    const initCursor = () => {
      document.addEventListener("mousemove", (e) => {
        clientX = e.clientX
        clientY = e.clientY
      })
      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`
        requestAnimationFrame(render)
      }
      requestAnimationFrame(render)
    }
    initCursor()

    const canvas = document.querySelector(".cursor--canvas")
    paper.setup(canvas)
    const polygon = new Path.RegularPolygon(new Point(0, 0), segments, radius)
    const noiseObjects = polygon.segments.map(() => new SimplexNoise())

    const initCanvas = () => {
      polygon.strokeColor = strokeColor
      polygon.strokeWidth = strokeWidth
      polygon.smooth()
      group = new paper.Group([polygon])
      group.applyMatrix = false
      paper.view.onFrame = () => {
        lastX = lerp(lastX, clientX, 0.2)
        lastY = lerp(lastY, clientY, 0.2)
        group.position = new paper.Point(lastX, lastY)
      }
    }
    initCanvas()

    const initHovers = () => {
      const handleMouseEnter = (e) => {
        const navItem = e.currentTarget
        const navItemBox = navItem.getBoundingClientRect()
        stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
        stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
        isStuck = true
      }
      const handleMouseLeave = () => {
        isStuck = false
      }
      const linkItems = document.querySelectorAll(".custom-big-cursor")
      linkItems.forEach((item) => {
        item.addEventListener("mouseenter", handleMouseEnter)
        item.addEventListener("mouseleave", handleMouseLeave)
      })
    }

    initHovers()

    paper.view.onFrame = (event) => {
      // using linear interpolation, the circle will move 0.2 (20%)
      // of the distance between its current position and the mouse
      // coordinates per Frame
      if (!isStuck) {
        // move circle around normally
        lastX = lerp(lastX, clientX, 0.15)
        lastY = lerp(lastY, clientY, 0.15)
        group.position = new paper.Point(lastX, lastY)
      } else if (isStuck) {
        // fixed position on a nav item
        lastX = lerp(lastX, stuckX, 0.2)
        lastY = lerp(lastY, stuckY, 0.2)
        group.position = new paper.Point(lastX, lastY)
      }

      if (isStuck && polygon.bounds.width < shapeBounds.width) {
        // scale up the shape
        polygon.scale(1.08)
      } else if (!isStuck && polygon.bounds.width > 30) {
        // remove noise
        if (isNoisy) {
          polygon.segments.forEach((segment, i) => {
            segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1])
          })
          isNoisy = false
          bigCoordinates = []
        }
        // scale down the shape
        const scaleDown = 0.45
        polygon.scale(scaleDown)
      }

      // while stuck and big, apply simplex noise
      if (isStuck && polygon.bounds.width >= shapeBounds.width) {
        isNoisy = true
        // first get coordinates of large circle
        if (bigCoordinates.length === 0) {
          polygon.segments.forEach((segment, i) => {
            bigCoordinates[i] = [segment.point.x, segment.point.y]
          })
        }

        // loop over all points of the polygon
        polygon.segments.forEach((segment, i) => {
          const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
          const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

          // map the noise value to our defined range
          const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange)
          const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange)

          // apply distortion to coordinates
          const newX = bigCoordinates[i][0] + distortionX
          const newY = bigCoordinates[i][1] + distortionY

          // set new (noisy) coodrindate of point
          segment.point.set(newX, newY)
        })
      }
      polygon.smooth()
    }
  }, [])

  return (
    <MainPage className="page">
      <PageInner className="page__inner">
        <div className="cursor cursor--small"></div>
        <canvas className="cursor cursor--canvas" resize="true"></canvas>
      </PageInner>
    </MainPage>
  )
}
export default CanvasComponent
